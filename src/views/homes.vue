<template>
  <!-- 首页 -->
  <div class="youke home">
    <Main pt>
      <div class="home-cidGroup claer" slot="main">
        <div class="home-cid-item" v-for="item in cidList" :key="item.cid">
          <div class="cid-item-icon">
            <img :src="item.icon|imgchange" />
          </div>
          <div class="cid-item-label">{{item.label}}</div>
        </div>
      </div>
    </Main>
  </div>
</template>

<script type="text/ecmascript-6">
import { cidList } from "@/common/goodsCid";

export default {
  //接收父级传递的参数
  props: [],
  //监听数据变化
  watch: {},
  data() {
    return {
      cidList: [...cidList]
    };
  },
  //实例初始化之前触发事件
  beforeCreate() {},
  //实例化之后触发事件
  created() {},
  //实时监控data参数数据变化
  computed: {},
  filters:{
    imgchange(val){
      return require(`@/assets/iconpng/${val}`)
    }
  },
  //模板组件
  components: {},
  //执行方法
  methods: {},
  mounted() {
  }
  //路由退出时候调用
  //beforeRouteLeave(to, from, next){next()}
};
</script>

<style scoped lang="less">
.home-cidGroup {
  .home-cid-item{
      text-align: center;
      width:4.6875rem;
      float: left;
      margin:1rem 0;
     .cid-item-icon{
         img{
           width:1.75rem; 
           height:1.75rem;
         }
     }
     .cid-item-label{

     }
  }
}
</style>
