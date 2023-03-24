function rendezesesKorszerint(lista, kulcs) {
    lista.sort(function (a, b) {
        return a[kulcs] - b[kulcs];
    });
}

function rendezesesNevszerint(lista, kulcs) {
    lista.sort(function (a, b) {
        let ertek = 1;
        if (a[kulcs].toUpperCase() < b[kulcs].toUpperCase()) {
            ertek = -1;
        }
        return ertek;
    });
}

export function rendezes(lista, kulcs) {
    if (typeof lista[0][kulcs] == "number") {
        rendezesesKorszerint(lista, kulcs);
    } else {
        rendezesesNevszerint(lista, kulcs);
    }
}

