import './NavigationItem.css'

const NavigationItem = (props) => {
    return (
        <li className="bottom-navigation-listItem">
            <span className="bottom-navigation-link">{props.children}</span>
        </li>
    );
}

export default NavigationItem;
