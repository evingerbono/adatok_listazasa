import { ADATLISTA } from "./adat.js";
$(function () {

    const CARDELEM = $("#publik");
    let tartalom = megjelenit(ADATLISTA);
    CARDELEM.append(tartalom);

    $(".nagyit").on("click", function () {
        let index = (event.target.id);
        console.log(index);
        //Modal//
        {/* <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                            megjelenit(ADATLISTA);
                    </div>
                </div>
            </div>
        </div> */}

    });

})

function megjelenit(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt += "<div class='card col-sm-4' >";
        txt += "<div class='card-body'>";
        for (let kulcs in lista[index]) {
            txt += "<h3 class='card-title'>" + lista[index][kulcs] + "</h3>";
        }
        txt += "<a href=# class='nagyit btn btn-primary' data-bs-toggle='modal' data-bs-target='#myModal' id='" + index + "'>Mutat</a>";
        txt += "</div>";
        txt += "</div>";
    }
    return txt;
}