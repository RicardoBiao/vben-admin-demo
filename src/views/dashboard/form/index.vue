<template>
  <PageWrapper class="high-form" title="股权变更" content="当前仅开放北京地区，其他地区敬请期待~">
    <a-card title="股权变更企业信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>
    <a-card title="受让方" :bordered="false" class="!mt-5">
      <PersonTable ref="tableRef" />
    </a-card>

    <a-card title="转让方" :bordered="false" class="!mt-5">
      <PersonTable ref="tableRef" />
    </a-card>

    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import PersonTable from './PersonTable.vue';
  import { PageWrapper } from '/@/components/Page';
  import { schemas } from './data';
  import { Card } from 'ant-design-vue';

  export default defineComponent({
    name: 'FormHightPage',
    components: { BasicForm, PersonTable, PageWrapper, [Card.name]: Card },
    setup() {
      const tableRef = ref<{ getDataSource: () => any } | null>(null);

      const [register, { validate }] = useForm({
        layout: 'vertical',
        baseColProps: {
          span: 6,
        },
        schemas: schemas,
        showActionButtonGroup: false,
      });

      async function submitAll() {
        try {
          if (tableRef.value) {
            console.log('table data:', tableRef.value.getDataSource());
          }

          const [values] = await Promise.all([validate()]);
          console.log('form data:', values);
        } catch (error) {}
      }

      return { register, submitAll, tableRef };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
