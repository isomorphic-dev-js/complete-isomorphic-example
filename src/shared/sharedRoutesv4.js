import App from '../components/app';
import Cart from '../components/cart';
import Products from '../components/products';
import Profile from '../components/profile';
import Login from '../components/login';
import ProductList from '../components/productList';
import Detail from '../components/detail';
import Payment from '../components/payment';

//TODO: in the docs put...
// const routes = [
//   {
//     component: App,
//     routes:[...]
//   }
// ]

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
        path: '/cart/payment',
        component: Payment
      },
      {
        path: '/products',
        component: Products,
        exact: true
      },
      {
        path: '/products/:category',
        component: ProductList
      },
      {
        path: '/product/detail/:product',
        component: Detail
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

if (process.env.NODE_ENV !== 'production') {
  routes[0].routes.push({
    path: '/dev-test',
    component: Products
  });
}

export { routes };

export default routes;
