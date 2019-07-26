<template>
  <div>
    <div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <img :src="slide" width="100%" height="200px" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div>
      <h1 class="h">{{ msg }}</h1>
      <div>
        <span class="ins">测试投票测试投票测试投票测试投票测试投票测试投票测试投票测试投票测试投票测试投票</span>
      </div>
      <br />

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/baodong.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">鲍冬</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/bicongwen.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">毕聪文</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/haiyang.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">海洋</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/kexin.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">可心</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/liukangkang.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">刘康康</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/rouganwang.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">肉干王</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/songcheng.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">宋丞</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/songxianggui.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">宋香归</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/wangboxin.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">王博新</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/wangmaowen.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">王茂文</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/wangshizhen.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left">王世臻</h3>
        <div class="vote">投票</div>
      </div>

      <div>
        <img width="100%" alt="Vue logo" src="../../assets/xinkeshuo.jpg" />
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
      </div>
      <h3 style="text-align:left">辛柯硕</h3>
      <div class="vote">投票</div>
    </div>

    <div>
      <img width="100%" alt="Vue logo" src="../../assets/xinkeyu.jpg" />
      <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
      <h3 style="text-align:left">辛柯禹</h3>
      <div class="vote">投票</div>
    </div>

    <div>
      <img width="100%" alt="Vue logo" src="../../assets/yezhiyu.jpg" />
      <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
      <h3 style="text-align:left">叶致语</h3>
      <div class="vote">投票</div>
    </div>

    <div>
      <h3 class="h">活动说明</h3>
      <span style="color: #999; fontSize: 12px">测试投票测试投票测试投票测试投票测试投票测试投票测试投票测试投票测试投票测试投票</span>
    </div>
    
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "slider",
  props: {
    msg: String,
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    }
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
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
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
.h{
  margin: 20px auto;
}
</style>


