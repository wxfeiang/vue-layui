<template>
  <div>
    <div class="layui-side layui-bg-black">
      <div class="layui-side-scroll">
        <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
        <ul class="layui-nav layui-nav-tree" lay-filter="test">
          <li class="layui-nav-item layui-nav-itemed" v-for="item in items">
            <a
              class=""
              href="javascript:; "
              v-if="item.children"
              :index="item.path"
              :key="item.path"
              >{{ item.name }}</a
            >
            <dl class="layui-nav-child">
              <dd v-for="citem in item.children">
                <router-link :to="citem.path" class="nav-link">
                  {{ citem.name }}
                </router-link>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "leftmenu",
  data() {
    return {
      items: [
        {
          icon: "fa-money",
          name: "资金管理",
          path: "fund",
          children: [{ path: "foundlist", name: "资金流水" }]
        },
        {
          icon: "fa-asterisk",
          name: "信息管理",
          path: "info",
          children: [{ path: "infoshow", name: "个人信息" }]
        }
      ]
    };
  }
};
</script>
