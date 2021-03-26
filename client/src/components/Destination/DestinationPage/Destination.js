import './Destination.css'
import Article from "../../Other/Article/Article";
import { Link } from "react-router-dom";

const Destination = () => {
    return (
        <section className="custom-section destination-section">
            <div className="destination-content-container">
                    <div className="destination-article-wrapper">
                        <Article
                            title="ДЕСТИНАЦИИ"
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus pulvinar tellus nec ante volutpat, vel commodo nisl aliquam. Maecenas nec
                            malesuada risus, ut maximus libero. Aliquam bibendum sollicitudin nibh, ac vehicula leo
                            maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per"
                        />
                        <div className="info-button-wrapper">
                            <Link to="/destination/all"><span className="button info-button">Виж дестинациите<i className="fas fa-angle-double-right"></i></span></Link>
                        </div>
                    </div>
                    <div className="destination-image-container">
                        <div className="destination-image-wrapper"></div>
                    </div>
                </div>
        </section>
    );
};

export default Destination;
