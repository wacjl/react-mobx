import { renderRoutes } from 'react-router-config'
import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import asyncComponent from '../components/asyncComponent'
const Login=asyncComponent(()=>(import('../container/login')))
const Account=asyncComponent(()=>(import('../container/account')))
const Root = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
)

const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Login
      },
      { path: '/account',
        component: Account,
      }
    ]
  }
]

const Main=()=>{
	  return (
	  	<BrowserRouter>
		    {/* kick it all off with the root route */}
		    {renderRoutes(routes)}
		  </BrowserRouter>
	  )
}

export default Main