import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import './index.css'
import App from './App'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const rootRoute = createRootRoute({
  component: () => (
    <>
      {/* <div className="p-2 flex gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Budget Setup
        </Link>{' '}
        <Link to="/expenses" className="[&.active]:font-bold">
          Expenses
        </Link>
      </div>
      <hr /> */}
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return <App />
  },
})

const expensestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/expenses',
  component: function Expenses() {
    return <h1>Hello Expenses</h1>
  },
})

const routeTree = rootRoute.addChildren([indexRoute, expensestRoute])

const router = createRouter({ routeTree })

const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}