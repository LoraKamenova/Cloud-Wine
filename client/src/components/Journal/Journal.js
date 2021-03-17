import './Journal.css'
import Article from "../Article/Article";
import {Link} from "react-router-dom";

const Journal = () => {
    return (
        <section className="custom-section journal-section">
            <div className="journal-content-container">
                <div className="journal-article-wrapper">
                    <Article
                        title="ВИНОПИСИ"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus pulvinar tellus nec ante volutpat, vel commodo nisl aliquam. Maecenas nec
                            malesuada risus, ut maximus libero. Aliquam bibendum sollicitudin nibh, ac vehicula leo
                            maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per"
                    />
                    <div className="info-button-wrapper">
                        <Link to="/all-journals"><span className="button info-button">Виж винописите<i
                            className="fas fa-angle-double-right"></i></span></Link>
                    </div>
                </div>
                <div className="journal-image-container">
                    <div className="journal-image-wrapper"></div>
                </div>
            </div>
        </section>
    );
};

export default Journal;
