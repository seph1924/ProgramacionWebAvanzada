import { Header } from "./components/Header";

const app = document.querySelector<HTMLElement>('#app');

if(!app) throw new Error('No se encontró el elemento con id "app"');

const header = new Header('Programacion Web Avanzada    ');
app.innerHTML = header.render(); 



