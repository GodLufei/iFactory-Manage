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
    <a-card :bordered="false" :align="'center'" class="!mt-5">
      <a-button type="primary" @click="saveProductTech" class="!ml-5">保存</a-button>
    </a-card>
    <CreateProductTechnologyModal v-bind="$attrs" @register="registerModal" @ok="saveStep" />
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { Card, Space, Select, Table, Divider } from 'ant-design-vue';
  import {
    productTypeOptions,
    technologyTypeOptions,
    productTechnologyStepSchemas,
    StepTechnology,
  } from './data';
  import CreateProductTechnologyModal from './CreateProductTechnologyModal.vue';
  import { defineComponent, ref, reactive, toRaw, computed } from 'vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal/src/hooks/useModal';
  import { detail, create } from '/@/api/product/technologyApi';
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
      const { createMessage } = useMessage();
      const [registerModal, { openModal }] = useModal();
      const showEditModel = reactive({ title: '编辑' });
      const modalData = reactive({
        technologyTypeId: 1,
        workStationNo: '01',
        stepIndex: 0,
      });
      const selectedProductType = ref(0);
      const productTechnologySteps = reactive([] as StepTechnology[]);
      const lastStepIndex = computed(() => {
        if (productTechnologySteps.length == 0) return 0;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return productTechnologySteps.sort((s) => s.stepIndex)[productTechnologySteps.length - 1]
          .stepIndex;
      });
      const addStep = () => {
        openModal(true, {});
        modalData.stepIndex = 0;
        modalData.technologyTypeId = 1;
        modalData.workStationNo = '01';
      };
      const saveProductTech = async () => {
        await create({
          productTypeId: selectedProductType.value,
          productTechnologyItemDtos: productTechnologySteps,
        });
        createMessage.success('保存成功');
      };
      const handleChange = async (value) => {
        const result = await detail(value);
        productTechnologySteps.length = 0;
        result.data?.productTechnologyItemDtos?.forEach((item) =>
          productTechnologySteps.push({
            key: item.stepIndex + item.workStationNo,
            stepIndex: item.stepIndex,
            workStationNo: item.workStationNo,
            technologyTypeId: item.technologyTypeId,
          }),
        );
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
        const { stepIndex, technologyTypeId, workStationNo } = toRaw(record);
        modalData.stepIndex = stepIndex;
        modalData.technologyTypeId = technologyTypeId;
        modalData.workStationNo = workStationNo;
      };
      const saveStep = (data) => {
        if (data.stepIndex == 0 || !data.stepIndex) {
          productTechnologySteps.push({
            stepIndex: lastStepIndex.value + 1,
            technologyTypeId: data.technologyTypeId,
            workStationNo: data.workStationNo,
            key: `${lastStepIndex.value + 1}`,
          });
        } else {
          productTechnologySteps.forEach((item) => {
            if (item.stepIndex == data.stepIndex) {
              item.technologyTypeId = data.technologyTypeId;
              item.workStationNo = data.workStationNo;
            }
          });
        }
      };
      return {
        productTypeOptions,
        selectedProductType,
        technologyTypeOptions,
        productTechnologySteps,
        productTechnologyStepSchemas,
        showEditModel,
        modalData,
        registerModal,
        saveStep,
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
