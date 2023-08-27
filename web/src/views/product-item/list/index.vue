<template>
  <a-row
    style="background-color: whitesmoke"
    v-for="p in productsCompute"
    :key="p.productListDto.id"
    class="!mt-5 !mb-5"
  >
    <a-col :span="24">
      <ProductInfoCard
        :product="p.productListDto"
        :productItems="p.productItemDetailDtos"
        @reload="reload"
      />
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
  import { AwaitReverseProductItemsGroupDto } from '/@/api/product/model/productModel';
  import { Row, Col } from 'ant-design-vue';
  export default defineComponent({
    name: 'ProductItemListPage',
    components: { ProductInfoCard, [Row.name]: Row, [Col.name]: Col },
    setup() {
      const go = useGo();
      const userStore = useUserStore();
      const datas = reactive([] as AwaitReverseProductItemsGroupDto[]);
      getList(userStore.getUserInfo).then((d) => {
        datas.length = 0;
        d.data.forEach((m) => datas.push(m));
        // console.log(datas);
      });

      function handleAssignTask(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleDetail(record: Recordable) {
        const { id } = record;
        go(`${PageEnum.PRODUCT_DETAIL}/${id}`);
        return {};
      }
      function reload() {
        getList(userStore.getUserInfo).then((d) => {
          datas.length = 0;
          d.data.forEach((m) => datas.push(m));
        });
      }
      return {
        ProductInfoCard,
        productsCompute: datas,
        handleAssignTask,
        handleDetail,
        reload,
      };
    },
  });
</script>
