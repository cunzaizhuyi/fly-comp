import DefaultTheme from 'vitepress/theme'
import PrimeVue from 'primevue/config'
import DemoContainer from '../components/DemoContainer.vue'
import FlyComp from 'fly-comp'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PrimeVue)
    app.use(FlyComp)
    app.component('DemoContainer', DemoContainer)
  }
}
