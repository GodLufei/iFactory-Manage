<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="创建产品明细项"
    @ok="editProductItem"
    @cancel="closeModal"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, toRaw } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { productItemFormSchemas } from './data';
  import { updateProductItem } from '/@/api/product/productApi';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    emits: ['ok'],
    setup(_props, { emit }) {
      const [registerForm, { validate, resetFields, setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas: productItemFormSchemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register, { closeModal }] = useModalInner((data: any) => {
        console.log(toRaw(data));
        setFieldsValue(toRaw(data).productItem);
      });

      const editProductItem = async () => {
        const data = await validate();
        await updateProductItem(data);
        emit('ok', data);
        closeModal();
        resetFields();
      };

      return {
        register,
        productItemFormSchemas,
        registerForm,
        editProductItem,
        closeModal,
      };
    },
  });
</script>
