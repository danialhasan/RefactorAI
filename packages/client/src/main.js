import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './views/App.vue';
const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
