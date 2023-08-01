<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';

  import { columns, searchFormSchema, getProducts } from '../data';
  export default defineComponent({
    name: 'ProductPage',
    components: { BasicTable },
    async setup() {
      const products = await getProducts();
      const [registerTable] = useTable({
        columns,
        dataSource: products,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: false,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          fixed: undefined,
        },
      });

      return {
        registerTable,
      };
    },
  });
</script>
