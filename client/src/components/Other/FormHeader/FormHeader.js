import './FormHeader.css'

const FormHeader = (props) => {
    return (
        <div className="auth-form-site-name-wrapper">
            <div className="auth-form-site-name-text">
                <h1 className="auth-form-site-name">{props.title}</h1>
            </div>
            <div className="auth-form-site-name-pic">
                <img className="auth-form-pic"
                     src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615712293/React%20Project/grape_border_ogd8gq.png" alt="vine"/>
            </div>
        </div>
    );
};

export default FormHeader;
