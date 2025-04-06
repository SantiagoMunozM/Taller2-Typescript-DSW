
import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesTable(dataSeries);



function renderSeriesTable(series: Serie[]):void {
    console.log("Desplegando series")
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td style = "font-weight: bold;">${serie.codigo}</td>
                               <td style = "color:#007bff !important;">${serie.nombre}</td>
                               <td>${serie.canal}</td>
                               <td>${serie.temporadas}</td>`;
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
