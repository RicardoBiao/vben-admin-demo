import { defineComponent } from 'vue';
import { PageWrapper } from '/@/components/Page';
import { createForm } from '@formily/core';
import { Card } from 'ant-design-vue';
import PersonTable from './components/PersonTable';
import {
  FormLayout,
  FormItem,
  Input,
  Select,
  Form,
  Space,
  InputNumber,
  DatePicker,
} from '@formily/antdv-x3';
import { createSchemaField } from '@formily/vue';
const { SchemaVoidField, SchemaStringField, SchemaField } = createSchemaField({
  components: {
    FormLayout,
    Input,
    FormItem,
    Select,
    InputNumber,
    DatePicker,
  },
});
/** 下面看自己有那些可以使用的组件 是否需要二封 如何二封 */

/** 如何使用关于effect的方法 */

/** 可以在effect 选项开启监听 */
const formInstance = createForm();

/** 提交输出 */
const nForm = defineComponent({
  name: 'GybgForm',
  setup() {
    // const log = (value: any) => {
    //   console.log('value==>', value);
    // };

    return () => (
      <PageWrapper title="股权变更" content="当前仅开放北京地区，其他地区敬请期待~">
        <Card title={'股权变更企业信息'}>
          <Form form={formInstance}>
            <SchemaField>
              {/* 企业相关信息 */}
              <SchemaVoidField
                x-decorator={FormLayout}
                x-decorator-props={{
                  layout: 'vertical',
                }}
                x-component={Space}
              >
                <SchemaStringField
                  name={'qymc'}
                  title={'企业名称'}
                  x-decorator={FormItem}
                  x-component={Input}
                  x-decorator-props={{
                    layout: 'vertical',
                    colon: false,
                    style: {
                      marginRight: '20px',
                    },
                  }}
                  x-component-props={{
                    placeholder: '请输入',
                    size: 'large',
                  }}
                  required={true}
                />
                <SchemaStringField
                  name={'shxydm'}
                  title={'社会信用代码'}
                  x-decorator={FormItem}
                  x-component={Input}
                  x-decorator-props={{
                    layout: 'vertical',
                    colon: false,
                    style: {
                      marginRight: '20px',
                    },
                  }}
                  x-component-props={{
                    placeholder: '请输入',
                    size: 'large',
                  }}
                  required={true}
                />
                <SchemaStringField
                  name={'zczbje'}
                  title={'注册资本金额'}
                  x-decorator={FormItem}
                  x-component={InputNumber}
                  x-decorator-props={{
                    layout: 'vertical',
                    colon: false,
                    style: {
                      marginRight: '20px',
                    },
                  }}
                  x-component-props={{
                    placeholder: '请输入',
                    addonAfter: '万元',
                    size: 'large',
                  }}
                  required={true}
                />
                <SchemaStringField
                  name={'gqbgrq'}
                  title={'股权变更日期'}
                  x-decorator={FormItem}
                  x-component={DatePicker}
                  x-decorator-props={{
                    layout: 'vertical',
                    colon: false,
                  }}
                  x-component-props={{
                    placeholder: '请选择',
                    size: 'large',
                  }}
                  required={true}
                />
              </SchemaVoidField>
              {/* 外勤相关信息 */}
              <SchemaVoidField
                x-decorator={FormLayout}
                x-decorator-props={{
                  layout: 'vertical',
                }}
                x-component={Space}
              >
                <SchemaStringField
                  name={'wqmc'}
                  title={'外勤名称'}
                  x-decorator={FormItem}
                  x-component={Input}
                  x-decorator-props={{
                    layout: 'vertical',
                    colon: false,
                    style: {
                      marginRight: '20px',
                    },
                  }}
                  x-component-props={{
                    placeholder: '请输入',
                    size: 'large',
                  }}
                  required={true}
                />
                <SchemaStringField
                  name={'wqsfzhm'}
                  title={'外勤身份证号码'}
                  x-decorator={FormItem}
                  x-component={Input}
                  x-decorator-props={{
                    layout: 'vertical',
                    colon: false,
                    style: {
                      marginRight: '20px',
                    },
                  }}
                  x-component-props={{
                    placeholder: '请输入',
                    size: 'large',
                  }}
                  required={true}
                />
                <SchemaStringField
                  name={'wqsjhm'}
                  title={'外勤手机号码'}
                  x-decorator={FormItem}
                  x-component={Input}
                  x-validator="phone"
                  x-decorator-props={{
                    layout: 'vertical',
                    colon: false,
                    style: {
                      marginRight: '20px',
                    },
                  }}
                  x-component-props={{
                    placeholder: '请输入',
                    size: 'large',
                  }}
                  required={true}
                />
                <SchemaStringField
                  name={'wqbldz'}
                  title={'外勤办理地址'}
                  x-decorator={FormItem}
                  x-component={Input}
                  x-decorator-props={{
                    layout: 'vertical',
                    colon: false,
                  }}
                  x-component-props={{
                    placeholder: '请输入',
                    size: 'large',
                  }}
                  required={true}
                />
              </SchemaVoidField>
            </SchemaField>
          </Form>
        </Card>

        <Card class="!mt-5" title={'受让方'}>
          {/* 表格 */}
          <PersonTable></PersonTable>
        </Card>
      </PageWrapper>
    );
  },
});

export default nForm;

/**
 * x-component-props 描述的是 Input 组件
 *
 *
 */
