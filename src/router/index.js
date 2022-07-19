import { createRouter, createWebHistory } from 'vue-router';

import ProductList from '../views/ProductList';
import ProductDetail from '../views/ProductDetail';
import ProductCreate from '../views/ProductCreate';
import ProductUpdate from '../views/ProductUpdate';
import SalesList from '../views/SalesList';
import ImageInsert from '../views/ImageInsert';
import store from '@/store';
import swal from 'sweetalert2';

//네비게이션 가드
const requireAuth = () => (to, from, next) => { //to: 가고자하는 위치, from: 현재 위치, next: 콜백함수
  if(store.state.user.iuser === undefined) {
    swal.fire('로그인이 필요합니다.', '', 'warning');
    return;
  }
  return next();
}

const routes = [  
  {
    path: '/',
    name: 'Home',    
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',    
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate,
    beforeEnter: requireAuth() //여기서 위치 체크 하기 때문에 to, from 안 써도 됨
  },
  {
    path: '/update',
    name: 'ProductUpdate',    
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'SalesList',    
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',    
    component: ImageInsert,
    beforeEnter: requireAuth()
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;