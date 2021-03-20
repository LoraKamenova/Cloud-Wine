import './DestinationDetails.css'
import DestinationDetailsCard from "./DestinationDetailsCard/DestinationDetailsCard";

const DestinationDetails = () => {
    return (
        <section className="custom-section destination-details-page">

                <div className="destination-details-section">

                    <DestinationDetailsCard
                        title="Шато Копса"
                        url1="https://www.andrey-andreev.com/wp-content/uploads/2018/07/IMGP7314.jpg"
                        url2="https://copsa.bg/wp-content/uploads/2018/07/shato-copsa-1.jpg"
                        map="https://res.cloudinary.com/dyhmxus4n/image/upload/v1616201754/React%20Project/Sopot_mcxg26.jpg"
                        address="Сопот, ул. Първа"
                        services="Дегустрация на вино, Разходка в лозята, Ресторант, Хотел"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean id ullamcorper nisl, nec dapibus lorem. Mauris id justo turpis. Cras tincidunt velit
                            nec mi tristique tincidunt. Aliquam ullamcorper porta sagittis. Nullam neque est, hendrerit
                            in vestibulum faucibus, finibus quis odio. Ut tincidunt ligula congue nibh mollis, et
                            lacinia sapien aliquet. Cras non metus at ligula semper feugiat. Nam elementum tortor eros.
                            Ut sagittis mollis libero, at maximus libero tempor non. Etiam varius iaculis orci, at
                            tincidunt ligula pharetra in. Vivamus eget vulputate nisl. Donec maximus, mi non laoreet
                            euismod, dolor orci viverra dolor, sed sodales ante lorem ac nisl. Aliquam erat volutpat. Ut
                            consectetur ultricies tortor, sit amet posuere odio mollis id. Ut et ultricies metus. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Aenean id ullamcorper nisl, nec dapibus
                            lorem. Mauris id justo turpis. Cras tincidunt velit nec mi tristique tincidunt. Aliquam
                            ullamcorper porta sagittis. Nullam neque est, hendrerit in vestibulum faucibus, finibus quis
                            odio. Ut tincidunt ligula congue nibh mollis, et lacinia sapien aliquet. Cras non metus at
                            ligula semper feugiat. Nam elementum tortor eros. Ut sagittis mollis libero, at maximus
                            libero tempor non. Etiam varius iaculis orci, at tincidunt ligula pharetra in. Vivamus eget
                            vulputate nisl. Donec maximus, mi non laoreet euismod, dolor orci viverra dolor, sed sodales
                            ante lorem ac nisl. Aliquam erat volutpat. Ut consectetur ultricies tortor, sit amet posuere
                            odio mollis id. Ut et ultricies metus."
                    />

                </div>

        </section>
    );
};

export default DestinationDetails;
