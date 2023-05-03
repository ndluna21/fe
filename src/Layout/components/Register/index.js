import classNames from "classnames/bind";
import styles from './Register.module.scss';
import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function Register() {
    return ( 
        <>
            <div className={`d-flex flex-column justify-content-center p-4 ${cx('myColor', 'col-lg-5')} `}>
                <h1 className={`fw-bold text-center text-white`}>Welcome Back!</h1>
                <hr className={`my-4 ${cx('myHr')}`}/>
                <p className={`text-center text-light lead fw-bolder`}>To keep connected with us please login with your personal info.</p>
            <Link className={`text-center`} to="/login">
                <Button next text className={`mt-4 me-0`}>Sign In</Button>
            </Link>
            </div>
            <div className={`${cx('bg', 'col-lg-7')} bg-white p-4`}>
                <h1 className={`text-center fw-bold text-primary`}>Create Account</h1>
                <hr className={`my-3 ${cx('hr')}`}/>
                <form action="#" method="POST" className={`px-3`} id="register-form">
                    <div className={`input-group input-group-lg mb-3`}>
                        <div className={`${cx('input-group-prepend')}`}>
                            <span className={`input-group-text rounded-0 ${cx('flag')}`}>
                                <FontAwesomeIcon icon={faUser} className={`${cx('icon')} fw-normal text-center`}/>
                            </span>
                        </div>
                        <input type="text" id="name" name="name" className={`form-control rounded-0`} placeholder="Full Name" required/>
                    </div>
                    <div className={`input-group input-group-lg mb-3`}>
                        <div className={`${cx('input-group-prepend')}`}>
                            <span className={`input-group-text rounded-0 ${cx('flag')}`}>
                                <FontAwesomeIcon icon={faEnvelope} className={`${cx('icon')} fw-normal text-center`}/>
                            </span>
                        </div>
                        <input type="email" id="remail" name="email" className={`form-control rounded-0`} placeholder="E-Mail" required/>
                    </div>
                    <div className={`input-group input-group-lg mb-3`}>
                        <div className={`${cx('input-group-prepend')}`}>
                            <span className={`input-group-text rounded-0 ${cx('flag')}`}>
                                <FontAwesomeIcon icon={faKey} className={`${cx('icon')} fw-normal text-center`}/>
                            </span>
                        </div>
                        <input type="password" id="rpassword" name="password" className={`form-control rounded-0`} placeholder="Password" required/>
                    </div>
                    <div className={`input-group input-group-lg mb-3`}>
                        <div className={`${cx('input-group-prepend')}`}>
                            <span className={`input-group-text rounded-0 ${cx('flag')}`}>
                                <FontAwesomeIcon icon={faKey} className={`${cx('icon')} fw-normal text-center`}/>
                            </span>
                        </div>
                        <input type="password" id="cpassword" name="cpassword" className={`form-control rounded-0`} placeholder="Confirm Password" required/>
                    </div>
                    <div className={`${cx('form-group')}`}>
                        <div id="passError" className={`text-danger fw-bolder`}></div>
                    </div>
                    <div className={`${cx('form-group')}`}>
                        <Button submit text>Sign Up</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;