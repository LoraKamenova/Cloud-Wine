import './Navigation.css'
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {
    return (
        <nav className="bottom-navigation">
           <ul className="bottom-navigation-list">
               <NavigationItem>За нас</NavigationItem>
               <NavigationItem>Лозя</NavigationItem>
               <NavigationItem>Грозде</NavigationItem>
               <NavigationItem>Вино</NavigationItem>
               <NavigationItem>Бъчви</NavigationItem>
               <NavigationItem>Бутилки</NavigationItem>
               <NavigationItem>Дестинации</NavigationItem>
               <NavigationItem>Винописи</NavigationItem>
               {/*<NavigationItem>ВХОД</NavigationItem>*/}
               {/*<NavigationItem>РЕГИСТРАЦИЯ</NavigationItem>*/}
           </ul>
        </nav>
    );
};

export default Navigation;
