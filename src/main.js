import Vue from "vue";
import App from "./App.vue";
//on importe le plugin veeValidate
import VeeValidate from "vee-validate";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VeeValidate);
new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
