<template>
  <div>
    <el-tabs v-model="activewow" class="demo-tabs" @tab-click="handleWowClick">
      <el-tab-pane
        v-for="item in wowList"
        :label="item.label"
        :name="item.name"
        :key="item.key"
      >
        <el-tabs v-model="activewow1" class="demo-tabs" @tab-click="handleWow1Click">
          <el-tab-pane
            v-for="item1 in wow1list"
            :label="item1.label"
            :name="item1.name"
            :key="item1.key"
          >
            <el-tabs class="demo-tabs" @tab-click="handleWow2Click">
              <el-tab-pane
                v-for="item2 in wow2list"
                :label="item2.label"
                :name="item2.name"
                :key="item2.key"
              >
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <el-table-v2 :columns="columns" :data="filterData(data)" :width="2000" :height="1080" fixed>
      <template #header>
        <div style="width:100%; display:flex; justify-content:center;">
          <el-input v-model="input" placeholder="搜索物品" clearable />
        </div>
      </template>
    </el-table-v2>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from "vue";
import { ElButton, ElTooltip } from "element-plus";
import { Timer } from "@element-plus/icons-vue";

import type { Column } from "element-plus";

import wuqiData from "@/assets/json/myapp/wow/物品/武器.json";
import hujiaData from "@/assets/json/myapp/wow/物品/护甲.json";
import rongqiData from "@/assets/json/myapp/wow/物品/容器.json";
import xiaohaopinData from "@/assets/json/myapp/wow/物品/消耗品.json";
import diaowenData from "@/assets/json/myapp/wow/物品/雕文.json";
import maoyipinData from "@/assets/json/myapp/wow/物品/贸易品.json";
import danyaoData from "@/assets/json/myapp/wow/物品/弹药.json";
import jiandaiData from "@/assets/json/myapp/wow/物品/箭袋.json";
import peifangData from "@/assets/json/myapp/wow/物品/配方.json";
import zhubaoData from "@/assets/json/myapp/wow/物品/珠宝.json";
import wupinzaxiangData from "@/assets/json/myapp/wow/物品/杂项.json";
import huobiData from "@/assets/json/myapp/wow/物品/货币.json";
import wupinrenwuData from "@/assets/json/myapp/wow/物品/任务.json";
import yaoshiData from "@/assets/json/myapp/wow/物品/钥匙.json";
import siwangqishiData from "@/assets/json/myapp/wow/物品套装/死亡骑士.json";
import deluyiData from "@/assets/json/myapp/wow/物品套装/德鲁伊.json";
import lierenData from "@/assets/json/myapp/wow/物品套装/猎人.json";
import fashiData from "@/assets/json/myapp/wow/物品套装/法师.json";
import shengqishiData from "@/assets/json/myapp/wow/物品套装/圣骑士.json";
import mushiData from "@/assets/json/myapp/wow/物品套装/牧师.json";
import qianxingzheData from "@/assets/json/myapp/wow/物品套装/潜行者.json";
import samanData from "@/assets/json/myapp/wow/物品套装/萨满.json";
import shushiData from "@/assets/json/myapp/wow/物品套装/术士.json";
import zhanshiData from "@/assets/json/myapp/wow/物品套装/战士.json";

import yeshouData from "@/assets/json/myapp/wow/NPCS/野兽.json";
import xiaoshengwuData from "@/assets/json/myapp/wow/NPCS/小生物.json";
import emoData from "@/assets/json/myapp/wow/NPCS/恶魔.json";
import longleiData from "@/assets/json/myapp/wow/NPCS/龙类.json";
import yuansuData from "@/assets/json/myapp/wow/NPCS/元素.json";
import jurenData from "@/assets/json/myapp/wow/NPCS/巨人.json";
import renxingData from "@/assets/json/myapp/wow/NPCS/人型.json";
import jixieData from "@/assets/json/myapp/wow/NPCS/机械.json";
import wanglingData from "@/assets/json/myapp/wow/NPCS/亡灵.json";
import tutengData from "@/assets/json/myapp/wow/NPCS/图腾.json";
import feizhandouchongwuData from "@/assets/json/myapp/wow/NPCS/非战斗宠物.json";
import qitiyunwuData from "@/assets/json/myapp/wow/NPCS/气体云雾.json";
import weifenleiData from "@/assets/json/myapp/wow/NPCS/未分类.json";
import caoyaoData from "@/assets/json/myapp/wow/道具/草药.json";
import kuangdianData from "@/assets/json/myapp/wow/道具/矿点.json";
import tixiangData from "@/assets/json/myapp/wow/道具/提箱.json";
import daojurenwuData from "@/assets/json/myapp/wow/道具/任务.json";
import gongjuData from "@/assets/json/myapp/wow/道具/工具.json";
import shujiData from "@/assets/json/myapp/wow/道具/书籍.json";
import daojurongqiData from "@/assets/json/myapp/wow/道具/容器.json";
import diaoyuchiData from "@/assets/json/myapp/wow/道具/钓鱼池.json";

import renwudongbuwangguoData from "@/assets/json/myapp/wow/任务/东部王国.json";
import renwukaliduomuData from "@/assets/json/myapp/wow/任务/卡利姆多.json";
import renwuwaiyuData from "@/assets/json/myapp/wow/任务/外域.json";
import renwunuosendeData from "@/assets/json/myapp/wow/任务/诺森德.json";
import renwudixaichengData from "@/assets/json/myapp/wow/任务/地下城.json";
import renwutuanduifubenData from "@/assets/json/myapp/wow/任务/团队副本.json";
import renwuzhiyeData from "@/assets/json/myapp/wow/任务/职业.json";
import renwuzhuanyeData from "@/assets/json/myapp/wow/任务/专业.json";
import zhanchangData from "@/assets/json/myapp/wow/任务/战场.json";
import shijieshijianData from "@/assets/json/myapp/wow/任务/世界事件.json";
import renwuzaxiangData from "@/assets/json/myapp/wow/任务/杂项.json";
import renwuweifenleiData from "@/assets/json/myapp/wow/任务/未分类.json";
import chengjiurenwuData from "@/assets/json/myapp/wow/成就/任务.json";
import chengjiutansuoData from "@/assets/json/myapp/wow/成就/探索.json";
import PvPData from "@/assets/json/myapp/wow/成就/PvP.json";
import dixiachenghetuanduiData from "@/assets/json/myapp/wow/成就/地下城和团队.json";
import chengjiuzhuanyeData from "@/assets/json/myapp/wow/成就/专业.json";
import shengwangData from "@/assets/json/myapp/wow/成就/声望.json";
import chengjiushijieshijianData from "@/assets/json/myapp/wow/成就/世界事件.json";
import guanghuishijiData from "@/assets/json/myapp/wow/成就/光辉事迹.json";
import shuxingData from "@/assets/json/myapp/wow/成就/属性.json";
import jinengData from "@/assets/json/myapp/wow/法术/技能.json";
// 专业
import lianjinshuData from "@/assets/json/myapp/wow/专业/炼金术.json";
import duanzaoData from "@/assets/json/myapp/wow/专业/锻造.json";
import fumoData from "@/assets/json/myapp/wow/专业/附魔.json";
import gongchengxueData from "@/assets/json/myapp/wow/专业/工程学.json";
import caoyaoxueData from "@/assets/json/myapp/wow/专业/草药学.json";
import mingwenData from "@/assets/json/myapp/wow/专业/铭文.json";
import zhubaojiagongData from "@/assets/json/myapp/wow/专业/珠宝加工.json";
import zhipiData from "@/assets/json/myapp/wow/专业/制皮.json";
import caikuangData from "@/assets/json/myapp/wow/专业/采矿.json";
import bopiData from "@/assets/json/myapp/wow/专业/剥皮.json";
import caifengData from "@/assets/json/myapp/wow/专业/裁缝.json";
import pengrenData from "@/assets/json/myapp/wow/专业/烹饪.json";
import jijiuData from "@/assets/json/myapp/wow/专业/急救.json";
import diaoyuData from "@/assets/json/myapp/wow/专业/钓鱼.json";
import qishuData from "@/assets/json/myapp/wow/专业/骑术.json";

import {
  ljspfcolumn,
  ljspfwpncolumn,
  ljsdzwpcolumn,
  ljsxqzcolumn,
  ljsjncolumn,
  ljslxscolumn,
  ljsrwcolumn,
  dzpfcolumn,
  dzpfwpcolumn,
  dzdzwpcolumn,
  dzxqzcolumn,
  dzjncolumn,
  dzxlscolumn,
  dzrwcolumn,
  fmpfcolumn,
  fmpfwpcolumn,
  fmdzwpcolumn,
  fmxqzcolumn,
  fmjncolumn,
  fmxlscolumn,
  gcspfcolumn,
  gcspfwpcolumn,
  gcsdzwpcolumn,
  gcsxqzcolumn,
  gcsjncolumn,
  gcsxlscolumn,
  gcsrwcolumn,
  cyxxqzcolumn,
  cyxjncolumn,
  cyxrwcolumn,
  mwpfcolumn,
  mwpfwpcolumn,
  mwdzwpcolumn,
  mwxqzcolumn,
  mwjncolumn,
  mwxlscolumn,
  mwrwcolumn,
  zbjgpfcolumn,
  zbjgpfwpcolumn,
  zbjgdzwpcolumn,
  zbjgxqzcolumn,
  zbjgjncolumn,
  zbjgxlscolumn,
  zbjgrwcolumn,
  zppfcolumn,
  zppfwpcolumn,
  zpdzwpcolumn,
  zpxqzcolumn,
  zpjncolumn,
  zpxlscolumn,
  zprwcolumn,
  ckpfcolumn,
  ckpfwpcolumn,
  ckdzwpcolumn,
  ckxqzcolumn,
  ckjncolumn,
  ckxlscolumn,
  bpjncolumn,
  cfpfcolumn,
  cfpfwpcolumn,
  cfdzwpcolumn,
  cfxqzcolumn,
  cfjncolumn,
  cfxlscolumn,
  cfrwcolumn,
  prpfcolumn,
  prpfwpcolumn,
  prdzwpcolumn,
  prxqzcolumn,
  prxlscolumn,
  prjncolumn,
  prrwcolumn,
  jjpfcolumn,
  jjpfwpcolumn,
  jjdzwpcolumn,
  jjxqzcolumn,
  jjxlscolumn,
  jjjncolumn,
  jjrwcolumn,
  dypfwpcolumn,
  dyxqzcolumn,
  dyjncolumn,
  dyrwcolumn,
  qspfwpcolumn,
  qsxqzcolumn,
  qsjncolumn,
  qsrwcolumn,
} from '@/tableDir/column/index'

const activewow = "wupin";

const input = ref('')

const wowList = [
  {
    key: "wupin",
    name: "wupin",
    label: "物品",
  },
  {
    key: "wupintaozhuang",
    name: "wupintaozhuang",
    label: "物品套装",
  },
  {
    key: "npc",
    name: "npc",
    label: "NPCS",
  },
  {
    key: "daoju",
    name: "daoju",
    label: "道具",
  },
  {
    key: "renwu",
    name: "renwu",
    label: "任务",
  },
  {
    key: "chengjiu",
    name: "chengjiu",
    label: "成就",
  },
  {
    key: "diqu",
    name: "diqu",
    label: "地区",
  },
  {
    key: "fashu",
    name: "fashu",
    label: "法术",
  },
  {
    key: "zhuanye",
    name: "zhuanye",
    label: "专业",
  },
];

let wow1list: any = [
  {
    key: "wuqi",
    name: "wuqi",
    label: "武器",
  },
  {
    key: "hujia",
    name: "hujia",
    label: "护甲",
  },
  {
    key: "rongqi",
    name: "rongqi",
    label: "容器",
  },
  {
    key: "xiaohaopin",
    name: "xiaohaopin",
    label: "消耗品",
  },
  {
    key: "diaowen",
    name: "diaowen",
    label: "雕文",
  },
  {
    key: "maoyipin",
    name: "maoyipin",
    label: "贸易品",
  },
  {
    key: "danyao",
    name: "danyao",
    label: "弹药",
  },
  {
    key: "jiandai",
    name: "jiandai",
    label: "箭袋",
  },
  {
    key: "peifang",
    name: "peifang",
    label: "配方",
  },
  {
    key: "zhubao",
    name: "zhubao",
    label: "珠宝",
  },
  {
    key: "wupinzaxiang",
    name: "wupinzaxiang",
    label: "杂项",
  },
  {
    key: "huobi",
    name: "huobi",
    label: "货币",
  },
  {
    key: "wupinrenwu",
    name: "wupinrenwu",
    label: "任务",
  },
  {
    key: "yaoshi",
    name: "yaoshi",
    label: "钥匙",
  },
];

let wow2list: any = "";

const activewow1 = "wuqi";

const list: any = ref("123");

let data: any = ref(wuqiData);

let columns: any = ref([
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
              <span>中文名称：{rowData.tip.name_zhcn}</span>
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
    width: 150,
  },
  {
    key: "reqlevel",
    title: "需要等级",
    dataKey: "reqlevel",
    width: 150,
  },
  {
    key: "",
    title: "阵营",
    dataKey: "",
    width: 150,
  },
  {
    key: "slot",
    title: "物品栏",
    dataKey: "slot",
    width: 300,
    cellRenderer: ({ rowData }) => (
      <>
        <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
      </>
    ),
  },
  {
    key: "source",
    title: "来源",
    dataKey: "source",
    width: 200,
    cellRenderer: ({ rowData }) => (
      <>
        {rowData.sourcemore &&
          rowData.sourcemore.map((element) => {
            return <span>{element.n}</span>;
          })}
        {rowData.source &&
          rowData.source.map((element) => {
            return <span>{filteralchemyformulasource(element)}</span>;
          })}
      </>
    ),
  },
  {
    key: "classs",
    title: "类型",
    dataKey: "classs",
    width: 200,
    cellRenderer: ({ rowData }) => (
      <>
        <span>{filteralchemyformulaclass(rowData)}</span>
      </>
    ),
  },
  {
    key: "operations",
    title: "Operations",
    cellRenderer: () => (
      <>
        <ElButton size="small">Edit</ElButton>
        <ElButton size="small" type="danger">
          Delete
        </ElButton>
      </>
    ),
    width: 150,
    align: "center",
  },
]);

function handleWowClick(tab: any, event: any) {
  columns.value = [];
  data.value = [];
  wow1list = [];
  wow2list = [];
  switch (tab.props.name) {
    case "wupin":
      {
        wow1list = [
          {
            key: "wuqi",
            name: "wuqi",
            label: "武器",
          },
          {
            key: "hujia",
            name: "hujia",
            label: "护甲",
          },
          {
            key: "rongqi",
            name: "rongqi",
            label: "容器",
          },
          {
            key: "xiaohaopin",
            name: "xiaohaopin",
            label: "消耗品",
          },
          {
            key: "diaowen",
            name: "diaowen",
            label: "雕文",
          },
          {
            key: "maoyipin",
            name: "maoyipin",
            label: "贸易品",
          },
          {
            key: "danyao",
            name: "danyao",
            label: "弹药",
          },
          {
            key: "jiandai",
            name: "jiandai",
            label: "箭袋",
          },
          {
            key: "peifang",
            name: "peifang",
            label: "配方",
          },
          {
            key: "zhubao",
            name: "zhubao",
            label: "珠宝",
          },
          {
            key: "wupinzaxiang",
            name: "wupinzaxiang",
            label: "杂项",
          },
          {
            key: "huobi",
            name: "huobi",
            label: "货币",
          },
          {
            key: "wupinrenwu",
            name: "wupinrenwu",
            label: "任务",
          },
          {
            key: "yaoshi",
            name: "yaoshi",
            label: "钥匙",
          },
        ];
      }
      break;
    case "wupintaozhuang":
      {
        wow1list = [
          {
            key: "siwangqishi",
            name: "siwangqishi",
            label: "死亡骑士",
          },
          {
            key: "deluyi",
            name: "deluyi",
            label: "德鲁伊",
          },
          {
            key: "lieren",
            name: "lieren",
            label: "猎人",
          },
          {
            key: "fashi",
            name: "fashi",
            label: "法师",
          },
          {
            key: "shengqishi",
            name: "shengqishi",
            label: "圣骑士",
          },
          {
            key: "mushi",
            name: "mushi",
            label: "牧师",
          },
          {
            key: "qianxingzhe",
            name: "qianxingzhe",
            label: "潜行者",
          },
          {
            key: "saman",
            name: "saman",
            label: "萨满",
          },
          {
            key: "shushi",
            name: "shushi",
            label: "术士",
          },
          {
            key: "zhanshi",
            name: "zhanshi",
            label: "战士",
          },
        ];
      }
      break;
    case "npc":
      {
        wow1list = [
          {
            key: "yeshou",
            name: "yeshou",
            label: "野兽",
          },
          {
            key: "xiaoshengwu",
            name: "xiaoshengwu",
            label: "小生物",
          },
          {
            key: "emo",
            name: "emo",
            label: "恶魔",
          },
          {
            key: "longlei",
            name: "longlei",
            label: "龙类",
          },
          {
            key: "yuansu",
            name: "yuansu",
            label: "元素",
          },
          {
            key: "juren",
            name: "juren",
            label: "巨人",
          },
          {
            key: "renxing",
            name: "renxing",
            label: "人型",
          },
          {
            key: "jixie",
            name: "jixie",
            label: "机械",
          },
          {
            key: "wangling",
            name: "wangling",
            label: "亡灵",
          },
          {
            key: "tuteng",
            name: "tuteng",
            label: "图腾",
          },
          {
            key: "feizhandouchongwu",
            name: "feizhandouchongwu",
            label: "非战斗宠物",
          },
          {
            key: "qitiyunwu",
            name: "qitiyunwu",
            label: "气体云雾",
          },
          {
            key: "npcweifenlei",
            name: "npcweifenlei",
            label: "未分类",
          },
        ];
      }
      break;
    case "daoju":
      {
        wow1list = [
          {
            key: "caoyao",
            name: "caoyao",
            label: "草药",
          },
          {
            key: "kuangdian",
            name: "kuangdian",
            label: "矿点",
          },
          {
            key: "tixiang",
            name: "tixiang",
            label: "提箱",
          },
          {
            key: "rdaojuenwu",
            name: "daojurenwu",
            label: "任务",
          },
          {
            key: "gongju",
            name: "gongju",
            label: "工具",
          },
          {
            key: "shuji",
            name: "shuji",
            label: "书籍",
          },
          {
            key: "daojurongqi",
            name: "daojurongqi",
            label: "容器",
          },
          {
            key: "diaoyuchi",
            name: "diaoyuchi",
            label: "钓鱼池",
          },
        ];
      }
      break;
    case "renwu":
      {
        wow1list = [
          {
            key: "renwudongbuwangguo",
            name: "renwudongbuwangguo",
            label: "东部王国",
          },
          {
            key: "renwukaliduomu",
            name: "renwukaliduomu",
            label: "卡利多姆",
          },
          {
            key: "renwuwaiyu",
            name: "renwuwaiyu",
            label: "外域",
          },
          {
            key: "renwunuosende",
            name: "renwunuosende",
            label: "诺森德",
          },
          {
            key: "renwudixaicheng",
            name: "renwudixaicheng",
            label: "地下城",
          },
          {
            key: "renwutuanduifuben",
            name: "renwutuanduifuben",
            label: "团队副本",
          },
          {
            key: "renwuzhiye",
            name: "renwuzhiye",
            label: "职业",
          },
          {
            key: "renwuzhuanye",
            name: "renwuzhuanye",
            label: "专业",
          },
          {
            key: "zhanchang",
            name: "zhanchang",
            label: "战场",
          },
          {
            key: "shijieshijian",
            name: "shijieshijian",
            label: "世界事件",
          },
          {
            key: "renwuzaxiang",
            name: "renwuzaxiang",
            label: "杂项",
          },
          {
            key: "renwuweifenlei",
            name: "renwuweifenlei",
            label: "未分类",
          },
        ];
      }
      break;
    case "chengjiu":
      {
        wow1list = [
          {
            key: "chengjiurenwu",
            name: "chengjiurenwu",
            label: "任务",
          },
          {
            key: "chengjiutansuo",
            name: "chengjiutansuo",
            label: "探索",
          },
          {
            key: "PvP",
            name: "PvP",
            label: "PvP",
          },
          {
            key: "dixiachenghetuandui",
            name: "dixiachenghetuandui",
            label: "地下城和团队",
          },
          {
            key: "chengjiuzhuanye",
            name: "chengjiuzhuanye",
            label: "专业",
          },
          {
            key: "shengwang",
            name: "shengwang",
            label: "声望",
          },
          {
            key: "chengjiushijieshijian",
            name: "chengjiushijieshijian",
            label: "世界事件",
          },
          {
            key: "guanghuishiji",
            name: "guanghuishiji",
            label: "光辉事件",
          },
          {
            key: "shuxing",
            name: "shuxing",
            label: "属性",
          },
        ];
      }
      break;
    case "diqu":
      {
        wow1list = [
          {
            key: "diqudongbuwangguo",
            name: "diqudongbuwangguo",
            label: "东部王国",
          },
          {
            key: "diqukaliduomu",
            name: "diqukaliduomu",
            label: "卡利多姆",
          },
          {
            key: "diquwaiyu",
            name: "diquwaiyu",
            label: "外域",
          },
          {
            key: "diqunuosende",
            name: "diqunuosende",
            label: "诺森德",
          },
          {
            key: "diqudixaicheng",
            name: "diqudixaicheng",
            label: "地下城",
          },
          {
            key: "diqutuanduifuben",
            name: "diqutuanduifuben",
            label: "团队副本",
          },
          {
            key: "diquzhanchang",
            name: "diquzhanchang",
            label: "战场",
          },
          {
            key: "jingjichang",
            name: "jingjichang",
            label: "竞技场",
          },
        ];
      }
      break;
    case "fashu":
      {
        wow1list = [
          {
            key: "chongwunengli",
            name: "chongwunengli",
            label: "宠物能力",
          },
          {
            key: "chongwutianfu",
            name: "chongwutianfu",
            label: "宠物天赋",
          },
          {
            key: "fashudiaowen",
            name: "fashudiaowen",
            label: "雕文",
          },
          {
            key: "fuzhuzhuanye",
            name: "fuzhuzhuanye",
            label: "辅助专业",
          },
          {
            key: "huoban",
            name: "huoban",
            label: "伙伴",
          },
          {
            key: "jineng",
            name: "jineng",
            label: "技能",
          },
          {
            key: "jingtong",
            name: "jingtong",
            label: "精通",
          },
          {
            key: "tianfu",
            name: "tianfu",
            label: "天赋",
          },
          {
            key: "fashuweifenlei",
            name: "fashuweifenlei",
            label: "未分类",
          },
          {
            key: "zhongzutexing",
            name: "zhongzutexing",
            label: "种族特性",
          },
          {
            key: "fashuzhuanye",
            name: "fashuzhuanye",
            label: "专业",
          },
          {
            key: "fashuzuoqi",
            name: "fashuzuoqi",
            label: "坐骑",
          },
          {
            key: "GMnengli",
            name: "GMnengli",
            label: "GM能力",
          },
          {
            key: "NPCnengli",
            name: "NPCnengli",
            label: "NPC能力",
          },
        ];
      }
      break;
    case "zhuanye":
      {
        wow1list = [
          {
            key: "lianjinshu",
            name: "lianjinshu",
            label: "炼金术",
          },
          {
            key: "duanzao",
            name: "duanzao",
            label: "锻造",
          },
          {
            key: "fumo",
            name: "fumo",
            label: "附魔",
          },
          {
            key: "gongchengxue",
            name: "gongchengxue",
            label: "工程学",
          },
          {
            key: "caoyaoxue",
            name: "caoyaoxue",
            label: "草药学",
          },
          {
            key: "mingwen",
            name: "mingwen",
            label: "铭文",
          },
          {
            key: "zhubaojiagong",
            name: "zhubaojiagong",
            label: "珠宝加工",
          },
          {
            key: "zhipi",
            name: "zhipi",
            label: "制皮",
          },
          {
            key: "caikuang",
            name: "caikuang",
            label: "采矿",
          },
          {
            key: "bopi",
            name: "bopi",
            label: "剥皮",
          },
          {
            key: "caifeng",
            name: "caifeng",
            label: "裁缝",
          },
          {
            key: "pengren",
            name: "pengren",
            label: "烹饪",
          },
          {
            key: "jijiu",
            name: "jijiu",
            label: "急救",
          },
          {
            key: "diaoyu",
            name: "diaoyu",
            label: "钓鱼",
          },
          {
            key: "qishu",
            name: "qishu",
            label: "骑术",
          },
        ];
      }
      break;
  }
}

function handleWow1Click(tab: any, event: any) {
  columns.value = [];
  data.value = [];
  switch (tab.props.name) {
    // 物品
    case "wuqi":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "slot",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = wuqiData;
      }
      break;
    case "hujia":
      {
        console.log(2222);
        columns.value = [
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "slot",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = hujiaData;
      }
      break;
    case "rongqi":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "nslots",
            width: 300,
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = rongqiData;
      }
      break;
    case "xiaohaopin":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "nslots",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = xiaohaopinData;
      }
      break;
    case "diaowen":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "subsubclass",
            title: "雕文类型",
            dataKey: "subsubclass",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterdiaowenglyph(rowData.subsubclass)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = diaowenData;
      }
      break;
    case "maoyipin":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = maoyipinData;
      }
      break;
    case "danyao":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "nslots",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = danyaoData;
      }
      break;
    case "jiandai":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "nslots",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = jiandaiData;
      }
      break;
    case "peifang":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = peifangData;
      }
      break;
    case "zhubao":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = zhubaoData;
      }
      break;
    case "wupinzaxiang":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "nslots",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = wupinzaxiangData;
      }
      break;
    case "huobi":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "nslots",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = huobiData;
      }
      break;
    case "wupinrenwu":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "nslots",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = wupinrenwuData;
      }
      break;
    case "yaoshi":
      {
        columns.value = [
          {
            key: "name",
            title: "名称",
            dataKey: "name",
            width: 500,
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
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "slot",
            title: "物品栏",
            dataKey: "nslots",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span v-if="rowData.slot">{filterwuqislot(rowData.slot)}</span>
              </>
            ),
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.sourcemore &&
                  rowData.sourcemore.map((element) => {
                    return <span>{element.n}</span>;
                  })}
                {rowData.source &&
                  rowData.source.map((element) => {
                    return <span>{filteralchemyformulasource(element)}</span>;
                  })}
              </>
            ),
          },
          {
            key: "classs",
            title: "类型",
            dataKey: "classs",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filteralchemyformulaclass(rowData)}</span>
              </>
            ),
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = yaoshiData;
      }
      break;
    // 物品套装
    case "siwangqishi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = siwangqishiData;
      }
      break;
    case "deluyi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = deluyiData;
      }
      break;
    case "lieren":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = lierenData;
      }
      break;
    case "fashi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = fashiData;
      }
      break;
    case "shengqishi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = shengqishiData;
      }
      break;
    case "mushi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = mushiData;
      }
      break;
    case "qianxingzhe":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = qianxingzheData;
      }
      break;
    case "saman":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = samanData;
      }
      break;
    case "shushi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = shushiData;
      }
      break;
    case "zhanshi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "pieces",
            title: "件",
            dataKey: "pieces",
            width: 400,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterwupintaozhuangType(rowData.type).name}</span>
              </>
            ),
          },
          {
            key: "slot",
            title: "职业",
            dataKey: "classes",
            width: 300,
          },
          {
            key: "operations",
            title: "Operations",
            cellRenderer: () => (
              <>
                <ElButton size="small">Edit</ElButton>
                <ElButton size="small" type="danger">
                  Delete
                </ElButton>
              </>
            ),
            width: 150,
            align: "center",
          },
        ];
        data.value = zhanshiData;
      }
      break;
    // NPCS
    case "yeshou":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = yeshouData;
      }
      break;
    case "xiaoshengwu":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = xiaoshengwuData;
      }
      break;
    case "emo":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = emoData;
      }
      break;
    case "longlei":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = longleiData;
      }
      break;
    case "yuansu":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = yuansuData;
      }
      break;
    case "juren":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = jurenData;
      }
      break;
    case "renxing":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = renxingData;
      }
      break;
    case "jixie":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = jixieData;
      }
      break;
    case "wangling":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = wanglingData;
      }
      break;
    case "tuteng":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = tutengData;
      }
      break;
    case "feizhandouchongwu":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = feizhandouchongwuData;
      }
      break;
    case "qitiyunwu":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = qitiyunwuData;
      }
      break;
    case "npcweifenlei":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                    <div style="color:#a335ee !important">
                      {rowData.heroic ? "英雄" : ""}
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "levemaxlevell",
            title: "等级",
            dataKey: "maxlevel",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.minlevel == rowData.maxlevel ? (
                  <span>{rowData.maxlevel}</span>
                ) : (
                  <span>{rowData.minlevel + "-" + rowData.maxlevel}</span>
                )}
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "react",
            title: "反应",
            dataKey: "react",
            width: 150,
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
        ];
        data.value = weifenleiData;
      }
      break;
    // 道具
    case "caoyao":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "skill",
            title: "技能",
            dataKey: "skill",
            width: 150,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">
                  {filterwupintaozhuangType(rowData.type).name}
                </span>
              </>
            ),
          },
        ];
        data.value = caoyaoData;
      }
      break;
    case "kuangdian":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "skill",
            title: "技能",
            dataKey: "skill",
            width: 150,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">
                  {filterwupintaozhuangType(rowData.type).name}
                </span>
              </>
            ),
          },
        ];
        data.value = kuangdianData;
      }
      break;
    case "tixiang":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "skill",
            title: "技能",
            dataKey: "skill",
            width: 150,
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">
                  {filterwupintaozhuangType(rowData.type).name}
                </span>
              </>
            ),
          },
        ];
        data.value = tixiangData;
      }
      break;
    case "daojurenwu":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">
                  {filterwupintaozhuangType(rowData.type).name}
                </span>
              </>
            ),
          },
        ];
        data.value = daojurenwuData;
      }
      break;
    case "gongju":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">
                  {filterwupintaozhuangType(rowData.type).name}
                </span>
              </>
            ),
          },
        ];
        data.value = gongjuData;
      }
      break;
    case "shuji":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">
                  {filterwupintaozhuangType(rowData.type).name}
                </span>
              </>
            ),
          },
        ];
        data.value = shujiData;
      }
      break;
    case "daojurongqi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filterdaojutaozhuangType(rowData.type)}</span>
              </>
            ),
          },
        ];
        data.value = daojurongqiData;
      }
      break;
    case "diaoyuchi":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.tip.name_zhcn}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "location",
            title: "地点",
            dataKey: "location",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">{filternpcsmap(rowData).name}</span>
              </>
            ),
          },
          {
            key: "type",
            title: "类型",
            dataKey: "type",
            width: 150,
            cellRenderer: ({ rowData }) => (
              <>
                <span style="width:100%;">
                  {filterwupintaozhuangType(rowData.type).name}
                </span>
              </>
            ),
          },
        ];
        data.value = diaoyuchiData;
      }
      break;
    // 任务
    case "renwudongbuwangguo":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwudongbuwangguoData;
      }
      break;
    case "renwukaliduomu":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwukaliduomuData;
      }
      break;
    case "renwuwaiyu":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwuwaiyuData;
      }
      break;
    case "renwunuosende":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwunuosendeData;
      }
      break;
    case "renwudixaicheng":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwudixaichengData;
      }
      break;
    case "renwutuanduifuben":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwutuanduifubenData;
      }
      break;
    case "renwuzhiye":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwuzhiyeData;
      }
      break;
    case "renwuzhuanye":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwuzhuanyeData;
      }
      break;
    case "zhanchang":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = zhanchangData;
      }
      break;
    case "shijieshijian":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = shijieshijianData;
      }
      break;
    case "renwuzaxiang":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span row-content>{filterrenwuMoney(rowData.money).jin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).yin}</span>
                <span row-content>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwuzaxiangData;
      }
      break;
    case "renwuweifenlei":
      {
        columns.value = [
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
                  <div style="display:flex; justify-content: space-between; align-items: center; cursor:pointer; width:100%">
                    <div style="display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                      <span>中文名称：{rowData.name}</span>
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
            width: 150,
          },
          {
            key: "reqlevel",
            title: "需要等级",
            dataKey: "reqlevel",
            width: 150,
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "itemchoices",
            title: "奖励",
            dataKey: "itemchoices",
            width: 300,
          },
          {
            key: "xp",
            title: "经验",
            dataKey: "xp",
            width: 150,
          },
          {
            key: "money",
            title: "金钱",
            dataKey: "money",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterrenwuMoney(rowData.money).jin}</span>
                <span>{filterrenwuMoney(rowData.money).yin}</span>
                <span>{filterrenwuMoney(rowData.money).tong}</span>
              </>
            ),
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 200,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{filterdongbucategory(rowData).name}</span>
              </>
            ),
          },
        ];
        data.value = renwuweifenleiData;
      }
      break;
    // 成就
    case "chengjiurenwu":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
        ];
        data.value = chengjiurenwuData;
      }
      break;
    case "chengjiutansuo":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
        ];
        data.value = chengjiutansuoData;
      }
      break;
    case "PvP":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
        ];
        data.value = PvPData;
      }
      break;
    case "dixiachenghetuandui":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
        ];
        data.value = dixiachenghetuanduiData;
      }
      break;
    case "chengjiuzhuanye":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
        ];
        data.value = chengjiuzhuanyeData;
      }
      break;
    case "shengwang":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
        ];
        data.value = shengwangData;
      }
      break;
    case "chengjiushijieshijian":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
        ];
        data.value = chengjiushijieshijianData;
      }
      break;
    case "guanghuishiji":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
        ];
        data.value = guanghuishijiData;
      }
      break;
    case "shuxing":
      {
        columns.value = [
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
                      <span>中文名称：{rowData.name}</span>
                      <span>英文名称：{rowData.name_en}</span>
                    </div>
                  </div>
                </ElTooltip>
              </>
            ),
          },
          {
            key: "",
            title: "阵营",
            dataKey: "",
            width: 150,
          },
          {
            key: "points",
            title: "点数",
            dataKey: "points",
            width: 300,
            cellRenderer: ({ rowData }) => (
              <>
                <span>{rowData.points}</span>
                <span
                  v-if="rowData.points"
                  style="width:30px; height:20px; background:url('src/assets/image/dianshu.jpg') no-repeat center center"
                ></span>
              </>
            ),
          },
          {
            key: "rewards",
            title: "奖励",
            dataKey: "rewards",
            width: 300,
          },
          {
            key: "category",
            title: "分类",
            dataKey: "category",
            width: 100,
            cellRenderer: ({ rowData }) => (
              <>
                <div style="display:flex; flex-direction: column; justify-content: center; align-items:center;">
                  <span>{filterchengjiushuxinfenlei(rowData.parentcat)}</span>
                  <span>{filterchengjiushuxinfenlei(rowData.category)}</span>
                </div>
              </>
            ),
          },
        ];
        data.value = shuxingData;
      }
      break;
    // 法术
    // 专业
    case "lianjinshu":
      {
        wow2list = [
          {
            key: "ljszhuanyepeifang",
            name: "ljszhuanyepeifang",
            label: "配方" + filteralchemyformulalength(lianjinshuData).alchemyformulaNum,
          },
          {
            key: "ljspeifangwupin",
            name: "ljspeifangwupin",
            label:
              "配方物品" +
              filteralchemyformulalength(lianjinshuData).alchemyFormulaitemsNum,
          },
          {
            key: "ljsduanzaowupin",
            name: "ljsduanzaowupin",
            label:
              "锻造物品" +
              filteralchemyformulalength(lianjinshuData).alchemyForgeditemsNum,
          },
          {
            key: "ljsxuqiuzhe",
            name: "ljsxuqiuzhe",
            label:
              "需求者" + filteralchemyformulalength(lianjinshuData).alchemyDemanderNum,
          },
          {
            key: "ljszhuanyejineng",
            name: "ljszhuanyejineng",
            label: "技能" + filteralchemyformulalength(lianjinshuData).alchemyskillNum,
          },
          {
            key: "ljsxunlianshi",
            name: "ljsxunlianshi",
            label:
              "训练师" + filteralchemyformulalength(lianjinshuData).alchemyTrainerNum,
          },
          {
            key: "ljszhuanyerenwu",
            name: "ljszhuanyerenwu",
            label: "任务" + filteralchemyformulalength(lianjinshuData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "duanzao":
      {
        wow2list = [
          {
            key: "duanzaozhuanyepeifang",
            name: "duanzaozhuanyepeifang",
            label: "配方" + filteralchemyformulalength(duanzaoData).alchemyformulaNum,
          },
          {
            key: "duanzaopeifangwupin",
            name: "duanzaopeifangwupin",
            label:
              "配方物品" + filteralchemyformulalength(duanzaoData).alchemyFormulaitemsNum,
          },
          {
            key: "duanzaoduanzaowupin",
            name: "duanzaoduanzaowupin",
            label:
              "锻造物品" + filteralchemyformulalength(duanzaoData).alchemyForgeditemsNum,
          },
          {
            key: "duanzaoxuqiuzhe",
            name: "duanzaoxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(duanzaoData).alchemyDemanderNum,
          },
          {
            key: "duanzaozhuanyejineng",
            name: "duanzaozhuanyejineng",
            label: "技能" + filteralchemyformulalength(duanzaoData).alchemyskillNum,
          },
          {
            key: "duanzaoxunlianshi",
            name: "duanzaoxunlianshi",
            label: "训练师" + filteralchemyformulalength(duanzaoData).alchemyTrainerNum,
          },
          {
            key: "duanzaozhuanyerenwu",
            name: "duanzaozhuanyerenwu",
            label: "任务" + filteralchemyformulalength(duanzaoData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "fumo":
      {
        wow2list = [
          {
            key: "fumozhuanyepeifang",
            name: "fumozhuanyepeifang",
            label: "配方" + filteralchemyformulalength(fumoData).alchemyformulaNum,
          },
          {
            key: "fumopeifangwupin",
            name: "fumopeifangwupin",
            label:
              "配方物品" + filteralchemyformulalength(fumoData).alchemyFormulaitemsNum,
          },
          {
            key: "fumoduanzaowupin",
            name: "fumoduanzaowupin",
            label:
              "锻造物品" + filteralchemyformulalength(fumoData).alchemyForgeditemsNum,
          },
          {
            key: "fumoxuqiuzhe",
            name: "fumoxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(fumoData).alchemyDemanderNum,
          },
          {
            key: "fumozhuanyejineng",
            name: "fumozhuanyejineng",
            label: "技能" + filteralchemyformulalength(fumoData).alchemyskillNum,
          },
          {
            key: "fumoxunlianshi",
            name: "fumoxunlianshi",
            label: "训练师" + filteralchemyformulalength(fumoData).alchemyTrainerNum,
          },
        ];
      }
      break;
    case "gongchengxue":
      {
        wow2list = [
          {
            key: "gongchengxuezhuanyepeifang",
            name: "gongchengxuezhuanyepeifang",
            label:
              "配方" + filteralchemyformulalength(gongchengxueData).alchemyformulaNum,
          },
          {
            key: "gongchengxuepeifangwupin",
            name: "gongchengxuepeifangwupin",
            label:
              "配方物品" +
              filteralchemyformulalength(gongchengxueData).alchemyFormulaitemsNum,
          },
          {
            key: "gongchengxueduanzaowupin",
            name: "gongchengxueduanzaowupin",
            label:
              "锻造物品" +
              filteralchemyformulalength(gongchengxueData).alchemyForgeditemsNum,
          },
          {
            key: "gongchengxuexuqiuzhe",
            name: "gongchengxuexuqiuzhe",
            label:
              "需求者" + filteralchemyformulalength(gongchengxueData).alchemyDemanderNum,
          },
          {
            key: "gongchengxuezhuanyejineng",
            name: "gongchengxuezhuanyejineng",
            label: "技能" + filteralchemyformulalength(gongchengxueData).alchemyskillNum,
          },
          {
            key: "gongchengxuexunlianshi",
            name: "gongchengxuexunlianshi",
            label:
              "训练师" + filteralchemyformulalength(gongchengxueData).alchemyTrainerNum,
          },
          {
            key: "gongchengxuezhuanyerenwu",
            name: "gongchengxuezhuanyerenwu",
            label: "任务" + filteralchemyformulalength(gongchengxueData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "caoyaoxue":
      {
        wow2list = [
          {
            key: "caoyaoxuexuqiuzhe",
            name: "caoyaoxuexuqiuzhe",
            label:
              "需求者" + filteralchemyformulalength(caoyaoxueData).alchemyDemanderNum,
          },
          {
            key: "caoyaoxuezhuanyejineng",
            name: "caoyaoxuezhuanyejineng",
            label: "技能" + filteralchemyformulalength(caoyaoxueData).alchemyskillNum,
          },
          {
            key: "caoyaoxuezhuanyerenwu",
            name: "caoyaoxuezhuanyerenwu",
            label: "任务" + filteralchemyformulalength(caoyaoxueData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "mingwen":
      {
        wow2list = [
          {
            key: "mingwenzhuanyepeifang",
            name: "mingwenzhuanyepeifang",
            label: "配方" + filteralchemyformulalength(mingwenData).alchemyformulaNum,
          },
          {
            key: "mingwenpeifangwupin",
            name: "mingwenpeifangwupin",
            label:
              "配方物品" + filteralchemyformulalength(mingwenData).alchemyFormulaitemsNum,
          },
          {
            key: "mingwenduanzaowupin",
            name: "mingwenduanzaowupin",
            label:
              "锻造物品" + filteralchemyformulalength(mingwenData).alchemyForgeditemsNum,
          },
          {
            key: "mingwenxuqiuzhe",
            name: "mingwenxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(mingwenData).alchemyDemanderNum,
          },
          {
            key: "mingwenzhuanyejineng",
            name: "mingwenzhuanyejineng",
            label: "技能" + filteralchemyformulalength(mingwenData).alchemyskillNum,
          },
          {
            key: "mingwenxunlianshi",
            name: "mingwenxunlianshi",
            label: "训练师" + filteralchemyformulalength(mingwenData).alchemyTrainerNum,
          },
          {
            key: "mingwenzhuanyerenwu",
            name: "mingwenzhuanyerenwu",
            label: "任务" + filteralchemyformulalength(mingwenData).alchemyRaskNum,
          },
        ];
        columns.value = [
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
          },
          {
            key: "source",
            title: "来源",
            dataKey: "source",
            width: 300,
            align: "center",
            cellRenderer: ({ rowData }) => (
              <>
                {rowData.source.lenght > 0 &&
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
                  <span>铭文（{rowData.learnedat}）</span>
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
        data.value = mingwenData;
      }
      break;
    case "zhubaojiagong":
      {
        wow2list = [
          {
            key: "zhubaojiagongzhuanyepeifang",
            name: "zhubaojiagongzhuanyepeifang",
            label:
              "配方" + filteralchemyformulalength(zhubaojiagongData).alchemyformulaNum,
          },
          {
            key: "zhubaojiagongpeifangwupin",
            name: "zhubaojiagongpeifangwupin",
            label:
              "配方物品" +
              filteralchemyformulalength(zhubaojiagongData).alchemyFormulaitemsNum,
          },
          {
            key: "zhubaojiagongduanzaowupin",
            name: "zhubaojiagongduanzaowupin",
            label:
              "锻造物品" +
              filteralchemyformulalength(zhubaojiagongData).alchemyForgeditemsNum,
          },
          {
            key: "zhubaojiagongxuqiuzhe",
            name: "zhubaojiagongxuqiuzhe",
            label:
              "需求者" + filteralchemyformulalength(zhubaojiagongData).alchemyDemanderNum,
          },
          {
            key: "zhubaojiagongzhuanyejineng",
            name: "zhubaojiagongzhuanyejineng",
            label: "技能" + filteralchemyformulalength(zhubaojiagongData).alchemyskillNum,
          },
          {
            key: "zhubaojiagongxunlianshi",
            name: "zhubaojiagongxunlianshi",
            label:
              "训练师" + filteralchemyformulalength(zhubaojiagongData).alchemyTrainerNum,
          },
          {
            key: "zhubaojiagongzhuanyerenwu",
            name: "zhubaojiagongzhuanyerenwu",
            label: "任务" + filteralchemyformulalength(zhubaojiagongData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "zhipi":
      {
        wow2list = [
          {
            key: "zhipizhuanyepeifang",
            name: "zhipizhuanyepeifang",
            label: "配方" + filteralchemyformulalength(zhipiData).alchemyformulaNum,
          },
          {
            key: "zhipipeifangwupin",
            name: "zhipipeifangwupin",
            label:
              "配方物品" + filteralchemyformulalength(zhipiData).alchemyFormulaitemsNum,
          },
          {
            key: "zhipiduanzaowupin",
            name: "zhipiduanzaowupin",
            label:
              "锻造物品" + filteralchemyformulalength(zhipiData).alchemyForgeditemsNum,
          },
          {
            key: "zhipixuqiuzhe",
            name: "zhipixuqiuzhe",
            label: "需求者" + filteralchemyformulalength(zhipiData).alchemyDemanderNum,
          },
          {
            key: "zhipizhuanyejineng",
            name: "zhipizhuanyejineng",
            label: "技能" + filteralchemyformulalength(zhipiData).alchemyskillNum,
          },
          {
            key: "zhipixunlianshi",
            name: "zhipixunlianshi",
            label: "训练师" + filteralchemyformulalength(zhipiData).alchemyTrainerNum,
          },
          {
            key: "zhipizhuanyerenwu",
            name: "zhipizhuanyerenwu",
            label: "任务" + filteralchemyformulalength(zhipiData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "caikuang":
      {
        wow2list = [
          {
            key: "caikuangzhuanyepeifang",
            name: "caikuangzhuanyepeifang",
            label: "配方" + filteralchemyformulalength(caikuangData).alchemyformulaNum,
          },
          {
            key: "caikuangpeifangwupin",
            name: "caikuangpeifangwupin",
            label:
              "配方物品" +
              filteralchemyformulalength(caikuangData).alchemyFormulaitemsNum,
          },
          {
            key: "caikuangduanzaowupin",
            name: "caikuangduanzaowupin",
            label:
              "锻造物品" + filteralchemyformulalength(caikuangData).alchemyForgeditemsNum,
          },
          {
            key: "caikuangxuqiuzhe",
            name: "caikuangxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(caikuangData).alchemyDemanderNum,
          },
          {
            key: "caikuangzhuanyejineng",
            name: "caikuangzhuanyejineng",
            label: "技能" + filteralchemyformulalength(caikuangData).alchemyskillNum,
          },
          {
            key: "caikuangxunlianshi",
            name: "caikuangxunlianshi",
            label: "训练师" + filteralchemyformulalength(caikuangData).alchemyTrainerNum,
          },
        ];
      }
      break;
    case "bopi":
      {
        wow2list = [
          {
            key: "bopizhuanyejineng",
            name: "bopizhuanyejineng",
            label: "技能" + filteralchemyformulalength(bopiData).alchemyskillNum,
          },
        ];
        columns.value = [
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
                  <span>剥皮（{rowData.learnedat}）</span>
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
        data.value = bopiData;
      }
      break;
    case "caifeng":
      {
        wow2list = [
          {
            key: "caifengzhuanyepeifang",
            name: "caifengzhuanyepeifang",
            label: "配方" + filteralchemyformulalength(caifengData).alchemyformulaNum,
          },
          {
            key: "caifengpeifangwupin",
            name: "caifengpeifangwupin",
            label:
              "配方物品" + filteralchemyformulalength(caifengData).alchemyFormulaitemsNum,
          },
          {
            key: "caifengduanzaowupin",
            name: "caifengduanzaowupin",
            label:
              "锻造物品" + filteralchemyformulalength(caifengData).alchemyForgeditemsNum,
          },
          {
            key: "caifengxuqiuzhe",
            name: "caifengxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(caifengData).alchemyDemanderNum,
          },
          {
            key: "caifengzhuanyejineng",
            name: "caifengzhuanyejineng",
            label: "技能" + filteralchemyformulalength(caifengData).alchemyskillNum,
          },
          {
            key: "caifengxunlianshi",
            name: "caifengxunlianshi",
            label: "训练师" + filteralchemyformulalength(caifengData).alchemyTrainerNum,
          },
          {
            key: "caifengzhuanyerenwu",
            name: "caifengzhuanyerenwu",
            label: "任务" + filteralchemyformulalength(caifengData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "pengren":
      {
        wow2list = [
          {
            key: "pengrenzhuanyepeifang",
            name: "pengrenzhuanyepeifang",
            label: "配方" + filteralchemyformulalength(pengrenData).alchemyformulaNum,
          },
          {
            key: "pengrenpeifangwupin",
            name: "pengrenpeifangwupin",
            label:
              "配方物品" + filteralchemyformulalength(pengrenData).alchemyFormulaitemsNum,
          },
          {
            key: "pengrenduanzaowupin",
            name: "pengrenduanzaowupin",
            label:
              "锻造物品" + filteralchemyformulalength(pengrenData).alchemyForgeditemsNum,
          },
          {
            key: "pengrenxuqiuzhe",
            name: "pengrenxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(pengrenData).alchemyDemanderNum,
          },
          {
            key: "pengrenzhuanyejineng",
            name: "pengrenzhuanyejineng",
            label: "技能" + filteralchemyformulalength(pengrenData).alchemyskillNum,
          },
          {
            key: "pengrenxunlianshi",
            name: "pengrenxunlianshi",
            label: "训练师" + filteralchemyformulalength(pengrenData).alchemyTrainerNum,
          },
          {
            key: "pengrenzhuanyerenwu",
            name: "pengrenzhuanyerenwu",
            label: "任务" + filteralchemyformulalength(pengrenData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "jijiu":
      {
        wow2list = [
          {
            key: "jijiuzhuanyepeifang",
            name: "jijiuzhuanyepeifang",
            label: "配方" + filteralchemyformulalength(jijiuData).alchemyformulaNum,
          },
          {
            key: "jijiupeifangwupin",
            name: "jijiupeifangwupin",
            label:
              "配方物品" + filteralchemyformulalength(jijiuData).alchemyFormulaitemsNum,
          },
          {
            key: "jijiuduanzaowupin",
            name: "jijiuduanzaowupin",
            label:
              "锻造物品" + filteralchemyformulalength(jijiuData).alchemyForgeditemsNum,
          },
          {
            key: "jijiuxuqiuzhe",
            name: "jijiuxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(jijiuData).alchemyDemanderNum,
          },
          {
            key: "jijiuzhuanyejineng",
            name: "jijiuzhuanyejineng",
            label: "技能" + filteralchemyformulalength(jijiuData).alchemyskillNum,
          },
          {
            key: "jijiuxunlianshi",
            name: "jijiuxunlianshi",
            label: "训练师" + filteralchemyformulalength(jijiuData).alchemyTrainerNum,
          },
          {
            key: "jijiuzhuanyerenwu",
            name: "jijiuzhuanyerenwu",
            label: "任务" + filteralchemyformulalength(jijiuData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "diaoyu":
      {
        wow2list = [
          {
            key: "diaoyupeifangwupin",
            name: "diaoyupeifangwupin",
            label: "配方物品" + filteralchemyformulalength(diaoyuData).alchemyformulaNum,
          },
          {
            key: "diaoyuxuqiuzhe",
            name: "diaoyuxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(diaoyuData).alchemyDemanderNum,
          },
          {
            key: "diaoyuzhuanyejineng",
            name: "diaoyuzhuanyejineng",
            label: "技能" + filteralchemyformulalength(diaoyuData).alchemyskillNum,
          },
          {
            key: "diaoyuzhuanyerenwu",
            name: "diaoyuzhuanyerenwu",
            label: "任务" + filteralchemyformulalength(diaoyuData).alchemyRaskNum,
          },
        ];
      }
      break;
    case "qishu":
      {
        wow2list = [
          {
            key: "qishupeifangwupin",
            name: "qishupeifangwupin",
            label: "配方物品" + filteralchemyformulalength(qishuData).alchemyformulaNum,
          },
          {
            key: "qishuxuqiuzhe",
            name: "qishuxuqiuzhe",
            label: "需求者" + filteralchemyformulalength(qishuData).alchemyDemanderNum,
          },
          {
            key: "qishuzhuanyejineng",
            name: "qishuzhuanyejineng",
            label: "技能" + filteralchemyformulalength(qishuData).alchemyskillNum,
          },
          {
            key: "qishuzhuanyerenwu",
            name: "qishuzhuanyerenwu",
            label: "任务" + filteralchemyformulalength(qishuData).alchemyRaskNum,
          },
        ];
      }
      break;
  }
}



function handleWow2Click(tab: any, event: any) {
  console.log(tab.props.name);
  switch (tab.props.name) {
    // alchemyformulaArr:[],
    // alchemyFormulaitemsArr:[],
    // alchemyForgeditemsArr:[],
    // alchemyDemanderArr:[],
    // alchemyskillArr:[],
    // alchemyTrainerArr:[],
    // alchemyRaskArr:[],
    case "ljszhuanyepeifang":
      {
        columns.value = ljspfcolumn
        data.value = filteralchemyformulalength(lianjinshuData).alchemyformulaArr;
      }
      break;
    case "ljspeifangwupin":
      {
        columns.value = ljspfwpncolumn
        data.value = filteralchemyformulalength(lianjinshuData).alchemyFormulaitemsArr;
      }
      break;
    case "ljsduanzaowupin":
      {
        columns.value = ljsdzwpcolumn
        data.value = filteralchemyformulalength(lianjinshuData).alchemyForgeditemsArr;
      }
      break;
    case "ljsxuqiuzhe":
      {
        columns.value = ljsxqzcolumn
        data.value = filteralchemyformulalength(lianjinshuData).alchemyDemanderArr;
      }
      break;
    case "ljszhuanyejineng":
      {
        columns.value = ljsjncolumn
        data.value = filteralchemyformulalength(lianjinshuData).alchemyskillArr;
      }
      break;
    case "ljsxunlianshi":
      {
        columns.value = ljslxscolumn
        data.value = filteralchemyformulalength(lianjinshuData).alchemyTrainerArr;
      }
      break;
    case "ljszhuanyerenwu":
      {
        columns.value = ljsrwcolumn
        data.value = filteralchemyformulalength(lianjinshuData).alchemyRaskArr;
      }
      break;
    case "duanzaozhuanyepeifang":
      {
        columns.value = dzpfcolumn
        data.value = filteralchemyformulalength(duanzaoData).alchemyformulaArr;
      }
      break;
    case "duanzaopeifangwupin":
      {
        columns.value = dzpfwpcolumn
        data.value = filteralchemyformulalength(duanzaoData).alchemyFormulaitemsArr;
      }
      break;
    case "duanzaoduanzaowupin":
      {
        columns.value = dzdzwpcolumn
        data.value = filteralchemyformulalength(duanzaoData).alchemyForgeditemsArr;
      }
      break;
    case "duanzaoxuqiuzhe":
      {
        columns.value = dzxqzcolumn
        data.value = filteralchemyformulalength(duanzaoData).alchemyDemanderArr;
      }
      break;
    case "duanzaozhuanyejineng":
      {
        columns.value = dzjncolumn
        data.value = filteralchemyformulalength(duanzaoData).alchemyskillArr;
      }
      break;
    case "duanzaoxunlianshi":
      {
        columns.value = dzxlscolumn
        data.value = filteralchemyformulalength(duanzaoData).alchemyTrainerArr;
      }
      break;
    case "duanzaozhuanyerenwu":
      {
        columns.value = dzrwcolumn
        data.value = filteralchemyformulalength(duanzaoData).alchemyRaskArr;
      }
      break;

    case "fumozhuanyepeifang":
      {
        columns.value = fmpfcolumn
        data.value = filteralchemyformulalength(fumoData).alchemyformulaArr;
      }
      break;
    case "fumopeifangwupin":
      {
        columns.value = fmpfwpcolumn
        data.value = filteralchemyformulalength(fumoData).alchemyFormulaitemsArr;
      }
      break;
    case "fumoduanzaowupin":
      {
        columns.value = fmdzwpcolumn
        data.value = filteralchemyformulalength(fumoData).alchemyForgeditemsArr;
      }
      break;
    case "fumoxuqiuzhe":
      {
        columns.value = fmxqzcolumn
        data.value = filteralchemyformulalength(fumoData).alchemyDemanderArr;
      }
      break;
    case "fumozhuanyejineng":
      {
        columns.value = fmjncolumn
        data.value = filteralchemyformulalength(fumoData).alchemyskillArr;
      }
      break;
    case "fumoxunlianshi":
      {
        columns.value = fmxlscolumn
        data.value = filteralchemyformulalength(fumoData).alchemyTrainerArr;
      }
      break;
    case "gongchengxuezhuanyepeifang":
      {
        columns.value = gcspfcolumn
        data.value = filteralchemyformulalength(gongchengxueData).alchemyformulaArr;
      }
      break;
    case "gongchengxuepeifangwupin":
      {
        columns.value = gcspfwpcolumn
        data.value = filteralchemyformulalength(gongchengxueData).alchemyFormulaitemsArr;
      }
      break;
    case "gongchengxueduanzaowupin":
      {
        columns.value = gcsdzwpcolumn
        data.value = filteralchemyformulalength(gongchengxueData).alchemyForgeditemsArr;
      }
      break;
    case "gongchengxuexuqiuzhe":
      {
        columns.value = gcsxqzcolumn
        data.value = filteralchemyformulalength(gongchengxueData).alchemyDemanderArr;
      }
      break;
    case "gongchengxuezhuanyejineng":
      {
        columns.value = gcsjncolumn
        data.value = filteralchemyformulalength(gongchengxueData).alchemyskillArr;
      }
      break;
    case "gongchengxuexunlianshi":
      {
        columns.value = gcsxlscolumn
        data.value = filteralchemyformulalength(gongchengxueData).alchemyTrainerArr;
      }
      break;
    case "gongchengxuezhuanyerenwu":
      {
        columns.value = gcsrwcolumn
        data.value = filteralchemyformulalength(gongchengxueData).alchemyRaskArr;
      }
      break;
    case "caoyaoxuexuqiuzhe":
      {
        columns.value = cyxxqzcolumn
        data.value = filteralchemyformulalength(caoyaoxueData).alchemyDemanderArr;
      }
      break;
    case "caoyaoxuezhuanyejineng":
      {
        columns.value = cyxjncolumn
        data.value = filteralchemyformulalength(caoyaoxueData).alchemyskillArr;
      }
      break;
    case "caoyaoxuezhuanyerenwu":
      {
        columns.value = cyxrwcolumn
        data.value = filteralchemyformulalength(caoyaoxueData).alchemyRaskArr;
      }
      break;
    case "mingwenzhuanyepeifang":
      {
        columns.value = mwpfcolumn
        data.value = filteralchemyformulalength(mingwenData).alchemyformulaArr;
      }
      break;
    case "mingwenpeifangwupin":
      {
        columns.value = mwpfwpcolumn
        data.value = filteralchemyformulalength(mingwenData).alchemyFormulaitemsArr;
      }
      break;
    case "mingwenduanzaowupin":
      {
        columns.value = mwdzwpcolumn
        data.value = filteralchemyformulalength(mingwenData).alchemyForgeditemsArr;
      }
      break;
    case "mingwenxuqiuzhe":
      {
        columns.value = mwxqzcolumn
        data.value = filteralchemyformulalength(mingwenData).alchemyDemanderArr;
      }
      break;
    case "mingwenzhuanyejineng":
      {
        columns.value = mwjncolumn
        data.value = filteralchemyformulalength(mingwenData).alchemyskillArr;
      }
      break;
    case "mingwenxunlianshi":
      {
        columns.value = mwxlscolumn
        data.value = filteralchemyformulalength(mingwenData).alchemyTrainerArr;
      }
      break;
    case "mingwenzhuanyerenwu":
      {
        columns.value = mwrwcolumn
        data.value = filteralchemyformulalength(mingwenData).alchemyRaskArr;
      }
      break;

    case "zhubaojiagongzhuanyepeifang":
      {
        columns.value = zbjgpfcolumn
        data.value = filteralchemyformulalength(zhubaojiagongData).alchemyformulaArr;
      }
      break;
    case "zhubaojiagongpeifangwupin":
      {
        columns.value = zbjgpfwpcolumn
        data.value = filteralchemyformulalength(zhubaojiagongData).alchemyFormulaitemsArr;
      }
      break;
    case "zhubaojiagongduanzaowupin":
      {
        columns.value = zbjgdzwpcolumn
        data.value = filteralchemyformulalength(zhubaojiagongData).alchemyForgeditemsArr;
      }
      break;
    case "zhubaojiagongxuqiuzhe":
      {
        columns.value = zbjgxqzcolumn
        data.value = filteralchemyformulalength(zhubaojiagongData).alchemyDemanderArr;
      }
      break;
    case "zhubaojiagongzhuanyejineng":
      {
        columns.value = zbjgjncolumn
        data.value = filteralchemyformulalength(zhubaojiagongData).alchemyskillArr;
      }
      break;
    case "zhubaojiagongxunlianshi":
      {
        columns.value = zbjgxlscolumn
        data.value = filteralchemyformulalength(zhubaojiagongData).alchemyTrainerArr;
      }
      break;
    case "zhubaojiagongzhuanyerenwu":
      {
        columns.value = zbjgrwcolumn
        data.value = filteralchemyformulalength(zhubaojiagongData).alchemyRaskArr;
      }
      break;

    case "zhipizhuanyepeifang":
      {
        columns.value = zppfcolumn
        data.value = filteralchemyformulalength(zhipiData).alchemyformulaArr;
      }
      break;
    case "zhipipeifangwupin":
      {
        columns.value = zppfwpcolumn
        data.value = filteralchemyformulalength(zhipiData).alchemyFormulaitemsArr;
      }
      break;
    case "zhipiduanzaowupin":
      {
        columns.value = zpdzwpcolumn
        data.value = filteralchemyformulalength(zhipiData).alchemyForgeditemsArr;
      }
      break;
    case "zhipixuqiuzhe":
      {
        columns.value = zpxqzcolumn
        data.value = filteralchemyformulalength(zhipiData).alchemyDemanderArr;
      }
      break;
    case "zhipizhuanyejineng":
      {
        columns.value = zpjncolumn
        data.value = filteralchemyformulalength(zhipiData).alchemyskillArr;
      }
      break;
    case "zhipixunlianshi":
      {
        columns.value = zpxlscolumn
        data.value = filteralchemyformulalength(zhipiData).alchemyTrainerArr;
      }
      break;
    case "zhipizhuanyerenwu":
      {
        columns.value = zprwcolumn
        data.value = filteralchemyformulalength(zhipiData).alchemyRaskArr;
      }
      break;

    case "caikuangzhuanyepeifang":
      {
        columns.value = ckpfcolumn
        data.value = filteralchemyformulalength(caikuangData).alchemyformulaArr;
      }
      break;
    case "caikuangpeifangwupin":
      {
        columns.value = ckpfwpcolumn
        data.value = filteralchemyformulalength(caikuangData).alchemyFormulaitemsArr;
      }
      break;
    case "caikuangduanzaowupin":
      {
        columns.value = ckdzwpcolumn
        data.value = filteralchemyformulalength(caikuangData).alchemyForgeditemsArr;
      }
      break;
    case "caikuangxuqiuzhe":
      {
        columns.value = ckxqzcolumn
        data.value = filteralchemyformulalength(caikuangData).alchemyDemanderArr;
      }
      break;
    case "caikuangzhuanyejineng":
      {
        columns.value = ckjncolumn
        data.value = filteralchemyformulalength(caikuangData).alchemyTrainerArr;
      }
      break;
    case "caikuangxunlianshi":
      {
        columns.value = ckxlscolumn
        data.value = filteralchemyformulalength(caikuangData).alchemyTrainerArr;
      }
      break;

    case "bopizhuanyejineng":
      {
        columns.value = bpjncolumn
        data.value = filteralchemyformulalength(bopiData).alchemyTrainerArr;
      }
      break;

    case "caifengzhuanyepeifang":
      {
        columns.value = cfpfcolumn
        data.value = filteralchemyformulalength(caifengData).alchemyformulaArr;
      }
      break;
    case "caifengpeifangwupin":
      {
        columns.value = cfpfwpcolumn
        data.value = filteralchemyformulalength(caifengData).alchemyFormulaitemsArr;
      }
      break;
    case "caifengduanzaowupin":
      {
        columns.value = cfdzwpcolumn
        data.value = filteralchemyformulalength(caifengData).alchemyForgeditemsArr;
      }
      break;
    case "caifengxuqiuzhe":
      {
        columns.value = cfxqzcolumn
        data.value = filteralchemyformulalength(caifengData).alchemyDemanderArr;
      }
      break;
    case "caifengzhuanyejineng":
      {
        // 技能
        columns.value = cfjncolumn
        data.value = filteralchemyformulalength(caifengData).alchemyTrainerArr;
      }
      break;
    case "caifengxunlianshi":
      {
        columns.value = cfxlscolumn
        data.value = filteralchemyformulalength(caifengData).alchemyTrainerArr;
      }
      break;
    case "caifengzhuanyerenwu":
      {
        columns.value = cfrwcolumn
        data.value = filteralchemyformulalength(caifengData).alchemyRaskArr;
      }
      break;

    case "pengrenzhuanyepeifang":
      {
        columns.value = prpfcolumn
        data.value = filteralchemyformulalength(pengrenData).alchemyformulaArr;
      }
      break;
    case "pengrenpeifangwupin":
      {
        columns.value = prpfwpcolumn
        data.value = filteralchemyformulalength(pengrenData).alchemyFormulaitemsArr;
      }
      break;
    case "pengrenduanzaowupin":
      {
        columns.value = prdzwpcolumn
        data.value = filteralchemyformulalength(pengrenData).alchemyForgeditemsArr;
      }
      break;
    case "pengrenxuqiuzhe":
      {
        columns.value = prxqzcolumn
        data.value = filteralchemyformulalength(pengrenData).alchemyDemanderArr;
      }
      break;
    case "pengrenzhuanyejineng":
      {
        columns.value = prfjncolumn
        data.value = filteralchemyformulalength(pengrenData).alchemyTrainerArr;
      }
      break;
    case "pengrenxunlianshi":
      {
        columns.value = prxlscolumn
        data.value = filteralchemyformulalength(pengrenData).alchemyTrainerArr;
      }
      break;
    case "pengrenzhuanyerenwu":
      {
        columns.value = prrwcolumn
        data.value = filteralchemyformulalength(pengrenData).alchemyRaskArr;
      }
      break;

    case "jijiuzhuanyepeifang":
      {
        columns.value = jjpfcolumn
        data.value = filteralchemyformulalength(jijiuData).alchemyformulaArr;
      }
      break;
    case "jijiupeifangwupin":
      {
        columns.value = jjpfwpcolumn
        data.value = filteralchemyformulalength(jijiuData).alchemyFormulaitemsArr;
      }
      break;
    case "jijiuduanzaowupin":
      {
        columns.value = jjdzwpcolumn
        data.value = filteralchemyformulalength(jijiuData).alchemyForgeditemsArr;
      }
      break;
    case "jijiuxuqiuzhe":
      {
        columns.value = jjxqzcolumn
        data.value = filteralchemyformulalength(jijiuData).alchemyDemanderArr;
      }
      break;
    case "jijiuzhuanyejineng":
      {
        columns.value = jjjncolumn
        data.value = filteralchemyformulalength(jijiuData).alchemyTrainerArr;
      }
      break;
    case "jijiuxunlianshi":
      {
        columns.value = jjxlscolumn
        data.value = filteralchemyformulalength(jijiuData).alchemyTrainerArr;
      }
      break;
    case "jijiuzhuanyerenwu":
      {
        columns.value = jjrwcolumn
        data.value = filteralchemyformulalength(jijiuData).alchemyRaskArr;
      }
      break;

    case "diaoyupeifangwupin":
      {
        columns.value = dypfwpcolumn
        data.value = filteralchemyformulalength(diaoyuData).alchemyFormulaitemsArr;
      }
      break;
    case "diaoyuxuqiuzhe":
      {
        columns.value = dyxqzcolumn
        data.value = filteralchemyformulalength(diaoyuData).alchemyDemanderArr;
      }
      break;
    case "diaoyuzhuanyejineng":
      {
        columns.value = dyjncolumn
        data.value = filteralchemyformulalength(diaoyuData).alchemyTrainerArr;
      }
      break;
    case "diaoyuzhuanyerenwu":
      {
        columns.value = dyrwcolumn
        data.value = filteralchemyformulalength(zhipiData).alchemyRaskArr;
      }
      break;

    case "qishupeifangwupin":
      {
        columns.value = qspfwpcolumn
        data.value = filteralchemyformulalength(qishuData).alchemyFormulaitemsArr;
      }
      break;
    case "qishuxuqiuzhe":
      {
        columns.value = qsxqzcolumn
        data.value = filteralchemyformulalength(qishuData).alchemyDemanderArr;
      }
      break;
    case "qishuzhuanyejineng":
      {
        columns.value = qsjncolumn
        data.value = filteralchemyformulalength(qishuData).alchemyTrainerArr;
      }
      break;
    case "qishuzhuanyerenwu":
      {
        columns.value = qsrwcolumn
        data.value = filteralchemyformulalength(qishuData).alchemyRaskArr;
      }
      break;
  }
}

// 过滤物品栏武器栏物品栏数据
function filterwuqislot(value: any) {
  let name = "";
  switch (value) {
    case 1:
      {
        name = "头";
      }
      break;
    case 2:
      {
        name = "颈";
      }
      break;
    case 3:
      {
        name = "肩";
      }
      break;
    case 4:
      {
        name = "衬衫";
      }
      break;
    case 5:
      {
        name = "胸";
      }
      break;
    case 6:
      {
        name = "腰";
      }
      break;
    case 7:
      {
        name = "腿";
      }
      break;
    case 8:
      {
        name = "脚";
      }
      break;
    case 9:
      {
        name = "手腕";
      }
      break;
    case 10:
      {
        name = "手";
      }
      break;
    case 11:
      {
        name = "手指";
      }
      break;
    case 12:
      {
        name = "饰品";
      }
      break;
    case 13:
      {
        name = "单手";
      }
      break;
    case 14: {
      name = "副手";
    }
    case 16:
      {
        name = "背部";
      }
      break;
    case 17:
      {
        name = "双手";
      }
      break;
    case 18:
      {
        name = "背包";
      }
      break;
    case 19:
      {
        name = "战袍";
      }
      break;
    case 23:
      {
        name = "副手持有";
      }
      break;
    case 28:
      {
        name = "遗迹";
      }
      break;
    case 15:
      {
        name = "远程";
      }
      break;
    case 17:
      {
        name = "双手";
      }
      break;
    case 21:
      {
        name = "主手";
      }
      break;
    case 22:
      {
        name = "副手";
      }
      break;
    case 24:
      {
        name = "抛射";
      }
      break;
    case 25:
      {
        name = "投掷";
      }
      break;
  }
  return name;
}
// 过滤专业栏炼金术栏来源数据
function filteralchemyformulasource(value: any) {
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

// 过滤专业栏炼金术栏类别数据
function filteralchemyformulaclass(data: any) {
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
// 过滤物品栏雕文栏雕文类型
function filterdiaowenglyph(value: any) {
  if (value == 1) {
    return "大";
  } else {
    return "小";
  }
}

// 过滤物品套装类型数据
function filterwupintaozhuangType(value: any) {
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

// 过滤魔兽地图数据
function filternpcsmap(data: any) {
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
function filteralchemyTrainerReact(arr: any) {
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
function filterdaojutaozhuangType(value: any) {
  if (value == 3) {
    return "容器";
  }
}

// 过滤任务东部王国数据
function filterdongbuwangguoitemchoices(data: any) {
  let obj = {
    flag: false,
    img: "",
    name: "",
    num: "",
  };
  if (data.itemchoices && data.itemchoices.length > 0) {
    if (data.itemchoices.length > 1) {
      obj.flag = true;
    } else {
      obj.flag = false;
    }
  } else {
    obj.flag = false;
  }
  return obj;
}

// 过滤任务金钱数据
function filterrenwuMoney(value: any) {
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

// 过滤任务数据category
function filterdongbucategory(data: any) {
  let obj = {
    name: "",
  };
  if (data.category2 == 0) {
    switch (data.category) {
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
  } else if (data.category2 == 1) {
    switch (data.category) {
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
  } else if (data.category2 == 2) {
    switch (data.category) {
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
      case 1176:
        {
          obj.name = "祖尔法拉克  ";
        }
        break;
      case 1196:
        {
          obj.name = "乌特加德之巅  ";
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
      case 1581:
        {
          obj.name = "死亡矿井  ";
        }
        break;
      case 1583:
        {
          obj.name = "黑石塔  ";
        }
        break;
      case 1584:
        {
          obj.name = "黑石深渊  ";
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
      case 1941:
        {
          obj.name = "时光之穴  ";
        }
        break;
      case 1977:
        {
          obj.name = "祖尔格拉布  ";
        }
        break;
      case 2017:
        {
          obj.name = "斯坦索姆  ";
        }
        break;
      case 2057:
        {
          obj.name = "通灵学院  ";
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
      case 2437:
        {
          obj.name = "怒焰裂谷   ";
        }
        break;
      case 2557:
        {
          obj.name = "厄运之槌   ";
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
      case 3535:
        {
          obj.name = "地狱火堡垒  ";
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
      case 3842:
        {
          obj.name = "风暴要塞  ";
        }
        break;
      case 3905:
        {
          obj.name = "盘牙水库  ";
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
      case 4100:
        {
          obj.name = "净化斯坦索姆  ";
        }
        break;
      case 4131:
        {
          obj.name = "魔导师平台  ";
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
      case 4228:
        {
          obj.name = "魔环  ";
        }
        break;
      case 4273:
        {
          obj.name = "奥杜尔  ";
        }
        break;
      case 4264:
        {
          obj.name = "岩石大厅  ";
        }
        break;
      case 4265:
        {
          obj.name = "魔枢  ";
        }
        break;
      case 4272:
        {
          obj.name = "闪电大厅  ";
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
      case 4415:
        {
          obj.name = "紫罗兰监狱  ";
        }
        break;
      case 4416:
        {
          obj.name = "古达克  ";
        }
        break;
      case 4494:
        {
          obj.name = "安卡赫特：古代王国  ";
        }
        break;
      case 4723:
        {
          obj.name = "冠军的试炼  ";
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
  } else if (data.category2 == 3) {
    switch (data.category) {
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
      case 2159:
        {
          obj.name = "奥妮克希亚的巢穴   ";
        }
        break;
      case 2257:
        {
          obj.name = "矿道地铁   ";
        }
        break;
      case 2677:
        {
          obj.name = "黑翼之巢   ";
        }
        break;
      case 2717:
        {
          obj.name = "熔火之心   ";
        }
        break;
      case 3428:
        {
          obj.name = "安其拉  ";
        }
        break;
      case 3429:
        {
          obj.name = "安其拉废墟  ";
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
      case 3456:
        {
          obj.name = "纳克萨玛斯  ";
        }
        break;
      case 3457:
        {
          obj.name = "卡拉赞  ";
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
      case 3606:
        {
          obj.name = "海加尔峰  ";
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
      case 3805:
        {
          obj.name = "祖阿曼  ";
        }
        break;
      case 3836:
        {
          obj.name = "玛瑟里顿的巢穴  ";
        }
        break;
      case 3959:
        {
          obj.name = "黑暗神殿  ";
        }
        break;
      case 4024:
        {
          obj.name = "考达拉  ";
        }
        break;
      case 4075:
        {
          obj.name = "太阳之井高地  ";
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
      case 4493:
        {
          obj.name = "黑曜石圣殿  ";
        }
        break;
      case 4494:
        {
          obj.name = "安卡赫特：古代王国  ";
        }
        break;
      case 4500:
        {
          obj.name = "永恒之眼  ";
        }
        break;
      case 4722:
        {
          obj.name = "十字军的试炼  ";
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
      case 4987:
        {
          obj.name = "红玉圣殿  ";
        }
        break;
    }
  } else if (data.category2 == 4) {
    switch (data.category) {
      case -61:
        {
          obj.name = "术士  ";
        }
        break;
      case -81:
        {
          obj.name = "战士  ";
        }
        break;
      case -82:
        {
          obj.name = "萨满祭司  ";
        }
        break;
      case -141:
        {
          obj.name = "圣骑士  ";
        }
        break;
      case -161:
        {
          obj.name = "法师  ";
        }
        break;
      case -162:
        {
          obj.name = "潜行者  ";
        }
        break;
      case -261:
        {
          obj.name = "猎人  ";
        }
        break;
      case -262:
        {
          obj.name = "牧师  ";
        }
        break;
      case -263:
        {
          obj.name = "德鲁伊  ";
        }
        break;
      case -372:
        {
          obj.name = "死亡骑士  ";
        }
        break;
    }
  } else if (data.category2 == 5) {
    switch (data.category) {
      case -24:
        {
          obj.name = "草药学";
        }
        break;
      case -101:
        {
          obj.name = "钓鱼";
        }
        break;
      case -121:
        {
          obj.name = "锻造";
        }
        break;
      case -181:
        {
          obj.name = "炼金术";
        }
        break;
      case -182:
        {
          obj.name = "制皮";
        }
        break;
      case -201:
        {
          obj.name = "工程学";
        }
        break;
      case -264:
        {
          obj.name = "裁缝";
        }
        break;
      case -304:
        {
          obj.name = "烹饪";
        }
        break;
      case -324:
        {
          obj.name = "急救";
        }
        break;
      case -371:
        {
          obj.name = "铭文";
        }
        break;
      case -373:
        {
          obj.name = "珠宝加工";
        }
        break;
    }
  } else if (data.category2 == 6) {
    switch (data.category) {
      case 2597:
        {
          obj.name = "奥特兰克山谷";
        }
        break;
      case 3277:
        {
          obj.name = "战歌峡谷";
        }
        break;
      case -121:
        {
          obj.name = "锻造";
        }
        break;
      case -181:
        {
          obj.name = "炼金术";
        }
        break;
      case 3358:
        {
          obj.name = "阿拉希盆地";
        }
        break;
      case -25:
        {
          obj.name = "战场";
        }
        break;
      case 3820:
        {
          obj.name = "风暴之眼";
        }
        break;
      case 4384:
        {
          obj.name = "远古海滩";
        }
        break;
      case 4710:
        {
          obj.name = "征服之岛";
        }
        break;
    }
  } else if (data.category2 == 7) {
    switch (data.category) {
      case -344:
        {
          obj.name = "传说";
        }
        break;
      case -1:
        {
          obj.name = "史诗";
        }
        break;
      case -365:
        {
          obj.name = "安其拉战争";
        }
        break;
      case -367:
        {
          obj.name = "声望";
        }
        break;
      case -368:
        {
          obj.name = "天灾入侵";
        }
        break;
      case -241:
        {
          obj.name = "锦标赛";
        }
        break;
      case -1010:
        {
          obj.name = "地下城查找器";
        }
        break;
      case 4384:
        {
          obj.name = "远古海滩";
        }
        break;
      case 4710:
        {
          obj.name = "征服之岛";
        }
        break;
    }
  } else if (data.category2 == 8) {
    switch (data.category) {
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
  } else if (data.category2 == 9) {
    switch (data.category) {
      case -1002:
        {
          obj.name = "儿童周  ";
        }
        break;
      case -1003:
        {
          obj.name = "万圣节  ";
        }
        break;
      case -1001:
        {
          obj.name = "冬幕节  ";
        }
        break;
      case -364:
        {
          obj.name = "暗月马戏团  ";
        }
        break;
      case -1005:
        {
          obj.name = "收获节  ";
        }
        break;
      case -366:
        {
          obj.name = "新年  ";
        }
        break;
      case -22:
        {
          obj.name = "季节性  ";
        }
        break;
      case -376:
        {
          obj.name = "情人节  ";
        }
        break;
      case -369:
        {
          obj.name = "仲夏  ";
        }
        break;
      case -370:
        {
          obj.name = "美酒节  ";
        }
        break;
      case -374:
        {
          obj.name = "复活节  ";
        }
        break;
      case -41:
        {
          obj.name = "悼念日  ";
        }
        break;
      case -375:
        {
          obj.name = "感恩节  ";
        }
        break;
    }
  } else if (data.category2 == 10) {
    switch (data.category) {
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
  }
  return obj;
}

// 过滤成就属性分类1
function filterchengjiushuxinfenlei(value: any) {
  let name = "";
  switch (value) {
    case 1:
      {
        name = "属性";
      }
      break;
    case 21:
      {
        name = "PvP";
      }
      break;
    case 122:
      {
        name = "死亡";
      }
      break;
    case 123:
      {
        name = "竞技场";
      }
      break;
    case 124:
      {
        name = "战场";
      }
      break;
    case 125:
      {
        name = "地下城";
      }
      break;
    case 126:
      {
        name = "世界";
      }
      break;
    case 127:
      {
        name = "复活";
      }
      break;
    case 128:
      {
        name = "杀敌";
      }
      break;
    case 130:
      {
        name = "角色";
      }
      break;
    case 131:
      {
        name = "社交";
      }
      break;
    case 132:
      {
        name = "技能";
      }
      break;
    case 133:
      {
        name = "任务";
      }
      break;
    case 134:
      {
        name = "旅行";
      }
      break;
    case 135:
      {
        name = "怪物";
      }
      break;
    case 136:
      {
        name = "荣誉杀敌";
      }
      break;
    case 137:
      {
        name = "击杀";
      }
      break;
    case 140:
      {
        name = "财富";
      }
      break;
    case 141:
      {
        name = "战斗";
      }
      break;
    case 145:
      {
        name = "消耗品";
      }
      break;
    case 147:
      {
        name = "声望";
      }
      break;
    case 152:
      {
        name = "竞技场积分赛";
      }
      break;
    case 153:
      {
        name = "战场";
      }
      break;
    case 154:
      {
        name = "世界";
      }
      break;
    case 173:
      {
        name = "专业";
      }
      break;
    case 178:
      {
        name = "辅助技能";
      }
      break;
    case 191:
      {
        name = "装备";
      }
      break;
    case 14807:
      {
        name = "地下城和团队";
      }
      break;
    case 14821:
      {
        name = "经典旧世";
      }
      break;
    case 14822:
      {
        name = "燃烧的远征";
      }
      break;
    case 14823:
      {
        name = "巫妖王之怒";
      }
      break;
    case 14963:
      {
        name = "奥杜尔的秘密";
      }
      break;
    case 15021:
      {
        name = "北伐的召唤";
      }
      break;
    case 15062:
      {
        name = "巫妖王的陨落";
      }
      break;
  }
  return name;
}

// 过滤当前炼金术专业配方长度
function filteralchemyformulalength(data) {
  let obj = {
    alchemyformulaNum: 0,
    alchemyformulaArr: [],
    alchemyFormulaitemsNum: 0,
    alchemyFormulaitemsArr: [],
    alchemyForgeditemsNum: 0,
    alchemyForgeditemsArr: [],
    alchemyDemanderNum: 0,
    alchemyDemanderArr: [],
    alchemyskillNum: 0,
    alchemyskillArr: [],
    alchemyTrainerNum: 0,
    alchemyTrainerArr: [],
    alchemyRaskNum: 0,
    alchemyRaskArr: [],
  };
  data.forEach((element: any) => {
    switch (element.tab_name) {
      case "配方":
        {
          obj.alchemyformulaNum++;
          obj.alchemyformulaArr.push(element);
        }
        break;
      case "配方物品":
        {
          obj.alchemyFormulaitemsNum++;
          obj.alchemyFormulaitemsArr.push(element);
        }
        break;
      case "锻造物品":
        {
          obj.alchemyForgeditemsNum++;
          obj.alchemyForgeditemsArr.push(element);
        }
        break;
      case "需求者":
        {
          obj.alchemyDemanderNum++;
          obj.alchemyDemanderArr.push(element);
        }
        break;
      case "技能":
        {
          obj.alchemyskillNum++;
          obj.alchemyskillArr.push(element);
        }
        break;
      case "训练师":
        {
          obj.alchemyTrainerNum++;
          obj.alchemyTrainerArr.push(element);
        }
        break;
      case "任务":
        {
          obj.alchemyRaskNum++;
          obj.alchemyRaskArr.push(element);
        }
        break;
    }
  });
  return obj;
}

// 过滤专业栏炼金术物品栏数据
function filteralchemyformulaslot(value: any) {
  if (value == "12") {
    value = "饰品";
  } else if ((value = "2")) {
    value = "颈";
  }
  return value;
}

// 过滤专业栏炼金术栏任务栏数据
function filterAlchemyRaskWflags(value: any) {
  let flag = false;
  if (value) {
    flag = true;
  } else {
    flag = false;
  }
  return flag;
}

// 过滤当前物品
function filterData(data:any){
  return data.filter(element=>{
    return element.name.includes(input.value)
  })
}
</script>

<style>
.element0 {
  color: #ff8040;
}
.element1 {
  color: skyblue;
}
.element2 {
  color: #40bf40;
}
.element3 {
  color: #808080;
}
.el-tooltip__trigger {
  position: relative;
}
.moneygold {
  width: 30px;
  display: inline-block;
  background: url("@/assets/image/money-gold.jpg") no-repeat center right;
}
.moneysilver {
  width: 30px;
  display: inline-block;
  background: url("@/assets/image/money-silver.jpg") no-repeat center right;
}
.moneycopper {
  width: 30px;
  display: inline-block;
  background: url("@/assets/image/money-copper.jpg") no-repeat center right;
}
</style>
