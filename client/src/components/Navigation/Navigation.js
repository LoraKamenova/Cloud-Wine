import './Navigation.css'
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {
    return (
        <nav className="bottom-navigation">
           <ul className="bottom-navigation-list">
               <NavigationItem>ЗА НАС</NavigationItem>
               <NavigationItem>ЛОЗЯ</NavigationItem>
               <NavigationItem>ГРОЗДЕ</NavigationItem>
               <NavigationItem>ВИНО</NavigationItem>
               <NavigationItem>БЪЧВИ</NavigationItem>
               <NavigationItem>БУТИЛКИ</NavigationItem>
               <NavigationItem>ДЕСТИНАЦИИ</NavigationItem>
               <NavigationItem>ВИНОПИСИ</NavigationItem>
               {/*<NavigationItem>ВХОД</NavigationItem>*/}
               {/*<NavigationItem>РЕГИСТРАЦИЯ</NavigationItem>*/}
           </ul>
        </nav>
    );
};

export default Navigation;
