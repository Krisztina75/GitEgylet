function ValaszkeroGomb() {
    var karacsonyi = document.querySelector('#h_karacsonyi');
    var isKaracsonyi = karacsonyi.checked;
    var popup = "";

    if (isKaracsonyi == true) {
        popup = 'Helyes válasz!';
    } else {
        popup = 'Sajnos nem talált.';
    }
    alert(popup);
}

function ValaszkeroGomb_2() {
    var tengerisun = document.querySelector('#h_tengerisun');
    var isTengerisun = tengerisun.checked;
    var popup = "";

    if (isTengerisun == true) {
        popup = 'Helyes válasz!';
    } else {
        popup = 'Sajnos nem talált.';
    }
    alert(popup);
}