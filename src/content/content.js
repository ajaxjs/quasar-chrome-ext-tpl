const root = document.createElement("div");
root.id = "extension-root";
document.body.append(root);


import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#extension-root')