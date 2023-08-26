<template>
  <PageWrapper class="high-form" title="产品编辑" content="独立提交产品信息和产品项">
    <a-card title="产品信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>
    <a-card :bordered="false" :align="'center'" class="!mt-5">
      <a-space>
        <PopConfirmButton type="primary" class="!ml-5" title="确认提交？" @confirm="updateProduct"
          >提交</PopConfirmButton
        >
      </a-space>
    </a-card>
    <a-card title="产品项" :bordered="false" class="!mt-5">
      <BasicTable @register="registerTable">
        <template #action="{ record }">
          <TableAction
            :actions="[
              {
                label: '编辑',
                color: 'success',
                auth: [RoleEnum.MANAGER],
                onClick: editItem.bind(null, record),
              },
              {
                label: '删除',
                color: 'error',
                auth: [RoleEnum.MANAGER],
                popConfirm: {
                  title: '是否删除？',
                  confirm: deleteItem.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </BasicTable>
    </a-card>
    <EditProductItemModal @register="registerModal" @ok="submitItem" />
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { productItemTableSchemas, getProductSchemas } from './data';
  import EditProductItemModal from './EditProductItemModal.vue';
  import { defineComponent, reactive, toRaw } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { ProductDetailDto, ProductItemDto } from '/@/api/product/model/productModel';
  import { PopConfirmButton } from '/@/components/Button';
  import { deleteProductItem, detail, update } from '/@/api/product/productApi';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useRoute } from 'vue-router';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useGo } from '/@/hooks/web/usePage';
  import { PageEnum } from '/@/enums/pageEnum';
  export default defineComponent({
    name: 'EditProductPage',
    components: {
      BasicForm,
      PageWrapper,
      BasicTable,
      TableAction,
      EditProductItemModal,
      PopConfirmButton,
      [Card.name]: Card,
      [Space.name]: Space,
    },
    setup() {
      const route = useRoute();
      const go = useGo();

      const { createMessage } = useMessage();
      const [registerModal, { openModal: openModal }] = useModal();

      if (isNaN(parseInt(route.params.id as string))) {
        go(`${PageEnum.PRODUCT_HOME}`);
      }

      const productId = parseInt(route.params.id as string);
      const productRef = reactive({ product: {} as ProductDetailDto });

      const [register, { resetFields, validate, setFieldsValue }] = useForm({
        layout: 'vertical',
        baseColProps: {
          span: 6,
        },
        schemas: getProductSchemas(productRef.product),
        showActionButtonGroup: false,
      });
      const [registerTable, { reload, setTableData }] = useTable({
        columns: productItemTableSchemas,
        dataSource: productRef.product.productItemDetailDtos,
        showIndexColumn: false,
        canResize: true,
        rowKey: 'name',
        scroll: { y: 200 },
        pagination: false,
        actionColumn: {
          dataIndex: 'action',
          title: '操作',
          width: 150,
          slots: { customRender: 'action' },
        },
      });
      detail(productId).then((data) => {
        productRef.product = data.data;
        setFieldsValue(productRef.product);
        setTableData(productRef.product.productItemDetailDtos);
      });
      const editProductItem = () => {
        openModal(true);
      };
      const updateProduct = async () => {
        // TODO: productItem最小条数的验证
        // TODO: 验证失败的处理
        // TODO: 请求成功后的跳转
        const formValues = await validate();
        console.log(formValues);
        await update({
          city: formValues.city,
          street: formValues.street,
          province: formValues.province,
          zipCode: formValues.zipCode,
          description: formValues.description,
          title: formValues.title,
          tax: formValues.tax,
          bankInfo: formValues.bankInfo,
          bankAccount: formValues.bankAccount,
          phoneNumber: formValues.phoneNumber,
          productItems: [],
          id: parseInt(formValues.id as string),
        });
        createMessage.success('更新成功');
        // resetInput();
      };
      const resetInput = () => {
        resetFields();
        productRef.product.productItemDetailDtos.length = 0;
        reload();
      };
      const editItem = (item: ProductItemDto) => {
        openModal(true, { productItem: item });
      };
      const submitItem = (item: ProductItemDto) => {
        productRef.product.productItemDetailDtos.forEach((x) => {
          if (x.id == item.id) {
            x.productTypeId = item.productTypeId;
            x.amount = item.amount;
            x.productItemName = item.productItemName;
            x.technicalRequirements = item.technicalRequirements;
            x.material = item.material;
            x.diameter = item.diameter;
            x.length = item.length;
            x.figureNo = item.figureNo;
            x.unit = item.unit;
          }
        });
      };
      const deleteItem = (item: ProductItemDto) => {
        deleteProductItem(item.id as number).then(() => {
          createMessage.success('删除成功');
          debugger;
          const tempItems = toRaw(productRef.product.productItemDetailDtos);
          productRef.product.productItemDetailDtos.length = 0;
          tempItems.forEach((temp) => {
            if (temp.id != item.id) {
              productRef.product.productItemDetailDtos.push(item);
            }
          });
          reload();
        });
      };
      return {
        register,
        registerTable,
        registerModal,
        editProductItem,
        updateProduct,
        resetInput,
        editItem,
        deleteItem,
        submitItem,
        RoleEnum,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
