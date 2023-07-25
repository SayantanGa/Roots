import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {GetInput, FormSubmitButton, ContinueWithSocial, KnowledgeArea} from '../components/account-form';

function FormArea({Alert, onLogin}) {

    const [displayOTP, setDisplayOTP] = useState(false);
    const [otpEntered, setOtpEntered] = useState('');
    const navigate = useNavigate();

    const handleOtpEnter = (e) => {
        const { value } = e.target;
        setOtpEntered(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(displayOTP) {
            if(otpEntered.length !== 6) {
                Alert('Wrong OTP');
            } else {
                Alert('Login Success!');
                setTimeout(()=>{
                    navigate('/');
                },1000);
                onLogin(true);
            }
        } else {
            setDisplayOTP(true);
            Alert('Enter OTP sent to your phone & email')
        }
    }

    return (
        <div className="form__formarea" onSubmit={handleSubmit}>
            <form action="#" className='form' id="form-login">
                <p className="form__text">Login to your account!</p>
                <GetInput type='email' name='Email' />
                <GetInput type='password' name='Password' />
                { displayOTP && <GetInput type='number' name='OTP' value={otpEntered} onChangeHandler={handleOtpEnter} />}
                <a href="#" className="form__forgotpassword">Forgot your password?</a>
                <FormSubmitButton value='Continue' />
                <hr />
                <ContinueWithSocial Alert={Alert} onLogin={onLogin} />
            </form>
        </div>
    );
}

function Login({Alert, onLogin}) {
    return (
        <div className="page-container container">
            <KnowledgeArea />
            <FormArea Alert={Alert} onLogin={onLogin} />
        </div>
    );
}

export default Login;