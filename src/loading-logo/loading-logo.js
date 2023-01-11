// import loadingHtml from './loading-logo.html?raw';
import './loading-logo.css';



/**
 * 
 * @param {String|any} display 
 */
export const loadinglogo = ( display ) => {


    let html = `
    <div class="${ (display) ? "hidden" : "container-logo"}">
        <div class="loading-logo"></div>
        <span id="please-wait">Estan cargando los partidos... Por favor espere</span>
    </div>
    `;

    if(display){
        
        html = '';
    } 

    return html
}