<template>
  <PageWrapper class="high-form" title="产品创建" content="请输入产品信息后添加产品项">
    <a-card title="产品信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>
    <a-card title="产品项" :bordered="false">
      <BasicTable @register="registerTable" />
      <a-button block class="mt-5" @click="addProductItem"> 新增产品项 </a-button>
    </a-card>
    <a-card :bordered="false" :align="'center'" class="!mt-5 center">
      <a-button type="info" @click="resetInput">重置</a-button>
      <a-button type="primary" @click="createProduct" class="!ml-5">提交</a-button>
    </a-card>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { productSchemas, productItemTableSchemas } from './data';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'CreateProductPage',
    components: {
      BasicForm,
      PageWrapper,
      BasicTable,
      [Card.name]: Card,
      [Space.name]: Space,
    },
    setup() {
      const [register] = useForm({
        layout: 'vertical',
        baseColProps: {
          span: 6,
        },
        schemas: productSchemas,
        showActionButtonGroup: false,
      });
      const [registerTable] = useTable({
        columns: productItemTableSchemas,
        showIndexColumn: true,
        scroll: { y: 100 },
        pagination: false,
      });
      const addProductItem = () => {
        alert('OK');
      };
      const createProduct = () => {
        alert('OK');
      };
      const resetInput = () => {
        alert('OK');
      };
      return {
        register,
        registerTable,
        addProductItem,
        createProduct,
        resetInput,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>