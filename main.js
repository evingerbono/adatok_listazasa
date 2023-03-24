import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezes.js";
import { szures } from "./szures.js";
$(function () {

    rendezes(ADATLISTA, "kor");
    rendezes(ADATLISTA, "nev");
    rendezes(ADATLISTA, "fajta");

    console.log(ADATLISTA);
    console.log(szures(ADATLISTA,"fajta","keverék"));

    const NEVINPUTELEM=$("#nev");
    const FAJTAINPUTELEM=$("#fajta");
    const TABLAZATELEM=$("#table")

    NEVINPUTELEM.on("change", function() {
        let nevErtek=NEVINPUTELEM.val();
        let szurtlista=szures(ADATLISTA,"nev",nevErtek);
        console.log(szurtlista);
    });

    FAJTAINPUTELEM.on("change", function(){
        let fajtaErtek=FAJTAINPUTELEM.val();
        let szurtlista=szures(ADATLISTA,"fajta",fajtaErtek);
        console.log(szurtlista);
    });
})

