import './Login.css'

const Login = () => {
    return (
        <main className="login-reg-pages login-page">

            <section className="form-wrapper login-form-wrapper">

                <div className="form-site-name-wrapper">
                    <div className="form-site-name-text">
                        <h1 className="form-site-name">Винoписи</h1>
                    </div>
                    <div className="form-site-name-pic">
                        <img className="form-pic"
                             src="https://res.cloudinary.com/dyhmxus4n/image/upload/v1615712293/React%20Project/grape_border_ogd8gq.png"/>
                    </div>
                </div>

                <form className="form" action="" method="">
                    <div className="form-heading-wrapper">
                        <h1 className="form-heading">ВХОД</h1>
                    </div>

                    <div className="form-field-wrapper">
                        <div className="form-field-heading">
                            <label htmlFor="username">Потребителско име:</label>
                        </div>
                        <input className="form-field-input" type="text" id="username" name="username"/>
                    </div>

                    <div className="form-field-wrapper">
                        <div className="form-field-heading">
                            <label htmlFor="password">Парола:</label>
                        </div>
                        <input className="form-field-input" type="password" id="password" name="password"/>
                    </div>

                    <div className="form-button-wrapper">
                        <button className="form-button" type="submit">ИЗПРАТИ</button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Login;
