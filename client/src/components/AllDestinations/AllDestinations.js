import './AllDestinations.css'
import Aside from "../Aside/Aside";
import DestinationCard from "./DestinationCard/DestinationCard"
import {Link} from "react-router-dom";
const AllDestinations = () => {
    return (
        <main className="all-pages all-destinations-page">

            <div className="all-page-wrapper">
                <section >
                    <Aside/>
                </section>

                <section className="destinations-section">

                    <div className="all-destinations-button-wrapper">
                        <a className="button new-item-button" href="#">Нова дестинация<i className="fas fa-check"></i></a>
                    </div>

                    <div className="all-destinations-wrapper">

                        <div className="suitcase-image-wrapper">
                        <img className="suitcase-image"
                             src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615768194/React%20Project/suitcase_mch1ru.png"
                             width="70px" height="50px"/>
                        <img className="suitcase-image"
                             src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615768194/React%20Project/suitcase_mch1ru.png"
                             width="100px" height="70px"/>
                        <img className="suitcase-image"
                             src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615768194/React%20Project/suitcase_mch1ru.png"
                             width="70px" height="50px"/>
                        </div>

                        <div className="all-destinations-header">Всички дестинации</div>

                        <div className="all-destinations-container">

                            <Link to="/destination-details">
                                <DestinationCard
                                    title="Шато Копса"
                                    address="Сопот"
                                    services="Дегустрация на вино, Хотел, Ресторант"
                                    url='https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg'
                                />
                            </Link>

                            <Link to="/destination-details">
                                <DestinationCard
                                    title="Шато Копса"
                                    address="Сопот"
                                    services="Дегустрация на вино, Хотел, Ресторант"
                                    url='https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg'
                                />
                            </Link>

                            <Link to="/destination-details">
                                <DestinationCard
                                    title="Шато Копса"
                                    address="Сопот"
                                    services="Дегустрация на вино, Хотел, Ресторант"
                                    url='https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg'
                                />
                            </Link>

                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
};

export default AllDestinations;
