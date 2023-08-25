<template>
  <a-row
    style="background-color: whitesmoke"
    v-for="p in productsCompute"
    :key="p.productListDto.id"
    class="!mt-5 !mb-5"
  >
    <a-col :span="24">
      <ProductInfoCard :product="p.productListDto" :productItems="p.productItemDetailDtos" />
    </a-col>
  </a-row>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { getList } from './data';
  import { useGo } from '/@/hooks/web/usePage';
  import { PageEnum } from '/@/enums/pageEnum';
  import { useUserStore } from '/@/store/modules/user';
  import ProductInfoCard from './productInfoCard.vue';
  import { reactive } from 'vue';
  import { ProductGroupListDto } from '/@/api/product/model/productModel';
  import { Row, Col } from 'ant-design-vue';
  export default defineComponent({
    name: 'ProductItemListPage',
    components: { ProductInfoCard, [Row.name]: Row, [Col.name]: Col },
    setup() {
      const go = useGo();
      const userStore = useUserStore();
      const datas = reactive([] as ProductGroupListDto[]);
      getList(userStore.getUserInfo).then((d) => {
        d.data.forEach((m) => datas.push(m));
      });

      function handleAssignTask(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleDetail(record: Recordable) {
        const { id } = record;
        go(`${PageEnum.PRODUCT_DETAIL}/${id}`);
        return {};
      }
      return {
        ProductInfoCard,
        productsCompute: datas,
        handleAssignTask,
        handleDetail,
      };
    },
  });
</script>
