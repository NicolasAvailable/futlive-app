import { footballApp } from './src/football-app';
import { getTeamsLive } from './src/use-cases/get-teams-live';
import './style.css'

document.querySelector('#app').innerHTML = `
  
  <div class="row col-12">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">FutLive</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link text-white" aria-current="page" href="#">Inicio</a>
            <a class="nav-link text-white" href="#">lives</a>
            <a class="nav-link text-white" href="#">siguenos</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="row col-12" id="matchs-cards">

    <div class="football-title-body">
      <h2>Partidos en vivo</h2>
    </div>

    <div class="football-card-body">
    </div>

  </div>

  <footer class="row col-12">
    <div class="football-footer">
      <div class="football-footer-owner">
      <p>Nicolás Soto &copy;</p>
      </div>
    </div>
  </footer>
`

const $element = document.querySelector('.football-card-body');

footballApp($element);
