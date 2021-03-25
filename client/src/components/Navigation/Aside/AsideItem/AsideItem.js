import './AsideItem.css'

const AsideItem = (props) => {
    return (
        <li className="aside-navigation-listItem">
            <span className="aside-navigation-link">{props.children}</span>
        </li>
    );
}

export default AsideItem;
