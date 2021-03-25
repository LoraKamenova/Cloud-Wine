import './AllJournals.css'
import JournalCard from "./JournalCard/JournalCard";
import { Link } from "react-router-dom";
import { Component } from 'react';
import * as journalService from "../../../services/journalService";

class MyJournals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myJournals: [],
        }
    }

    componentDidMount() {
        journalService.getMyJournals("605915d4fc52ec4f28275b22")
            .then(res => this.setState({myJournals: res}))
    }

    render() {
        return (

            <section className="journals-section">

                <div className="all-journals-wrapper">

                    <img className="peg-image"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615730431/React%20Project/new_gt98oa.png"
                         width="300px" height="50px" alt="pegs"/>
                    <div className="all-journals-header">Моите пътеписи</div>

                    <div className="all-journals-container">

                        {this.state.myJournals.map(x =>

                            <Link key={x.id} {...x} to={`/journal/details/${x._id}`}>
                                <JournalCard
                                    title={x.title}
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

export default MyJournals;
