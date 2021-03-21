import './styles/main.sass';
import Header from './components/Header/Header';
import Dots from './components/Dots/Dots';
import CallToAction from './components/CallToAction/CallToAction';

const app = document.querySelector('#app');

app.innerHTML = `
    <div class="mainWrapper">
        <main>
            ${Header}
            ${CallToAction}
            ${Dots}
        </main>
    </div>
`;
