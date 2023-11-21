"""将 json 转为 excel"""
import json
import pathlib
import pandas as pd

# 初始化
wow_dir = pathlib.Path(__file__).parent / "wow"  # wow主目录


def json2excel(name):
    """json 数据转换"""
    work_dir = wow_dir / name
    for fl in work_dir.iterdir():
        if fl.is_file() and ".json" in fl.suffix:
            print(f"开始处理: {fl.resolve()}")
            # 加载数据，获取所有字段
            with open(fl, "r", encoding="utf8") as rf:
                data = json.load(rf)
            field = []
            for dc in data:
                for k in dc.keys():
                    if k not in field:
                        field.append(k)

            # 生成新数据
            result = []
            for dt in data:
                # 新字段生成空字典
                new_dict = {i: "" for i in field}
                # 原数据叠加
                res_dict = new_dict | dt
                # for i, j in res_dict:
                #     res_dict[i] = str(res_dict[j])
                result.append(res_dict)

            # 转 excel
            df = pd.DataFrame(result)
            excel = work_dir / (fl.name + ".xlsx")
            df.to_excel(excel.resolve(), index=False)


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
    json2excel(name)


if __name__ == "__main__":
    main()
