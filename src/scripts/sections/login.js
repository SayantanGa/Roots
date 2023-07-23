import {GetInput, FormSubmitButton, ContinueWithSocial, KnowledgeArea} from '../components/account-form';

function FormArea({Alert}) {
    return (
        <div className="form__formarea">
            <form action="#" className='form' id="form-login">
                <p className="form__text">Login to your account!</p>
                <GetInput type='email' name='Email' />
                <GetInput type='password' name='Password' />
                <a href="#" className="form__forgotpassword">Forgot your password?</a>
                <FormSubmitButton value='Continue' />
                <hr />
                <ContinueWithSocial Alert={Alert} />
            </form>
        </div>
    );
}

function Login({Alert}) {
    return (
        <div className="page-container container">
            <KnowledgeArea />
            <FormArea Alert={Alert} />
        </div>
    );
}

export default Login;