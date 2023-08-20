<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="新增"
    @visible-change="handleVisibleChange"
  >
    <BasicForm @register="registerForm" :model="model" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { productTechnologyFormSchemas } from './data';

  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const modelRef = ref({});
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps
        },
      ] = useForm({
        labelWidth: 120,
        schemas: productTechnologyFormSchemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });

      function onDataReceive(data) {
        console.log('Data Received', data);
        modelRef.value = { field2: data.data, field1: data.info };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        register,
        productTechnologyFormSchemas,
        registerForm,
        model: modelRef,
        handleVisibleChange,
      };
    },
  });
</script>
