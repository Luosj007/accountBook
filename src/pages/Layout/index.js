import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getBillList } from "@/store/modules/billStore"

const Layout = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBillList())
  },[dispatch])
  return (
    <div>
      <Outlet/>
      我是首页一级路由
      <Button color="primary">测试全局</Button>
      <div className="puple">
        <Button color="primary">测试局部</Button>
      </div>
     
    </div>
  )
}

export default Layout