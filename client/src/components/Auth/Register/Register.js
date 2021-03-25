import './Register.css'
import FormHeader from "../../Other/FormHeader/FormHeader";

const Register = () => {
    return (
        <section className="custom-section register-section">

            <div className="register-container">

                <div className="auth-form-wrapper register-form-wrapper">

                    <FormHeader title="Регистрация"/>

                    <form className="auth-form" action="" method="">

                        <div className="auth-form-field-wrapper">
                            <div className="auth-form-field-heading">
                                <label htmlFor="username">Потребителско име:</label>
                            </div>
                            <input className="auth-form-field-input" type="text" id="username" name="username"/>
                        </div>

                        <div className="auth-form-field-wrapper">
                            <div className="auth-form-field-heading">
                                <label htmlFor="email">Имейл адрес:</label>
                            </div>
                            <input className="auth-form-field-input" type="email" id="email" name="email"/>
                        </div>

                        <div className="auth-form-field-wrapper">
                            <div className="auth-form-field-heading">
                                <label htmlFor="password">Парола:</label>
                            </div>
                            <input className="auth-form-field-input" type="password" id="password" name="password"/>
                        </div>

                        <div className="auth-form-field-wrapper">
                            <div className="auth-form-field-heading">
                                <label htmlFor="re-password">Повторете паролата:</label>
                            </div>
                            <input className="auth-form-field-input" type="password" id="re-password"
                                   name="re-password"/>
                        </div>

                        <div className="auth-form-button-wrapper">
                            <button className="auth-form-button" type="submit">ИЗПРАТИ</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
