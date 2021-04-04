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
Това е споделено пространство за любителите на винения туризъм. Тук можете да намерите идеи за вашата следваща винена дестинация в България, а след това да ни разкажете за вашите преживявания и впечатления. Имаме и внимателно селектиран винен лист с български вина, заслужаващи вашето внимание, а нашият винен речник винаги е на разположение за обогатяване на вашата обща култура на тема вино.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;
