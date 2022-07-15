import { defineComponent } from 'vue';
import { Card as ACard, Table as ATable } from 'ant-design-vue';
const GqbgTable = defineComponent({
  name: 'GqbgTable',
  // eslint-disable-next-line vue/require-prop-types
  props: ['columns', 'data'],
  setup(props: any) {
    console.log('props==>', props.columns);
    return () => (
      <ACard title="股权变更情况">
        <ATable columns={props.columns} data-source={props.data} bordered>
          {{
            bodyCell: ({ column, record }) => {
              if (column.dataIndex === 'statue') {
                return <div>{record.statue === '0' ? '受让前' : '受让后'}</div>;
              }
              if (column.key === 'operation') {
                return <div>操作</div>;
              }
            },
          }}
        </ATable>
      </ACard>
    );
  },
});
export default GqbgTable;
