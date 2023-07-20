
function Logo() {
    return (
        <img src="../logo-main.png" alt="logo" className="logo navbar__logo" />
    );
}

function NavItem(props) {
    return (
        <li className="navbar__item" >
            <a className="navbar__link" href="#"> { props.item } </a>
        </li>
    );
}

function GetAuth(props) {
    return (
        <button className="btn btn-flat">
            <a href="#">{ props.type }</a>
        </button>
    );
}

function Navbar(props) {
    const listItems = props.listItems?.map((item) => {
        return (
            <NavItem item = {item} />
        )
    });
    return (
        <nav className="navbar">
            <Logo />
            <ul className="navbar__list navbar__items">
                {listItems}
            </ul>
            <ul className="navbar__list">
                <GetAuth type='Sign Up!' />
                <GetAuth type='Login'/>
            </ul>
        </nav>
    );
}

export default Navbar;