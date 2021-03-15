import './Login.css'
import FooterBottom from "../FooterBottom/FooterBottom";

const Login = () => {
    return (
        <main className="auth-pages login-page">

            <section className="auth-form-wrapper login-form-wrapper">

                <div className="auth-form-site-name-wrapper">
                    <div className="auth-form-site-name-text">
                        <h1 className="auth-form-site-name">Винoписи</h1>
                    </div>
                    <div className="auth-form-site-name-pic">
                        <img className="auth-form-pic"
                             src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615712293/React%20Project/grape_border_ogd8gq.png"/>
                    </div>
                </div>

                <form className="auth-form" action="" method="">
                    <div className="auth-form-heading-wrapper">
                        <h1 className="auth-form-heading">ВХОД</h1>
                    </div>

                    <div className="auth-form-field-wrapper">
                        <div className="auth-form-field-heading">
                            <label htmlFor="username">Потребителско име:</label>
                        </div>
                        <input className="auth-form-field-input" type="text" id="username" name="username"/>
                    </div>

                    <div className="auth-form-field-wrapper">
                        <div className="auth-form-field-heading">
                            <label htmlFor="password">Парола:</label>
                        </div>
                        <input className="auth-form-field-input" type="password" id="password" name="password"/>
                    </div>

                    <div className="auth-form-button-wrapper">
                        <button className="auth-form-button" type="submit">ИЗПРАТИ</button>
                    </div>
                </form>
            </section>
            <FooterBottom />
        </main>
    );
};

export default Login;
