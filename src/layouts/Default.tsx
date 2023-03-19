import { Outlet } from "react-router-dom";
import { SideBar } from "../components/sideBar/SideBar";

export function Default(){

  return (
    <div className='layout'>
    <SideBar />

    <div className="content">
        <Outlet/>
      
    </div>
  </div>
  )
}