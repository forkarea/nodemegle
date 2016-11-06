import 'lodash';
import '../styles/main.scss';
import {$header} from './test';

window.TEST = (msg = "nima") => {
    console.log(`wiadomosc to: ${msg.toUpperCase()}`);
};

window.onload = () => {
    document.body.appendChild($header);
}