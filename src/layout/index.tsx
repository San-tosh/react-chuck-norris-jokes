import { Outlet } from 'react-router-dom';
import Header from "../components/Header/header.component";


const Layout = () => (
    <>
        <Header/>
        <Outlet />
    </>
);

export default Layout;
