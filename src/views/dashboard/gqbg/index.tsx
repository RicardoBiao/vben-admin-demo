import { defineComponent } from 'vue';
import { PageWrapper } from '/@/components/Page';
import { Card as ACard } from 'ant-design-vue';
import GqbgTable from './GqbgTable';

export interface BgInformationType {
  /** 转让方姓名/企业名称  */
  fromName?: string;
  /** 转让方受让状态 0前 1后  */
  statue?: string;
  /** 转让方持股金额(万元)  */
  fromMoney?: number;
  /** 转让方持股比例  */
  fromRate?: string;
  /** 受让方姓名/企业名称  */
  toName?: string;
  /** 受让方持股金额(万元)  */
  toMoney?: number;
  /** 受让方持股比例  */
  toRate?: string;
}

export interface BgTypeAndUi extends BgInformationType {
  index?: number;
  key?: string;
}

const GqbgPannel = defineComponent({
  name: 'Gqbg',
  setup() {
    const data: BgTypeAndUi[] = [
      {
        index: 1,
        key: '1',
        /** 转让方姓名/企业名称  */
        fromName: '吴微',
        /** 转让方状态  */
        statue: '0',
        fromMoney: 60,
        fromRate: '60%',
        toName: '海上公司',
        toMoney: 60,
        toRate: '60%',
      },
      {
        index: 1,
        key: '1-1',
        /** 转让方姓名/企业名称  */
        fromName: '吴微',
        /** 转让方状态  */
        statue: '1',
        fromMoney: 60,
        fromRate: '60%',
        toName: '海上公司',
        toMoney: 60,
        toRate: '60%',
      },
    ];
    const columns: any[] = [
      {
        title: '序号',
        dataIndex: 'index',
        customCell: (_, index) => ({
          rowSpan: index % 2 === 0 ? 2 : 0,
        }),
      },
      {
        title: '转让方',
        children: [
          {
            title: '姓名/企业名称',
            dataIndex: 'fromName',
            customCell: (_, index) => ({
              rowSpan: index % 2 === 0 ? 2 : 0,
            }),
          },
          {
            title: '状态',
            dataIndex: 'statue',
          },
          {
            title: '持股金额（万元）',
            dataIndex: 'fromMoney',
          },
          {
            title: '持股比例',
            dataIndex: 'fromRate',
          },
        ],
      },
      {
        title: '受让方',
        children: [
          {
            title: '姓名/企业名称',
            dataIndex: 'toName',
            customCell: (_, index) => ({
              rowSpan: index % 2 === 0 ? 2 : 0,
            }),
          },
          {
            title: '状态',
            dataIndex: 'statue',
          },
          {
            title: '持股金额（万元）',
            dataIndex: 'toMoney',
          },
          {
            title: '持股比例',
            dataIndex: 'toRate',
          },
        ],
      },
      {
        title: '操作',
        key: 'operation',
        customCell: (_, index) => ({
          rowSpan: index % 2 === 0 ? 2 : 0,
        }),
      },
    ];

    return () => (
      <PageWrapper title="股权变更" content="当前仅开放北京地区，其他地区敬请期待~">
        {/* 股东变更情况 */}
        <GqbgTable columns={columns} data={data}></GqbgTable>
      </PageWrapper>
    );
  },
});
export default GqbgPannel;
