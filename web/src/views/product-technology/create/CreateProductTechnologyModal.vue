<template>
  <BasicModal v-bind="$attrs" @register="register" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { productTechnologyFormSchemas } from './data';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      isEdit: Boolean,
      technologyTypeId: Number,
      workStationNo: String,
    },
    emits: ['ok'],
    setup(props, { emit }) {
      const getTitle = computed(() => (props.isEdit ? '编辑' : '新增'));
      const [
        registerForm,
        {
          // setProps
          validate,
          setFieldsValue,
        },
      ] = useForm({
        labelWidth: 120,
        schemas: productTechnologyFormSchemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register, { setModalProps, closeModal }] = useModalInner((data) => {
        if (data.isEdit) {
          setFieldsValue({
            technologyTypeId: data.technologyTypeId,
            workStationNo: data.workStationNo,
          });
        }
      });

      async function handleSubmit() {
        try {
          const formData = await validate();
          setModalProps({ confirmLoading: true });
          closeModal();
          debugger;
          emit('ok', {
            technologyTypeId: formData.technologyTypeId,
            workStationNo: formData.workStationNo,
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      return {
        register,
        productTechnologyFormSchemas,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>
