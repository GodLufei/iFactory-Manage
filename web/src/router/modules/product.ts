export default {
  path: "/project",
  meta: {
    title: "货品管理",
    icon: "ep:van"
  },
  children: [
    {
      path: "/project/index",
      name: "Project",
      component: () => import("@/views/product/index.vue"),
      meta: {
        title: "货品管理"
      }
    }
  ]
};
