import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "login",
    path: "/login",
    alias: ["/"],
    components: {
      default: () => import("@/views/LoginView.vue"),
    },
  },
  {
    path: "/",
    meta: {
      isRequiredLogin: true,
    },
    /**
     *  @TODO 預設帶到案件總覽，若需求有變更再改
     */ redirect: {
      name: "caseOverview",
    },
    //架構都一樣共用同一個 index.view
    component: () => import("@/views/IndexView.vue"),
    children: [
      {
        //案件管理主頁
        path: "case-management",
        name: "caseManagement",
        // components: {
        //   default: () => import("@/views/IndexView.vue"),
        // },
        children: [
          {
            //案件總覽主頁
            path: "case-overview",
            name: "caseOverview",
            component: () =>
              import("@/views/caseManagement/caseOverview/IndexView.vue"),
            // meta: {
            //   requiredParams: true,
            // },
          },
          {
            //案件列表主頁
            path: "caselist",
            name: "caseList",
            components: {
              default: () =>
                import("@/views/caseManagement/caseList/IndexView.vue"),
            },
          },
          {
            path: "caselist/listdetail",
            name: "listDetail",
            components: {
              default: () =>
                import("@/views/caseManagement/caseList/DetailView.vue"),
            },
          },
          {
            //建單主頁
            path: "case-create-order",
            name: "caseCreateOrder",
            components: {
              default: () =>
                import("@/views/caseManagement/caseCreateOrder/IndexView.vue"),
            },
          },
          {
            //問題分類管理主頁
            path: "case-classification",
            name: "caseClassification",
            components: {
              default: () =>
                import(
                  "@/views/caseManagement/caseClassification/IndexView.vue"
                ),
            },
          },
        ],
      },
      {
        //系統管理主頁
        path: "system-management",
        name: "systemManagement",
        children: [
          {
            //參數管理主頁
            path: "parameter-management",
            name: "parameterManagement",
            component: () =>
              import(
                "@/views/systemManagement/parameterManagement/IndexView.vue"
              ),
            // meta: {
            //   requiredParams: true,
            // },
          },
          {
            //權限管理主頁
            path: "authority-management",
            name: "authorityManagement",
            components: {
              default: () =>
                import(
                  "@/views/systemManagement/authorityManagement/IndexView.vue"
                ),
            },
          },
          {
            //選單管理主頁
            path: "menu-management",
            name: "menuManagement",
            components: {
              default: () =>
                import("@/views/systemManagement/menuManagement/IndexView.vue"),
            },
          },
        ],
      },
    ],
  },
  {
    name: "elements",
    path: "/elements",
    components: {
      default: () => import("@/components/ElementsComponent.vue"),
    },
  },
];
export default routes;
