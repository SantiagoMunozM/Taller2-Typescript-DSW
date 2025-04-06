import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
renderSeriesTable(dataSeries);
function renderSeriesTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style = \"font-weight: bold;\">".concat(serie.codigo, "</td>\n                               <td style = \"color:#007bff !important;\">").concat(serie.nombre, "</td>\n                               <td>").concat(serie.canal, "</td>\n                               <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var lastRow = document.createElement("tr");
    lastRow.innerHTML = "<td colspan = \"2\" style = \"background-color: white !important;\"> Seasons average: ".concat(getAverageSeasons(series), "</td>");
    seriesTbody.appendChild(lastRow);
}
function getAverageSeasons(series) {
    var totalTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    var promedioTemporadas = totalTemporadas / series.length;
    return promedioTemporadas;
}
