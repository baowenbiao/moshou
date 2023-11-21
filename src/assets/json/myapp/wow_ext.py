"""抓取额外数据，需要先抓取基本数据"""
import re
import time
import json
import pathlib
import demjson3 as demjson
import requests 

# 初始化
wow_dir = pathlib.Path(__file__).parent / "wow"  # wow主目录
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


def get_data_ext(id_, item):
    """获取额外信息"""
    # 图片链接
    if item.get("icon"):
        item[
            "icon_url"
        ] = f'http://image.nfuwow.com/static/database/static/images/wow/icons/medium/{item["icon"]}.jpg'
    time.sleep(0.3)
    # 额外信息
    ext = ["item", "itemset", "npc", "object", "quest", "achievement", "spell"]
    for ty in ext:
        url = f"http://db.nfuwow.com/80/?{ty}={id_}&domain=cn&power"
        resp = ss.get(url)
        res = re.findall(r"register.*?(\{.*?\})\);", resp.text, re.S)
        if res:
            tip = demjson.decode(res[0])
            # 有额外信息就停止
            if tip:
                item["tip"] = tip
                break
    
     # 来源的额外信息
    if item.get("sourcemore"):
        for sr in item["sourcemore"]:
            url = f"http://db.nfuwow.com/80/?spell={sr['ti']}&domain=cn&power"
            resp = ss.get(url)
            res = re.findall(r"register.*?(\{.*?\})\);", resp.text, re.S)
            sr["tip"] = demjson.decode(res[0])



def update_data(name):
    """更新物品-消费品的额外信息"""
    work_dir = wow_dir / name
    for fl in work_dir.iterdir():
        if fl.is_file() and ".json" in fl.suffix:
            # 加载数据
            print(f"开始处理: {fl.resolve()}")
            with open(fl, "r", encoding="utf8") as rf:
                data = json.load(rf)
            result = []
            # 遍历数据添加额外信息
            total = len(data)
            for index, item in enumerate(data):
                id_ = item.get("id")
                get_data_ext(id_, item)
                result.append(item)
                print(f"total: {total}, num: {index}")

            # 数据写入原文件
            with open(fl, "w+", encoding="utf8") as wf:
                json.dump(result, wf, ensure_ascii=False)


def main():
    # 所有类别
    meun = [
        ("物品", "mn_items"),
        ("物品套装", "mn_itemSets"),
        ("NPCS", "mn_npcs"),
        ("道具", "mn_objects"),
        ("任务", "mn_quests"),
        ("成就", "mn_achievements"),
        ("地区", "mn_zones"),
        ("法术", "mn_spells"),
        ("专业", "mn_skills"),
        ("阵营", "mn_factions"),
    ]
    print("\n".join([f"{i} : {j[0]}" for i, j in enumerate(meun)]))
    inp = input("选择更新项:")
    name = meun[int(inp)][0]
    print(f"已选择: {meun[int(inp)][0]}")
    # 选择类别后抓取
    update_data(name)


if __name__ == "__main__":
    main()
