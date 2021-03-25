import './TopWines.css'
import WineCard from "../WinelistPage/WineCard/WineCard";
import {Link} from "react-router-dom";
import {Component} from 'react';
import * as wineService from "../../../services/wineService";

class TopWines extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topWines: [],
        }
    }

    componentDidMount() {
        wineService.getTopWines()
            .then(res => this.setState({topWines: res}))
    }

    render() {
        return (

            <section className="top-wines-section">
                <div className="top-wines-wrapper">

                    <div className="top-wines-header">
                        <span className="top-wines-heading">Избрано</span>
                        <Link to="/wineList">
                            <span className="all-wines-heading-button">Всички вина</span></Link>
                    </div>

                    <div className="top-wines-container">

                        {this.state.topWines.map(x =>

                            <Link key={x.id} {...x} to={`/wineList/details/${x._id}`}>
                                <WineCard
                                    name={x.name}
                                    imageUrl1={x.imageUrl1}
                                />
                            </Link>
                        )}
                    </div>

                </div>
            </section>
        );
    }
}

export default TopWines;
