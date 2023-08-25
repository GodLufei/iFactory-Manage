<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="创建产品明细项"
    @ok="addProductItem"
    @cancel="closeModal"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { productItemFormSchemas } from './data';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    emits: ['ok'],
    setup(_props, { emit }) {
      const [registerForm, { validate, resetFields }] = useForm({
        labelWidth: 120,
        schemas: productItemFormSchemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register, { closeModal }] = useModalInner((data: any) => {
        console.log(data);
      });

      const addProductItem = async () => {
        const data = await validate();
        emit('ok', data);
        closeModal();
        resetFields();
      };

      return {
        register,
        productItemFormSchemas,
        registerForm,
        addProductItem,
        closeModal,
      };
    },
  });
</script>
