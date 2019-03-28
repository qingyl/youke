<template>
  <div id="app">
    <transition :name="animateName">
      <router-view
        class="views"
        v-title
        :data-title="$route.meta.name"
      />
    </transition>

  </div>
</template>
<script type="text/ecmascript-6">
export default {
  watch: {
    $route(to, from) {
      const prevPath = from.path;
      const nextPath = to.path;
      // for(let item of this.pathList.values()){

      // }
      const prevIndex = this.pathList.find(val => prevPath === val); //前一个路由的索引
      // const nextIndex = this.pathList.findIndex(val => nextPath === val); //当前点击路由的索引
      // if (prevIndex > nextIndex) {
      //   this.animateName = "slide-left";
      // } else {
      //   this.animateName = "slide-right";
      // }
    }
  },
  data() {
    return {
      animateName:"slide-left",
      pathList:[]
    }
  },
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
  height: 100%;
}
.views {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
