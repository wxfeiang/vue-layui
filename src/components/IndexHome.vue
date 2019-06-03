<template>
  <div>
    <div class="layui-layout layui-layout-admin">
      <InHeader />
      <InLeft />
      <InBody />
      <Infooter />
    </div>
  </div>
</template>
<script>
import InHeader from "./Home/Header";
import InLeft from "./Home/Left";
import InBody from "./Home/Body";
import Infooter from "./Home/Footer";
export default {
  name: "indexHome",
  components: {
    InHeader,
    InLeft,
    InBody,
    Infooter
  },
  mounted() {
    layui.use("element", function() {
      var element = layui.element;
    });
  }
};
</script>
