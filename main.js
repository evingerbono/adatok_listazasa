import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezes.js";
import { szures } from "./szures.js";
$(function () {

    rendezes(ADATLISTA, "kor");
    rendezes(ADATLISTA, "nev");
    rendezes(ADATLISTA, "fajta");

    console.log(ADATLISTA);
    console.log(szures(ADATLISTA, "fajta", "keverék"));

    const TABLAZATELEM = $("#admin");
    const NEVINPUTELEM = $("#nev");
    const KORINPUTELEM = $("#kor");
    const FAJTAINPUTELEM = $("#fajta");


    let tartalom = megjelenit(ADATLISTA);
    TABLAZATELEM.append(tartalom);


    $("th").on("click", function () {
        let index = $(this).index();
        let kulcs = Object.keys(ADATLISTA[0])[index];

        rendezes(ADATLISTA, kulcs);

        let tablaElem = $("table");
        let ujTartalom = megjelenit(ADATLISTA);
        tablaElem.replaceWith(ujTartalom);
    });

    $(".torol").on("click", function () {
        let index = (event.target.id);
        $(this).closest("tr").remove();
        ADATLISTA.splice(index, 1);
    });


    NEVINPUTELEM.on("input", function () {
        let nevErtek = NEVINPUTELEM.val();
        let szurtlista = szures(ADATLISTA, "nev", nevErtek);
        console.log(szurtlista);
        let tartalom = megjelenit(szurtlista);
        $("table").replaceWith(tartalom);
    });

    KORINPUTELEM.on("input", function () {
        let korErtek = KORINPUTELEM.val();
        let szurtlista = szures(ADATLISTA, "kor", korErtek);
        console.log(szurtlista);
        let tartalom = megjelenit(szurtlista);
        $("table").replaceWith(tartalom);
    });

    FAJTAINPUTELEM.on("input", function () {
        let fajtaErtek = FAJTAINPUTELEM.val();
        let szurtlista = szures(ADATLISTA, "fajta", fajtaErtek);
        console.log(szurtlista);
        let tartalom = megjelenit(szurtlista);
        $("table").replaceWith(tartalom);
    });


})

function megjelenit(lista) {
    let txt = "";
    txt += "<table class='table table-bordered'>";
    txt += "<tr>";
    for (let kulcs in lista[0]) {
        txt += "<th class='table-dark'>" + kulcs + "</th>";
    }
    txt += "<th class='table-dark'></th>";
    txt += "</tr>";
    for (let index = 0; index < lista.length; index++) {
        txt += "<tr>";
        for (let kulcs in lista[index]) {
            txt += "<td>" + lista[index][kulcs] + "</td>";
        }
        txt += "<td class='torol' id='" + index + "'>X</td>";
        txt += "</tr>";
    }
    txt += "</table>";
    return txt;
}