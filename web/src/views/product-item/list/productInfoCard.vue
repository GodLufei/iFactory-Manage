<template>
  <div>
    <Description
      size="small"
      title="产品信息"
      :bordered="true"
      :column="4"
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
  import { defineComponent, toRaw } from 'vue';
  import { ProductStatusEnum } from '/@/api/product/model/productModel';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: {
      Description,
      BasicTable,
      TableAction,
    },
    props: {
      product: Object,
      productItems: Array<Object>,
    },
    setup(props) {
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
        switch (ProductStatusEnum.from(item.productStatus)?.id) {
          case ProductStatusEnum.AwaitingProduct.id:
            actions.push({
              label: '完成',
              color: 'success',
              auth: [RoleEnum.WORKER],
              popConfirm: {
                title: '是否完成？',
                confirm: handleClick.bind(null, item),
              },
            });
            actions.push({
              label: '取消',
              color: 'warning',
              auth: [RoleEnum.WORKER],
              popConfirm: {
                title: '是否取消？',
                confirm: handleClick.bind(null, item),
              },
            });
            actions.push({
              label: '报废',
              color: 'error',
              auth: [RoleEnum.WORKER],
              popConfirm: {
                title: '是否报废？',
                confirm: handleClick.bind(null, item),
              },
            });
            break;
          case ProductStatusEnum.DoneProduct.id:
            actions.push({
              label: '通过',
              color: 'success',
              auth: [RoleEnum.APPROVER],
              popConfirm: {
                title: '是否通过？',
                confirm: handleClick.bind(null, item),
              },
            });
            break;
          default:
            break;
        }
        return actions;
      };
      const handleClick = (item) => {
        createMessage.success(`对 ${item.productItemName} 操作成功`);
      };
      return {
        registerProductItemTable,
        productItemTableColumns,
        productSchemas,
        getActions,
        productData: props.product,
      };
    },
  });
</script>
