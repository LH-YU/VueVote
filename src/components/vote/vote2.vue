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
        <span
          class="ins"
        >瓦房店华太百樂健身“巴西柔术达人”投票活动开始啦，为您支持的选手投上宝贵的一票吧！第一名将获得价值860元的格雷西巴哈战队道服一套！活动截止至8月20日！</span>
      </div>
      <br>

      <div v-for="(item,index) in list" :key="item.id">
        <img width="100%" alt="Vue logo" :src="item.playImg">
        <!-- <span style="color: #999; fontSize: 12px">测试投票</span> -->
        <h3 style="text-align:left;display:flex;align-items:center">
          <span class="serialNumber">{{index+1}}</span>
          {{item.playName}}
          <span style="margin-left:10px">{{item.voteNum}}票</span>
        </h3>
        <div class="vote" @click="vote(item.id)" v-if="!item.isVote">投票</div>
        <div class="vote" style="background:#acacac;border-color:#acacac"  v-else>已投票</div>
      </div>
      <div>
        <!-- <h3 class="h">活动说明</h3> -->
        <span style="color: #999; fontSize: 12px">
          百樂健身位于华太购物广场三楼，营业面积3300平方米，内设有瓦房店第一家高端格斗技巴西柔术（少儿、成人），上百种操课，力量、体适能区，乒乓球等等，开车的朋友可享受3小时免费停车
          <br>联系电话于先生：15904247436
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import moment from "moment"
import { Toast } from 'mint-ui';
export default {
  name: "slider",
  props: {
    msg: String,
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
      list: [
        // {id:1,playImg:require("../../assets/songxianggui.jpg"),playName:"周文龙",isVote:true,voteNum:100}
      ], //数据
      cookieVote:"",
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.isVote()//获取cookie
    this.getList();
  },
  methods: {
    //判断是否存在cookie
    isVote(){
      if(this.getCookie('cookieVote')){
        //存在  投过票了
        this.cookieVote=this.getCookie('cookieVote')
      }else{
        //不存在
        let cookie=this.randomString(32)
        console.log("不存在:",cookie)
        this.setCookie('cookieVote',cookie)
        this.cookieVote=this.getCookie('cookieVote')
        // alert("不存在cookie")

      }
    },
    //获取数据
    getList() {
      this.$axios.post("/vote/list", {userName:this.cookieVote}).then(res => {
        if (res.code == 0) {
          this.list = res.result;
        }
      });
    },
    //投票
    vote(id) {
      this.$axios
        .post("/vote/vote", {
          playerId: id,
          userName: this.cookieVote,
        })
        .then(res => {
          if (res.code == 0) {
            this.getList();
          }else if (res.code==100001) {
            console.log("提示")
            Toast('您今天已经投过了,请明天再来');
          }
        });
    },
    //获取cookie
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

      if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
      //转码  应对:有中文的情况等
      else return null;
    },
    //设置cookie
    setCookie(name, value,day=30) {
      var exp = new Date();
      var newValue=moment().valueOf();//当前时间的时间戳
      var targetTime=moment(moment().format("YYYY-MM-DD")+' 23:59:59').valueOf();//当天23:59:59 的时间戳
      console.log(newValue,targetTime)
      var diff=targetTime-newValue
      console.log(diff)

      exp.setTime(exp.getTime() + diff);
      document.cookie =
        name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    //随机生成32位字符串
    randomString(len) {
      len = len || 32;
      var $chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
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
.serialNumber{
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border: 1px solid red;
  border-radius: 50%;
  display: inline-block;
  font-size: 14px;
  margin-right: 10px;
}
</style>


