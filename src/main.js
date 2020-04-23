import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store/store';
import VueResource from 'vue-resource';

import {routes} from './routes';
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.option.root = 'https://stock-tutorial-3706a.firebaseio.com/';

Vue.filter('currency', (value)=>{
    return `$ ${value.toLocaleString()}`;
})

const router = new VueRouter({
    mode: 'history',
    routes
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
