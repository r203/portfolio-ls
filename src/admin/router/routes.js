import Header from "../components/ls-admin-header"
import Tabs from "../components/ls-admin-nav"

export default [
  {
    path: "/",
    components: {
      default: () => import("../components/about/ls-admin-about.vue"),
      tabs: Tabs,
      header: Header,
    },
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    components: {
      default: () => import("../components/works/ls-admin-works.vue"),
      tabs: Tabs,
      header: Header,
    },
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/reviews",
    components: {
      default: () => import("../components/reviews/ls-admin-reviews.vue"),
      tabs: Tabs,
      header: Header,
    },
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    component: () => import("../components/login/ls-admin-login.vue"),
    meta: {
      public: true,
    }
  }
];