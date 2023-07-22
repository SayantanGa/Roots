import { useEffect, useState } from 'react';
import {randomQuote} from '../functions'

export function GetInput(props) {

    return (
        <div className="form__group">
            <input type={props.type} className="form__input" placeholder={props.phtext || props.name } id={'form-login__' + props.type} pattern={props.patternRequired ? '[0-9]{10}' : null} value={props.value} onChange={props.onChangeHandler} required />
            <label htmlFor={'form-login__' + props.type} className="form__label">{props.name}</label>
        </div>
    );
}

export function FormSubmitButton(props) {

    return (
        <div className="form__submit">
            <button className="btn form__submit-button" onClick={props.onClick} > <span> {props.value} </span> </button>
        </div>
    );
}

export function ContinueWithSocial() {

    return(
        <>
            <p className="form__continue"> Or continue with</p>
            <div className="form__social">
                <img src="./g-logo.svg" id="google-logo" alt="Google" width={'30'}/>
                <img src="./apple-logo.svg" id="apple-logo" alt="Apple" width={'30'}/>
            </div>
        </>
    );
}

export function KnowledgeArea() {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const quoteData = await randomQuote();
            setQuote(quoteData);
        };

        fetchQuote();
    }, []);

    return (
        <div className="knowledgearea">
            <img
                src="../logo-main-removedbg.png"
                alt="Roots"
                className="knowledgearea__logo"
            />
            {quote && <blockquote className="knowledgearea__quote">
                <p>{quote[0]}</p>
                <cite>--{quote[1]}</cite>
            </blockquote>
            }
        </div>
    );
}