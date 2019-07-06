import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Nofind from "@/components/Nofind";
import IndexHome from "@/components/IndexHome";


//body luyou
import Consopanel from "@/components/Body/Consopanel";

import Infoshow from "@/components/Body/infoshow";
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
      name: "index",
      component: IndexHome,
      children: [
        { path: "", name: "Consopanel", component: Consopanel },
        { path: "/Consopanel", name: "Consopanel", component: Consopanel },
    { path: "/infoshow", name: "infoshow", component: Infoshow }
      ]
    }
  ]
});
