<template>
  <div id="app" >
              <div class="header-wapper">
                  <header class="header header-fixed">
                      <div class="container">
                          <h1><a href="javascript:;">ElementUI-QuickStart</a></h1>
                          <ul class="nav">
                            <li class="nav-item">
                                <router-link activeClass="active" to="/main" tag="a">
                                    Main
                                </router-link>
                                </li>
                                <li class="nav-item">
                                <router-link activeClass="active" to="/list" tag="a">
                                    List
                                </router-link>
                                </li>
                                <li class="nav-item">
                                <router-link activeClass="active" to="/hot" tag="a">
                                    Hot
                                </router-link>
    </li>
                          </ul>
                      </div>
                  </header>
              </div>
              <div class="main-center">
                  <div class="page-container">
                    <transition name="fade" mode="out-in">
                            <router-view></router-view>
                    </transition>
                  </div>
              </div>
          </div >
</template>

<script>
import Hello from './components/Hello'
import "./App.css"


export default {
  components: {
      'Hello':Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
