<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="myInfo">
        <p v-if="isHaveMobile">欢迎您，{{mobile}}</p>
        <p @click="goLogin" v-if="!isHaveMobile">登录</p>
    </div>
    <login v-if="isShowLogin"></login>
    <addTodo></addTodo>
    <addList></addList>
  </div>
</template>

<script>
import login from './components/login';
import addTodo from './components/addTodo';
import addList from './components/todoList';
export default {
  name: 'App',
  components:{
      login,
      addTodo,
      addList
  },
  data(){
    return {

    }
  },
  computed:{
      isShowLogin:function () {
          return this.$store.state.login.isShowLogin;
      },
      mobile:function(){
          return this.$store.state.login.mobile;
      },
      isHaveMobile:function(){
          let mobile = this.$store.state.login.mobile;
          if (mobile.length == 11) {
              return true;
          }else{
              return false;
          }
      },
  },
  methods:{
    goLogin:function () {
      this.$store.dispatch("showLogin",true)
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
