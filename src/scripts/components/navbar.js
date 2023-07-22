import {FormSubmitButton} from './account-form'

function Logo() {
    return (
        <img src="../logo-main.png" alt="logo" className="logo navbar__logo" />
    );
}

function NavItem(props) {
    return (
        <li className="navbar__item" >
            <a className="navbar__link" href={props.to || '#' } > { props.item } </a>
        </li>
    );
}

function GetAuth(props) {
    return (
        <a href={props.to} className="btn form__submit-button"> <span> {props.value} </span> </a>
    );
}

function Navbar(props) {
    const listItems = props.listItems?.map((item) => {
        return (
            <NavItem item = {item.name} to = {item.link} />
        )
    });
    return (
        <nav className="navbar">
            <Logo />
            <ul className="navbar__list navbar__items">
                {listItems}
            </ul>
            <ul className="navbar__list">
                <GetAuth value='Sign Up!' to='./signup' />
                <GetAuth value='Login' to='./login' />
            </ul>
        </nav>
    );
}

export default Navbar;