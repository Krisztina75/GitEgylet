var orvosiAloe = 0;
var oriasSunkaktusz = 0;
var haromeluKutyatej = 0;
var botkaktusz = 0;
var agave = 0;
/*
function start() {
var start  */

function szavazas() {
    var valasztott = document.querySelector('input[name=voting]:checked');
    /*
        for (var i = 0; i < valasztott.length; i++) {
            if (valasztott[i].checked == true) {
                console.log(valasztott[i].value);
            } */


    if (parseInt(valasztott.value) == 1) {

        orvosiAloe = orvosiAloe + 1;
        console.log('Az orvosi aloénak ' + orvosiAloe + ' pontja van.');

    } else if (parseInt(valasztott.value) == 2) {
        oriasSunkaktusz = oriasSunkaktusz + 1;
        console.log('Az óriás sünkaktusznak ' + oriasSunkaktusz + ' pontja van.');
    } else if (parseInt(valasztott.value) == 3) {
        haromeluKutyatej = haromeluKutyatej + 1;
        console.log('A háromélű kutyatejnek ' + haromeluKutyatej + ' pontja van.');
    } else if (parseInt(valasztott.value) == 4) {
        botkaktusz = botkaktusz + 1;
        console.log('A botkaktusznak' + botkaktusz + ' pontja van.');
    } else {
        agave = agave + 1;
        console.log('Az agávénak ' + agave + ' pontja van.');
    }
}


function lekerdez() {
    alert('Orvosi aloe: ' + orvosiAloe + '\n' + 'Óriás sünkaktusz: ' + oriasSunkaktusz + '\n' + 'Háromélű kutyatej: ' + haromeluKutyatej + '\n' + 'Botkaktusz: ' + botkaktusz + '\n' + 'Agávé: ' + agave);
}