import './Destination.css'
import AsideArticle from "../../Shared/AsideArticle/AsideArticle";

import { Link } from "react-router-dom";

const Destination = () => {
    return (
        <section className="destination-section">
            <div className="destination-content-container">
                    <div className="destination-article-wrapper">
                        <AsideArticle
                            title="ДЕСТИНАЦИИ"
                            paragraph="България предлага разнообразни възможности за винен туризъм. Според личните ви предпочитания можете да се разходите из лозови масиви, да разгледате винарска изба и, разбира се, да дегустирате различни вина. Голяма част от винарски изби имат собствени ресторанти, а някои разполагат и с хотелска част, където може да отседнете."
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
