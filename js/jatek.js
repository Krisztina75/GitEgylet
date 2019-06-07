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

function ValaszkeroGomb_3() {
    var cicakaktusz = document.querySelector('#h_catus_gitus');
    var isCicakaktusz = cicakaktusz.checked;
    var popup = "";

    if (isCicakaktusz == true) {
        popup = 'Helyes válasz!';
    } else {
        popup = 'Sajnos nem talált.';
    }
    alert(popup);
}

function ValaszkeroGomb_4() {
    var felfujhato = document.querySelector('#kaktusz2');
    var isFelfujhato = felfujhato.checked;
    var popup = "";

    if (isFelfujhato == true) {
        popup = 'Jó válasz!';
    } else {
        popup = 'Ezt is elfogadom.';
    }
    alert(popup);
}