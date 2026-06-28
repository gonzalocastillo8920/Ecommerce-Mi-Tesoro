import { Outlet } from "react-router"
import Header from "./components/Header"
import MainLayout from "./components/MainLayout"
import Footer from "./components/Footer"


function Layout() {
  return (
    <>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Footer/>
    </>
  )
}

export default Layout