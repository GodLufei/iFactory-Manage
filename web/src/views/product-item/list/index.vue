<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '详情',
              icon: 'clarity:note-edit-line',
              onClick: handleDetail.bind(null, record),
              // auth: 'super',
            },
          ]"
        />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { columns } from './data';
  import { list } from '/@/api/product/product';
  import { useGo } from '/@/hooks/web/usePage';
  import { PageEnum } from '/@/enums/pageEnum';
  export default defineComponent({
    name: 'ProductItemListPage',
    components: { BasicTable, PageWrapper, TableAction },
    setup() {
      const go = useGo();
      const [registerTable] = useTable({
        api: list,
        columns: columns,
        useSearchForm: false,
        showTableSetting: false,
        bordered: true,
        showIndexColumn: false,
        pagination: { pageSize: 10 },
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleAssignTask(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleDetail(record: Recordable) {
        const { id } = record;
        go(`${PageEnum.PRODUCT_DETAIL}/${id}`);
        return {};
      }
      return {
        registerTable,
        handleAssignTask,
        handleDetail,
      };
    },
  });
</script>
