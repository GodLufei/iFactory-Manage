<template>
  <a-card style="width: 80%">
    <Description
      size="small"
      title="产品信息"
      :bordered="false"
      :column="4"
      :data="productData"
      :schema="productSchemas"
    />
    <a-divider />
    <BasicTable size="small" @register="registerProductItemTable" />
  </a-card>
</template>
<script lang="ts">
  import { Description } from '/@/components/Description/index';
  import { BasicTable, useTable } from '/@/components/Table';
  import { Divider, Card } from 'ant-design-vue';
  import { productSchemas, productItemTableColumns } from './data';
  import { defineComponent, toRefs } from 'vue';

  export default defineComponent({
    components: {
      Description,
      BasicTable,
      [Card.name]: Card,
      [Divider.name]: Divider,
    },
    props: ['product'],
    setup(props) {
      const [registerProductItemTable] = useTable({
        title: '退货商品',
        dataSource: [],
        columns: productItemTableColumns,
        pagination: false,
        showIndexColumn: false,
        scroll: { y: 300 },
        showSummary: false,
      });
      const productData = toRefs(props.product);

      return {
        registerProductItemTable,
        productItemTableColumns,
        productSchemas,
        productData,
      };
    },
  });
</script>
