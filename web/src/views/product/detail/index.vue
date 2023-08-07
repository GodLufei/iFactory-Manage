<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';

  import { columns, datas } from '../data';

  export default defineComponent({
    name: 'ProductDetailPage',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        columns,
        dataSource: datas,
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
