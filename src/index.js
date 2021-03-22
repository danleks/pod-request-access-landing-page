import './styles/main.sass';
import Header from './components/Header/Header';
import Dots from './components/Dots/Dots';
import CallToAction from './components/CallToAction/CallToAction';
import Overlay from './components/Overlay/Overlay';

const app = document.querySelector('#app');

app.innerHTML = `
    <div class="mainWrapper">
        ${Overlay}
        <main>
            ${Header}
            ${CallToAction}
            ${Dots}
        </main>
    </div>
`;
