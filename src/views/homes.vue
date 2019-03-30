<template>
  <!-- 首页 -->
  <div class="youke home">
    <template v-if="hideSearch">
      <van-nav-bar :title="$route.meta.name" fixed @click-right="searchFun">
        <van-icon name="search" slot="right"/>
      </van-nav-bar>
      <Main>
        <template slot="main">
          <van-swipe :autoplay="3000" class="swiper">
            <van-swipe-item v-for="(image, index) in swipes" :key="index">
              <img v-lazy="image.MarketImage">
            </van-swipe-item>
          </van-swipe>
          <div class="home-cidGroup claer">
            <div class="home-cid-item" v-for="item in cidList" :key="item.cid">
              <div class="cid-item-icon">
                <img :src="item.icon|imgchange">
              </div>
              <div class="cid-item-label">{{item.label}}</div>
            </div>
          </div>
          <div class="home-btnGroup">
            <div class="home-btn-iview">
              <div class="home-btn-item">
                <div class="btn-text">
                  <div class="title">淘抢购</div>
                  <div class="desc">海量抢购实用商品</div>
                </div>
                <div class="btn-img">
                  <img src>
                </div>
              </div>
              <div class="home-btn-item">
                <div class="btn-text">
                  <div class="title">聚划算</div>
                  <div class="desc">海量丰富团购商品</div>
                </div>
                <div class="btn-img">
                  <img src>
                </div>
              </div>
            </div>
            <div class="home-btn-iview">
              <div class="home-btn-item">
                <div class="btn-text">
                  <div class="title">高销量</div>
                  <div class="desc">好品牌源于好销量</div>
                </div>
                <div class="btn-img">
                  <img src>
                </div>
              </div>
              <div class="home-btn-item">
                <div class="btn-text">
                  <div class="title">高佣金</div>
                  <div class="desc">一份付出一份收获</div>
                </div>
                <div class="btn-img">
                  <img src>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Main>
          <Tabbar></Tabbar>
    </template>
    <template v-else>
      <search @back="hideSearch=true"/>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import { cidList } from "@/common/goodsCid";
import { indexGoods } from "@/api";
import search from "components/search";
export default {
  //接收父级传递的参数
  props: [],
  //监听数据变化
  watch: {},
  data() {
    return {
      cidList: [...cidList],
      swipes: [],
      hideSearch: true
    };
  },
  //实例初始化之前触发事件
  beforeCreate() {},
  //实例化之后触发事件
  created() {
    this.getSwiper();
  },
  //实时监控data参数数据变化
  computed: {},
  filters: {
    imgchange(val) {
      return require(`@/assets/iconpng/${val}`);
    }
  },
  //模板组件
  components: {
    search
  },
  //执行方法
  methods: {
    getSwiper() {
      indexGoods({ pagesize: 3, video: 1 }).then(res => {
        let msg = res;
        if (msg.error == 0) {
          this.swipes = [...res.data];
        }
      });
    },
    searchFun() {
      this.hideSearch=false
    }
  },
  mounted() {}
  //路由退出时候调用
  //beforeRouteLeave(to, from, next){next()}
};
</script>

<style scoped lang="less">
.home {
  .home-cidGroup {
    .home-cid-item {
      text-align: center;
      width: 4.6875rem;
      float: left;
      margin: 1rem 0;
      .cid-item-icon {
        img {
          width: 1.75rem;
          height: 1.75rem;
        }
      }
      .cid-item-label {
        font-size: 1rem;
      }
    }
  }
  .swiper {
    height: 200px;
    img {
      width: auto;
      height: 100%;
      margin: auto;
      display: block;
    }
  }
  .home-btnGroup {
    .home-btn-iview {
      display: flex;
      align-items: center;
      border-top: 1px solid #ededed;
      border-bottom: 1px solid #ededed;
      &:nth-child(odd) {
        border-bottom: none;
      }
      .home-btn-item {
        flex: 1;
        display: flex;
        padding: 8px 15px;
        height: 3.5rem;
        border-right: 1px solid #ededed;
        &:last-child {
          border-right: none;
        }
        .title {
          font-weight: bold;
          font-size: 1.2rem;
        }
        .desc {
          font-size: 0.8rem;
          color: #333;
        }
      }
    }
  }
}
</style>
