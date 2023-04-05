import { ADATLISTA } from "./adat.js";
$(function () {

    const CARDELEM = $("#publik");
    let tartalom = megjelenit(ADATLISTA);
    CARDELEM.append(tartalom);

    $(".nagyit").on("click", function () {
        let index = (event.target.id);
        console.log(index);
        
    });

})

function megjelenit(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt +=  "<div class='card col-sm-4' >";
        txt += "<div class='card-body'>";
        for (let kulcs in lista[index]) {
            txt += "<h1 class='card-title'>" + lista[index][kulcs] + "</h1>";
        }
        txt+="<a href=# class='btn btn-primary nagyit' id='" + index + "'>Mutat</a>";
        txt += "</div>";
        txt += "</div>";
    }
    return txt;
}