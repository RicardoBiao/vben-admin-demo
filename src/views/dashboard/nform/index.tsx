import { defineComponent } from 'vue';
import { PageWrapper } from '/@/components/Page';
import { createForm } from '@formily/core';
import { InputNumber, FormItem, Space } from '@formily/antdv-x3';
import { FormProvider, FormConsumer, Field } from '@formily/vue';

const formInstance = createForm();
const nForm = defineComponent({
  setup() {
    return () => (
      <PageWrapper title="股权变更" content="当前仅开放北京地区，其他地区敬请期待~">
        <FormProvider form={formInstance}>
          <Space>
            <Field
              name="price"
              title="价格"
              initial-value={5.2}
              decorator={[FormItem]}
              component={[
                InputNumber,
                {
                  placeholder: '请输入',
                  style: {
                    width: 100,
                  },
                },
              ]}
            />
            <FormItem>×</FormItem>
            <Field
              name="count"
              title="数量"
              initial-value={100}
              decorator={[FormItem]}
              component={[
                InputNumber,
                {
                  placeholder: '请输入',
                  style: {
                    width: 100,
                  },
                },
              ]}
            />
            <FormConsumer>
              {{
                default: ({ form }) => (
                  <FormItem> = {`${form.values.price * form.values.count} 元`}</FormItem>
                ),
              }}
            </FormConsumer>
          </Space>
        </FormProvider>
      </PageWrapper>
    );
  },
});

export default nForm;
