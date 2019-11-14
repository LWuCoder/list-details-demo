<template>
  <div class="market">
    <scroller
    :on-refresh="refresh"
    :on-infinite="infinite"
    ref="marketScroller">
    <ul class="market-list">
      <li class="market-item" v-for="item in marketList" :key="item.id" @click="toDetails(item.id)">
        <div class="market-pic">
          <img  class="market-img" :src="item.listImg" alt="">
          <span class="market-pageView">{{item.pageView|pvHandle}}</span>
        </div>
        <h1 class="tit">{{item.tit|titleHandle}}</h1>
        <h2 class="sub-tit">{{item.subTit|titleHandle}}</h2>
      </li>
    </ul>
    </scroller>
  </div>
</template>

<script>
export default {
  name: "marketList",
  data() {
    return {
      marketList: [
        {
          id: 0,
          listImg: "./static/img.jpg",
          tit: "体验精致居家生活",
          subTit: "体验、精致、居家、生活",
          pageView: 999
        },
        {
          id: 1,
          listImg: "./static/img.jpg",
          tit: "体验精致居家生活",
          subTit: "体验、精致、居家、生活体验",
          pageView: 1450
        },
        {
          id: 2,
          listImg: "./static/img.jpg",
          tit: "体验精致居家生活",
          subTit: "生活体验、精致、居家、生活",
          pageView: 18888
        }
      ],
      isNoDataToRender: false // 渲染完成后调用下拉刷新，下拉加载
    };
  },
  methods: {
    // 跳转专题详情
    toDetails(id) {
      this.$router.push({ path: "/details", query: { id: id } });
    },
    // 下拉刷新
    refresh(done) {
      this.isNoDataToRender = false;
      setTimeout(() => {
        var newData = [
          {
            id: 0,
            listImg: "./static/img.jpg",
            tit: "下拉刷新",
            subTit: "下拉刷新下拉刷新",
            pageView: 17777
          },
          {
            id: 1,
            listImg: "./static/img.jpg",
            tit: "下拉刷新",
            subTit: "下拉刷新下拉刷新",
            pageView: 8888
          },
          {
            id: 2,
            listImg: "./static/img.jpg",
            tit: "下拉刷新",
            subTit: "下拉刷新下拉刷新",
            pageView: 666
          }
        ];
        this.marketList = newData;
        this.isNoDataToRender = true;
        done();
      }, 600);
    },
    // 上拉加载更多
    infinite(done) {
      setTimeout(() => {
        if (this.marketList.length >= 5) {
          setTimeout(() => {
            done(true);
          }, 300);
          return;
        } else {
          var appendData = {
            id: 99,
            listImg: "./static/img.jpg",
            tit: "上拉加载更多",
            subTit: "上拉加载更多",
            pageView: 1222
          };
          this.marketList.push(appendData);
          done();
        }
      }, 300);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./../style/mixin.less";
.market {
  .market-list {
    .market-item {
      margin-bottom: 15*@wu;
      padding: 15*@wu 15*@wu 25*@wu;
      background-color: #fff;
      .market-pic {
        position: relative;
        .market-img {
          width: 510*@wu;
          height: 340*@wu;
          background-color: #fff;
        }
        .market-pageView {
          position: absolute;
          top: 0;
          left: 0;
          width: 99.5*@wu;
          height: 29*@wu;
          line-height: 29*@wu;
          vertical-align: middle;
          text-align: center;
          font-size: 17.5*@wu;
          color: #fff;
          background-color: rgba(34, 34, 34, 0.2);
          &:before {
            content: "";
            display: inline-block;
            margin-top: 6.5*@wu;
            margin-right: 8.5*@wu;
            width: 24.5*@wu;
            height: 16*@wu;
            background: url("../assets/pv-icon.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .tit {
        margin: 25*@wu 0 15*@wu;
        font-size: 30*@wu;
        color: #333;
      }
      .sub-tit {
        font-size: 26*@wu;
        color: #333;
      }
    }
  }
}
</style>
