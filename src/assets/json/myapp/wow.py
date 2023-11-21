"""抓取基本数据"""
import re
import time
import json
import pathlib
import demjson
import requests
from urllib.parse import urljoin

# 初始化
wow_dir = pathlib.Path(__file__).parent / "wow"  # wow主目录
base_url = "http://db.nfuwow.com/80/"
ss = requests.session()
ss.headers.update(
    {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0",
    }
)
# ss.proxies = {
#     "http": "http://127.0.0.1:7890",
#     "https": "http://127.0.0.1:7890",
# }


def weite_file(dir, fl, data):
    """数据写入指定位置"""
    ty_dir = wow_dir / dir
    if not ty_dir.exists():
        ty_dir.mkdir(parents=True)
    ty_file = ty_dir / (fl + ".json")
    with open(ty_file, "w+", encoding="utf8") as wf:
        json.dump(data, wf, ensure_ascii=False)
    print(f"已保存文件: {ty_file.resolve()}")


def get_meun(mn):
    """获取菜单"""
    # url = "http://image.nfuwow.com/static/database/static/js/locale_zhcn.js?030"
    with open("mn.js", "r", encoding="utf8") as rf:
        txt = rf.read()
    res = re.findall(f"var {mn}.*?(\[.*?\]);", txt, re.S)
    if res:
        return demjson.decode(res[0])


def insert_data(data, alist):
    """插入数据到列表"""
    for d in data:
        if d not in alist:
            alist.append(d)


def check_more(url):
    """检查获取的数据是否超出 300 限制"""
    datas = get_data(url)
    for dt in datas:
        if len(dt.get("data", [])) > 299:
            return False
    return datas


def get_data(ty_url):
    """获取数据"""
    time.sleep(0.3)
    resp = ss.get(ty_url)
    res = re.findall(r"new Listview\((\{.*?\})\);", resp.text, re.S)
    datas = []
    for i in res:
        # 处理非标准 json
        i = i.replace("myTabs", '"myTabs"')
        i = i.replace("tabsRelated", '"tabsRelated"')
        i = i.replace("LANG.tab_itemsets", '"物品组"')
        i = i.replace("LANG.tab_npcs", '"NPCs"')
        i = i.replace("LANG.tab_objects", '"道具"')
        i = i.replace("LANG.tab_achievements", '"成就"')
        i = i.replace("LANG.tab_zones", '"地区"')
        i = i.replace("LANG.tab_factions", '"阵营"')
        i = i.replace("LANG.tab_items", '"物品"')
        i = i.replace("LANG.tab_recipes", '"配方"')
        i = i.replace("LANG.tab_recipeitems", '"配方物品"')
        i = i.replace("LANG.tab_crafteditems", '"锻造物品"')
        i = i.replace("LANG.tab_requiredby", '"需求者"')
        i = i.replace("LANG.tab_spells", '"技能"')
        i = i.replace("LANG.tab_skills", '"技能"')
        i = i.replace("LANG.tab_trainers", '"训练师"')
        i = i.replace("LANG.tab_quests", '"任务"')
        i = i.replace("LANG.tab_videos", '"视频"')
        i = i.replace("LANG.tab_classes", '"职业"')
        i = i.replace("LANG.class", '"职业2"')
        i = i.replace("LANG.tab_races", '"种族"')
        i = i.replace("lv_videos", '""')
        i = re.sub(r'"note":\$.*?\),', "", i)
        i = re.sub(r',"extraCols":fi_get.*?\)', "", i)
        i = re.sub(r',"extraCols":\[.*?\]', "", i)
        datas.append(demjson.decode(i))

    return datas


def get_items(mn):
    """抓取物品数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        m_url = urljoin(base_url, f"?items={m[0]}")
        print(f"开始抓取: 物品-{m[1]}")
        # 通过 ID 范围过滤（0-56000）
        s_id = 0
        while 1:
            if s_id > 56000:
                break
            ty_url = f"{m_url}&filter=cr=151:151;crs=1:4;crv={s_id}:{s_id+300}"
            for data in get_data(ty_url):
                insert_data(data.get("data", []), result)
            s_id += 300

        # 写入文件
        weite_file("物品", m[1], result)


def get_itemSets(mn):
    """抓取物品套装数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        print(f"开始抓取: 物品套装-{m[1]}")
        ty_url = urljoin(base_url, f"?itemsets&filter=cl={m[0]}")
        for data in get_data(ty_url):
            insert_data(data.get("data", []), result)

        # 写入文件
        weite_file("物品套装", m[1], result)


def get_npcs(mn):
    """抓取 NPCS 数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        m_url = urljoin(base_url, f"?npcs={m[0]}")
        print(f"开始抓取: NPCS-{m[1]}")
        # 通过 ID 范围过滤（0-56000）
        s_id = 0
        while 1:
            if s_id > 56000:
                break
            ty_url = f"{m_url}&filter=cr=37:37;crs=1:4;crv={s_id}:{s_id+300}"
            for data in get_data(ty_url):
                insert_data(data.get("data", []), result)
            s_id += 300

        # 写入文件
        weite_file("NPCS", m[1], result)


def get_objects(mn):
    """抓取道具数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        m_url = urljoin(base_url, f"?objects={m[0]}")
        print(f"开始抓取: 道具-{m[1]}")
        # ID 过滤在这里还没直接抓取获取的数据多
        for data in get_data(m_url):
            insert_data(data.get("data", []), result)

        # 写入文件
        weite_file("道具", m[1], result)


def get_quests(mn):
    """抓取任务数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        m_url = urljoin(base_url, f"?quests={m[0]}")
        print(f"开始抓取: 任务-{m[1]}")
        # 通过 ID 范围过滤（0-56000）
        s_id = 0
        while 1:
            if s_id > 56000:
                break
            ty_url = f"{m_url}&filter=cr=30:30;crs=1:4;crv={s_id}:{s_id+300}"
            for data in get_data(ty_url):
                insert_data(data.get("data", []), result)
            s_id += 300

        # 写入文件
        weite_file("任务", m[1], result)


def get_achievements(mn):
    """抓取成就数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        m_url = urljoin(base_url, f"?achievements={m[0]}")
        print(f"开始抓取: 成就-{m[1]}")
        datas = check_more(m_url)
        if datas is False:
            # 通过 ID 范围过滤（0-5000）
            s_id = 0
            while 1:
                if s_id > 5000:
                    break
                ty_url = f"{m_url}&filter=cr=9:9;crs=1:4;crv={s_id}:{s_id+300}"
                for data in get_data(ty_url):
                    insert_data(data.get("data", []), result)
                s_id += 300
        else:
            for data in datas:
                insert_data(data.get("data", []), result)

        # 写入文件
        weite_file("成就", m[1], result)


def get_zones(mn):
    """抓取地区数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        m_url = urljoin(base_url, f"?zones={m[0]}")
        print(f"开始抓取: 地区-{m[1]}")
        for data in get_data(m_url):
            insert_data(data.get("data", []), result)

        # 写入文件
        weite_file("地区", m[1], result)


def get_spells(mn):
    """抓取法术数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        m_url = urljoin(base_url, f"?spells={m[0]}")
        print(f"开始抓取: 法术-{m[1]}")
        datas = check_more(m_url)
        if datas is False:
            # 通过 ID 范围过滤（0-80000）
            s_id = 0
            while 1:
                if s_id > 80000:
                    break
                ty_url = f"{m_url}&filter=cr=14:14;crs=1:4;crv={s_id}:{s_id+300}"
                for data in get_data(ty_url):
                    insert_data(data.get("data", []), result)
                s_id += 300
        else:
            for data in datas:
                insert_data(data.get("data", []), result)

        # 写入文件
        weite_file("法术", m[1], result)


def get_skills(mn):
    """抓取专业数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        print(f"开始抓取: 专业-{m[1]}")
        ty_url = urljoin(base_url, m[2])
        for data in get_data(ty_url):
            name = data.get("name")  # tab name
            dt = [n | {"tab_name": name} for n in data.get("data")]
            insert_data(dt, result)

        # 追加专业-其他
        other = []
        if m[0] in [8, 10, 6, 7]:
            for item in result:
                ty_url = urljoin(base_url, f'?skill={item["id"]}')
                for data in get_data(ty_url):
                    name = data.get("name")  # tab name
                    dt = [n | {"tab_name": name} for n in data.get("data")]
                    insert_data(dt, other)
            result += other

        # 写入文件
        weite_file("专业", m[1], result)


def get_factions(mn):
    """抓取阵营数据"""
    for m in mn:
        if not isinstance(m[0], int):
            continue
        result = []  # 结果数组
        m_url = urljoin(base_url, f"?factions={m[0]}")
        print(f"开始抓取: 阵营-{m[1]}")
        for data in get_data(m_url):
            insert_data(data.get("data", []), result)

        # 写入文件
        weite_file("阵营", m[1], result)


def main():
    # 所有类别
    meun = [
        ("物品", "mn_items", get_items),
        ("物品套装", "mn_itemSets", get_itemSets),
        ("NPCS", "mn_npcs", get_npcs),
        ("道具", "mn_objects", get_objects),
        ("任务", "mn_quests", get_quests),
        ("成就", "mn_achievements", get_achievements),
        ("地区", "mn_zones", get_zones),
        ("法术", "mn_spells", get_spells),
        ("专业", "mn_skills", get_skills),
        ("阵营", "mn_factions", get_factions),
    ]
    print("\n".join([f"{i} : {j[0]}" for i, j in enumerate(meun)]))
    inp = input("选择抓取项:")
    try:
        selected = meun[int(inp)]
    except Exception as e:
        print("error:", e)
        exit()

    print(f"已选择: {selected[0]}")
    # 选择类别后抓取
    mn = get_meun(selected[1])
    selected[2](mn)


if __name__ == "__main__":
    main()
