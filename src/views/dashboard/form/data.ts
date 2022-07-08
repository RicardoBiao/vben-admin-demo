import { FormSchema } from '/@/components/Form';

const basicOptions: LabelValueOptions = [
  {
    label: '付晓晓',
    value: '1',
  },
  {
    label: '周毛毛',
    value: '2',
  },
];

const storeTypeOptions: LabelValueOptions = [
  {
    label: '私密',
    value: '1',
  },
  {
    label: '公开',
    value: '2',
  },
];

export const schemas: FormSchema[] = [
  {
    field: 'a1',
    component: 'Input',
    label: '企业名称',
    required: true,
  },
  {
    field: 'a2',
    component: 'Input',
    label: '社会信用代码',
    required: true,
    colProps: {
      offset: 1,
    },
  },
  {
    field: 'a3',
    component: 'Input',
    label: '注册资本金额',
    required: true,
    componentProps: {
      addonAfter: '万元',
    },
    colProps: {
      offset: 1,
    },
  },
  {
    field: 'a4',
    component: 'DatePicker',
    label: '股权变更日期',
    required: true,
    colProps: {
      offset: 0,
    },
  },
  {
    field: 'a5',
    component: 'Select',
    label: '外勤名称',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 0,
    },
  },
  {
    field: 'a6',
    component: 'Input',
    label: '外勤身份证号码',
    required: true,
    colProps: {
      offset: 1,
    },
  },
  {
    field: 'a7',
    component: 'Input',
    label: '外勤手机号码',
    required: true,
    colProps: {
      offset: 0,
    },
  },
  {
    field: 'a8',
    component: 'Input',
    label: '外勤办理地址',
    required: true,
    colProps: {
      offset: 1,
    },
  },
];
export const taskSchemas: FormSchema[] = [
  {
    field: 't1',
    component: 'Input',
    label: '任务名',
    required: true,
  },
  {
    field: 't2',
    component: 'Input',
    label: '任务描述',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't3',
    component: 'Select',
    label: '执行人',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't4',
    component: 'Select',
    label: '责任人',
    componentProps: {
      options: basicOptions,
    },
    required: true,
  },
  {
    field: 't5',
    component: 'TimePicker',
    label: '生效日期',
    required: true,
    componentProps: {
      style: { width: '100%' },
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't6',
    component: 'Select',
    label: '任务类型',
    componentProps: {
      options: storeTypeOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
];
