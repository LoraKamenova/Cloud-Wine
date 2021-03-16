import './Destination.css'
import Article from "../Article/Article";
import {Link} from "react-router-dom";
import SubArticle from "../SubArticle/SubArticle";

const Destination = () => {
    return (
        <section className="custom-section destination-section">
            <div className="content-container">
                <div className="upper-part-container">
                    <div className="article-wrapper">
                        <Article
                            title="ДЕСТИНАЦИИ"
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus pulvinar tellus nec ante volutpat, vel commodo nisl aliquam. Maecenas nec
                            malesuada risus, ut maximus libero. Aliquam bibendum sollicitudin nibh, ac vehicula leo
                            maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vitae arcu orci.
                            Suspendisse potenti. Sed non maximus est. Phasellus vel sem molestie, sollicitudin sapien
                            ac, condimentum erat. Etiam quis augue aliquet, laoreet risus vel, lacinia orci. Fusce vitae
                            congue sapien. Curabitur sed lacus ut dolor auctor fermentum ac sed risus. Aliquam quis risus vel felis cursus
                            eleifend ac a enim. Curabitur dapibus diam sit amet scelerisque ultricies."
                        />
                    </div>
                    <div className="image-container">
                        <div className="image-wrapper destination-image-wrapper"></div>
                    </div>
                </div>
                <div className="lower-part-container">
                    <SubArticle
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus pulvinar tellus nec ante volutpat, vel commodo nisl aliquam. Maecenas nec
                            malesuada risus, ut maximus libero. Aliquam bibendum sollicitudin nibh, ac vehicula leo
                            maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vitae arcu orci.
                            Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus pulvinar tellus nec ante volutpat sto tellus nec ante volutpat sto. "
                    />
                    <div className="info-button-wrapper">
                        <Link to="/all-destinations"><span className="button info-button">Виж дестинациите<i
                            className="fas fa-angle-double-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Destination;
