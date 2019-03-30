<template>
  <!-- 爆款 -->
  <div class="youke explos">
 <Navs/>
    <Main>
      <div slot="main" class="view">
        <div class="goods-group">
          <div class="goods-item" v-for="(item,index) in list" :key="index">
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
      <Tabbar></Tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
import { PyqGoods } from "@/api";
export default {
  //接收父级传递的参数
  props: [],
  //监听数据变化
  watch: {},
  data() {
    return {
      list: []
    };
  },
  //实例初始化之前触发事件
  beforeCreate() {},
  //实例化之后触发事件
  created() {
    this.getList();
  },
  filters:{
    conversion(val){
       return (val/10000).toFixed(2)
    }
  },
  //实时监控data参数数据变化
  computed: {},
  //模板组件
  components: {},
  //执行方法
  methods: {
    getList() {
      PyqGoods({ type: 2, pagesize: 20 }).then(res => {
        this.list = [...this.list, ...res.data];
      });
    }
  },
  mounted() {}
  //路由退出时候调用
  //beforeRouteLeave(to, from, next){next()}
};
</script>

<style scoped lang="less">
.explos {
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
