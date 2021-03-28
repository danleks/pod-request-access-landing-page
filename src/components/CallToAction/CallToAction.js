import './CallToAction.styles.sass';
import Input from '../Input/Input';
import Button from '../Button/Button';
import applePodcast from '../../assets/desktop/apple-podcast.svg';
import googlePodcast from '../../assets/desktop/google-podcasts.svg';
import poceketCast from '../../assets/desktop/pocket-casts.svg';
import spotify from '../../assets/desktop/spotify.svg';

const icons = [
    {   
        id: 0,
        name: 'spotify',
        src: spotify
    },
    {   
        id: 1,
        name: 'apple-podcast',
        src: applePodcast
    },
    {   
        id: 2,
        name: 'google-podcast',
        src: googlePodcast
    },
    {   
        id: 3,
        name: 'pocket-cast',
        src: poceketCast
    },   
];

const CallToAction = (() => {
    let html = `
        <div class="callToAction">
            <h1>Publish your podcasts<span class="highlight">everywhere.</span></h1>
            <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
            <form>
                ${Input}
                ${Button}
            </form>
           <span class="error">Oops! Please check your email</span>
            <ul>
                ${icons.map(icon => `<li><img src=${icon.src} alt=${icon.name}/></li>`).join('')}
            </ul>
        </div>
    `;

    return html;
})();

export default CallToAction;