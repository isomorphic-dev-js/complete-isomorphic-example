import App from '../components/app';
import Cart from '../components/cart';
import Products from '../components/products';
import Profile from '../components/profile';
import Login from '../components/login';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Products
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/products',
        component: Products
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/login',
        component: Login
      }
    ]
  }
]

export default routes;
