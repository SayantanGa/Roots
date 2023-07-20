import {GetInput, FormSubmitButton, ContinueWithSocial, KnowledgeArea} from '../components/account-form';

function FormArea() {
    return (
        <div className="form__formarea">
            <form action="#" className='form' id="form-signup">
                <p className="form__text">Get a new account!</p>
                <GetInput type='text' name='Name' phtext='The phrase with you to be called' />
                <GetInput type='email' name='Email' phtext='The online address to mail you' />
                <GetInput type='tel' name='Phone(Indian format)' phtext='The number to reach you at' patternRequired={true} />
                <GetInput type='password' name='Password' phtext='The thing used to log in' />
                <GetInput type='password' name='Confirm Password' phtext='Have you typed correctly?' />
                <FormSubmitButton value='Continue' />
                <hr />
                <ContinueWithSocial />
            </form>
        </div>
    );
}

function SignUp() {
    return (
        <div className="page-container container">
            <KnowledgeArea />
            <FormArea />
        </div>
    );
}

export default SignUp;