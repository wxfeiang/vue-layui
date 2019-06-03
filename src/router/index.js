import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Nofind from "@/components/Nofind";
import IndexHome from "@/components/IndexHome";

//
import list1 from "@/components/Body/list1";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },

    {
      path: "*",
      name: "/404",
      component: Nofind
    },
    {
      path: "/index",
      name: "/index",
      component: IndexHome
    },
    {
      path: "/list1",
      name: "/list1",
      component: list1
    }
  ]
});
