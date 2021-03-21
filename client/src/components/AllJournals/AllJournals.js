import './AllJournals.css'
import JournalCard from "./JournalCard/JournalCard";
import {Link} from "react-router-dom";
import {Component} from "react/cjs/react.production.min";
import * as journalService from "../../services/journalService";

class AllJournals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            journals: [],
        }
    }

    componentDidMount() {
        journalService.getAll()
            .then(res => this.setState({journals: res}))
    }

    render() {
        return (

            <section className="journals-section">

                <div className="all-journals-wrapper">

                    <img className="peg-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615730431/React%20Project/new_gt98oa.png"
                         width="300px" height="50px"/>
                    <div className="all-journals-header">Всички пътеписи</div>

                    <div className="all-journals-container">

                        {this.state.journals.map(x =>

                            <Link key={x.id} {...x} to={`/journals/details/${x._id}`}>
                                <JournalCard
                                    title={x.title}
                                    imageUrl1={x.imageUrl1}
                                />
                            </Link>

                        )}

                    </div>
                    <div className="all-journals-button-wrapper">
                        <Link className="button my-items-button" href="#">Моите пътеписи<i className="fas fa-heart"></i></Link>
                        <Link className="button new-item-button" to="/add-journal">Нов пътепис<i
                            className="fas fa-check"></i></Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default AllJournals;
