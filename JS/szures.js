export function szures(lista,kulcs,szuresiFeltetel){

    const SZURTLISTA = lista.filter(function(a){
        return a[kulcs].includes(szuresiFeltetel);
    });
    return SZURTLISTA;
}