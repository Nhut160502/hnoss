import { Category, Home, Product } from './pages'

export const routes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/c',
    element: Category,
  },
  {
    path: '/p',
    element: Product,
  },
]
