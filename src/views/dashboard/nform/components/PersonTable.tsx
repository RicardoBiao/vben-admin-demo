import { defineComponent } from 'vue';
import { Table as ATable } from 'ant-design-vue';

const PersonTable = defineComponent({
  name: 'PersonTable',
  setup() {
    const columns = [
      {
        title: '受让方名称',
        dataIndex: 'toName',
        key: 'toName',
      },
      {
        title: '受让方类型',
        dataIndex: 'toType',
        key: 'toType',
      },
      {
        title: '受让方代码',
        dataIndex: 'toCode',
        key: 'toCode',
      },
      {
        title: '受让方地址',
        key: 'toAddress',
        dataIndex: 'toAddress',
      },
      {
        title: '受让方电话',
        key: 'toPhone',
        dataIndex: 'toPhone',
      },
      {
        title: '操作',
        key: 'action',
        dataIndex: 'action',
      },
    ];

    const data = [
      {
        key: '1',
        toName: '海南探索科技有限公司',
        toType: '企业',
        toCode: '91460000MA5TUN359E',
        toAddress: '海南省三亚市崖州区拱北村10号供销综合服务社',
        toPhone: '18522438209',
        action: ['nice', 'developer'],
      },
    ];

    return () => <ATable columns={columns} data-source={data}></ATable>;
  },
});

export default PersonTable;
