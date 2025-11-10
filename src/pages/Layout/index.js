import { Outlet } from "react-router-dom"

const Layout = ()=>{
  return (
    <div>
      <Outlet/>
      我是首页一级路由

    </div>
  )
}

export default Layout