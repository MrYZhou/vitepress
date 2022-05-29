import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

import { install } from 'element-plus'
import 'element-plus/dist/index.css'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

/**
 * 注册组件
 */
export function registeComponents(app) {
  install(app)
  app.component('Check',Check)
  .component('Delete',Delete)
  .component('Edit',Edit)
  .component('Message',Message)
  .component('Search',Message)
  .component('Star',Star)
  .component('Demo', Demo)
  .component('DemoBlock', DemoBlock)
  
}
