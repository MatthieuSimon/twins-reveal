import BlackAndWhiteView from '@/pages/BlackAndWhiteView.vue'
import CongratulationsView from '@/pages/CongratulationsView.vue'
import RevealOneView from '@/pages/RevealOneView.vue'
import SudokuView from '@/pages/SudokuView.vue'
import ThePriceIsRightView from '@/pages/ThePriceIsRightView.vue'
import WelcomeView from '@/pages/WelcomeView.vue'
import WordleView from '@/pages/WordleView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: WelcomeView },
    { path: '/the-price-is-right', component: ThePriceIsRightView },
    { path: '/black-and-white', component: BlackAndWhiteView },
    { path: '/wordle', component: WordleView },
    { path: '/reveal-one', component: RevealOneView },
    { path: '/sudoku', component: SudokuView },
    { path: '/congratulations', component: CongratulationsView },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
