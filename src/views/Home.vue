<template>
  <div class="home">
    <div class="l_body">
      <div class='container clearfix'>
        <div class='l_main'>
          <section class="post-list">
            <div v-for="i in list" :key="i.bID" class='post-wrapper'>
              <article class="post ">
                <section class="meta">
                  <h2 class="title">
                    <router-link :to="'/content/' + i.bID">
                      {{ i.btitle }}
                    </router-link>
                  </h2>
                  <time>
                    {{i.bCreateTime}}
                  </time>
                  <div class='cats'>
                    <a href="javascript:void(0)">{{i.bsubmitter}}</a>
                  </div>
                </section>
                <section class="article typo">
                  <article v-html="i.bcontent"></article>
                  <div class="readmore">
                    <a href="/dotnet/asp.net core???????????/">查看更多</a>
                  </div>
                  <div class="full-width auto-padding tags">
                    <a href="javascript:void(0);">{{i.bcategory}}</a>
                  </div>
                </section>
              </article>
            </div>
          </section>


          <nav id="page-nav">
            <router-link :to="'/?page=' + (page>1?page-1:1)" class="prev" rel="prev">
              {{(page <= 1 ? "": "Previous")}}
            </router-link>
            <router-link :to="'/?page=' + (page>=TotalCount? TotalCount: page+1)" class="next" rel="next">
              {{(page >= TotalCount? "": "Next")}}
            </router-link>

          </nav>


        </div>
        <aside class='l_side'>


          <section class='m_widget categories'>
            <div class='header'>标签</div>
            <div class='content'>

              <ul class="entry">

                <li><a class="flat-box" href="javascript:void(0);">
                  <div class='name'>博客</div>
                  <div class='badget'>11</div>
                </a></li>

                <li><a class="flat-box" href="javascript:void(0);">
                  <div class='name'>随笔</div>
                  <div class='badget'>10</div>
                </a></li>

              </ul>

            </div>
          </section>

        </aside>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import  request from '@/api/http'
@Component
export default class Home extends Vue {

private page = 1;
private TotalCount = 1;
private isShow = true;
private list = [];

created() {
  this.getData()
}

getData() {
   //this.page = parseInt(this.$route.query.page.toString())
   request({
     url:'/Blog',
   }).then( (res: any) => {
        this.list = res
        this.page = 1
        this.TotalCount = 1
        this.isShow= false

   }).catch((err: any) => {
       console.log('Error',err)
   });
}

@Watch('$route')
routeChange(to:any,from:any){
     this.list = []
     this.isShow = true
     this.page = to.query.page
     this.getData()
}


}
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.viewmore-row {
  float: right;
  background: #12b7de;
  color: #fff;
  border-radius: 3px;
  padding: 0px 10px;
  height: 30px;
}
.bg-purple {
  background: #eaeaea;
  -webkit-animation: loading 1s ease-in-out infinite;
  animation: loading 1s ease-in-out infinite;
}
@keyframes loading {
  0% {
    width: 90%;
  }
  50% {
    width: 100%;
  }
  to {
    width: 90%;
  }
}
[v-cloak] {
  display: none !important;
}
</style>