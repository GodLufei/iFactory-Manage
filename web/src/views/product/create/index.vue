<template>
  <PageWrapper class="high-form" title="产品创建" content="请输入产品信息后添加产品项">
    <a-card title="产品信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>
    <a-card title="产品项" :bordered="false">
      <BasicTable @register="registerTable" />
      <a-button block class="mt-5" @click="addProductItem"> 新增产品项 </a-button>
    </a-card>
    <a-card :bordered="false" :align="'center'" class="!mt-5">
      <a-space>
        <PopConfirmButton type="info" title="确认重置？" @confirm="resetInput"
          >重置</PopConfirmButton
        >
        <PopConfirmButton type="primary" class="!ml-5" title="确认提交？" @confirm="createProduct"
          >提交</PopConfirmButton
        >
      </a-space>
    </a-card>
    <CreateProductItemModal @register="registerModal" v-model="productItemModel" @ok="addItem" />
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { productSchemas, productItemTableSchemas } from './data';
  import CreateProductItemModal from './CreateProductItemModal.vue';
  import { defineComponent, reactive, computed } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { CreateProductCommand, ProductItemDto } from '/@/api/product/model/productModel';
  import { PopConfirmButton } from '/@/components/Button';
  import { create } from '/@/api/product/productApi';
  import { useMessage } from '/@/hooks/web/useMessage';
  export default defineComponent({
    name: 'CreateProductPage',
    components: {
      BasicForm,
      PageWrapper,
      BasicTable,
      CreateProductItemModal,
      PopConfirmButton,
      [Card.name]: Card,
      [Space.name]: Space,
    },
    setup() {
      const productItemModel = reactive({});
      const productItems = reactive([] as ProductItemDto[]);
      const productItemCompute = computed(() => productItems);
      const [register, { resetFields, validate }] = useForm({
        layout: 'vertical',
        baseColProps: {
          span: 6,
        },
        schemas: productSchemas,
        showActionButtonGroup: false,
      });
      const [registerTable, { reload }] = useTable({
        columns: productItemTableSchemas,
        dataSource: productItemCompute,
        showIndexColumn: false,
        canResize: true,
        rowKey: 'name',
        scroll: { y: 200 },
        pagination: false,
      });
      const [registerModal, { openModal: openModal }] = useModal();
      const { createMessage } = useMessage();
      const addProductItem = () => {
        openModal(true);
      };
      const createProduct = async () => {
        // TODO: productItem最小条数的验证
        // TODO: 验证失败的处理
        // TODO: 请求成功后的跳转
        const formValues = await validate();
        const createProductCommand: CreateProductCommand = {
          quotationId: formValues.quotationId,
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
          productItems: productItems.map((item) => ({
            productTypeId: item.productTypeId,
            amount: item.amount,
            name: item.name,
            technicalRequirements: item.technicalRequirements,
            material: item.material,
            diameter: item.diameter,
            length: item.length,
            figureNo: item.figureNo,
            unit: item.unit,
          })),
        };
        console.log(createProductCommand);
        await create(createProductCommand);
        createMessage.success('创建成功');
        resetInput();
      };
      const resetInput = () => {
        resetFields();
        productItems.length = 0;
        reload();
      };
      const addItem = (item: ProductItemDto) => {
        productItems.push(item);
        reload();
      };
      return {
        register,
        registerTable,
        registerModal,
        addProductItem,
        createProduct,
        resetInput,
        addItem,
        productItemModel,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
