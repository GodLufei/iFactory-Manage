<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';

  import { columns, searchFormSchema, datas } from './data';

  export default defineComponent({
    name: 'RoleManagement',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        columns,
        dataSource: datas,
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
