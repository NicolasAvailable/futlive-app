// import html from './match-cards.html?raw';
import { loadinglogo } from '../loading-logo/loading-logo';
import { getTeamsLive } from '../use-cases/get-teams-live';
import './match-cards.css'

let template;

/**
 * 
 * @param {HTMLDivElement} element 
*/
export const matchCards = ( element) => {
    
    element.innerHTML = loadinglogo();

    /**
     * 
     * @param {Matchs[]} data 
    */
   const renderMatchs = ( data ) => {
       
    element.innerHTML = loadinglogo("hidden")


        const matchInLive = data.map( matchs => {

            
            
            template = `
            <div class="football-card">

            <div class="football-card-title name-title">
            <h3>${matchs.league.name}</h3>
            </div>
            <div class="football-card-teams name-title-home">
                <div class="football-card-title name-team">
                <h3>
                ${matchs.teams.home.name}
                </h3>
                </div>
                <div class="football-card-img">
                <img src="${matchs.teams.home.logo}" alt="${matchs.teams.home.name}">
                </div>
                <div class="football-card-goals">
                <span>${matchs.goals.home}</span>
                </div>
                </div>
            <div class="football-card-vs name-vs">
            <div class="football-card-vs-text">
            VS
                </div>
                <div class="football-card-vs-time">
                <span>${matchs.fixture.status.elapsed}</span>
                </div>
                </div>
                <div class="football-card-teams name-title-away">
                <div class="football-card-title name-team">
                <h3>
                ${matchs.teams.away.name}
                </h3>
                </div>
                <div class="football-card-img">
                <img src="${matchs.teams.away.logo}" alt="${matchs.teams.away.name}">
                </div>
                <div class="football-card-goals">
                <span>${matchs.goals.away}</span>
                </div>
            </div>
            </div>  `

            element.innerHTML += template;
        });
    
        return matchInLive;
    }
    
    
    getTeamsLive().then(data => renderMatchs(data));
    
    
}






