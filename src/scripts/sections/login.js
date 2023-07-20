import { useEffect, useState } from 'react';
import {randomQuote} from '../functions'
import { KnowledgeArea, GetInput, FormSubmitButton, ContinueWithSocial } from './signup';

function FormArea() {
    return (
        <div className="form__formarea">
            <form action="#" className='form' id="form-login">
                <p className="form__text">Login to your account!</p>
                <GetInput type='email' name='Email' />
                <GetInput type='password' name='Password' />
                <a href="#" className="form__forgotpassword">Forgot your password?</a>
                <FormSubmitButton value='Continue' />
                <hr />
                <ContinueWithSocial />
            </form>
        </div>
    );
}

function Login() {
    return (
        <div className="page-container">
            <KnowledgeArea />
            <FormArea />
        </div>
    );
}

export default Login;