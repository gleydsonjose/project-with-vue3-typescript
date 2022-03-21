import Home from '@/modules/home/Home.vue'
import Benefit from '@/modules/benefit/Benefit.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/benefit/:name',
    component: Benefit,
    name: 'Benefit'
  }
]

export default routes