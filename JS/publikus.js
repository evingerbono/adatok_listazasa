import { ADATLISTA } from "./adat.js";
$(function () {

    const CARDELEM = $("#publik");
    let tartalom = megjelenit(ADATLISTA);
    CARDELEM.append(tartalom);

    $(".nagyit").on("click", function () {
        let index = event.target.id;
        let adat = ADATLISTA[index];
        let modalTartalom = "";
        for (let kulcs in adat) {
            modalTartalom += "<p><strong>" + kulcs + ": </strong>" + adat[kulcs] + "</p>";
        }
        $("#modal-tartalom").html(modalTartalom);
        $("#myModal").modal("show");

    });

})

function megjelenit(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt += "<div class='card col-sm-4' >";
        txt += "<div class='card-body'>";
        for (let kulcs in lista[index]) {
            if (kulcs === "nev") {
                txt += "<h3 class='card-title'>" + lista[index][kulcs] + "</h3>";
            } else {
                txt += "<p>" + lista[index][kulcs] + "</p>";
            }
        }
        txt += "<a href=# class='nagyit btn btn-primary' data-bs-toggle='modal' data-bs-target='#myModal' id='" + index + "'>Mutat</a>";
        txt += "</div>";
        txt += "</div>";
    }
    return txt;
}