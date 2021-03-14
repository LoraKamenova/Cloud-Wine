import './AllJournals.css'
import Aside from "../Aside/Aside";
import Article from "../Article/Article";
import JournalCard from "./JournalCard/JournalCard";

const AllJournals = () => {
    return (
        <main className="all-pages all-journals-page">


            <div className="all-page-wrapper">
                <section className="aside-section">
                    <Aside/>
                </section>

                <section className="journals-section">

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
                                <JournalCard
                                    title="Шато Копса"
                                    url='https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg'
                                />
                            </a>

                            <a className="journal-card-link" href="#">
                                <JournalCard
                                    title="Винарска изба Орбелус"
                                    url='https://www.culinarytourism.bg/images/destinacii/106/orbelus_winery001.jpg'
                                />
                            </a>

                            <a className="journal-card-link" href="#">
                                <JournalCard
                                    title="Винарска изба Братя Минкови"
                                    url='https://www.transgourme.eu/media/k2/items/cache/2d535442c2c0b0669d8f5a051ed00bcc_XL.jpg'
                                />
                            </a>

                            <a className="journal-card-link" href="#">
                                <JournalCard
                                    title="Винарска изба Катаржина Естейт"
                                    url='https://katarzyna.bg/wp-content/uploads/2018/08/4-1024x683.jpg'
                                />
                            </a>

                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default AllJournals;
