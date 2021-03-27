import './Start.css'
import Header from "../Navigation/Header/Header";

import {Component} from 'react';

class Start extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="start-section">
                <div className="header-container">
                    <Header/>
                </div>
            </section>
        )
    }
}

export default Start;
