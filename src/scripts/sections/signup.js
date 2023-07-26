import { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {GetInput, FormSubmitButton, ContinueWithSocial, KnowledgeArea} from '../components/account-form';

function FormArea({Alert, onLogin}) {

    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const navigate = useNavigate();

    const handleChangePwd = (e) => {
        const { value } = e.target;
        setPwd(() => value);
    };


    const handleChangeCpwd = (e) => {
        const { value } = e.target;
        setCpwd(() => value);
    };

    const handleSubmit = (e) => {
        if(pwd === cpwd) {
           Alert('Account created successfully!');
           onLogin(true);
           setTimeout(()=>{
            navigate('/');
           }, 1000);
        } else if(pwd !== cpwd) {
            Alert('Confirm Password and Password don\'t match');
        } else {
            Alert('Invalid details');
        }
    }


    return (
        <div className="form__formarea" onSubmit={handleSubmit}>
            <form action="#" className='form' id="form-signup">
                <p className="form__text">Get a new account!</p>
                <GetInput type='text' name='Name' phtext='The phrase with you to be called' />
                <GetInput type='email' name='Email' phtext='The online address to mail you' />
                <GetInput type='tel' name='Phone(Indian format)' phtext='The number to reach you at' patternRequired={true} />
                <GetInput type='password' name='Password' phtext='The thing used to log in' value={pwd} onChangeHandler={handleChangePwd} />
                <GetInput type='cpassword' name='Confirm Password' phtext='Have you typed correctly?' value={cpwd} onChangeHandler={handleChangeCpwd} />
                <FormSubmitButton value='Continue' />
                <hr />
                <ContinueWithSocial Alert={Alert} onLogin={onLogin} />
            </form>
        </div>
    );
}

function SignUp({Alert, onLogin}) {

  return (
      <div className="page-container container login-container" style={{backgroundImage:'none'}}>
          <div className="bg-video">
            <video className="bg-video__content" autoPlay loop muted>
                <source src="video.webm" type="video/mp4" />
            </video>
          </div>
          <KnowledgeArea />
          <FormArea Alert={Alert} onLogin={onLogin} />
      </div>
  );
}

export default SignUp;