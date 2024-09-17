import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import appRouter from './routes'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(appRouter)
app.mount('#app')
// createApp(App).use(appRouter).mount('#app')

