const Layout = () => import("@/layout/index.vue");

export default {
  path: "/script",
  name: "ScriptManage",
  component: Layout,
  meta: {
    icon: "ri:file-code-line",
    title: "脚本管理",
    rank: 22,
    alwaysShow: true,
    showLink: false
  },
  children: [
    {
      path: "/script/list",
      name: "ScriptList",
      component: () => import("@/views/script/list.vue"),
      meta: {
        title: "脚本列表",
        icon: "ri:list-ordered",
        showParent: true
      }
    },
    {
      path: "/script/empty",
      name: "ScriptEmpty",
      component: () => import("@/views/script/list.vue"),
      meta: {
        title: "空路由",
        showLink: false
      }
    }
  ]
} satisfies RouteConfigsTable; 