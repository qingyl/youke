<template>
  <div class="youke-search youke">
    <div class="search-group">
      <van-icon name="arrow-left" @click="backHome"/>
      <van-search ref="search" placeholder="请输入搜索关键词" @search="searchFun" @clear="cancelFun" @cancel="cancelFun" show-action v-model="searchValue" />
    </div>
    <Main pb>

        <div slot="main" class="view">
        <div class="goods-group">
          <div class="goods-item" v-for="(item,index) in searchFoods" :key="index">
            <div class="goods-item-content">
              <van-card
                :origin-price="item.GoodsPrice"
                :price="item.LastPrice"
                :desc="item.TjRemark"
                :title="item.GoodsName"
                :thumb="item.ImgUrl"
              >
                <div slot="price">券后：{{item.LastPrice}}</div>
                <div slot="tags" class="goods-count">
                    <div>月销{{item.SaleCount|conversion}}万</div>
                    <div>日销{{item.AllDayCount|conversion}}万</div>
                </div>
              </van-card>
            </div>
            <div class="goods-item-imglist"></div>
          </div>
        </div>
      </div>
    </Main>
  </div>
</template>

<script type="text/ecmascript-6">
import { indexGoods } from "@/api";
export default {
  //接收父级传递的参数
  props: [],
  //监听数据变化
  watch: {},
  data() {
    return {
      searchValue: "",
      searchFoods:[]
    };
  },
  //实例初始化之前触发事件
  beforeCreate() {},
  //实例化之后触发事件
  created() {
   //   this.getList()
  },
  //实时监控data参数数据变化
  computed: {},
  //模板组件
  components: {},
  //执行方法
  methods: {
     getList(){
       indexGoods({"key":this.searchValue}).then(res=>{
          let msg=res;
          if(msg.error==0){
               if(msg.data){
                  this.searchFoods=[...msg.data]
               }else{
                  this.$toast('暂无商品');
               }
          }
       })
     },
    searchFun(val) {
         this.getList()
    },
    backHome(){
       this.$emit('back')
    },
    cancelFun(){
       this.searchFoods=[]
    }
  },
    filters:{
    conversion(val){
       return (val/10000).toFixed(2)
    }
  },
  mounted() {
  }
  //路由退出时候调用
  //beforeRouteLeave(to, from, next){next()}
};
</script>

<style scoped lang="less">
.youke-search {
  position: absolute;
  z-index: 99;
  .search-group {
    position: fixed;
    width: 100%;
    height: 2.875rem;
    display: flex;
    align-items: center;
    z-index: 102;
    border-bottom: 1px solid #ededed;
    .van-icon {
      margin-left: 0.6rem;
    }
    .van-search {
      width: 22rem;
      padding:5px 16px;
    }
  }
   .view {
      background: #dedede;
    .goods-group {
      .goods-item {
        margin: 0.5rem 0;
        &:last-child{
           margin-bottom:0;
        }
        .goods-item-content {
          .goods-count{
             display: flex;
             justify-content:space-between;
             color:#999;
          }
        }
        .goods-item-imglist {
        }
      }
    }
  }
}
</style>
