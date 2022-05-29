

import { registeComponents } from './register.ts'

import Layout from './Layout.vue'
import './index.scss'

export default {
  Layout,
  enhanceApp({ app }) {
    registeComponents(app)
  }
}

