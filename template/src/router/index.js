import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const ToDelete = {
  template: `<v-layout>
            <v-flex xs12 sm4 offset-sm3 pt-4>
              <v-card>
              <v-card-title class="headline mb-0" style="color:#0097c1">
                Time to code
              </v-card-title>
             </v-card>
             </v-flex>
             </v-layout>
              `
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: ToDelete
    }
  ]
})
