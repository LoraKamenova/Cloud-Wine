import './AllDestinations.css'
import DestinationCard from "./DestinationCard/DestinationCard"
import { Link } from "react-router-dom";

const AllDestinations = () => {
    return (

        <section className="all-destinations-section">

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
                <div className="all-destinations-button-wrapper">
                    <Link className="button new-item-button" to="add-destination">Нова дестинация<i className="fas fa-check"></i></Link>
                </div>
            </div>

        </section>

    );
};

export default AllDestinations;
