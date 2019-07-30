<template>
  <div>
    <div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <img :src="slide" width="100%" height="200px">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div style="padding-bottom:30px">
      <h1 class="h">{{ msg }}</h1>
      <div>
        <span class="ins">瓦房店华太百樂健身“巴西柔术达人”投票活动开始啦，为您支持的选手投上宝贵的一票吧！第一名将获得价值860元的格雷西巴哈战队道服一套！活动截止至8月16日！</span>
      </div>
      <br>

      <div v-for="item in list" :key="item.id">
        <img width="100%" alt="Vue logo" :src="item.playImg">
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">
          {{item.playName}}

          <span style="margin-left:10px">{{item.voteNum}}</span>
          </h3>
        <div class="vote">投票</div>
      </div>
      <div>
      <!-- <h3 class="h">活动说明</h3> -->
      <span style="color: #999; fontSize: 12px"> 
        百樂健身位于华太购物广场三楼，营业面积3300平方米，内设有瓦房店第一家高端格斗技巴西柔术（少儿、成人），上百种操课，力量、体适能区，乒乓球等等，开车的朋友可享受3小时免费停车
        <br>
        联系电话于先生：15904247436
</span>
    </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "slider",
  props: {
    msg: String
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSlides: [
        require("../../assets/banner1.jpg"),
        require("../../assets/introduce1.jpg"),
        require("../../assets/introduce2.jpg"),
        require("../../assets/introduce3.jpg"),
        require("../../assets/introduce4.jpg"),
        require("../../assets/introduce5.jpg"),
        require("../../assets/introduce6.jpg")
      ],
      list:[],//数据
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    // console.log(wx)
    wx.ready(function() {
      //需在用户可能点击分享按钮前就先调用
      wx.updateAppMessageShareData({
        title: "测试一下", // 分享标题
        desc: "测试测试测试测试", // 分享描述
        link: "", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "", // 分享图标
        success: function() {
          // 设置成功
        }
      });
    });
    this.getList();
  },
  methods: {
    //获取数据
    getList() {
      this.$axios.post("/vote/list",{}).then(res => {
        if (res.code==0) {
            this.list=res.result
        }
      });
    },
    //投票
    voting() {}
  }
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
.vote {
  width: 50%;
  height: 40px;
  margin: 15px auto;
  border-radius: 60px;
  border: 1px solid red;
  text-align: center;
  line-height: 40px;
}
.ins {
  color: rgb(153, 153, 153);
  font-size: 15px;
}
.h {
  margin: 20px auto;
}
</style>


