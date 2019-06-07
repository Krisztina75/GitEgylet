var kaktuszok = [
          { "nev":"orvosi aloe",
            "magassag": "20-50 cm",
            "fenyigeny": "napos helyre",
            "vizigeny": "szárazságtűrő",
            "hoigeny": "melegigényes",
        }
    ,
    {
        "nev":"óriás sünkaktusz",
            "magassag": "50-100 cm",
            "fenyigeny": "fényigényes",
            "vizigeny": "szárazságtűrő",
            "hoigeny": "melegigényes",

        },

    {
         "nev":"háromélű kutyatej",
            "magassag": "50-100 cm",
            "fenyigeny": "fényigényes",
            "vizigeny": "szárazságtűrő",
            "hoigeny": "melegigényes",

        },
    {
         "nev":"botaktusz",
            "magassag": "150 cm",
            "fenyigeny": "világos helyre",
            "vizigeny": "szárazságtűrő",
            "hoigeny": "melegigényes",

        },
    {
        "nev":"agávé",
            "magassag": "0,5-1,0 m",
            "fenyigeny": "napos helyre",
            "vizigeny": "szárazságtűrő",
            "hoigeny": "melegigényes",

        },
];
document.getElementById("nev1").innerHTML = kaktuszok[0].nev;
document.getElementById("magassag1").innerHTML = kaktuszok[0].magassag;
document.getElementById("fenyigeny1").innerHTML=kaktuszok[0].fenyigeny;
document.getElementById("vizegeny1").innerHTML=kaktuszok[0].vizigeny;
document.getElementById("hoigeny1").innerHTML=kaktuszok[0].hoigeny;
console.log(kaktuszok[0].nev);