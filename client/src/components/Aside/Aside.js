import './Aside.css'
import AsideItem from "./AsideItem/AsideItem";

const Aside = () => {
    return (
        <aside className="aside-navigation">
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
        </aside>
    );
};

export default Aside;
