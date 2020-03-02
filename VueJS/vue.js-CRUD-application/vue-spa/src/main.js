import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes';
import VueRouter from 'vue-router';
// import 'bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
 

 
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})