<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">高销量</van-tabbar-item>
    <van-tabbar-item icon="friends-o">爆款</van-tabbar-item>
    <van-tabbar-item icon="setting-o">高佣金</van-tabbar-item>
     <van-tabbar-item icon="setting-o">近期</van-tabbar-item>
  </van-tabbar>
</template>

<script type="text/ecmascript-6">
export default {
  //接收父级传递的参数
  props: [],
  //监听数据变化
  watch: {},
  data() {
    return {
      active: 0
    };
  },
  //实例初始化之前触发事件
  beforeCreate() {},
  //实例化之后触发事件
  created() {},
  //实时监控data参数数据变化
  computed: {},
  //模板组件
  components: {},
  //执行方法
  methods: {},
  mounted() {}
  //路由退出时候调用
  //beforeRouteLeave(to, from, next){next()}
};
</script>

<style scoped lang="less">
</style>
