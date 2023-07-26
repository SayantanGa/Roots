import { Link } from 'react-router-dom';
import {PostCreator} from './posts'

function Logo() {
    return (
        <Link to="/about"><img src="/logo-main.png" alt="logo" className="logo navbar__logo" /></Link>
    );
}

function NavItem(props) {
    return (
        <li className="navbar__item" >
            <a className="navbar__link" href={props.to || '#' } > { props.item } </a>
        </li>
    );
}

/**
 * Renders an anchor element with a button style.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.to - The URL to navigate to when the button is clicked.
 * @param {string} props.value - The text value to display inside the button.
 * @return {JSX.Element} The rendered anchor element.
 */
function GetAuth(props) {
    return (
        <a href={props.to} className="btn form__submit-button"> <span> {props.value} </span> </a>
    );
}

function UserAccess() {
    return(
    <>
        <GetAuth value='Sign Up!' to='./signup' />
        <GetAuth value='Login' to='./login' />
    </>);
}

function Navbar(props) {
    const listItems = props.listItems?.map((item, index) => {
        return (
            <NavItem item = {item.name} to = {item.link} key={item.name + index} />
        )
    });
    return (
        <nav className="navbar">
            <Logo />
            <ul className="navbar__list navbar__items">
                {listItems}
            </ul>
            <ul className="navbar__list">
                {props.loggedIn ? <PostCreator avatar='/user1.jpg' userName='Captain_Anonymous' /> : <UserAccess />}
            </ul>
        </nav>
    );
}

export default Navbar;