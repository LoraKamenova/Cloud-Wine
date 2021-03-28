import './FormHeader.css'

const FormHeader = (props) => {
    return (
        <div className="form-header-wrapper">
            <div className="form-header-heading-container">
                <h1 className="form-header-heading">{props.title}</h1>
            </div>

            <div className="form-header-image-container">
                <img className="form-header-image"
                     src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615712293/React%20Project/grape_border_ogd8gq.png"
                     alt="vine"/>
            </div>
            <h1 className="form-header-heading-hidden">{props.title}</h1>
        </div>
    );
};

export default FormHeader;
