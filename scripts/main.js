import { series } from './data.js';
var seriesTable = document.getElementById("serie");
mostrarDatosSeries(series);
promedioTemporadas(series);
function mostrarDatosSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td style=\"background-color: #e9ecef;\">".concat(serie.num, "</td>\n            <td style=\"background-color: #e9ecef; color: blue;\">").concat(serie.name, "</td>\n            <td style=\"background-color: #e9ecef;\"> ").concat(serie.channel, "</td>\n            <td style=\"background-color: #e9ecef;\">").concat(serie.season, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.onclick = function () {
            var index = series.indexOf(serie);
            mostrarDetalleSerie(index, series);
        };
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesTbody);
}
function promedioTemporadas(series) {
    var temporadas = 0;
    var total = series.length;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        temporadas += serie.season;
    }
    var promedio = temporadas / total;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Seasons Average:</td>\n    <td>".concat(promedio, "</td>");
    seriesTable.appendChild(trElement);
}
function mostrarDetalleSerie(index, series) {
    var serie = series[index];
    var card = document.getElementById("card");
    var imagen = document.getElementById("image");
    imagen.setAttribute("src", serie.image);
    var nombre = document.getElementById("name");
    nombre.innerHTML = "".concat(serie.name);
    var descripcion = document.getElementById("description");
    descripcion.innerHTML = "".concat(serie.description);
    var link = document.getElementById("url");
    if (link) {
        link.setAttribute("href", serie.url);
    }
    card.style["display"] = "unset";
}
