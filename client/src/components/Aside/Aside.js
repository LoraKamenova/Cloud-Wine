import './Aside.css'
import AsideItem from "./AsideItem/AsideItem";
import Footer from "../Footer/Footer";
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className="aside-navigation-wrapper">

            <h1 className="site-name">Винoписи</h1>

            <div className="aside-navigation">
                <ul className="aside-navigation-list">
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/"><AsideItem>НАЧАЛО</AsideItem></NavLink>
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/about"><AsideItem>ЗА НАС</AsideItem></NavLink>
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/vineyard"><AsideItem>ЛОЗЯ</AsideItem></NavLink>
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/grape"><AsideItem>ГРОЗДЕ</AsideItem></NavLink>
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/wine"><AsideItem>ВИНО</AsideItem></NavLink>
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/barrel"><AsideItem>БЪЧВИ</AsideItem></NavLink>
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/bottle"><AsideItem>БУТИЛКИ</AsideItem></NavLink>
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/destination"><AsideItem>ДЕСТИНАЦИИ</AsideItem></NavLink>
                    <NavLink activeClassName="selected-aside-item" exact={true} to="/journal"><AsideItem>ВИНОПИСИ</AsideItem></NavLink>
                </ul>
            </div>

         <Footer />

        </aside>
    );
};

export default Aside;
