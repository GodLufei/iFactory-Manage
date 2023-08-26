<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '详情',
              onClick: handleDetail.bind(null, record),
              auth: [RoleEnum.MANAGER],
            },
            {
              label: '下发',
              ifShow: record.productStatusId == ProductStatusEnum.UnProduct.id,
              color: 'success',
              popConfirm: {
                title: '是否下发？',
                confirm: handleDown.bind(null, record),
              },
              auth: [RoleEnum.MANAGER],
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
  import { getList, down } from '/@/api/product/productApi';
  import { useGo } from '/@/hooks/web/usePage';
  import { PageEnum } from '/@/enums/pageEnum';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { ProductStatusEnum } from '/@/api/product/enums/enums';
  export default defineComponent({
    name: 'ProductPage',
    components: { BasicTable, PageWrapper, TableAction },
    setup() {
      const go = useGo();
      const { createMessage } = useMessage();
      const [registerTable, { setPagination, reload }] = useTable({
        api: async (params) => {
          const data = await getList({ page: params.page, pageSize: params.pageSize });
          setPagination({
            pageSize: data.data.page.pageSize,
            current: data.data.page.pageIndex,
            total: data.data.page.total,
          });
          return new Promise((resolve) => {
            resolve([...data.data.productListDtos]);
          });
        },
        columns: columns,
        useSearchForm: false,
        showTableSetting: true,
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
      function handleDown(record: Recordable) {
        const { id } = record;
        down(id).then(() => {
          createMessage.success('下发成功');
          reload();
        });
      }
      return {
        registerTable,
        handleAssignTask,
        handleDetail,
        handleDown,
        ProductStatusEnum,
        RoleEnum,
      };
    },
  });
</script>
