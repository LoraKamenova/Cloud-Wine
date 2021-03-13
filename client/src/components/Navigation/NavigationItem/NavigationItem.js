import './NavigationItem.css'

const NavigationItem = (props) => {
    return (
        <li className="bottom-navigation-listItem">
            <a href="#" className="bottom-navigation-link">{props.children}</a>
        </li>
    );
}

export default NavigationItem;
