import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../components/Notfound.vue'
import Home from '../views/Home.vue'
import Practices from '../views/Practices.vue'
import ListMovies from '../views/ListMovies.vue'
import AddMovies from '../views/AddMovies.vue'
import EditRating from '../views/EditRating.vue'
import RemoveMovies from '../views/RemoveMovies.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/:catchNotMatchPath(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/practices',  
    name: 'Practices',
    component: Practices
  },
  {
    path: '/list-moives',
    name: 'ListMoive',
    component: ListMovies
  },
  
  {
    path: '/add-movies',  
    name: 'AddMovie',
    component: AddMovies
  },
  {
    path: '/edit-movies/:moiveId',  
    name: 'EditRating',
    component: EditRating
  },
  {
    path: '/remove-movies',  
    name: 'RemoveMovie',
    component: RemoveMovies
  }
]

const router = createRouter({ history, routes })
export default router