import './Journal.css'
import AsideArticle from "../../Shared/AsideArticle/AsideArticle";

import { Link } from "react-router-dom";

const Journal = () => {
    return (
        <section className="journal-section">
            <div className="journal-content-container">
                <div className="journal-article-wrapper">
                    <AsideArticle
                        title="ПЪТЕПИСИ"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus pulvinar tellus nec ante volutpat, vel commodo nisl aliquam. Maecenas nec
                            malesuada risus, ut maximus libero. Aliquam bibendum sollicitudin nibh, ac vehicula leo
                            maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per"
                    />
                    <div className="info-button-wrapper">
                        <Link to="/journal/all"><span className="button info-button">Виж пътеписите<i className="fas fa-angle-double-right"></i></span></Link>
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
