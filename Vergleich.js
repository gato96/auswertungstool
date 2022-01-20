//Definition Arrays
var wegeIDVgl = new Array();
for (var j = 0; j < wegeIDVgl.length; j++) {
    wegeIDVgl[j] = new Array(3);
    wegeIDVgl[zaehler]["WegeID 1"] = "";
    wegeIDVgl[zaehler]["WegeID 2"] = "";
    wegeIDVgl[zaehler]["UserID"] = "";

}
var wegeIDVglEinfach = new Array();
for (var a = 0; a < wegeIDVglEinfach.length; a++) {
    wegeIDVglEinfach[a] = new Array(3);
    wegeIDVglEinfach[zaehler]["WegeID 1"] = "";
    wegeIDVglEinfach[zaehler]["WegeID 2"] = "";
    wegeIDVglEinfach[zaehler]["UserID"] = "";
}

var wegeIDVglStartzeit = new Array();
for (var d = 0; d < wegeIDVglStartzeit.length; d++) {
    wegeIDVglStartzeit[d] = new Array(3);
    wegeIDVglStartzeit[zaehler]["WegeID 1"] = "";
    wegeIDVglStartzeit[zaehler]["WegeID 2"] = "";
    wegeIDVglStartzeit[zaehler]["UserID"] = "";
}

var wegeIDVglDauerUmstieg = new Array();
for (var c = 0; c < wegeIDVglDauerUmstieg.length; c++) {
    wegeIDVglDauerUmstieg[c] = new Array(3);
    wegeIDVglDauerUmstieg[zaehler]["WegeID 1"] = "";
    wegeIDVglDauerUmstieg[zaehler]["WegeID 2"] = "";
    wegeIDVglDauerUmstieg[zaehler]["UserID"] = "";
}

var wegeIDVglKoordinaten = new Array();
for (var g = 0; g < wegeIDVglKoordinaten.length; g++) {
    wegeIDVglKoordinaten[g] = new Array(3);
    wegeIDVglKoordinaten[zaehler]["WegeID 1"] = "";
    wegeIDVglKoordinaten[zaehler]["WegeID 2"] = "";
    wegeIDVglKoordinaten[zaehler]["UserID"] = "";
}

var wegeIDVglKoordinatenUmstieg = new Array();
for (var c = 0; c < wegeIDVglKoordinatenUmstieg.length; c++) {
    wegeIDVglKoordinatenUmstieg[c] = new Array(3);
    wegeIDVglKoordinatenUmstieg[zaehler]["WegeID 1"] = "";
    wegeIDVglKoordinatenUmstieg[zaehler]["WegeID 2"] = "";
    wegeIDVglKoordinatenUmstieg[zaehler]["UserID"] = "";
}

var wegeIDVglWegezweck = new Array();
for (var b = 0; b < wegeIDVglWegezweck.length; b++) {
    wegeIDVglWegezweck[b] = new Array(3);
    wegeIDVglWegezweck[zaehler]["WegeID 1"] = "";
    wegeIDVglWegezweck[zaehler]["WegeID 2"] = "";
    wegeIDVglWegezweck[zaehler]["UserID"] = "";
}
var wegeIDVglVerkehrsmittel = new Array();
for (var c = 0; c < wegeIDVglVerkehrsmittel.length; c++) {
    wegeIDVglVerkehrsmittel[c] = new Array(3);
    wegeIDVglVerkehrsmittel[zaehler]["WegeID 1"] = "";
    wegeIDVglVerkehrsmittel[zaehler]["WegeID 2"] = "";
    wegeIDVglVerkehrsmittel[zaehler]["UserID"] = "";
}


var wegeIDVglWegepaare = new Array();
for (var a = 0; a < wegeIDVglWegepaare.length; a++) {
    wegeIDVglWegepaare[a] = new Array(3);
    wegeIDVglWegepaare[zaehler]["WegeID 1"] = "";
    wegeIDVglWegepaare[zaehler]["WegeID 2"] = "";
    wegeIDVglWegepaare[zaehler]["UserID"] = "";
}

var wegeIDVglAusgabe = new Array();


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

    /*console.log("Vergleich Koordinaten");
    wegeIDVglWegepaare = vergleicheKoordinaten(wegeIDVglWegepaare);
    console.log("Ende Vergleich Koordinaten");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

    console.log("Vergleich Koordinaten Umstieg");
    wegeIDVglWegepaare = vergleicheKoordinatenUmstieg(wegeIDVglWegepaare);
    console.log("Ende Vergleich Koordinaten Umstieg");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

    console.log("Vergleich Startzeit");
    wegeIDVglWegepaare =  vergleicheStartzeit(wegeIDVglWegepaare);
    console.log("Ende Vergleich Startzeit");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

     */

    console.log("Vergleich Umstiegszeit");
    wegeIDVglWegepaare =  vergleicheUmstiegszeit(wegeIDVglWegepaare);
    console.log("Ende Vergleich Umstiegszeit");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

    /*console.log("Vergleich Wegezweck");
    wegeIDVglWegepaare =  vergleicheWegezweck(wegeIDVglWegepaare);
    console.log("Ende Vergleich Wegezweck");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

    console.log("Vergleich Verkehrsmittel");
    wegeIDVglWegepaare = vergleicheVerkehrsmittel(wegeIDVglWegepaare);
    console.log("Ende Vergleich Verkehrsmittel");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

     */


    console.log("Ende aller Vergleiche");
    //Ende Vergleiche

    //Ausgabe der auf Karte und Ausgabe Wegeinformationen

    console.log("Anzeige und Ausgabe Wegedaten");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);


    zeichneWegVgl(wegeIDVglWegepaare);



} //Ende vergleicheWege()

function bildeWegepaare() {

    //Bilde Wegepaare
    var zaehler = 0;
    wegeIDVgl[zaehler] = new Array();
    wegeIDVgl[zaehler]["WegeID 1"] = "";
    wegeIDVgl[zaehler]["WegeID 2"] = "";
    wegeIDVgl[zaehler]["UserID"] = "";

    wegedaten.forEach(function(element){

        for(var i = 0; i < wegedaten.length; i++){

            if(element["UserID"] == wegedaten[i]["UserID"]){

                if(element["WegeID"] != wegedaten[i]["WegeID"]){

                    console.log("Wegepaar mit gleicher UserID");
                    wegeIDVgl[zaehler] = new Array();
                    wegeIDVgl[zaehler]["WegeID 1"] = element["WegeID"];
                    wegeIDVgl[zaehler]["WegeID 2"] = wegedaten[i]["WegeID"];
                    wegeIDVgl[zaehler]["UserID"] = "Wegepaar mit gleicher UserID";

                    zaehler = zaehler + 1;

                }

            } else {

                //TODO element["UserID"] == undefined prüfen, ob if angesprochen wird
                if(element["UserID"] == undefined){
                    console.log("UserID nicht vorhanden");
                    wegeIDVgl[zaehler] = new Array();
                    wegeIDVgl[zaehler]["WegeID 1"] = element["WegeID"];
                    wegeIDVgl[zaehler]["WegeID 2"] = wegedaten[i]["WegeID"];
                    wegeIDVgl[zaehler]["UserID"] = "UserID nicht vorhanden";

                    zaehler = zaehler + 1;

                } else {
                    console.log("UserID stimmt nicht überein");
                    wegeIDVgl[zaehler] = new Array();
                    wegeIDVgl[zaehler]["WegeID 1"] = element["WegeID"];
                    wegeIDVgl[zaehler]["WegeID 2"] = wegedaten[i]["WegeID"];
                    wegeIDVgl[zaehler]["UserID"] = "UserID stimmt nicht überein";

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
    //TODO Vergleich Koordinaten Festlegung Koordinatenbereich

    wegeIDVglWegepaare.forEach(function(element){

        var wegeID1 = element["WegeID 1"];
        var weg1Zaehler = "";
        var wegeID2 = element["WegeID 2"];
        var weg2Zaehler = "";
        var userID = element["UserID"];

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

        console.log("wegedatenKoordinaten[weg1Zaehler]");
        console.log(wegedatenKoordinaten[weg1Zaehler]);
        console.log("wegedatenKoordinaten[weg1Zaehler].length");
        console.log(wegedatenKoordinaten[weg1Zaehler].length);
        console.log(wegedatenKoordinaten[weg2Zaehler]);
        console.log("wegedatenKoordinaten[weg2Zaehler]");
        console.log("wegedatenKoordinaten[weg2Zaehler].length");
        console.log(wegedatenKoordinaten[weg2Zaehler].length);

        var vmGleichZ = 0;
        var maxLaenge = document.getElementById("maxAbweichung").value;
        console.log("maxLaenge");
        console.log(maxLaenge);


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

                console.log(wegedatenKoordinaten[weg1Zaehler][k], wegedatenKoordinaten[weg1Zaehler][k+1], wegedatenKoordinaten[weg2Zaehler][k], wegedatenKoordinaten[weg2Zaehler][k+1]);
                var vglKoo = false;
                var distanz = vergleichsFunktion(wegedatenKoordinaten[weg1Zaehler][k], wegedatenKoordinaten[weg1Zaehler][k+1], wegedatenKoordinaten[weg2Zaehler][k], wegedatenKoordinaten[weg2Zaehler][k+1]);

                if (distanz <= maxLaenge){
                    console.log("Distanz unter Grenzwert");
                    vglKoo = true;
                } else {
                    console.log("Distanz über Grenzwert");
                }

                if(vglKoo == false){
                    vmGleichZ = vmGleichZ + 1;
                }

            }


        } else {
            console.log("Koordinatenanzahl stimmt nicht überein");
        }


        if (vmGleichZ == 0){
            wegeIDVglKoordinaten.push({"WegeID 1": wegeID1, "WegeID 2": wegeID2, "UserID": userID});
            console.log("Speichere gleiche Koordinaten");
        } else {
            console.log("Koordinaten stimmen nicht überein");
        }

    });


    console.log("wegeIDVglKoordinaten");
    console.log(wegeIDVglKoordinaten);

    return wegeIDVglKoordinaten;
} //vergleicheKoordinaten()

function vergleicheKoordinatenUmstieg(wegeIDVglWegepaare){

    //Vergleich Koordinaten Umstieg
    // GPS-Koordinaten
    // nehme ersten Weg und suche passenden Weg in bestimmtem Durchmesser (?), Start, Ziel, Verkehrsmittelwechsel
    //TODO Vergleich Koordinaten Umstieg Festlegung Koordinatenbereich

    wegeIDVglWegepaare.forEach(function(element){

        var wegeID1 = element["WegeID 1"];
        var weg1Zaehler = "";
        var wegeID2 = element["WegeID 2"];
        var weg2Zaehler = "";
        var userID = element["UserID"];

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

        console.log("wegedatenKoordinaten[weg1Zaehler]");
        console.log(wegedatenKoordinaten[weg1Zaehler]);
        console.log("wegedatenKoordinaten[weg1Zaehler].length");
        console.log(wegedatenKoordinaten[weg1Zaehler].length);
        console.log(wegedatenKoordinaten[weg2Zaehler]);
        console.log("wegedatenKoordinaten[weg2Zaehler]");
        console.log("wegedatenKoordinaten[weg2Zaehler].length");
        console.log(wegedatenKoordinaten[weg2Zaehler].length);

        var vmGleichZ = 0;
        var maxLaenge = document.getElementById("maxAbweichungUmstieg").value;
        console.log("maxLaenge");
        console.log(maxLaenge);


        if(wegedatenKoordinaten[weg1Zaehler].length == wegedatenKoordinaten[weg2Zaehler].length){

            for( var k = 0; k < wegedatenKoordinaten[weg1Zaehler].length-2; k = k + 2){
                console.log(k);
                console.log("wegedatenKoordinaten[weg1Zaehler][k]");
                console.log(wegedatenKoordinaten[weg1Zaehler][k]);
                console.log("wegedatenKoordinaten[weg1Zaehler][k+1]");
                console.log(wegedatenKoordinaten[weg1Zaehler][k+1]);
                console.log("wegedatenKoordinaten[weg1Zaehler][k+2]");
                console.log(wegedatenKoordinaten[weg1Zaehler][k+2]);
                console.log("wegedatenKoordinaten[weg1Zaehler][k+3]");
                console.log(wegedatenKoordinaten[weg1Zaehler][k+3]);


                console.log("wegedatenKoordinaten[weg2Zaehler][k]");
                console.log(wegedatenKoordinaten[weg2Zaehler][k]);
                console.log("wegedatenKoordinaten[weg2Zaehler][k+1]");
                console.log(wegedatenKoordinaten[weg2Zaehler][k+1]);
                console.log("wegedatenKoordinaten[weg2Zaehler][k+2]");
                console.log(wegedatenKoordinaten[weg2Zaehler][k+2]);
                console.log("wegedatenKoordinaten[weg2Zaehler][k+3]");
                console.log(wegedatenKoordinaten[weg2Zaehler][k+3]);

                var vglKoo = false;

                //Vergleich Distanz weg1Zaehler][k]/weg1Zaehler][k+1] und weg1Zaehler][k+2]/weg1Zaehler][k+3]
                console.log(wegedatenKoordinaten[weg1Zaehler][k], wegedatenKoordinaten[weg1Zaehler][k+1], wegedatenKoordinaten[weg1Zaehler][k+2], wegedatenKoordinaten[weg1Zaehler][k+3]);
                var distanzweg1Zaehler = vergleichsFunktion(wegedatenKoordinaten[weg1Zaehler][k], wegedatenKoordinaten[weg1Zaehler][k+1], wegedatenKoordinaten[weg1Zaehler][k+2], wegedatenKoordinaten[weg1Zaehler][k+3]);

                //Vergleich Distanz weg2Zaehler][k]/weg2Zaehler][k+1] und weg2Zaehler][k+2]/weg2Zaehler][k+3]
                console.log(wegedatenKoordinaten[weg2Zaehler][k], wegedatenKoordinaten[weg2Zaehler][k+1], wegedatenKoordinaten[weg2Zaehler][k+2], wegedatenKoordinaten[weg2Zaehler][k+3]);
                var distanzweg2Zaehler = vergleichsFunktion(wegedatenKoordinaten[weg2Zaehler][k], wegedatenKoordinaten[weg2Zaehler][k+1], wegedatenKoordinaten[weg2Zaehler][k+2], wegedatenKoordinaten[weg2Zaehler][k+3]);

                var distanz = "";
                if(distanzweg1Zaehler > distanzweg2Zaehler){
                    distanz = distanzweg1Zaehler - distanzweg2Zaehler;

                } else {
                    distanz = distanzweg2Zaehler - distanzweg1Zaehler;
                }

                console.log("distanz");
                console.log(distanz);

                if (distanz <= maxLaenge){
                    console.log("Distanz unter Grenzwert");
                    vglKoo = true;
                } else {
                    console.log("Distanz über Grenzwert");
                }

                if(vglKoo == false){
                    vmGleichZ = vmGleichZ + 1;
                }

            }


        } else {
            console.log("Koordinatenanzahl stimmt nicht überein");
        }


        if (vmGleichZ == 0){
            wegeIDVglKoordinatenUmstieg.push({"WegeID 1": wegeID1, "WegeID 2": wegeID2, "UserID": userID});
            console.log("Speichere gleiche Koordinaten");
        } else {
            console.log("Koordinaten stimmen nicht überein");
        }

    });


    console.log("wegeIDVglKoordinatenUmstieg");
    console.log(wegeIDVglKoordinatenUmstieg);

    return wegeIDVglKoordinatenUmstieg;
} //vergleicheKoordinatenUmstieg()

function vergleichsFunktion(lat1, lon1, lat2, lon2){

    const R = 6371e3; // Meter
    const φ1 = lat1 * Math.PI/180; // φ, λ in radian
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = R * c; // in Metern


    console.log("Distanz in Metern");
    console.log(d);


    return d;
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

function vergleicheUmstiegszeit(wegeIDVglWegepaare){

    //Vergleich Zeit
    // nehme ersten Weg und suche passenden Weg in bestimmtem Zeitbereich (?)
    //TODO Vergleich Zeit Festlegung Zeitbereich

    //Festlegung Zeitbereich von und bis
    var umstiegszeitStu = document.getElementById("umstiegszeitStu").value;
    var umstiegszeitMin = document.getElementById("umstiegszeitMin").value;
    var umstiegszeitSec = document.getElementById("umstiegszeitSec").value;

    var umstiegszeitMax = new Date();
    umstiegszeitMax.setHours(umstiegszeitStu, umstiegszeitMin, umstiegszeitSec);
    console.log("umstiegszeitMax");
    console.log(umstiegszeitMax);

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

        console.log("weg1Zaehler");
        console.log(weg1Zaehler);
        console.log("weg2Zaehler");
        console.log(weg2Zaehler);

        console.log("wegedatenAbfahrtAnkunft[weg1Zaehler]");
        console.log(wegedatenAbfahrtAnkunft[weg1Zaehler]);
        console.log("wegedatenAbfahrtAnkunft[weg1Zaehler].length");
        console.log(wegedatenAbfahrtAnkunft[weg1Zaehler].length);
        console.log(wegedatenAbfahrtAnkunft[weg2Zaehler]);
        console.log("wegedatenAbfahrtAnkunft[weg2Zaehler]");
        console.log("wegedatenAbfahrtAnkunft[weg2Zaehler].length");
        console.log(wegedatenAbfahrtAnkunft[weg2Zaehler].length);

        var vmGleichZ = 0;

        if(wegedatenAbfahrtAnkunft[weg1Zaehler].length == wegedatenAbfahrtAnkunft[weg2Zaehler].length){

            for( var k = 0; k < wegedatenAbfahrtAnkunft[weg1Zaehler].length-2; k = k + 2){
                console.log(k);
                console.log("wegedatenAbfahrtAnkunft[weg1Zaehler][k+1]");
                console.log(wegedatenAbfahrtAnkunft[weg1Zaehler][k+1]);
                console.log("wegedatenAbfahrtAnkunft[weg1Zaehler][k+2]");
                console.log(wegedatenAbfahrtAnkunft[weg1Zaehler][k+2]);

                console.log("wegedatenAbfahrtAnkunft[weg2Zaehler][k+1]");
                console.log(wegedatenAbfahrtAnkunft[weg2Zaehler][k+1]);
                console.log("wegedatenAbfahrtAnkunft[weg2Zaehler][k+2]");
                console.log(wegedatenAbfahrtAnkunft[weg2Zaehler][k+2]);


                var vglZeit = false;

                //Vergleich Umstiegszeit weg1Zaehler][k+1] und weg1Zaehler][k+2]
                console.log(wegedatenAbfahrtAnkunft[weg1Zaehler][k+1], wegedatenAbfahrtAnkunft[weg1Zaehler][k+2]);
                var umstiegszeitweg1Zaehler = vergleichsFunktionZeit(wegedatenAbfahrtAnkunft[weg1Zaehler][k+1], wegedatenAbfahrtAnkunft[weg1Zaehler][k+2]);
                console.log("umstiegszeitweg1Zaehler");
                console.log(umstiegszeitweg1Zaehler);

                //Vergleich Umstiegszeit weg2Zaehler][k] und weg2Zaehler][k+1]
                console.log(wegedatenAbfahrtAnkunft[weg2Zaehler][k+1], wegedatenAbfahrtAnkunft[weg2Zaehler][k+1]);
                var umstiegszeitweg2Zaehler = vergleichsFunktionZeit(wegedatenAbfahrtAnkunft[weg2Zaehler][k+1], wegedatenAbfahrtAnkunft[weg2Zaehler][k+2]);
                console.log("umstiegszeitweg2Zaehler");
                console.log(umstiegszeitweg2Zaehler);

                var zeitdifferenz = "";
                if(umstiegszeitweg1Zaehler > umstiegszeitweg2Zaehler){
                    zeitdifferenz = umstiegszeitweg1Zaehler - umstiegszeitweg2Zaehler;

                } else {
                    zeitdifferenz = umstiegszeitweg2Zaehler - umstiegszeitweg1Zaehler;
                }

                console.log("zeitdifferenz");
                console.log(zeitdifferenz);

                //TODO Vergleich if (zeitdifferenz <= umstiegszeitMax): Zahl/Millisekungen vs Date
                if (zeitdifferenz <= umstiegszeitMax){
                    console.log("Zeitdifferenz unter Grenzwert");
                    vglZeit = true;
                } else {
                    console.log("Zeitdifferenz über Grenzwert");
                }

                if(vglZeit == false){
                    vmGleichZ = vmGleichZ + 1;
                }



            }




        } else {
            console.log("Anzahl Zeitwerte stimmt nicht überein");
        }


        if (vmGleichZ == 0){
            wegeIDVglDauerUmstieg.push({"WegeID 1": wegeID1, "WegeID 2": wegeID2, "UserID": userID});
            console.log("Speichere passende Zeitdifferenz");
        } else {
            console.log("Zeitdifferenz stimmt nicht überein");
        }





    });

    console.log("wegeIDVglDauerUmstieg");
    console.log(wegeIDVglDauerUmstieg);


    return wegeIDVglDauerUmstieg;
} //vergleicheUmstiegszeit()


function vergleichsFunktionZeit(ankunft, abfahrt) {

    console.log(ankunft);
    console.log(abfahrt);
    var umstiegszeitMS = (abfahrt.getTime() - ankunft.getTime());
    console.log("umstiegszeitMS")
    console.log(umstiegszeitMS);


    return umstiegszeitMS;
} //vergleichsFunktionZeit()

function millisekundenInDateWandeln(wertMS, datum) {

    var wertSec = wertMS/1000;
    console.log("wertSec")
    console.log(wertSec);

    function fuehrendeNull(wert) {
        if (wert < 10) return "0" + parseInt(wert);
        else return parseInt(wert);
    }

    var Jahr = datum.getUTCFullYear();
    var Monat = datum.getUTCMonth();
    var Tag = datum.getUTCDay();
    var Stu = fuehrendeNull((wertSec/60/60)%24);
    var Min = fuehrendeNull((wertSec/60)%60);
    var Sec = fuehrendeNull(wertSec%60);

    var daterueck = new Date(Jahr,  Monat, Tag, Stu, Min, Sec);


    return daterueck;
} //millisekundenInDateWandeln(wertMS)

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
        var userID = element["UserID"];

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
                wegeIDVglVerkehrsmittel.push({"WegeID 1": wegeID1, "WegeID 2": wegeID2, "UserID": userID});
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

function zeichneWegVgl(wegeIDVglWegepaare){

    // Rufe Ausgabe auf, in der alle dargestellten Wege aufgeführt werden
    document.getElementById("box6").style.display = "block";

    // alle Verkehrsmittel dem Array verkehrsmittel hinzufügen
    var verkehrsmittel = new Array();
    verkehrsmittel = ['zu Fuß', 'Fahrrad', 'Bus', 'Straßenbahn', 'S-Bahn', 'U-Bahn', 'Schiff/ Fähre', 'Auto (Fahrer)', 'Auto (Mitfahrer)', 'Reisebus', 'Flugzeug', 'Fernbus', 'Taxi'];

    wegeIDVglWegepaare.forEach(function(element,index){

        var wegeID1 = element["WegeID 1"];
        var wegeID2 = element["WegeID 2"];
        var userIDvgl = element["UserID"];

        console.log(index);

        // Füge neue wegeID dem Array wegeIDVglAusgabe hinzu (Array wegeIDVglAusgabe noch leer)
        if(wegeIDVglAusgabe.length == 0){
            wegeIDVglAusgabe.push(wegeID1);
            wegeIDVglAusgabe.push(wegeID2);
        }

        var hilf1 = false;
        var hilf2 = false;

        // Wenn neue wegeID noch nicht im Array wegeIDVglAusgabe enthalten ist füge neue wegeID hinzu

        wegeIDVglAusgabe.forEach(function(element) {
            if(element == wegeID1){
                hilf1 = true;
            }
            if(element == wegeID2){
                hilf2 = true;
            }
        });

        if(hilf1 == false){
            wegeIDVglAusgabe.push(wegeID1);
        }
        if(hilf2 == false){
            wegeIDVglAusgabe.push(wegeID2);
        }

        // Ausgabe Wegepaare
        var wegepaarNeu = "<b class='content'>Wegepaar: </b>" + "<span class='content'>"+ index +"</span>" +
            "<br class='content'>WegeID 1: </br>" + "<span class='content'>" + wegeID1 +"</span>" +
            "<br class='content'>WegeID 2: </br>" + "<span class='content'>" + wegeID2 +"</span>" +
            "<br class='content'>UserID: </br>" + "<span class='content'>" + userIDvgl +"</span>" +"<p></p>";
        var sel = document.getElementById("Ausgabe");
        var wegepaar = document.createElement('Wegepaar');
        wegepaar.innerHTML = wegepaarNeu;
        wegepaar.value = wegepaarNeu;
        sel.appendChild(wegepaar);


    });

    console.log("wegeIDVglAusgabe");
    console.log(wegeIDVglAusgabe);

    // load selected JSON Files
    let filesAuswahl = document.getElementById("jsonFiles").files;

    var ausgabe_data = new Array();

    // read selected JSON Files
    for(file of filesAuswahl) {
        let readerAuswahl = new FileReader();
        readerAuswahl.onload = function (f) {
            let content = JSON.parse(f.target.result);

            // Speichere akutelle WegeID
            var aktuelleWegeId = content[0]["a0_wayUUID"];

            // gehe durch Array wegeIDVglAusgabe (alle gefilterten wegeIDs)
            for(var a = 0; a < wegeIDVglAusgabe.length; a++){

                // wenn aktueller Weg in wegeIDVglAusgabe enthalten gehe weiter
                if(wegeIDVglAusgabe[a] == aktuelleWegeId){

                    // looping through wayStages
                    let wayStage = (content[0]["a5_wayStages"])
                    //console.log(wayStage)

                    let vmA = "";
                    var alleWayStages = "";
                    var f = 0;

                    // looping though coordinatesList
                    for (var i = 0; i < wayStage.length; i++) {

                        //neu
                        let cor = (wayStage[i]["a3_coordinatesList"])

                        anzC = 0;
                        var lat ;
                        var lng ;


                        var zaehler = "";

                        for(var c = 0; c < wegedatenKoordinaten.length; c++){
                            if(aktuelleWegeId == wegedatenKoordinaten[c]["WegeID"]){
                                zaehler = c;
                            }
                        }

                        for (var c = 0; c < cor.length; c++){
                            lat = cor[c]["coordinate_lat"];
                            lng = cor[c]["coordinate_lng"];
                            coordinates_lat.push(lat);
                            coordinates_lng.push(lng);
                            anzC = anzC + 1;
                        }
                        console.log(anzC);

                        /*var anzC1 = anzC - 1;
                        var aLatN = coordinates_lat[0];
                        var aLngN = coordinates_lng[0];

                        var aLatL = coordinates_lat[anzC1];
                        var aLngL = coordinates_lng[anzC1];

                         */

                        var aLatN = wegedatenKoordinaten[zaehler][f];
                        var aLngN = wegedatenKoordinaten[zaehler][f+1];

                        var aLatL = wegedatenKoordinaten[zaehler][f+2];
                        var aLngL = wegedatenKoordinaten[zaehler][f+3];

                        f = f + 4;


                        console.log("lat[0]: " + aLatN);
                        console.log("lng[0]: " + aLngN);

                        console.log("lat[anzC]: " + aLatL);
                        console.log("lng[anzC]: " + aLngL);

                        //Ende-neu

                        // speichere Verkehrsmittel der Etappe/wayStage
                        let vm = (wayStage[i]["a0_mode"]);

                        for(var b = 0; b < verkehrsmittel.length; b++){
                            if(verkehrsmittel[b] == vm){
                                // wenn Verkehrsmittel im Filter gesetzt wurde und mit Verkehrsmittel des wayStages übereinstimmt zeichne Weg

                                var coordinateTuples = []
                                if (wayStage[i]["a3_coordinatesList"] !== undefined) {
                                    let coordinate = (wayStage[i]["a3_coordinatesList"])

                                    var farbe = "";

                                    // adding pairs of coordinates to list
                                    for (var j = 0; j < coordinate.length; j++) {
                                        coordinateTuples.push([coordinate[j]['coordinate_lat'], coordinate[j]['coordinate_lng']]);
                                    }

                                    // polyline random color picker
                                    function get_random_color() {
                                        var letters = '0123456789ABCDEF'.split('');
                                        var color = '#';
                                        for (var k = 0; k < 6; k++) {
                                            color += letters[Math.round(Math.random() * 15)];
                                        }
                                        farbe = color;
                                        return color;
                                    }

                                    // creating poly line options
                                    var polyLineOptions = {color: get_random_color()};
                                    // creating polyline
                                    var polyline = L.polyline(coordinateTuples, polyLineOptions);
                                    // adding multi poly-line to map
                                    polyline.addTo(map);

                                    // speichere Wegeinfo für Ausgabe

                                    var einWayStage =  "<span class='test' style='color:" + farbe+ ";'><br><b class='content'>WayStage: </b>" + "<span class='content'>"+ i +
                                        "</span>"+ "<br><span class='content'>Verkehrsmittel: </span>" + "<span class='content'>"+ wayStage[i]["a0_mode"] +"</span>" +
                                        "<br><span class='content'>Dauer: </span>" + "<span class='content'>"+ wayStage[i]["a1_duration"] +"</span>"+
                                        "<br><span class='content'>Distanz: </span>" + "<span class='content'>"+ wayStage[i]["a2_distance"] +"</span>"+
                                        "<br><span class='content'>lat[0]: </span>" + "<span class='content'>"+ aLatN +"</span>" +
                                        "<br><span class='content'>lng[0]: </span>" + "<span class='content'>"+ aLngN +"</span>" + "<br><span class='content'>lat[anzC]: </span>" +
                                        "<span class='content'>"+ aLatL +"</span>" + "<br><span class='content'>lng[anzC]: </span>" + "<span class='content'>"+ aLngL +"</span></span>" ;

                                    console.log("Farbe" + farbe);
                                    //console.log(einWayStage);

                                    alleWayStages = alleWayStages + einWayStage;

                                }
                            }
                        }
                    }

                    // Ausgabe mit Wegedaten des gezeichneten Weges befüllen
                    var wegeInfo = "<b class='content'>WegeID: </b>" + "<span class='content'>"+ content[0]["a0_wayUUID"] +"</span>" +
                        "<br><b class='content'>NutzerID: </b>" + "<span class='content'>" + content[0]["a6_userID"] +"</span>" +
                        "<br><b class='content'>Wegezweck: </b>" + "<span class='content'>" +content[0]["a4_purpose"]  +"</span>" +
                        "<br><b class='content'>Start: </b>" + "<span class='content'>"+ content[0]["a1_startTime"] +"</span>" +
                        "<br><b class='content'>Dauer: </b>" + "<span class='content'>"+content[0]["a2_duration"] +"</span>" +
                        "<br><b class='content'>Distanz: </b>" + "<span class='content'>"+ content[0]["a3_distance"] +
                        "</span>" + "<br><b class='content'>WayStages: </b>" + alleWayStages + "<p></p>";
                    var sel = document.getElementById("Ausgabe");
                    var weg = document.createElement('Weg');
                    weg.innerHTML = wegeInfo;
                    weg.value = wegeInfo;
                    sel.appendChild(weg);
                }
            }
        }
        readerAuswahl.readAsText(file);
    }

} // Ende zeichneWegVgl()
