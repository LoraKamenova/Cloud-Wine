import './Home.css'
import Aside from "../Aside/Aside";
import Article from "../Article/Article";

const Home = () => {
    return (
        <main className="general-pages home-page">
            <div className="general-pages-wrapper">
                <Aside/>
                <section className="general-pages-section home-section">
                    <h3 className="home-page-subheading">Добре дошли във</h3>
                    <h1 className="home-page-heading">Винописи</h1>
                    <p className="home-page-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus pulvinar tellus nec ante volutpat, vel commodo nisl aliquam. Maecenas nec
                        malesuada risus, ut maximus libero. Aliquam bibendum sollicitudin nibh, ac vehicula leo
                        maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo. Aliquam bibendum sollicitudin nibh, ac vehicula leo
                        maximus vitae. Aenean vitae metus luctus, molestie leo ac, ullamcorper justo.
                    </p>
                </section>
            </div>
        </main>

    );
};

export default Home;
