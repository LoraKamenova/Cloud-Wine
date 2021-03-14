import './AllJournals.css'
import Aside from "../Aside/Aside";

const AllJournals = () => {
    return (
        <main className="all-pages all-journals-page">


            <div className="all-page-wrapper">
                <section className="aside-section">
                    <Aside/>
                </section>

                <section className="journals-sections">
                    <div className="button-wrapper">
                        <a className="button" href="#">Нов винопис<i className="fas fa-angle-double-right"></i></a>
                    </div>
                    <div className="all-journals-wrapper">

                        <img className="peg-image"
                             src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615730431/React%20Project/new_gt98oa.png"
                             width="300px" height="50px"/>
                        <div className="all-journals-header">Всички винописи</div>

                        <div className="all-journals-container">
                            <a className="journal-card-link" href="#">
                                <div className="journal-card">
                                    <div className="image-wrapper">
                                        <img className="journal-image"
                                             src='https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg'/>
                                    </div>
                                    <div className="title-wrapper">
                                        <h3 className="title">Шато "Копса"</h3>
                                    </div>
                                </div>
                            </a>
                            <div className="journal-card">
                                <div className="image-wrapper">
                                    <img className="journal-image"
                                         src='https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg'/>
                                </div>
                                <div className="title-wrapper">
                                    <h3 className="title">Шато "Копса"</h3>
                                </div>
                            </div>

                            <div className="journal-card">
                                <div className="image-wrapper">
                                    <img className="journal-image"
                                         src='https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg'/>
                                </div>
                                <div className="title-wrapper">
                                    <h3 className="title">Шато "Копса"</h3>
                                </div>
                            </div>

                            <div className="journal-card">
                                <div className="image-wrapper">
                                    <img className="journal-image"
                                         src='https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg'/>
                                </div>
                                <div className="title-wrapper">
                                    <h3 className="title">Шато "Копса"</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default AllJournals;
