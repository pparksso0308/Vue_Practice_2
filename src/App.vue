<template>
  <div id="app">
    <search-bar v-on:changekeyword=sendkeyword> </search-bar>
    <!--<naver-list v-bind:top="title" v-bind:links="link" ></naver-list>-->
    <naver-list v-bind:tophun="tophun" ></naver-list>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import cleanStr from './add_js/cleanString'
  import NaverList from './components/NaverList'
  import axios from 'axios'
  import SearchBar from './components/SearchBar'

  let clientId = "skT9RB_R_R0jW8tjJU9U";
  let clientSecret = "oDQ6ve_6dH";


  export default {
    name: 'App',
    comments: {
      NaverList
    },
    data() {
      return {
        title: [],
        link: [],
        tophun: [],
        parentkeyword: "세종대"
      }
    },
    mounted() {
      this.search();
    },
    methods: {
      search: function () {
        axios({
          method: "get",
          url: "/naversearch",
          params: {
            query: this.parentkeyword,
            display: "100"
          },
          crossDomain: true,
          headers: {
            "X-Naver-Client-Id": clientId,
            "X-Naver-Client-Secret": clientSecret
          }
        }).then((result) => {
          //console.log(result.data.items[50]);
          let news = result.data.items;
          for (let i in news) {
            var tmp = {
              title: cleanStr(news[i].title, "title"),
              link: (news[i].originallink)
            };
            this.tophun.push(tmp);
          }
        })
      },
      sendkeyword: function(val){
        this.tophun=[];
        this.parentkeyword=val;
        this.search();
      }
    },

    components: {
      NaverList,
      SearchBar,
      HelloWorld
    }
  }
</script>

<style>
  #app {
    width: 1000px;
    margin: 10px auto;
  }
</style>
