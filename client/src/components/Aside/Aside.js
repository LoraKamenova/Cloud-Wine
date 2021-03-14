import './Aside.css'
import AsideItem from "./AsideItem/AsideItem";
import Footer from "../Footer/Footer";

const Aside = () => {
    return (
        <aside className="aside-navigation-wrapper">

            <h1 className="site-name">Винoписи</h1>

            <div className="aside-navigation">
                <ul className="aside-navigation-list">
                    <AsideItem>НАЧАЛО</AsideItem>
                    <AsideItem>ЗА НАС</AsideItem>
                    <AsideItem>ЛОЗЯ</AsideItem>
                    <AsideItem>ГРОЗДЕ</AsideItem>
                    <AsideItem>ВИНО</AsideItem>
                    <AsideItem>БЪЧВИ</AsideItem>
                    <AsideItem>БУТИЛКИ</AsideItem>
                    <AsideItem>ДЕСТИНАЦИИ</AsideItem>
                    <AsideItem>ВИНОПИСИ</AsideItem>
                </ul>
            </div>

         <Footer />

        </aside>
    );
};

export default Aside;
