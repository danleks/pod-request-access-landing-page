import './Header.styles.sass';
import Logo from '../../assets/desktop/logo.svg';

const Header = (() => {
    let html = `
        <header class="header">
            <img src=${Logo} class="logo">
        </header>
    `;

    return html;
})();

export default Header;