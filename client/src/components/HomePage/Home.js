import './Home.css'

import {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="home-section">
                <div className="home-content-wrapper">
                    <div className="home-content-container">
                        <div className="heading-wrapper">
                            <h3 className="home-page-subheading">Добре дошли във</h3>
                            <h1 className="home-page-heading">Винописи</h1>
                        </div>
                        <p className="home-page-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus pulvinar tellus nec ante volutpat, vel commodo nisl aliquam. Maecenas nec
                            malesuada risus, ut maximus libero. Aliquam bibendum sollicitudin nibh, ac vehicula leo
                            maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo. Aliquam
                            bibendum
                            sollicitudin nibh, ac vehicula leo
                            maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;
