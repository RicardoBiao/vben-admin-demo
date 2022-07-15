/** 股权变更基础信息维护页面 */

import { defineComponent, withModifiers } from 'vue';
import { PageWrapper } from '/@/components/Page';
import { Card as ACard, Row as ARow, Col as ACol } from 'ant-design-vue';
import { EditOutlined } from '@ant-design/icons-vue';
const GqbgBaseCollect = defineComponent({
  name: 'GqbgBaseCollect',
  setup() {
    const createCardTitleSlots = (text: string, fn: Function) => {
      return {
        title: () => (
          <div>
            <span class="text-xl font-bold">{text}</span>
            <span class="cursor-pointer ml-4">
              <EditOutlined onClick={withModifiers(fn, 'self')} style="color:#3399ff" />
            </span>
          </div>
        ),
      };
    };

    const log = () => {
      console.log('==>');
    };

    return () => (
      <PageWrapper title="股权变更" content="当前仅开放北京地区，其他地区敬请期待~">
        <ACard v-slots={createCardTitleSlots('外勤信息', log)}>
          <ARow class="text-base" type="flex">
            <ACol span={6}>
              <div>办事人: 王大龙</div>
            </ACol>
            <ACol span={6}>
              <div>电话: 13411715516 </div>
            </ACol>
            <ACol span={6}>
              <div>身份证号: 13411715516 </div>
            </ACol>
          </ARow>
          <ARow class="text-base mt-4" type="flex">
            <ACol span={12}>
              <div>办理事务: 股权变更</div>
            </ACol>
            <ACol span={12}>
              <div>办理地点: xxxxxx</div>
            </ACol>
          </ARow>
        </ACard>
        <ACard v-slots={createCardTitleSlots('股权变更企业', log)} class="!mt-4">
          <div class="flex flex-col text-base">
            <div class="flex flex-row">
              <div class="flex-1">企业名称: 王大龙</div>
              <div class="flex-1">社会信用代码/纳税人识别号: 13411715516 </div>
              <div class="flex-1">注册资本: 13411715516 </div>
            </div>

            <div class="mt-4">注册地址: 股权变更</div>
            <div class="mt-4">经营范围: xxxxxx</div>
            <div class="flex flex-row mt-4">
              <div class="flex-1">召开股东会日期: xxxxxx</div>
              <div class="flex-1">做出决议日期: xxxxxx</div>
              <div class="flex-1">转让日期: xxxxxx</div>
            </div>
          </div>
        </ACard>
      </PageWrapper>
    );
  },
});
export default GqbgBaseCollect;
