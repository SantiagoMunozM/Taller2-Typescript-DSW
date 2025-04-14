
import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesTable(dataSeries);



function renderSeriesTable(series: Serie[]):void {
    console.log("Desplegando series")
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td style = "font-weight: bold;">${serie.codigo}</td>
                               <td style = "color:#007bff;cursor: pointer;" class="serie-nombre">${serie.nombre}</td>
                               <td>${serie.canal}</td>
                               <td>${serie.temporadas}</td>`;

        trElement.addEventListener("click", () => {
            showSerieCard(serie);
        });
        seriesTbody.appendChild(trElement);

        
    })
    let lastRow = document.createElement("tr");
    lastRow.innerHTML = `<td colspan = "2" style = "background-color: white !important;"> Seasons average: ${getAverageSeasons(series)}</td>`;
    seriesTbody.appendChild(lastRow);
}

function getAverageSeasons(series: Serie[]): number {
    let totalTemporadas: number = 0;
    series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);
    let promedioTemporadas: number = totalTemporadas / series.length;
    return promedioTemporadas;
  }

  function showSerieCard(serie: Serie): void {
    const cardContainer = document.getElementById("serie-card-container")!;
    cardContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${serie.linkImagen}" alt="Series image">
            <div class="card-body">
                <h5 class="card-title">${serie.nombre}</h5>
                <p class="card-text">${serie.descripcion}</p>
                <p class="card-text"><strong>Channel:</strong> ${serie.canal}</p>
                <p class="card-text"><strong>Seasons:</strong> ${serie.temporadas}</p>
                <a href="${serie.linkSitio}" class="btn btn-link" target="_blank">More info</a>
            </div>
        </div>
    `;
    cardContainer.style.display = 'block';
}
