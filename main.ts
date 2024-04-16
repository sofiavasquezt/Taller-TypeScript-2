import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("serie")!;

mostrarDatosSeries(series);
promedioTemporadas(series);

function mostrarDatosSeries(series: Serie[]): void {
    let seriesTbody = document.createElement("tbody");
    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr")
        trElement.innerHTML = `
            <td style="background-color: #e9ecef;">${serie.num}</td>
            <td style="background-color: #e9ecef; color: blue;">${serie.name}</td>
            <td style="background-color: #e9ecef;"> ${serie.channel}</td>
            <td style="background-color: #e9ecef;">${serie.season}</td>`
        seriesTbody.appendChild(trElement);

        trElement.onclick = () => {
            let index = series.indexOf(serie);
            mostrarDetalleSerie(index, series);
        }
    }
    seriesTable.appendChild(seriesTbody)
}

function promedioTemporadas(series: Serie[]): void {
    let temporadas: number = 0;
    let total: number = series.length;
    for (let serie of series) {
        temporadas += serie.season;
    }
    let promedio: number = temporadas / total;
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td>Seasons Average:</td>
    <td>${promedio}</td>`
    seriesTable.appendChild(trElement);
}

function mostrarDetalleSerie(index: number, series: Serie[]): void { 
    let serie = series[index];
    let card: HTMLElement = document.getElementById("card")!;
    let imagen: HTMLElement = document.getElementById("image")!;
    imagen.setAttribute("src", serie.image);
    let nombre: HTMLElement = document.getElementById("name")!;
    nombre.innerHTML= `<h2 class="card-title" id="name">${serie.name}</h2>`
    let descripcion: HTMLElement = document.getElementById("description")!;
    descripcion.innerHTML= `<p class="card-text" id="description">${serie.description}</p>`
    let link: HTMLElement = document.getElementById("url")!;
    link.innerHTML = `<a id="url">${serie.url}</a>`

    card.style["display"] = "unset";
}
