import './WineList.css'
import WineCard from "./WineCard/WineCard";
import {Link} from "react-router-dom";
import {Component} from 'react';
import * as wineService from "../../services/wineService";

class WineList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allWines: []
        }
    }

    componentDidMount() {
        wineService.getAllWines()
            .then(res => this.setState({allWines: res}))
    }

    render() {
        return (
            <section className="wine-list-section">
                <div className="wine-list-wrapper">

                    <div className="wine-list-header">
                        <span className="wine-list-heading">Всички вина</span>
                        <Link to="/topWines">
                            <span className="top-wines-heading-button">Избрано</span></Link>
                    </div>

                    <div className="all-wines-container">

                        {this.state.allWines.map(x =>

                            <Link key={x.id} {...x} to={`/wineList/details/${x._id}`}>
                                <WineCard
                                    name={x.name}
                                    imageUrl1={x.imageUrl1}
                                />
                            </Link>
                        )}

                    </div>
                    <div className="wine-list-button-wrapper">
                        <Link className="button new-item-button" to="/add-wine-item">Ново вино<i className="fas fa-check"></i></Link>
                    </div>

                </div>
            </section>
        )
    }
}

export default WineList;
