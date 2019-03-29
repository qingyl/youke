<template>
  <div id="app" class="youke">
   
    <router-view v-title :data-title="$route.meta.name"/>
    <Tabbar v-if="hideRoute"></Tabbar>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      pathList: ["/", "/sales", "/explos", "/brokerage", "/future"]
    };
  },
  computed: {
    hideRoute() {
      return this.pathList.includes(this.$route.path);
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #dedede;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  // height: 100%;
}
</style>
