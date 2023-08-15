<template>
  <PageWrapper class="high-form" title="产品创建" content="请输入产品信息后添加产品项">
    <a-card title="模板创建" :bordered="false">
      <h2>产品类型：</h2>
      <a-select
        ref="productTypeOptionsRef"
        placeholder="请选择"
        v-model:value="selectedProductType"
        style="width: 30%"
        :options="productTypeOptionsRef"
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
            <a-divider type="vertical" />
            <a @click="editStep(record)">编辑</a>
            <a-divider type="vertical" />
          </span>
        </template>
      </a-table>
      <a-button block class="mt-5" @click="addStep"> 新增步骤 </a-button>
    </a-card>
    <a-card :bordered="false" :align="'center'" class="!mt-5 center">
      <a-button type="primary" @click="createProductTech" class="!ml-5">提交</a-button>
    </a-card>
    <a-modal v-model:visible="showEditModel.isShown" :title="showEditModel.title" @ok="handleOk">
      <a-card :bordered="false">
        <h2>技术类型:</h2>
        <a-input v-model:value="modalData.technologyType" />
        <h2 class="!mt-5">工作区:</h2>
        <a-input v-model:value="modalData.workStationNo" />
      </a-card>
    </a-modal>
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { Card, Space, Select, Table, Divider, Modal } from 'ant-design-vue';
  import { productTypeOptions, productTechnologyStepSchemas } from './data';
  import { defineComponent, ref, reactive, toRaw } from 'vue';
  export default defineComponent({
    name: 'CreateProductTechnologyPage',
    components: {
      PageWrapper,
      [Card.name]: Card,
      [Space.name]: Space,
      [Select.name]: Select,
      [Table.name]: Table,
      [Divider.name]: Divider,
      [Modal.name]: Modal,
    },
    setup() {
      const showEditModel = reactive({ isShown: false, title: '编辑' });
      const modalData = reactive({
        technologyType: '',
        workStationNo: '',
        id: '',
      });
      const productTypeOptionsRef = ref(productTypeOptions);
      const selectedProductType = ref(null);
      const productTechnologySteps = reactive([
        { key: 1, stepIndex: 1, technologyType: '1', workStationNo: '1' },
        { key: 2, stepIndex: 2, technologyType: '2', workStationNo: '2' },
        { key: 3, stepIndex: 3, technologyType: '3', workStationNo: '3' },
      ]);
      const addStep = () => {
        showEditModel.title = '新增';
        showEditModel.isShown = true;
        modalData.id = '';
        modalData.technologyType = '';
        modalData.workStationNo = '';
      };
      const createProductTech = () => {};
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
        modalData.id = stepIndex;
        modalData.technologyType = technologyType;
        modalData.workStationNo = workStationNo;
      };
      const handleOk = () => {
        if (modalData.id.length == 0) {
          productTechnologySteps.push({
            stepIndex:
              productTechnologySteps.sort((s) => s.stepIndex)[productTechnologySteps.length - 1]
                .stepIndex + 1,
            technologyType: modalData.technologyType,
            workStationNo: modalData.workStationNo,
            key:
              productTechnologySteps.sort((s) => s.stepIndex)[productTechnologySteps.length - 1]
                .stepIndex + 1,
          });
        } else {
          productTechnologySteps.forEach((item) => {
            if (`${item.stepIndex}` == modalData.id) {
              item.technologyType = modalData.technologyType;
              item.workStationNo = modalData.workStationNo;
            }
          });
        }
        showEditModel.isShown = false;
      };
      return {
        productTypeOptionsRef,
        selectedProductType,
        productTechnologyStepSchemas,
        productTechnologySteps,
        showEditModel,
        modalData,
        handleOk,
        handleChange,
        addStep,
        createProductTech,
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
