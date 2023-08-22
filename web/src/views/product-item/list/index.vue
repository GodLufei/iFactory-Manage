<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '操作',
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
  import { columns, getList } from './data';
  import { useGo } from '/@/hooks/web/usePage';
  import { PageEnum } from '/@/enums/pageEnum';
  import { useUserStore } from '/@/store/modules/user';
  export default defineComponent({
    name: 'ProductItemListPage',
    components: { BasicTable, PageWrapper, TableAction },
    setup() {
      const go = useGo();
      const userStore = useUserStore();
      const [registerTable, { setPagination }] = useTable({
        api: async (param) => {
          const data = await getList(param, userStore.getUserInfo);
          setPagination({
            current: data.data.page.pageIndex,
            pageSize: data.data.page.pageSize,
            total: data.data.page.total,
          });
          return data.data.productItemDetailDtos;
        },
        columns: columns,
        useSearchForm: false,
        showTableSetting: false,
        bordered: true,
        showIndexColumn: false,
        pagination: {
          pageSize: 10,
          showQuickJumper: false,
          showSizeChanger: false,
        },
        actionColumn: {
          width: 100,
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
