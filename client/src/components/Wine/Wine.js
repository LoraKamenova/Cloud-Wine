import './Wine.css'
import Aside from "../Aside/Aside";

const Wine = () => {
    return (
        <main className="common-page wine-page">
            <h1 className="site-name">Винoписи</h1>

            <div className="common-page-wrapper">
                <Aside/>
                <article className="common-page-article wine-article">
                    <div className="common-page-heading-wrapper">
                        <span className="common-page-heading">ВИНО</span>
                    </div>
                    <p className="common-page-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus
                        pulvinar tellus nec ante volutpat, vel commodo nisl aliquam. Maecenas nec malesuada risus, ut
                        maximus libero. Aliquam bibendum sollicitudin nibh, ac vehicula leo maximus vitae. Aenean vitae
                        metus luctus, molestie leo ac, ullamcorper justo. Class aptent taciti sociosqu ad litora
                        torquent
                        per conubia nostra, per inceptos himenaeos. Mauris vitae arcu orci. Suspendisse potenti. Sed non
                        maximus est. Phasellus vel sem molestie, sollicitudin sapien ac, condimentum erat. Etiam quis
                        augue
                        aliquet, laoreet risus vel, lacinia orci. Fusce vitae congue sapien. Curabitur sed lacus ut
                        dolor
                        auctor fermentum ac sed risus. Aliquam quis risus vel felis cursus eleifend ac a enim. Curabitur
                        dapibus diam sit amet scelerisque ultricies.</p>
                </article>

            </div>
        </main>
    );
};

export default Wine;
