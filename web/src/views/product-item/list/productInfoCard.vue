<template>
  <div>
    <Description
      size="small"
      title="产品信息"
      :bordered="true"
      :column="3"
      :data="productData"
      :schema="productSchemas"
    />
    <BasicTable size="small" @register="registerProductItemTable">
      <template #action="{ record }">
        <TableAction :actions="getActions(record)" />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { Description } from '/@/components/Description/index';
  import { BasicTable, useTable, TableAction, ActionItem } from '/@/components/Table';
  import { productSchemas, productItemTableColumns } from './data';
  import { defineComponent, toRaw, computed } from 'vue';
  import { ProductStatusEnum } from '/@/api/product/enums/enums';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { updateProductItemStep, approveProductItem } from '/@/api/product/productApi';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      Description,
      BasicTable,
      TableAction,
    },
    emits: ['reload'],
    // eslint-disable-next-line vue/order-in-components
    props: {
      product: Object,
      productItems: Array<Object>,
    },
    setup(props, { emit }) {
      const productIdCompute = computed(() => props.product.id);
      const { createMessage } = useMessage();
      const [registerProductItemTable] = useTable({
        dataSource: props.productItems,
        columns: productItemTableColumns,
        pagination: false,
        canResize: true,
        bordered: true,
        showIndexColumn: false,
        scroll: { y: 300 },
        showSummary: false,
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      const getActions = (record) => {
        const item = toRaw(record);
        const actions: ActionItem[] = [];
        switch (item.productStatusId) {
          case ProductStatusEnum.ApproveProduct.id:
          case ProductStatusEnum.CancelledProduct.id:
          case ProductStatusEnum.ScarpProduct.id:
            break;
          case ProductStatusEnum.DoneProduct.id:
            actions.push({
              label: '通过',
              color: 'success',
              auth: [RoleEnum.APPROVER],
              popConfirm: {
                title: '是否通过？',
                confirm: approve.bind(null, item),
              },
            });
            break;
          default:
            actions.push({
              label: '完成',
              color: 'success',
              auth: [RoleEnum.WORKER],
              popConfirm: {
                title: '是否完成？',
                confirm: done.bind(null, item),
              },
            });
            actions.push({
              label: '取消',
              color: 'warning',
              auth: [RoleEnum.WORKER],
              popConfirm: {
                title: '是否取消？',
                confirm: cancel.bind(null, item),
              },
            });
            actions.push({
              label: '报废',
              color: 'error',
              auth: [RoleEnum.WORKER],
              popConfirm: {
                title: '是否报废？',
                confirm: scarp.bind(null, item),
              },
            });
            break;
        }
        return actions;
      };
      const approve = (item) => {
        const { id } = item;
        approveProductItem(productIdCompute.value, id).then(() => {
          createMessage.success(`对 ${item.productItemName} 操作成功`);
          emit('reload');
        });
      };
      const done = (item) => {
        const userStore = useUserStore();
        const { id } = item;
        updateProductItemStep(
          userStore.getUserInfo.userId as string,
          id,
          ProductStatusEnum.DoneProduct.id,
        ).then(() => {
          createMessage.success(`对 ${item.productItemName} 操作成功`);
          emit('reload');
        });
      };
      const cancel = (item) => {
        const userStore = useUserStore();
        const { id } = item;
        updateProductItemStep(
          userStore.getUserInfo.userId as string,
          id,
          ProductStatusEnum.CancelledProduct.id,
        ).then(() => {
          createMessage.success(`对 ${item.productItemName} 操作成功`);
          emit('reload');
        });
      };
      const scarp = (item) => {
        const userStore = useUserStore();
        const { id } = item;
        updateProductItemStep(
          userStore.getUserInfo.userId as string,
          id,
          ProductStatusEnum.ScarpProduct.id,
        ).then(() => {
          createMessage.success(`对 ${item.productItemName} 操作成功`);
          emit('reload');
        });
      };
      return {
        registerProductItemTable,
        productItemTableColumns,
        productSchemas,
        getActions,
        productIdCompute,
        productData: props.product,
      };
    },
  });
</script>
