import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList.vue'
import Create from '../components/CreateTodo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    }
  ]
})