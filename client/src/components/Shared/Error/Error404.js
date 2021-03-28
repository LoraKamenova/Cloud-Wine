import './Error404.css'

import {Component} from 'react';

class Error404 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="error-404-section">
                    <img className="error-404-picture"
                         alt="error404"
                         src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616938150/React%20Project/error_w7wdif.gif">
                    </img>
            </section>
        )
    }
}

export default Error404;
