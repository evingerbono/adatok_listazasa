import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezes.js";
import { szures } from "./szures.js";
$(function () {

    rendezes(ADATLISTA, "kor");
    rendezes(ADATLISTA, "nev");
    rendezes(ADATLISTA, "fajta");

    console.log(ADATLISTA);
    console.log(szures(ADATLISTA, "fajta", "keverék"));

    const NEVINPUTELEM = $("#nev");
    const FAJTAINPUTELEM = $("#fajta");

    NEVINPUTELEM.on("change", function () {
        let nevErtek = NEVINPUTELEM.val();
        let szurtlista = szures(ADATLISTA, "nev", nevErtek);
        console.log(szurtlista);
    });

    FAJTAINPUTELEM.on("change", function () {
        let fajtaErtek = FAJTAINPUTELEM.val();
        let szurtlista = szures(ADATLISTA, "fajta", fajtaErtek);
        console.log(szurtlista);
    });

    const TABLAZATELEM = $("article");
    let tartalom = megjelenit(ADATLISTA);
    TABLAZATELEM.append(tartalom);
})

function megjelenit(lista) {
    let txt = "";
    txt += "<table>";
    for (let index = 0; index < lista.length; index++) {
        txt+="<tr>"
        for (let kulcs in lista) {
            txt += "<td>" + lista[index][kulcs] + "</td>";
        }
        txt+="</tr>"
    }
    txt +="</table>";
    return txt;
}

