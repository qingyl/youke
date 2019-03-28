<template>
<!-- 首页 -->
  <div class="youke home">
    <Tabbar></Tabbar>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  //接收父级传递的参数
  props: [],
  //监听数据变化
  watch: {},
  data() {
    return {};
  },
  //实例初始化之前触发事件
  beforeCreate() {},
  //实例化之后触发事件
  created() {

  },
  //实时监控data参数数据变化
  computed: {},
  //模板组件
  components: {},
  //执行方法
  methods: {
   
  },
  mounted() {
    // axios
    //   .get("PyqGoods?AppKey=tehahusnxb&type=2")
    //   .then(res => {
    //     console.log(res.data);
    //   });
    // 修改
  }
  //路由退出时候调用
  //beforeRouteLeave(to, from, next){next()}
};
</script>

<style scoped lang="less">
</style>
