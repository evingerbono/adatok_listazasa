import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezes.js";
import { szures } from "./szures.js";
$(function () {

    rendezes(ADATLISTA, "kor");
    rendezes(ADATLISTA, "nev");
    rendezes(ADATLISTA, "fajta");

    const NEVINPUTELEMSZ = $("#nev");
    const KORINPUTELEMSZ = $("#kor");
    const FAJTAINPUTELEMSZ = $("#fajta");
    const TABLAZATELEM = $("#admin");
    const NEVINPUTELEM = $("#nev2");
    const KORINPUTELEM = $("#kor2");
    const FAJTAINPUTELEM = $("#fajta2");
    const ADAFELVITEL = $("#kuldes");

    let tartalom = megjelenit(ADATLISTA);
    TABLAZATELEM.append(tartalom);
    validalas();


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
        megjelenit(ADATLISTA);
        console.log(ADATLISTA);
    });

    ADAFELVITEL.on("click", function () {
        const ujAdat = {
            nev: NEVINPUTELEM.val(),
            fajta: FAJTAINPUTELEM.val(),
            kor: KORINPUTELEM.val()
        };
        ADATLISTA.push(ujAdat);
        console.log(NEVINPUTELEM.val());
        console.log(ujAdat);
        console.log(ADATLISTA);
        let tartalom = megjelenit(ADATLISTA);
        TABLAZATELEM.html(tartalom);
    });



    NEVINPUTELEMSZ.on("input", function () {
        let nevErtek = NEVINPUTELEMSZ.val();
        let szurtlista = szures(ADATLISTA, "nev", nevErtek);
        console.log(szurtlista);
        let tartalom = megjelenit(szurtlista);
        $("table").replaceWith(tartalom);
    });

    KORINPUTELEMSZ.on("input", function () {
        let korErtek = KORINPUTELEMSZ.val();
        let szurtlista = szures(ADATLISTA, "kor", korErtek);
        console.log(szurtlista);
        let tartalom = megjelenit(szurtlista);
        $("table").replaceWith(tartalom);
    });

    FAJTAINPUTELEMSZ.on("input", function () {
        let fajtaErtek = FAJTAINPUTELEMSZ.val();
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

function validalas() {
    $("#kuldes").on("click", function () {
        let nevErtek = $("#nev2").val();
        let korErtek = $("#kor2").val();
        let fajtaErtek = $("#fajta2").val();

        let nevRegex = /^[a-zA-Z]*$/;
        let korRegex = /^[0-9]{1,2}$|^20$/;
        let fajtaRegex = /^[a-zA-Z]*$/;

        if (!nevRegex.test(nevErtek)) {
            alert("A név csak betűket tartalmazhat!");
            return false;
        }

        if (!korRegex.test(korErtek)) {
            alert("A kor csak egy vagy két számjegy lehet, vagy 20!");
            return false;
        }

        if (!fajtaRegex.test(fajtaErtek)) {
            alert("A fajta csak betűket tartalmazhat!");
            return false;
        }
        
        return true;
    });
}