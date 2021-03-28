import './ErrorPage.css'

import {Component} from 'react';

class ErrorPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="error-section">
                    <img className="error-picture" alt="error picture" src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616938150/React%20Project/error_w7wdif.gif"></img>
            </section>
        )
    }
}

export default ErrorPage;
