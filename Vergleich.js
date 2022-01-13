//Definition Arrays
var wegeIDVgl = new Array();
for (var j = 0; j < wegeIDVgl.length; j++) {
    wegeIDVgl[j] = new Array(2);
    wegeIDVgl[zaehler]["WegeID 1"] = "";
    wegeIDVgl[zaehler]["WegeID 2"] = "";
}
var wegeIDVglEinfach = new Array();
for (var a = 0; a < wegeIDVglEinfach.length; a++) {
    wegeIDVglEinfach[a] = new Array(2);
    wegeIDVglEinfach[zaehler]["WegeID 1"] = "";
    wegeIDVglEinfach[zaehler]["WegeID 2"] = "";
}

var wegeIDVglStartzeit = new Array();
for (var d = 0; d < wegeIDVglStartzeit.length; d++) {
    wegeIDVglStartzeit[d] = new Array(2);
    wegeIDVglStartzeit[zaehler]["WegeID 1"] = "";
    wegeIDVglStartzeit[zaehler]["WegeID 2"] = "";
}

var wegeIDVglKoordinaten = new Array();
for (var g = 0; g < wegeIDVglKoordinaten.length; g++) {
    wegeIDVglKoordinaten[g] = new Array(2);
    wegeIDVglKoordinaten[zaehler]["WegeID 1"] = "";
    wegeIDVglKoordinaten[zaehler]["WegeID 2"] = "";
}

var wegeIDVglWegezweck = new Array();
for (var b = 0; b < wegeIDVglWegezweck.length; b++) {
    wegeIDVglWegezweck[b] = new Array(2);
    wegeIDVglWegezweck[zaehler]["WegeID 1"] = "";
    wegeIDVglWegezweck[zaehler]["WegeID 2"] = "";
}
var wegeIDVglVerkehrsmittel = new Array();
for (var c = 0; c < wegeIDVglVerkehrsmittel.length; c++) {
    wegeIDVglVerkehrsmittel[c] = new Array(2);
    wegeIDVglVerkehrsmittel[zaehler]["WegeID 1"] = "";
    wegeIDVglVerkehrsmittel[zaehler]["WegeID 2"] = "";
}

var wegeIDVglWegepaare = new Array();
for (var a = 0; a < wegeIDVglWegepaare.length; a++) {
    wegeIDVglWegepaare[a] = new Array(2);
    wegeIDVglWegepaare[zaehler]["WegeID 1"] = "";
    wegeIDVglWegepaare[zaehler]["WegeID 2"] = "";
}

let verkehrsmittelWeg1 = new Array();

let verkehrsmittelWeg2 = new Array();

let aktuellesElement = [];

var hilfs = true;

//Beginn Funktionen

function auswahlVglKriterien(){

    document.getElementById("box7").style.display = "block"

}
function vergleicheWege() {

    console.log("Start Vergleich");

    console.log("Bilde Wegepaare");
    wegeIDVglWegepaare = bildeWegepaare();
    console.log("wegeIDVglWegepaare");

    console.log(wegeIDVglWegepaare);

    //Beginn Vergleiche

    console.log("Vergleich Koordinaten");
    wegeIDVglWegepaare = vergleicheKoordinaten(wegeIDVglWegepaare);
    console.log("Ende Vergleich Koordinaten");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

    console.log("Vergleich Startzeit");
    wegeIDVglWegepaare =  vergleicheStartzeit(wegeIDVglWegepaare);
    console.log("Ende Vergleich Startzeit");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

    console.log("Vergleich Wegezweck");
    wegeIDVglWegepaare =  vergleicheWegezweck(wegeIDVglWegepaare);
    console.log("Ende Vergleich Wegezweck");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

    console.log("Vergleich Verkehrsmittel");
    wegeIDVglWegepaare = vergleicheVerkehrsmittel(wegeIDVglWegepaare);
    console.log("Ende Vergleich Verkehrsmittel");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);


    console.log("Ende aller Vergleiche");
    //Ende Vergleiche

    //TODO Ausgabe Wege
    //TODO zeichne Wege

} //Ende vergleicheWege()

function bildeWegepaare() {

    //Bilde Wegepaare
    var zaehler = 0;
    wegeIDVgl[zaehler] = new Array();
    wegeIDVgl[zaehler]["WegeID 1"] = "";
    wegeIDVgl[zaehler]["WegeID 2"] = "";

    wegedaten.forEach(function(element){

        for(var i = 0; i < wegedaten.length; i++){

            if(element["UserID"] == wegedaten[i]["UserID"]){ //? nicht für 2020 und 2018

                if(element["WegeID"] != wegedaten[i]["WegeID"]){

                    console.log("Eintrag");
                    wegeIDVgl[zaehler] = new Array();
                    wegeIDVgl[zaehler]["WegeID 1"] = element["WegeID"];
                    wegeIDVgl[zaehler]["WegeID 2"] = wegedaten[i]["WegeID"];
                    zaehler = zaehler + 1;

                }

            }

        }

    });

    console.log("wegeIDVgl");
    console.log(wegeIDVgl);

    //Suche Wegepaare mit gleichen Wegen
    var zaehlVgl = Math.round(wegedaten.length/2);
    console.log("zaehlVgl" );
    console.log(zaehlVgl);

    //Alternative speichere nur ein Wegepaar mit den gleichen beiden Wegen
    for (var l = 0; l < wegedaten.length*2-1; l++){

        //console.log(wegeIDVgl[l]);
        //console.log(wegeIDVgl[zaehlVgl]);
        if(wegeIDVgl[l]["WegeID 1"] == wegeIDVgl[zaehlVgl]["WegeID 2"] && wegeIDVgl[zaehlVgl]["WegeID 1"] == wegeIDVgl[l]["WegeID 2"] ||
            (wegeIDVgl[zaehlVgl]["WegeID 1"] == wegeIDVgl[l]["WegeID 2"] && wegeIDVgl[l]["WegeID 1"] == wegeIDVgl[zaehlVgl]["WegeID 2"]) ) {

            //console.log("gleich")

            zaehlVgl = zaehlVgl - 1;

        } else {

            //console.log("nicht gleich")
            wegeIDVglEinfach.push(wegeIDVgl[l]);
        }

    }



    /* //speichere nur ein Wegepaar mit den gleichen beiden Wegen
       //funktioniert nicht
     for(var b = 0; b < wegeIDVgl.length-1; b = b + zaehlVgl){
         wegeIDVglEinfach.push(wegeIDVgl[b]);

     }

     */

    console.log("wegeIDVgl");
    console.log(wegeIDVgl);
    console.log("wegeIDVglEinfach");
    console.log(wegeIDVglEinfach);

    return wegeIDVglEinfach;

}  //Ende bildeWegepaare()

function vergleicheKoordinaten(wegeIDVglWegepaare){

    //Vergleich Koordinaten
    // GPS-Koordinaten
    // nehme ersten Weg und suche passenden Weg in bestimmtem Durchmesser (?), Start, Ziel, Verkehrsmittelwechsel
    //TODO Vergleich Koordinaten sichtbare Kommentare verschönern
    //TODO Vergleich Koordinaten Festlegung Koordinatenbereich
    //TODO Vergleich Koordinaten sichtbare log-Ausgaben verschönern


    wegeIDVglWegepaare.forEach(function(element){

        var wegeID1 = element["WegeID 1"];
        var weg1Zaehler = "";
        var wegeID2 = element["WegeID 2"];
        var weg2Zaehler = "";

        console.log("wegeID1");
        console.log(wegeID1);
        console.log("wegeID2");
        console.log(wegeID2);

        for (z = 0; z < wegedatenKoordinaten.length; z++){
            if (wegeID1 == wegedatenKoordinaten[z]["WegeID"]){
                weg1Zaehler = z;
            }
            if (wegeID2 == wegedatenKoordinaten[z]["WegeID"]){
                weg2Zaehler = z;
            }

        }

        console.log("weg1Zaehler");
        console.log(weg1Zaehler);
        console.log("weg2Zaehler");
        console.log(weg2Zaehler);

        console.log(wegedatenKoordinaten[weg1Zaehler]);
        console.log(wegedatenKoordinaten[weg1Zaehler].length);
        console.log(wegedatenKoordinaten[weg2Zaehler]);
        console.log(wegedatenKoordinaten[weg2Zaehler].length);

        var vmGleichZ = 0;
        var maxLaenge = document.getElementById("maxAbweichung").value;


        if(wegedatenKoordinaten[weg1Zaehler].length == wegedatenKoordinaten[weg2Zaehler].length){

            for( var k = 0; k < wegedatenKoordinaten[weg1Zaehler].length; k = k + 2){
                console.log(k);
                console.log("wegedatenKoordinaten[weg1Zaehler][k]");
                console.log(wegedatenKoordinaten[weg1Zaehler][k]);
                console.log("wegedatenKoordinaten[weg1Zaehler][k+1]");
                console.log(wegedatenKoordinaten[weg1Zaehler][k+1]);
                console.log("wegedatenKoordinaten[weg2Zaehler][k]");
                console.log(wegedatenKoordinaten[weg2Zaehler][k]);
                console.log("wegedatenKoordinaten[weg2Zaehler][k+1]");
                console.log(wegedatenKoordinaten[weg2Zaehler][k+1]);

                console.log(wegedatenKoordinaten[weg1Zaehler][k], wegedatenKoordinaten[weg1Zaehler][k+1], wegedatenKoordinaten[weg2Zaehler][k], wegedatenKoordinaten[weg2Zaehler][k+1], maxLaenge);
                var vglKoo = vergleichsFunktion(wegedatenKoordinaten[weg1Zaehler][k], wegedatenKoordinaten[weg1Zaehler][k+1], wegedatenKoordinaten[weg2Zaehler][k], wegedatenKoordinaten[weg2Zaehler][k+1], maxLaenge);
                if(vglKoo == false){
                    vmGleichZ = vmGleichZ + 1;
                }

            }


        } else {
            console.log("Koordinatenanzahl stimmt nicht überein");
        }


        if (vmGleichZ == 0){
            wegeIDVglKoordinaten.push({"WegeID 1": wegeID1, "WegeID 2": wegeID2});
            console.log("Speichere gleiche Koordinaten");
        } else {
            console.log("Koordinaten stimmen nicht überein");
        }

    });


    console.log("wegeIDVglKoordinaten");
    console.log(wegeIDVglKoordinaten);

    return wegeIDVglKoordinaten;
} //vergleicheKoordinaten()

function vergleichsFunktion(lat1, lon1, lat2, lon2, maxLaenge){

    /*var lat1 = 49.00380085;
var lon1 = 8.34454316;
var lat2 = 49.01084452;
var lon2 = 8.37611017;

 */

    /*var lat1 = 49.00380085;
    var lon1 = 8.34454316;
    var lat2 = 49.00151027;
    var lon2 = 8.34511168;

    var maxLaenge = 1000;

     */

    var kooGleich = false;
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in metres


    console.log("Distanz in Metern");
    console.log(d);

    if (d <= maxLaenge){
        console.log("Distanz unter Grenzwert");
        kooGleich = true;
    } else {
        console.log("Distanz über Grenzwert");
    }

    return kooGleich;
} //vergleichsFunktion

function vergleicheStartzeit(wegeIDVglWegepaare){

    //Vergleich Zeit
    // nehme ersten Weg und suche passenden Weg in bestimmtem Zeitbereich (?)
    //TODO Vergleich Zeit Festlegung Zeitbereich

    //Festlegung Zeitbereich von und bis
    var startzeitraumStu = document.getElementById("startzeitraumStu").value;
    var startzeitraumMin = document.getElementById("startzeitraumMin").value;
    var startzeitraumSec = document.getElementById("startzeitraumSec").value;

    var startzeitraum = new Date();
    startzeitraum.setHours(startzeitraumStu, startzeitraumMin, startzeitraumSec);
    console.log("startzeitraum");
    console.log(startzeitraum);

    wegeIDVglWegepaare.forEach(function(element){

        var wegeID1 = element["WegeID 1"];
        var weg1Zaehler = "";
        var wegeID2 = element["WegeID 2"];
        var weg2Zaehler = "";

        for (z = 0; z < wegedaten.length; z++){
            if (wegeID1 == wegedaten[z]["WegeID"]){
                weg1Zaehler = z;
            }
            if (wegeID2 == wegedaten[z]["WegeID"]){
                weg2Zaehler = z;
            }

        }

        //Startzeit Weg1 als date anlegen
        var startzeit1 = wegedaten[weg1Zaehler]["Startzeit"];
        //console.log(weg1Zaehler);
        //console.log(startzeit1);

        var zeit1 = startzeit1.substr(11);
        //console.log(zeit1);
        var stunden1 = zeit1.substr(0,2);
        var minuten1 = zeit1.substr(3,2);
        var sekunden1 = zeit1.substr(6,2);
        //console.log(startzeit1);
        var tag1 = startzeit1.substr(0,2);
        var monat1 = startzeit1.substr(3,2)-1;
        var jahr1 = startzeit1.substr(6,4);
        //console.log(tag1, monat1, jahr1);
        var date1 = new Date(jahr1, monat1, tag1, stunden1, minuten1, sekunden1);
        console.log("date1");
        console.log(date1);

        //Startzeit Weg2 als date anlegen
        var startzeit2 = wegedaten[weg2Zaehler]["Startzeit"];
        //console.log(weg2Zaehler);
        //console.log(startzeit2);

        var zeit2 = startzeit2.substr(11);
        //console.log(zeit2);
        var stunden2 = zeit2.substr(0,2);
        var minuten2 = zeit2.substr(3,2);
        var sekunden2 = zeit2.substr(6,2);
        //console.log(startzeit2);
        var tag2 = startzeit2.substr(0,2);
        var monat2 = startzeit2.substr(3,2)-1;
        var jahr2 = startzeit2.substr(6,4);
        //console.log(tag2, monat2, jahr2);
        var date2 = new Date(jahr2, monat2, tag2, stunden2, minuten2, sekunden2);
        console.log("date2");
        console.log(date2);

        //Zeitraum "von" mit Stunden, Minuten, Sekunden von Weg1 und Datum von Weg2 anlegen
        var startzeitVonStunden = parseInt(stunden1, 10) - startzeitraumStu;
        var startzeitVonMinuten = parseInt(minuten1, 10) - startzeitraumMin;
        var startzeitVonSekunden = parseInt(sekunden1, 10) - startzeitraumSec;
        //console.log(tag1);
        //console.log(stunden1, "-", startzeitraumStu);
        //console.log(minuten1, "-", startzeitraumMin);
        //console.log(sekunden1, "-", startzeitraumSec);
        //console.log(startzeitVonStunden, " ", startzeitVonMinuten, " ", startzeitVonSekunden);
        var startzeitVon = new Date(jahr2, monat2, tag2, startzeitVonStunden, startzeitVonMinuten, startzeitVonSekunden);
        console.log("startzeitVon");
        console.log(startzeitVon);

        //Zeitraum "bis" mit Stunden, Minuten, Sekunden von Weg1 und Datum von Weg2 anlegen
        var startzeitBisStunden = parseInt(stunden1, 10) + startzeitraumStu;
        var startzeitBisMinuten = parseInt(minuten1, 10) + startzeitraumMin;
        var startzeitBisSekunden = parseInt(sekunden1, 10) + startzeitraumSec;
        //console.log(tag1);
        //console.log(stunden1, "+", startzeitraumStu);
        //console.log(minuten1, "+", startzeitraumMin);
        //console.log(sekunden1, "+", startzeitraumSec);
        //console.log(startzeitBisStunden, " ", startzeitBisMinuten, " ", startzeitBisSekunden);
        var startzeitBis = new Date(jahr2, monat2, tag2, startzeitBisStunden, startzeitBisMinuten, startzeitBisSekunden);
        console.log("startzeitBis");
        console.log(startzeitBis);


        //speichere Wegepaar, wenn Weg2 im vorgegeben Zeitfenster zu Weg1 passt
        if (startzeitVon < date2 < startzeitBis){
            wegeIDVglStartzeit.push(element);
            console.log("Speichere innerhalb Zeitraum");
        }

    });

    console.log("wegeIDVglStartzeit");
    console.log(wegeIDVglStartzeit);


    return wegeIDVglStartzeit;
} //vergleicheStartzeit()

function vergleicheWegezweck(wegeIDVglWegepaare){

    //Vergleich Wegezweck
    // nehme ersten Weg und suche passenden Weg mit gleichem Wegezweck

    wegeIDVglWegepaare.forEach(function(element){

        var wegeID1 = element["WegeID 1"];
        var weg1Zaehler = "";
        var wegeID2 = element["WegeID 2"];
        var weg2Zaehler = "";

        for (z = 0; z < wegedaten.length; z++){
            if (wegeID1 == wegedaten[z]["WegeID"]){
                weg1Zaehler = z;
            }
            if (wegeID2 == wegedaten[z]["WegeID"]){
                weg2Zaehler = z;
            }

        }

        var wegeZweck1= wegedaten[weg1Zaehler]["Wegezweck"];

        //console.log(weg1Zaehler);
        console.log("wegeZweck1");
        console.log(wegeZweck1);

        var wegeZweck2= wegedaten[weg2Zaehler]["Wegezweck"];

        //console.log(weg2Zaehler);
        console.log("wegeZweck2");
        console.log(wegeZweck2);

        //speichere Wegepaar, wenn Wegezweck von Weg1 und Weg1 gleich ist
        if (wegeZweck1 == wegeZweck2){
            wegeIDVglWegezweck.push(element);
            console.log("Speichere gleicher Zweck");
        }

    });

    console.log("wegeIDVglWegezweck ");
    console.log(wegeIDVglWegezweck);

    return wegeIDVglWegezweck;
}


function vergleicheVerkehrsmittel(wegeIDVglWegepaare) {

    //Vergleich Verkehrsmittel
    // nehme ersten Weg und suche passenden Weg mit gleichem Verkehrsmittel

    wegeIDVglWegepaare.forEach(function(element){

        var wegeID1 = element["WegeID 1"];
        var wegeID2 = element["WegeID 2"];
        console.log("wegeID1");
        console.log(wegeID1);
        console.log("wegeID2");
        console.log(wegeID2);

        var zaehlerwegedatenVM1 = "";
        var zaehlerwegedatenVM2 = "";

        for (var z = 0; z < wegedatenVerkehrsmittel.length; z++){
            if (wegeID1 == wegedatenVerkehrsmittel[z]["WegeID"]){
                zaehlerwegedatenVM1 = z;
            }
            if (wegeID2 == wegedatenVerkehrsmittel[z]["WegeID"]){
                zaehlerwegedatenVM2 = z;
            }

        }

        console.log("zaehlerwegedatenVM1");
        console.log(zaehlerwegedatenVM1);
        console.log("zaehlerwegedatenVM2");
        console.log(zaehlerwegedatenVM2);

        var zV = 0;

        for (var w = 0; w < wegedatenVerkehrsmittel[zaehlerwegedatenVM1].length; w++){
            console.log("wegedatenVerkehrsmittel[zaehlerwegedatenVM1][w]");
            console.log(wegedatenVerkehrsmittel[zaehlerwegedatenVM1][w]);
            console.log("wegedatenVerkehrsmittel[zaehlerwegedatenVM2][w]");
            console.log(wegedatenVerkehrsmittel[zaehlerwegedatenVM2][w]);

            if(wegedatenVerkehrsmittel[zaehlerwegedatenVM1][w] == wegedatenVerkehrsmittel[zaehlerwegedatenVM2][w]){
                zV = zV + 1;
            }
        }

        var vmGleichZ = 0;

        if(wegedatenVerkehrsmittel[zaehlerwegedatenVM1].length == zV){

            for(var w = 0; w < zV; w++){
                if(wegedatenVerkehrsmittel[zaehlerwegedatenVM1][w] != wegedatenVerkehrsmittel[zaehlerwegedatenVM2][w]){
                    vmGleichZ = vmGleichZ + 1;
                }

            }

            if (vmGleichZ == 0){
                wegeIDVglVerkehrsmittel.push({"WegeID 1": wegeID1, "WegeID 2": wegeID2});
                console.log("Speichere gleiches Verkehrsmittel");
            } else {
                console.log("Verkehrsmittel stimmen nicht überein");
            }

        } else {
            console.log("Verkehrsmittelanzahl stimmt nicht überein");
        }


    });


    console.log("wegeIDVglVerkehrsmittel");
    console.log(wegeIDVglVerkehrsmittel);

    return wegeIDVglVerkehrsmittel;
} //Ende vergleiche Verkehrsmittel()
