function ValaszkeroGomb() {
    var elsoValasztas = document.querySelector('#h_karacsonyi');
    var isKaracsonyi = elsoValasztas.checked;
    var popup = "";

    if (isKaracsonyi == true) {
        popup = 'Helyes válasz! :)';
    } else {
        popup = 'Sajnálom, nem talált.';
    }
    alert(popup);
}