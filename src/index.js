import Template from './templates/Template.js';
// Se importa el main.css para que webpack lo agregue automaticamente al proyecto
import '@styles/main.css';
import '@styles/vars.styl';

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
})();