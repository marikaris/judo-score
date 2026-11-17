import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './i18n'

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(i18n).mount('#app')
