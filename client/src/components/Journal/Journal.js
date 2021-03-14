import './Journal.css'
import Aside from "../Aside/Aside";
import Article from "../Article/Article";

const Journal = () => {
    return (
        <main className="general-pages journal-page">
            <div className="general-pages-wrapper">
                <Aside/>
                <section className="general-pages-section journal-section">
                    <Article
                        title="ВИНОПИСИ"
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
                    <a className="button info-button" href="#">Виж Винописите<i className="fas fa-angle-double-right"></i></a>
                </section>
            </div>
        </main>
    );
};

export default Journal;
