<template>
  <PageWrapper class="high-form" title="产品创建" content="请输入产品信息后添加产品项">
    <a-card title="产品信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>
    <a-card title="产品项" :bordered="false">
      产品项
    </a-card>
    <a-card :bordered="false" :align="'center'" class="!mt-5 center">
      <a-button type="info" @click="console.log('click')"> 重置 </a-button>
      <a-button type="primary" @click="console.log('click')" class="!ml-5"> 提交 </a-button>
    </a-card>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { schemas } from './data';
  export default defineComponent({
    name: 'CreateProductPage',
    components: { BasicForm, PageWrapper, [Card.name]: Card, [Space.name]: Space },
    setup() {
      const [register] = useForm({
        layout: 'vertical',
        baseColProps: {
          span: 6,
        },
        schemas: schemas,
        showActionButtonGroup: false,
      });
      return {
        register,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
