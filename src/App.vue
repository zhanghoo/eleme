<style rel="stylesheet/scss" lang="scss">
@import "common/scss/index";

.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  @include border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    flex: 1;
    text-align: center;
    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20)
      }
    }
  }
}
</style>
<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>

<script>
import header from '@/components/header/header.vue';
import goods from '@/components/goods/goods.vue';
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    axios.get('static/data.json').then((res) => {
      this.seller = res.data.seller;
    });
  },
  components: {
    'v-header': header,
    goods
  }
}
</script>

