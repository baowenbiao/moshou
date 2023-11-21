export const ljspfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 400,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    }
];

export const ljspfwpncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const ljsdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const ljsxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const ljsjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; width:100%;">
                        <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                            <img
                                style="width: 50px; height: 50px; cursor:pointer;"
                                src={rowData.icon_url}
                            />
                            <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                                <span>中文名称：{rowData.tip.name_zhcn}</span>
                                <span>英文名称：{rowData.name_en}</span>
                            </div>
                        </div>
                        <span>{rowData.rank}</span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                </div>
            </>
        ),
    },
];

export const ljslxscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const ljsrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const dzpfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const dzpfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const dzdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const dzxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const dzjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; width:100%;">
                        <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                            <img
                                style="width: 50px; height: 50px; cursor:pointer;"
                                src={rowData.icon_url}
                            />
                            <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                                <span>中文名称：{rowData.tip.name_zhcn}</span>
                                <span>英文名称：{rowData.name_en}</span>
                            </div>
                        </div>
                        <span>{rowData.rank}</span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                </div>
            </>
        ),
    },
];

export const dzxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const dzrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const fmpfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const fmpfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const fmdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const fmxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const fmjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; width:100%;">
                        <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                            <img
                                style="width: 50px; height: 50px; cursor:pointer;"
                                src={rowData.icon_url}
                            />
                            <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                                <span>中文名称：{rowData.tip.name_zhcn}</span>
                                <span>英文名称：{rowData.name_en}</span>
                            </div>
                        </div>
                        <span>{rowData.rank}</span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                </div>
            </>
        ),
    },
];

export const fmxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const gcspfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const gcspfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const gcsdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const gcsxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const gcsjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; width:100%;">
                        <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                            <img
                                style="width: 50px; height: 50px; cursor:pointer;"
                                src={rowData.icon_url}
                            />
                            <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                                <span>中文名称：{rowData.tip.name_zhcn}</span>
                                <span>英文名称：{rowData.name_en}</span>
                            </div>
                        </div>
                        <span>{rowData.rank}</span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                </div>
            </>
        ),
    },
];

export const gcsxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const gcsrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const cyxxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const cyxjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; width:100%;">
                        <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                            <img
                                style="width: 50px; height: 50px; cursor:pointer;"
                                src={rowData.icon_url}
                            />
                            <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                                <span>中文名称：{rowData.tip.name_zhcn}</span>
                                <span>英文名称：{rowData.name_en}</span>
                            </div>
                        </div>
                        <span>{rowData.rank}</span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                </div>
            </>
        ),
    },
];

export const cyxrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const mwpfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const mwpfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const mwdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const mwxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const mwjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; width:100%;">
                        <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                            <img
                                style="width: 50px; height: 50px; cursor:pointer;"
                                src={rowData.icon_url}
                            />
                            <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                                <span>中文名称：{rowData.tip.name_zhcn}</span>
                                <span>英文名称：{rowData.name_en}</span>
                            </div>
                        </div>
                        <span>{rowData.rank}</span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                </div>
            </>
        ),
    },
];

export const mwxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const mwrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const zbjgpfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 400,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const zbjgpfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const zbjgdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const zbjgxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const zbjgjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; width:100%;">
                        <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                            <img
                                style="width: 50px; height: 50px; cursor:pointer;"
                                src={rowData.icon_url}
                            />
                            <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                                <span>中文名称：{rowData.tip.name_zhcn}</span>
                                <span>英文名称：{rowData.name_en}</span>
                            </div>
                        </div>
                        <span>{rowData.rank}</span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                </div>
            </>
        ),
    },
];

export const zbjgxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];
export const zbjgrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const zppfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 400,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const zppfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const zpdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const zpxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const zpjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; width:100%;">
                        <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                            <img
                                style="width: 50px; height: 50px; cursor:pointer;"
                                src={rowData.icon_url}
                            />
                            <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                                <span>中文名称：{rowData.tip.name_zhcn}</span>
                                <span>英文名称：{rowData.name_en}</span>
                            </div>
                        </div>
                        <span>{rowData.rank}</span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                </div>
            </>
        ),
    },
];

export const zpxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const zprwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const ckpfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 400,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const ckpfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const ckdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const ckxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const ckjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const ckxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const bpjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const cfpfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 400,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const cfpfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const cfdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const cfxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const cfjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const cfxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const cfrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const prpfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 400,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const prpfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const prdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const prxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const prfjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const prxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const prrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const jjpfcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "reagents",
        title: "施法材料",
        dataKey: "reagents",
        width: 400,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.reagents &&
                    rowData.reagents.map((element) => {
                        return (
                            <ElTooltip
                                class="box-item"
                                effect="dark"
                                placement="top-start"
                                content={element[2].tooltip_zhcn}
                                raw-content
                            >
                                <div
                                    style={`width:50px; height:50px; display:flex; justify-content:flex-end; align-items:flex-end; position:relative;)`}
                                >
                                    <img
                                        src={`http://image.nfuwow.com/static/database/static/images/wow/icons/medium/${element[2].icon}.jpg`}
                                    />
                                    <span style="position:absolute; bottom:0; right:0; z-index:100; color:#fff;">
                                        {element[2].quality}
                                    </span>
                                </div>
                            </ElTooltip>
                        );
                    })}
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })}
            </>
        ),
    },
    {
        key: "learnedat",
        title: "技能",
        dataKey: "learnedat",
        width: 300,
        align: "center",
        cellRenderer: ({ rowData }) => (
            <>
                <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                    <span>炼金术（{rowData.learnedat}）</span>
                    <span>
                        {rowData.colors &&
                            rowData.colors.map((element, index) => {
                                return (
                                    <span style="padding:0 5px;" class={"element" + index}>
                                        {element}
                                    </span>
                                );
                            })}
                    </span>
                </div>
            </>
        ),
    },
];

export const jjpfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const jjdzwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const jjxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const jjjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const jjxlscolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const jjrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const dypfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const dyxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const dyjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const dyrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

export const qspfwpcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const qsxqzcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer">
                        <img
                            style="width: 50px; height: 50px; cursor:pointer;"
                            src={rowData.icon_url}
                        />
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "slot",
        title: "物品栏",
        dataKey: "slot",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span v-if={rowData.slot}>{filteralchemyformulaslot(rowData.slot)}</span>
            </>
        ),
    },
    {
        key: "source",
        title: "来源",
        dataKey: "source",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                {rowData.sourcemore ? (
                    <span v-if={rowData.sourcemore}>{rowData.sourcemore[0].n}</span>
                ) : (
                    rowData.source &&
                    rowData.source.map((element) => {
                        return <span>{filteralchemyformulasource(element)}</span>;
                    })
                )}
            </>
        ),
    },
    {
        key: "class",
        title: "类型",
        dataKey: "class",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filteralchemyformulaclass(rowData)}</span>
            </>
        ),
    },
];

export const qsjncolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: flex-start; align-items: center; cursor:pointer;">
                        <div style="display:flex; flex-direction:column; justify-content: flex-start; align-items: flex-start;">
                            <span style="font-size:12px;">
                                中文名称：{rowData.name.replace("6", "")}
                            </span>
                            <span style="font-size:12px;">英文名称：{rowData.name_en}</span>
                            <span style="font-size:12px;">{`<${rowData.tag}>`}</span>
                        </div>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "maxlevel",
        title: "等级",
        dataKey: "maxlevel",
        width: 120,
    },
    {
        key: "location",
        title: "地点",
        dataKey: "location",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filternpcsmap(rowData).name}</span>
            </>
        ),
    },
    {
        key: "react",
        title: "反应",
        dataKey: "react",
        width: 120,
        cellRenderer: ({ rowData }) => (
            <>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name1}{" "}
                </span>
                <span style={filteralchemyTrainerReact(rowData.react).color1}>
                    {filteralchemyTrainerReact(rowData.react).name2}{" "}
                </span>
            </>
        ),
    },
    {
        key: "classification",
        title: "类型",
        dataKey: "classification",
        width: 200,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterwupintaozhuangType(rowData.classification).name}</span>
            </>
        ),
    },
];

export const qsrwcolumn = [
    {
        key: "id",
        title: "ID",
        dataKey: "id",
        width: 100,
    },
    {
        key: "name",
        title: "名称",
        dataKey: "name",
        width: 400,
        cellRenderer: ({ rowData }) => (
            <>
                <ElTooltip
                    class="box-item"
                    effect="dark"
                    placement="top-start"
                    content={rowData.tip.tooltip_zhcn}
                    raw-content
                >
                    <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%;">
                        <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                            <span>中文名称：{rowData.name.replace("6", "")}</span>
                            <span>英文名称：{rowData.name_en}</span>
                        </div>
                        <span style="color:red;">
                            {filterAlchemyRaskWflags(rowData.wflags) ? "致残" : ""}
                        </span>
                    </div>
                </ElTooltip>
            </>
        ),
    },
    {
        key: "level",
        title: "等级",
        dataKey: "level",
        width: 120,
    },
    {
        key: "reqlevel",
        title: "需要等级",
        dataKey: "reqlevel",
        width: 120,
    },
    {
        key: "",
        title: "阵营",
        dataKey: "",
        width: 120,
    },
    {
        key: "itemrewards",
        title: "奖励",
        dataKey: "itemrewards",
        width: 300,
    },
    {
        key: "xp",
        title: "经验",
        dataKey: "xp",
        width: 300,
    },
    {
        key: "money",
        title: "金钱",
        dataKey: "money",
        width: 300,
        cellRenderer: ({ rowData }) => (
            <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
            </>
        ),
    },
];

// 过滤专业栏炼金术栏来源数据
function filteralchemyformulasource(value) {
    let name = "";
    switch (value) {
        case 1:
            {
                name = "已制造";
            }
            break;
        case 2:
            {
                name = "掉落";
            }
            break;
        case 3:
            {
                name = "PvP";
            }
            break;
        case 4:
            {
                name = "任务";
            }
            break;
        case 5:
            {
                name = "商人";
            }
            break;
        case 6:
            {
                name = "训练师";
            }
            break;
        case 7:
            {
                name = "发现";
            }
            break;
        case 8:
            {
                name = "";
            }
            break;
        case 9:
            {
                name = "";
            }
            break;
        case 10:
            {
                name = "新手";
            }
            break;
        case 16:
            {
                name = "可钓";
            }
            break;
        case 19:
            {
                name = "开采";
            }
            break;
        case 20:
            {
                name = "已加工";
            }
            break;
        case 21:
            {
                name = "失窃";
            }
            break;
        case 22:
            {
                name = "已废弃";
            }
            break;
        case 23:
            {
                name = "已剥皮";
            }
            break;
    }
    return name;
}

// 过滤物品套装类型数据
function filterwupintaozhuangType(value) {
    let obj = {
        name: "",
    };
    switch (value) {
        case 0:
            {
                obj.name = "人型生物";
            }
            break;
        case 1:
            {
                obj.name = "布甲";
            }
            break;
        case 2:
            {
                obj.name = "皮甲";
            }
            break;
        case 3:
            {
                obj.name = "锁甲";
            }
            break;
        case 4:
            {
                obj.name = "板甲";
            }
            break;
        case -2:
            {
                obj.name = "任务";
            }
            break;
        case -3:
            {
                obj.name = "草药";
            }
            break;
        case -4:
            {
                obj.name = "矿点";
            }
            break;
        case -5:
            {
                obj.name = "提箱";
            }
            break;
        case -6:
            {
                obj.name = "工具";
            }
            break;
        case 9:
            {
                obj.name = "书籍";
            }
            break;
        case 10:
            {
                obj.name = "人型生物";
            }
            break;
        case 25:
            {
                obj.name = "钓鱼水池";
            }
            break;
    }
    return obj;
}

// 过滤专业栏炼金术物品栏数据
function filteralchemyformulaslot(value) {
    if (value == "12") {
        value = "饰品";
    } else if ((value = "2")) {
        value = "颈";
    }
    return value;
}

// 过滤专业栏炼金术栏类别数据
function filteralchemyformulaclass(data) {
    const obj = {
        name: "",
    };
    switch (data.classs) {
        case 0:
            {
                if (data.subclass == 0) {
                    obj.name = "消耗品";
                } else if (data.subclass == 1) {
                    obj.name = "药水";
                } else if (data.subclass == 2) {
                    obj.name = "战斗药剂";
                } else if (data.subclass == 3) {
                    obj.name = "合剂";
                } else if (data.subclass == 4) {
                    obj.name = "卷轴";
                } else if (data.subclass == 5) {
                    obj.name = "食物和饮料";
                } else if (data.subclass == 6) {
                    obj.name = "永久附魔";
                } else if (data.subclass == 7) {
                    obj.name = "绷带";
                } else if (data.subclass == 8) {
                    obj.name = "其他（消耗品）";
                } else if (data.subclass == -3) {
                    obj.name = "临时附魔";
                } else if (data.subclass == 5) {
                    obj.name = "食物和饮料";
                }
            }
            break;
        case 1:
            {
                if (data.subclass == 0) {
                    obj.name = "背包";
                } else if (data.subclass == 1) {
                    obj.name = "灵魂袋";
                } else if (data.subclass == 2) {
                    obj.name = "草药包";
                } else if (data.subclass == 3) {
                    obj.name = "附魔材料包";
                } else if (data.subclass == 4) {
                    obj.name = "工程学材料包";
                } else if (data.subclass == 5) {
                    obj.name = "宝石袋";
                } else if (data.subclass == 6) {
                    obj.name = "矿石袋";
                } else if (data.subclass == 7) {
                    obj.name = "制皮材料包";
                } else if (data.subclass == 8) {
                    obj.name = "铭文包";
                } else if (data.subclass == 9) {
                    obj.name = "制皮材料包";
                }
            }
            break;
        case 2:
            {
                switch (data.subclass) {
                    case 0:
                        {
                            obj.name = "单手斧";
                        }
                        break;
                    case 1:
                        {
                            obj.name = "双手斧";
                        }
                        break;
                    case 2:
                        {
                            obj.name = "弓";
                        }
                        break;
                    case 3:
                        {
                            obj.name = "枪";
                        }
                        break;
                    case 4:
                        {
                            obj.name = "单手杖";
                        }
                        break;
                    case 5:
                        {
                            obj.name = "双手锤";
                        }
                        break;
                    case 6:
                        {
                            obj.name = "长柄武器";
                        }
                        break;
                    case 7:
                        {
                            obj.name = "单手剑";
                        }
                        break;
                    case 8:
                        {
                            obj.name = "双手剑";
                        }
                        break;
                    case 10:
                        {
                            obj.name = "法杖";
                        }
                        break;
                    case 11:
                        {
                            obj.name = "";
                        }
                        break;
                    case 13:
                        {
                            obj.name = "拳套";
                        }
                        break;
                    case 14:
                        {
                            obj.name = "杂项(武器)";
                        }
                        break;
                    case 15:
                        {
                            if (data.socket2) {
                                obj.name = "匕首";
                            } else {
                                obj.name = "双手剑";
                            }
                        }
                        break;
                    case 16:
                        {
                            obj.name = "投掷";
                        }
                        break;
                    case 18:
                        {
                            obj.name = "弩";
                        }
                        break;
                    case 19:
                        {
                            obj.name = "魔杖";
                        }
                        break;
                    case 20:
                        {
                            obj.name = "钓鱼竿";
                        }
                        break;
                }
            }
            break;
        case 3:
            {
                if (data.subclass == 0) {
                    obj.name = "红色宝石";
                } else if (data.subclass == 1) {
                    obj.name = "蓝色宝石";
                } else if (data.subclass == 2) {
                    obj.name = "黄色宝石";
                } else if (data.subclass == 3) {
                    obj.name = "紫色宝石";
                } else if (data.subclass == 4) {
                    obj.name = "绿色宝石";
                } else if (data.subclass == 5) {
                    obj.name = "橙色宝石";
                } else if (data.subclass == 6) {
                    obj.name = "多彩宝石";
                }
            }
            break;
        case 4:
            {
                switch (data.subclass) {
                    case 0:
                        {
                            obj.name = "杂项（护甲）";
                        }
                        break;
                    case 1:
                        {
                            obj.name = "布甲";
                        }
                        break;
                    case 2:
                        {
                            obj.name = "皮甲";
                        }
                        break;
                    case 3:
                        {
                            obj.name = "锁甲";
                        }
                        break;
                    case 4:
                        {
                            obj.name = "板甲";
                        }
                        break;
                    case 6:
                        {
                            obj.name = "盾牌";
                        }
                        break;
                    case 7:
                        {
                            obj.name = "圣契";
                        }
                        break;
                    case 8:
                        {
                            obj.name = "神像";
                        }
                        break;
                    case 9:
                        {
                            obj.name = "图腾";
                        }
                        break;

                    case 10:
                        {
                            obj.name = "魔印";
                        }
                        break;
                    case -2:
                        {
                            obj.name = "戒指";
                        }
                        break;
                    case -3:
                        {
                            obj.name = "项链";
                        }
                        break;
                    case -4:
                        {
                            obj.name = "饰品";
                        }
                        break;
                    case -5:
                        {
                            obj.name = "副手";
                        }
                        break;
                    case -6:
                        {
                            obj.name = "斗篷";
                        }
                        break;
                    case -7:
                        {
                            obj.name = "战袍";
                        }
                        break;
                    case -8:
                        {
                            obj.name = "衬衫";
                        }
                        break;
                }
            }
            break;
        case 7:
            {
                if (data.subclass == 1) {
                    obj.name = "部分";
                } else if (data.subclass == 2) {
                    obj.name = "爆炸物";
                } else if (data.subclass == 3) {
                    obj.name = "装置";
                } else if (data.subclass == 4) {
                    obj.name = "珠宝加工";
                } else if (data.subclass == 5) {
                    obj.name = "布甲";
                } else if (data.subclass == 6) {
                    obj.name = "皮甲";
                } else if (data.subclass == 7) {
                    obj.name = "金属和矿石";
                } else if (data.subclass == 8) {
                    obj.name = "肉类";
                } else if (data.subclass == 9) {
                    obj.name = "草药";
                } else if (data.subclass == 10) {
                    obj.name = "元素";
                } else if (data.subclass == 11) {
                    obj.name = "其他（贸易品）";
                } else if (data.subclass == 12) {
                    obj.name = "附魔";
                } else if (data.subclass == 13) {
                    obj.name = "原料";
                } else if (data.subclass == 14) {
                    obj.name = "护甲附魔";
                } else if (data.subclass == 15) {
                    obj.name = "武器附魔";
                }
            }
            break;
        case 9:
            {
                if (data.subclass == 0) {
                    obj.name = "书籍";
                } else if (data.subclass == 1) {
                    obj.name = "制皮图样";
                } else if (data.subclass == 2) {
                    obj.name = "裁缝图样";
                } else if (data.subclass == 3) {
                    obj.name = "工程学结构图";
                } else if (data.subclass == 4) {
                    obj.name = "锻造设计图";
                } else if (data.subclass == 5) {
                    obj.name = "烹饪";
                } else if (data.subclass == 6) {
                    obj.name = "炼金术";
                } else if (data.subclass == 7) {
                    obj.name = "急救";
                } else if (data.subclass == 8) {
                    obj.name = "附魔方程";
                } else if (data.subclass == 9) {
                    obj.name = "钓鱼";
                } else if (data.subclass == 10) {
                    obj.name = "珠宝加工";
                } else if (data.subclass == 11) {
                    obj.name = "铭文";
                } else if (data.subclass == 12) {
                    obj.name = "采矿";
                }
            }
            break;
        case 10:
            {
                if (data.subclass == 0) {
                    obj.name = "货币";
                }
            }
            break;
        case 12:
            {
                if (data.subclass == 0) {
                    obj.name = "任务";
                }
            }
            break;
        case 13:
            {
                if (data.subclass == 0) {
                    obj.name = "钥匙";
                }
            }
            break;
        case 15:
            {
                if (data.subclass == 0) {
                    obj.name = "垃圾";
                } else if (data.subclass == 1) {
                    obj.name = "施法材料";
                } else if (data.subclass == 2) {
                    obj.name = "伙伴";
                } else if (data.subclass == 3) {
                    obj.name = "节日";
                } else if (data.subclass == 4) {
                    obj.name = "其他";
                } else if (data.subclass == 5) {
                    obj.name = "坐骑";
                } else if (data.subclass == -2) {
                    obj.name = "护甲兑换";
                } else if (data.subclass == -7) {
                    obj.name = "爱情火箭";
                }
            }
            break;
        case 16:
            {
                if (data.subclass == 1) {
                    obj.name = "战士雕文";
                } else if (data.subclass == 2) {
                    obj.name = "圣骑士雕文";
                } else if (data.subclass == 3) {
                    obj.name = "猎人雕文";
                } else if (data.subclass == 4) {
                    obj.name = "潜行者雕文";
                } else if (data.subclass == 5) {
                    obj.name = "牧师雕文";
                } else if (data.subclass == 6) {
                    obj.name = "死亡骑士雕文";
                } else if (data.subclass == 7) {
                    obj.name = "萨满雕文";
                } else if (data.subclass == 8) {
                    obj.name = "法师雕文";
                } else if (data.subclass == 9) {
                    obj.name = "术士雕文";
                } else if (data.subclass == 11) {
                    obj.name = "德鲁伊雕文";
                }
            }
            break;
    }
    return obj.name;
}

// 过滤魔兽地图数据
function filternpcsmap(data) {
    let obj = {
        name: "",
    };
    if (data.location && data.location.length > 0) {
        data.location.forEach((item) => {
            switch (item) {
                case -1:
                    {
                        obj.name = "贫瘠之地  ";
                    }
                    break;
                case 1:
                    {
                        obj.name = "丹莫罗  ";
                    }
                    break;
                case 3:
                    {
                        obj.name = "荒芜之地  ";
                    }
                    break;
                case 4:
                    {
                        obj.name = "诅咒之地  ";
                    }
                    break;
                case 8:
                    {
                        obj.name = "悲伤沼泽  ";
                    }
                    break;
                case 9:
                    {
                        obj.name = "北郡山谷  ";
                    }
                    break;
                case 10:
                    {
                        obj.name = "暮色森林  ";
                    }
                    break;
                case 11:
                    {
                        obj.name = "湿地  ";
                    }
                    break;
                case 12:
                    {
                        obj.name = "艾尔文森林  ";
                    }
                    break;
                case 14:
                    {
                        obj.name = "杜隆塔尔  ";
                    }
                    break;
                case 15:
                    {
                        obj.name = "尘泥沼泽  ";
                    }
                    break;
                case 16:
                    {
                        obj.name = "艾萨拉  ";
                    }
                    break;
                case 17:
                    {
                        obj.name = "贫瘠之地  ";
                    }
                    break;
                case 25:
                    {
                        obj.name = "黑石山  ";
                    }
                    break;
                case 28:
                    {
                        obj.name = "西瘟疫之地  ";
                    }
                    break;
                case 33:
                    {
                        obj.name = "荆棘谷  ";
                    }
                    break;
                case 36:
                    {
                        obj.name = "奥特兰克山脉  ";
                    }
                    break;
                case 38:
                    {
                        obj.name = "洛克莫丹  ";
                    }
                    break;
                case 40:
                    {
                        obj.name = "西部荒野  ";
                    }
                    break;
                case 41:
                    {
                        obj.name = "逆风小径  ";
                    }
                    break;
                case 44:
                    {
                        obj.name = "赤脊山  ";
                    }
                    break;
                case 45:
                    {
                        obj.name = "阿拉希高地  ";
                    }
                    break;
                case 46:
                    {
                        obj.name = "燃烧平原  ";
                    }
                    break;
                case 47:
                    {
                        obj.name = "辛特兰  ";
                    }
                    break;
                case 51:
                    {
                        obj.name = "灼热峡谷  ";
                    }
                    break;
                case 65:
                    {
                        obj.name = "龙骨荒野  ";
                    }
                    break;
                case 66:
                    {
                        obj.name = "祖达克  ";
                    }
                    break;
                case 67:
                    {
                        obj.name = "风暴峭壁  ";
                    }
                    break;
                case 85:
                    {
                        obj.name = "提瑞斯法林地  ";
                    }
                    break;
                case 130:
                    {
                        obj.name = "银松森林  ";
                    }
                    break;
                case 132:
                    {
                        obj.name = "寒脊山谷  ";
                    }
                    break;
                case 139:
                    {
                        obj.name = "东瘟疫之地  ";
                    }
                    break;
                case 141:
                    {
                        obj.name = "泰达希尔  ";
                    }
                    break;
                case 148:
                    {
                        obj.name = "黑海岸  ";
                    }
                    break;
                case 154:
                    {
                        obj.name = "丧钟镇  ";
                    }
                    break;
                case 188:
                    {
                        obj.name = "幽影谷  ";
                    }
                    break;
                case 206:
                    {
                        obj.name = "乌特加德城堡  ";
                    }
                    break;
                case 207:
                    {
                        obj.name = "无尽之海  ";
                    }
                    break;
                case 209:
                    {
                        obj.name = "影牙城堡  ";
                    }
                    break;
                case 210:
                    {
                        obj.name = "冰冠冰川  ";
                    }
                    break;
                case 215:
                    {
                        obj.name = "莫高雷  ";
                    }
                    break;
                case 220:
                    {
                        obj.name = "红云台地  ";
                    }
                    break;
                case 267:
                    {
                        obj.name = "希尔斯布莱德丘陵  ";
                    }
                    break;
                case 331:
                    {
                        obj.name = "灰谷  ";
                    }
                    break;
                case 357:
                    {
                        obj.name = "菲拉斯  ";
                    }
                    break;
                case 361:
                    {
                        obj.name = "费伍德森林  ";
                    }
                    break;
                case 363:
                    {
                        obj.name = "试炼谷  ";
                    }
                    break;
                case 394:
                    {
                        obj.name = "灰熊丘陵  ";
                    }
                    break;
                case 400:
                    {
                        obj.name = "千针石林  ";
                    }
                    break;
                case 405:
                    {
                        obj.name = "凄凉之地  ";
                    }
                    break;
                case 406:
                    {
                        obj.name = "石爪山脉  ";
                    }
                    break;
                case 440:
                    {
                        obj.name = "塔纳利斯  ";
                    }
                    break;
                case 490:
                    {
                        obj.name = "安戈洛环形山  ";
                    }
                    break;
                case 491:
                    {
                        obj.name = "剃刀沼泽  ";
                    }
                    break;
                case 493:
                    {
                        obj.name = "月光林地  ";
                    }
                    break;
                case 495:
                    {
                        obj.name = "嚎风峡湾  ";
                    }
                    break;
                case 618:
                    {
                        obj.name = "冬泉谷  ";
                    }
                    break;
                case 718:
                    {
                        obj.name = "哀嚎洞穴  ";
                    }
                    break;
                case 717:
                    {
                        obj.name = "监狱  ";
                    }
                    break;
                case 719:
                    {
                        obj.name = "黑暗深渊  ";
                    }
                    break;
                case 721:
                    {
                        obj.name = "诺莫瑞根  ";
                    }
                    break;
                case 722:
                    {
                        obj.name = "剃刀高地  ";
                    }
                    break;
                case 796:
                    {
                        obj.name = "血色修道院  ";
                    }
                    break;
                case 1337:
                    {
                        obj.name = "奥达曼  ";
                    }
                    break;
                case 1377:
                    {
                        obj.name = "希利苏斯  ";
                    }
                    break;
                case 1417:
                    {
                        obj.name = "沉没的神庙  ";
                    }
                    break;
                case 1497:
                    {
                        obj.name = "幽暗城  ";
                    }
                    break;
                case 1519:
                    {
                        obj.name = "暴风城  ";
                    }
                    break;
                case 1537:
                    {
                        obj.name = "铁炉堡  ";
                    }
                    break;
                case 1637:
                    {
                        obj.name = "奥格瑞玛  ";
                    }
                    break;
                case 1638:
                    {
                        obj.name = "雷霆崖  ";
                    }
                    break;
                case 1657:
                    {
                        obj.name = "达纳苏斯  ";
                    }
                    break;
                case 1769:
                    {
                        obj.name = "木喉要塞  ";
                    }
                    break;
                case 1977:
                    {
                        obj.name = "祖尔格拉布  ";
                    }
                    break;
                case 2100:
                    {
                        obj.name = "玛拉顿   ";
                    }
                    break;
                case 2257:
                    {
                        obj.name = "矿道地铁   ";
                    }
                    break;
                case 3430:
                    {
                        obj.name = "永歌森林  ";
                    }
                    break;
                case 3431:
                    {
                        obj.name = "逐日岛  ";
                    }
                    break;
                case 3433:
                    {
                        obj.name = "幽魂之地  ";
                    }
                    break;
                case 3482:
                    {
                        obj.name = "银月城 ";
                    }
                    break;
                case 3483:
                    {
                        obj.name = "地狱火半岛 ";
                    }
                    break;
                case 3487:
                    {
                        obj.name = "银月城 ";
                    }
                    break;
                case 3518:
                    {
                        obj.name = "纳格兰  ";
                    }
                    break;
                case 3519:
                    {
                        obj.name = "泰罗卡森林  ";
                    }
                    break;
                case 3520:
                    {
                        obj.name = "影月谷  ";
                    }
                    break;
                case 3521:
                    {
                        obj.name = "赞加沼泽  ";
                    }
                    break;
                case 3522:
                    {
                        obj.name = "刀锋山  ";
                    }
                    break;
                case 3523:
                    {
                        obj.name = "虚空风暴  ";
                    }
                    break;
                case 3524:
                    {
                        obj.name = "秘蓝岛  ";
                    }
                    break;
                case 3525:
                    {
                        obj.name = "秘血岛  ";
                    }
                    break;
                case 3526:
                    {
                        obj.name = "埃门谷  ";
                    }
                    break;
                case 3537:
                    {
                        obj.name = "北风苔原  ";
                    }
                    break;
                case 3557:
                    {
                        obj.name = "埃索达  ";
                    }
                    break;
                case 3679:
                    {
                        obj.name = "斯克提斯  ";
                    }
                    break;
                case 3688:
                    {
                        obj.name = "奥金顿  ";
                    }
                    break;
                case 3703:
                    {
                        obj.name = "沙塔斯城  ";
                    }
                    break;
                case 3711:
                    {
                        obj.name = "索拉查盆地  ";
                    }
                    break;
                case 3715:
                    {
                        obj.name = "蒸汽地窟  ";
                    }
                    break;
                case 3716:
                    {
                        obj.name = "幽暗沼泽  ";
                    }
                    break;
                case 3717:
                    {
                        obj.name = "奴隶围栏  ";
                    }
                    break;
                case 3789:
                    {
                        obj.name = "暗影迷宫  ";
                    }
                    break;
                case 3790:
                    {
                        obj.name = "奥金尼地穴  ";
                    }
                    break;
                case 3791:
                    {
                        obj.name = "塞泰克大厅  ";
                    }
                    break;
                case 3792:
                    {
                        obj.name = "法力陵墓  ";
                    }
                    break;
                case 4024:
                    {
                        obj.name = "考达拉  ";
                    }
                    break;
                case 4080:
                    {
                        obj.name = "奎尔丹纳斯岛  ";
                    }
                    break;
                case 4196:
                    {
                        obj.name = "达克萨隆要塞  ";
                    }
                    break;
                case 4197:
                    {
                        obj.name = "冬拥湖  ";
                    }
                    break;
                case 4273:
                    {
                        obj.name = "奥杜尔  ";
                    }
                    break;
                case 4265:
                    {
                        obj.name = "魔枢  ";
                    }
                    break;
                case 4277:
                    {
                        obj.name = "艾卓-尼鲁布  ";
                    }
                    break;
                case 4298:
                    {
                        obj.name = "血色领地  ";
                    }
                    break;
                case 4395:
                    {
                        obj.name = "达拉然  ";
                    }
                    break;
                case 4494:
                    {
                        obj.name = "安卡赫特：古代王国  ";
                    }
                    break;
                case 4742:
                    {
                        obj.name = "洛斯加尔登陆点  ";
                    }
                    break;
                case 4809:
                    {
                        obj.name = "灵魂洪炉  ";
                    }
                    break;
                case 4813:
                    {
                        obj.name = "萨隆矿坑  ";
                    }
                    break;
                case 4820:
                    {
                        obj.name = "映像大厅  ";
                    }
                    break;
                case 4812:
                    {
                        obj.name = "冰冠堡垒  ";
                    }
                    break;
            }
        });
    } else {
        obj.name = "";
    }
    return obj;
}

// 过滤专业栏炼金术栏训练师栏反应数据
function filteralchemyTrainerReact(arr) {
    let obj = {
        name1: "联盟",
        name2: "部落",
        color1: "",
        color2: "",
    };
    if (arr[0] == 0 && arr[1] == 0) {
        obj.color1 = "padding: 0 5px; color:yellow;";
        obj.color2 = "padding: 0 5px; color:yellow;";
    } else if (arr[0] == 0 && arr[1] == 1) {
        obj.color1 = "padding: 0 5px; color:yellow;";
        obj.color2 = "padding: 0 5px; color:green;";
    } else if (arr[0] == 0 && arr[1] == -1) {
        obj.color1 = "padding: 0 5px; color:yellow;";
        obj.color2 = "padding: 0 5px; color:red;";
    } else if (arr[0] == 1 && arr[1] == 0) {
        obj.color1 = "padding: 0 5px; color:green;";
        obj.color2 = "padding: 0 5px; color:yellow;";
    } else if (arr[0] == 1 && arr[1] == 1) {
        obj.color1 = "padding: 0 5px; color:green;";
        obj.color2 = "padding: 0 5px; color:green;";
    } else if (arr[0] == 1 && arr[1] == -1) {
        obj.color1 = "padding: 0 5px; color:green;";
        obj.color2 = "padding: 0 5px; color:red;";
    } else if (arr[0] == -1 && arr[1] == 0) {
        obj.color1 = "padding: 0 5px; color:red;";
        obj.color2 = "padding: 0 5px; color:yellow;";
    } else if (arr[0] == -1 && arr[1] == 1) {
        obj.color1 = "padding: 0 5px; color:red;";
        obj.color2 = "padding: 0 5px; color:green;";
    } else if (arr[0] == -1 && arr[1] == -1) {
        obj.color1 = "padding: 0 5px; color:red;";
        obj.color2 = "padding: 0 5px; color:red;";
    }
    return obj;
}

// 过滤道具容器数据来源
function filterdaojutaozhuangType(value) {
    if (value == 3) {
        return "容器";
    }
}

// 过滤专业栏炼金术栏任务栏数据
function filterAlchemyRaskWflags(value) {
    let flag = false;
    if (value) {
        flag = true;
    } else {
        flag = false;
    }
    return flag;
}

// 过滤任务金钱数据
function filterrenwuMoney(value) {
    let obj = {
        jin: "",
        yin: "",
        tong: "",
        str: "",
    };
    if (value) {
        if (value >= 10000) {
            obj.str = String(value).replace(/\d{1,2}(?=(\d{2})+(\.|$))/g, "$&,");
            obj.jin = obj.str.split(",")[0] + "金";
            obj.yin = Number(obj.str.split(",")[1]) > 0 ? obj.str.split(",")[1] + "银" : "";
            obj.tong = Number(obj.str.split(",")[2]) > 0 ? obj.str.split(",")[2] + "铜" : "";
        } else if (value < 10000 && value >= 100) {
            obj.str = String(value).replace(/\d{1,2}(?=(\d{2})+(\.|$))/g, "$&,");
            obj.yin = Number(obj.str.split(",")[0]) > 0 ? obj.str.split(",")[0] + "银" : "";
            obj.tong = Number(obj.str.split(",")[1]) > 0 ? obj.str.split(",")[1] + "铜" : "";
        } else {
            obj.tong = value + "铜";
        }
    } else {
        obj.jin = "";
        obj.yin = "";
        obj.tong = "";
    }
    return obj;
} 