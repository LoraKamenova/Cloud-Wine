import './AsideItem.css'

const AsideItem = (props) => {
    return (
        <li className="aside-navigation-listItem">
            <a href="#" className="aside-navigation-link">{props.children}</a>
        </li>
    );
}

export default AsideItem;
