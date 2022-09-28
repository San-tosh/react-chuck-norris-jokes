import { Outlet } from 'react-router-dom';
import Header from "../components/header/header";
import SearchSection from "../components/search-section/search-section.component";
import Footer from "../components/footer/footer.component";


const Layout = () => (
    <>
        <Header/>
        <SearchSection/>
        <Outlet />
        <Footer/>
    </>
);

export default Layout;
