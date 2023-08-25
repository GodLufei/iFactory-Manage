<template>
  <PageWrapper class="high-form" title="产品创建" content="请输入产品信息后添加产品项">
    <a-card title="模板创建" :bordered="false">
      <h2>产品类型：</h2>
      <a-select
        ref="productTypeOptionsRef"
        placeholder="请选择"
        v-model:value="selectedProductType"
        style="width: 30%"
        :options="productTypeOptions"
        @change="handleChange"
      />
    </a-card>
    <a-card title="模板步骤" :bordered="false" class="!mt-5">
      <a-table
        size="small"
        :columns="productTechnologyStepSchemas"
        :pagination="false"
        :data-source="productTechnologySteps"
      >
        <template #action="{ record }">
          <span>
            <a @click="deleteStep(record)">删除</a>
          </span>
        </template>
      </a-table>
      <a-button block class="mt-5" @click="addStep"> 新增 </a-button>
    </a-card>
    <a-card :bordered="false" :align="'center'" class="!mt-5 center">
      <a-button type="primary" @click="saveProductTech" class="!ml-5">保存</a-button>
    </a-card>
    <CreateProductTechnologyModal ref="modalData" @register="registerModal" />
    <!-- <a-modal v-model:visible="showEditModel.isShown" :title="showEditModel.title" @ok="handleOk">
      <a-card :bordered="false">
        <h2>技术类型:</h2>
        <a-select
          placeholder="请选择"
          style="width: 100%"
          v-model:value="modalData.technologyType"
          :options="technologyTypeOptions"
        />
        <h2 class="!mt-5">工作区:</h2>
        <a-select
          :placeholder="'请选择'"
          style="width: 100%"
          v-model:value="modalData.workStationNo"
          :options="workStationNoOptions"
        />
      </a-card>
    </a-modal> -->
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { Card, Space, Select, Table, Divider } from 'ant-design-vue';
  import {
    productTypeOptions,
    technologyTypeOptions,
    workStationNoOptions,
    productTechnologyStepSchemas,
    StepTechnology,
  } from './data';
  import CreateProductTechnologyModal from './CreateProductTechnologyModal.vue';
  import { defineComponent, ref, reactive, toRaw, computed } from 'vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal/src/hooks/useModal';
  export default defineComponent({
    name: 'CreateProductTechnologyPage',
    components: {
      PageWrapper,
      [Card.name]: Card,
      [Space.name]: Space,
      [Select.name]: Select,
      [Table.name]: Table,
      [Divider.name]: Divider,
      CreateProductTechnologyModal,
    },
    setup() {
      const {
        notification,
        //createErrorModal
      } = useMessage();
      const [registerModal, { openModal: openModal }] = useModal();
      const showEditModel = reactive({ isShown: false, title: '编辑' });
      const modalData = reactive({
        technologyType: 1,
        workStationNo: 1,
        stepIndex: 0,
      });
      const selectedProductType = ref(null);
      const productTechnologySteps = reactive([] as StepTechnology[]);
      const lastStepIndex = computed(() => {
        return productTechnologySteps.length > 0
          ? productTechnologySteps.sort((s) => s.stepIndex)[productTechnologySteps.length - 1]
              .stepIndex
          : 0;
      });
      const addStep = () => {
        openModal(true, {});
        // showEditModel.title = '新增';
        // showEditModel.isShown = true;
        modalData.stepIndex = 0;
        modalData.technologyType = 0;
        modalData.workStationNo = 0;
      };
      const saveProductTech = () => {
        notification.success({
          message: '保存成功',
          // description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realName}`,
          duration: 3,
        });
      };
      const handleChange = (value) => {
        console.log(value);
      };
      const deleteStep = (record) => {
        const { stepIndex } = toRaw(record);
        productTechnologySteps.splice(
          productTechnologySteps.findIndex((s) => s.stepIndex == stepIndex),
          1,
        );
        productTechnologySteps.forEach((item, index) => {
          item.stepIndex = index + 1;
        });
      };
      const editStep = (record) => {
        showEditModel.title = '编辑';
        showEditModel.isShown = true;
        const { stepIndex, technologyType, workStationNo } = toRaw(record);
        modalData.stepIndex = stepIndex;
        modalData.technologyType = technologyType;
        modalData.workStationNo = workStationNo;
      };
      const handleOk = () => {
        if (modalData.stepIndex == 0) {
          productTechnologySteps.push({
            stepIndex: lastStepIndex.value + 1,
            technologyType: modalData.technologyType,
            workStationNo: modalData.workStationNo,
            key: `${lastStepIndex.value + 1}`,
          });
        } else {
          productTechnologySteps.forEach((item) => {
            if (item.stepIndex == modalData.stepIndex) {
              item.technologyType = modalData.technologyType;
              item.workStationNo = modalData.workStationNo;
            }
          });
        }
        showEditModel.isShown = false;
      };
      return {
        productTypeOptions,
        selectedProductType,
        technologyTypeOptions,
        productTechnologySteps,
        productTechnologyStepSchemas,
        workStationNoOptions,
        showEditModel,
        modalData,
        registerModal,
        handleOk,
        handleChange,
        addStep,
        saveProductTech,
        deleteStep,
        editStep,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
