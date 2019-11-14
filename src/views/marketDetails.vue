<template>
  <div class="market-details">
    <h1 class="title text-center">{{marketDetails.title}}</h1>
    <h2
      class="sub-title text-center"
      v-if="marketDetails.subTitle?marketDetails.subTitle!=='':false"
    >{{marketDetails.subTitle}}</h2>
    <p class="page-view text-center">{{marketDetails.pageView|pvHandle}}</p>
    <p class="introduction">{{marketDetails.specialIntroduction}}</p>
    <p class="details">
      <img :src="marketDetails.details.imgUrl" alt />
      {{marketDetails.details.text}}
    </p>
    <div class="video">
      <!-- <iframe
        height="100%"
        width="100%"
        src="http://player.youku.com/embed/XMjk1NTcyMjMxMg?client_id=e59933616bcc704b&password=undefined&autoplay=true"
        frameborder="0"
        allowfullscreen
      ></iframe> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "marketDetails",
  data() {
    return {
      id: this.$route.query.id,
      marketDetails: {
        title: "体验精致居家生活",
        subTitle: "体验、精致、居家、生活",
        specialIntroduction:
          "现代人生活的越来越紧张，常常让身体处于疲惫的状态，雅致生活，功能至上、造型精美、工艺精湛的简约风格家具，犹如一股清风吹过般明快、洁净，让人倍感舒畅........",
        pageView: "1234",
        details: {
          imgUrl: "./static/img.jpg",
          text: "超完美简约精致之家完美简约精致之家 炫目的色彩，夸张的造型，精巧利落的线条，多种材质的混搭，这都是简约风格家具的标签。"
        },
        relatedBusiness: {
          videoUrl: "./static/video1.mp4",
          relatedImgTitle: "次标题",
          relatedImgUrl: "外联图片路径",
          specialTitle: "专题名称",
          specialImg: "专题图片",
          specialToUrl: "点击专题图片跳转路径"
        },
        currentSpecialInfo: {
          specialId: "当前专题的Id",
          isFavorite: "是否已经收藏"
        },
        nextSpecialInfo: {
          nextSpecialTitle: "下一个专题的标题",
          nextSpecialId: "下一个专题的ID",
          nextSpecialUrl: "下一个专题的Url地址"
        }
      }
    };
  },
  created() {
    console.log(this.id)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./../style/mixin.less";
.market-details {
  padding: 42.5 * @wu 15 * @wu 14.6 * @wu;
  background: #fff;
  .title {
    margin-bottom: 12.5 * @wu;
    line-height: 1;
    font-size: 30 * @wu;
    color: #333;
  }
  .sub-title {
    font-size: 26 * @wu;
    line-height: 1;
    color: #333;
  }
  .page-view {
    margin: 12.5 * @wu 0 12.9 * @wu;
    font-size: 17.5 * @wu;
    color: #333;
    &:before {
      content: "";
      display: inline-block;
      margin-top: 6.5 * @wu;
      margin-right: 8.5 * @wu;
      width: 24.5 * @wu;
      height: 16 * @wu;
      background: url("../assets/pvDetail-icon.png") no-repeat;
      background-size: 100% 100%;
    }
  }
  .introduction,
  .details {
    line-height: 1.67;
    font-size: 22.5 * @wu;
    color: #333;
  }
  .video {
    width: 510 * @wu;
    height: 340 * @wu;
  }
}
</style>
