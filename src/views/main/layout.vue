<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 17:52:42
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

 
<template>
  <div class="G-home">
    <div class="top-nav">
      <router-link class="logo" to="/">
        <img src="@/assets/logo.png" />
      </router-link>
      <a class="github" href="https://github.com/FoneQinrf/vvmui" target="_blank">
        <Icon icon="icongithub" />
      </a>
    </div>
    <div class="G-body">
      <div class="left-nav-wrp">
        <div class="left-nav">
          <div v-for="(item,$index) in navList" :key="$index">
            <p class="title">{{item.name}}</p>
            <div v-for="sub_item in item.children" :key="sub_item.name">
              <div v-if="sub_item.children">
                <p class="sub_title">{{sub_item.name}}</p>
                <div v-for="options in sub_item.children" :key="options.name">
                  <router-link class="nav" :to="options.path">{{options.name}}</router-link>
                </div>
              </div>
              <router-link class="nav" v-else :to="sub_item.path">{{sub_item.name}}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="description">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
          <div style="height:20px;"></div>
        </div>
        <div class="demo-wrp">
          <mobileDemo></mobileDemo>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mobileDemo from "@/components/mobile-demo.vue";
import navList from "@/utils/navList";
export default {
  data() {
    return {
      navList: navList
    };
  },
  components: {
    mobileDemo
  }
};
</script>

<style lang="less" scoped>
.G-home {
  height: 100%;
  .top-nav {
    width: 100%;
    height: 54px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 4px 6px #e0e0eb;
    z-index: 10;
    background: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    align-items: center;
    .logo {
      height: 40px;
      img {
        height: 100%;
      }
    }
    .github{
      margin-left: 80px;
    }
  }
  .G-body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 60px;
    display: flex;
  }
  .left-nav {
    width: 200px;
    height: 100%;
    position: fixed;
    top: 58px;
    left: 0;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 66px;
    border-right: 1px solid #f2f2f4;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .left-nav-wrp {
    flex: 0 0 200px;
    overflow-y: auto;
    .title {
      font-size: 14px;
      font-weight: 550;
      color: #666;
      padding: 10px 0 10px 20px;
    }
    .sub_title {
      font-size: 12px;
      color: #999;
      padding: 10px 0 10px 24px;
    }
    .nav {
      display: block;
      font-size: 14px;
      color: #666;
      padding: 10px 0 10px 24px;
      text-decoration: none;
      &:hover {
        background: #f2f2f4;
      }
      &.router-link-active {
        color: #4d29e7;
      }
    }
  }
  .main {
    flex: 1 1 auto;
    display: flex;
    width: 100%;
  }
  .demo-wrp {
    flex: 0 0 320px;
    padding: 20px 40px;
    height: 568px;
  }
  .description {
    flex: 1 1 auto;
    padding: 16px 28px;
    box-sizing: border-box;
  }
}
</style>
<style scoped>
.description >>> h1,
.description >>> h2,
.description >>> h3,
.description >>> h4,
.description >>> h5 {
  margin: 16px 0;
  line-height: 1.5;
}
.description >>> p {
  color: #3f536e;
}
.description {
  color: #666;
}
.description >>> ul{
  padding-left: 20px;
}
.description >>> li{
  list-style-type: circle;
}
.description >>> blockquote{
  padding: 5px 0 5px 10px;
  margin: 15px 0;
  border-left: 3px solid #532FE6;
}
</style>
<style lang="less">
html,body{
    font-size: 14px;
}
.introduce {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: row;
  > div{
    flex: 1;
  }
  img{
    height: 40px;
  }
  .code{
    img{
      height: 120px;
      margin-top: 10px;
    }
  }
}
</style>