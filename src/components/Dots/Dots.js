import './Dots.styles.sass';
import dots from '../../assets/desktop/bg-pattern-dots.svg';

const Dots = (() => {
    let html = `
       <img class="dots" src=${dots} alt="dots"/>
    `;

    return html;
})();

export default Dots;