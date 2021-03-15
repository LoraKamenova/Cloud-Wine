import './Navigation.css'
import NavigationItem from "./NavigationItem/NavigationItem";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="bottom-navigation">
           <ul className="bottom-navigation-list">
               {/*<NavigationItem>За нас</NavigationItem>*/}
               {/*<NavigationItem>Лозя</NavigationItem>*/}
               {/*<NavigationItem>Грозде</NavigationItem>*/}
               {/*<NavigationItem>Вино</NavigationItem>*/}
               {/*<NavigationItem>Бъчви</NavigationItem>*/}
               {/*<NavigationItem>Бутилки</NavigationItem>*/}
               {/*<NavigationItem>Дестинации</NavigationItem>*/}
               {/*<NavigationItem>Винописи</NavigationItem>*/}
               <Link exact={true} to="/login"><NavigationItem>ВХОД</NavigationItem></Link>
               <Link exact={true} to="/register"><NavigationItem>РЕГИСТРАЦИЯ</NavigationItem></Link>
           </ul>
        </nav>
    );
};

export default Navigation;
