<template>
  <PageWrapper class="high-form" title="产品编辑" content="独立提交产品信息和产品项">
    <a-card title="产品信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>
    <a-card :bordered="false" :align="'center'" class="!mt-5">
      <a-space>
        <PopConfirmButton type="primary" class="!ml-5" title="确认提交？" @confirm="createProduct"
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
                onClick: addItem.bind(null, record),
              },
              {
                label: '删除',
                color: 'error',
                auth: [RoleEnum.MANAGER],
                popConfirm: {
                  title: '是否删除？',
                  confirm: addItem.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </BasicTable>
    </a-card>
    <EditProductItemModal @register="registerModal" v-model="productItemModel" @ok="addItem" />
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { productItemTableSchemas, getProductSchemas } from './data';
  import EditProductItemModal from './EditProductItemModal.vue';
  import { defineComponent, reactive } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { ProductDetailDto, ProductItemDto } from '/@/api/product/model/productModel';
  import { PopConfirmButton } from '/@/components/Button';
  import { detail } from '/@/api/product/productApi';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useRoute } from 'vue-router';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useGo } from '/@/hooks/web/usePage';
import { PageEnum } from '/@/enums/pageEnum';
  export default defineComponent({
    name: 'CreateProductPage',
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
        // createMessage.error('获取失败');
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
      const [registerTable, { reload }] = useTable({
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
      });
      const editProductItem = () => {
        openModal(true);
      };
      const createProduct = async () => {
        // TODO: productItem最小条数的验证
        // TODO: 验证失败的处理
        // TODO: 请求成功后的跳转
        const formValues = await validate();
        console.log(formValues);
        // const createProductCommand: CreateProductCommand = {
        //   quotationId: formValues.quotationId,
        //   city: formValues.city,
        //   street: formValues.street,
        //   province: formValues.province,
        //   zipCode: formValues.zipCode,
        //   description: formValues.description,
        //   title: formValues.title,
        //   tax: formValues.tax,
        //   bankInfo: formValues.bankInfo,
        //   phoneNumber: formValues.phoneNumber,
        //   productItems: productRef.product.productItemDetailDtos.map((item) => ({
        //     productTypeId: item.productTypeId,
        //     amount: item.amount,
        //     name: item.name,
        //     technicalRequirements: item.technicalRequirements,
        //     material: item.material,
        //     diameter: item.diameter,
        //     length: item.length,
        //     figureNo: item.figureNo,
        //     unit: item.unit,
        //   })),
        // };
        // console.log(createProductCommand);
        // await create(createProductCommand);
        createMessage.success('更新成功');
        resetInput();
      };
      const resetInput = () => {
        resetFields();
        productRef.product.productItemDetailDtos.length = 0;
        reload();
      };
      const addItem = (item: ProductItemDto) => {
        productRef.product.productItemDetailDtos.push(item);
        reload();
      };
      return {
        register,
        registerTable,
        registerModal,
        editProductItem,
        createProduct,
        resetInput,
        addItem,
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
