import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
renderSeriesTable(dataSeries);
function renderSeriesTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style = \"font-weight: bold;\">".concat(serie.codigo, "</td>\n                               <td style = \"color:#007bff;cursor: pointer;\" class=\"serie-nombre\">").concat(serie.nombre, "</td>\n                               <td>").concat(serie.canal, "</td>\n                               <td>").concat(serie.temporadas, "</td>");
        trElement.addEventListener("click", function () {
            showSerieCard(serie);
        });
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
function showSerieCard(serie) {
    var cardContainer = document.getElementById("serie-card-container");
    cardContainer.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n            <img class=\"card-img-top\" src=\"".concat(serie.linkImagen, "\" alt=\"Series image\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n                <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                <p class=\"card-text\"><strong>Channel:</strong> ").concat(serie.canal, "</p>\n                <p class=\"card-text\"><strong>Seasons:</strong> ").concat(serie.temporadas, "</p>\n                <a href=\"").concat(serie.linkSitio, "\" class=\"btn btn-link\" target=\"_blank\">More info</a>\n            </div>\n        </div>\n    ");
    cardContainer.style.display = 'block';
}
