// Map Related ([49.0123444, 8.3859373], 12)
var map = L.map('map').setView([49.013488, 8.404527], 12);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=rwuJP54ZIMG8AJhtCJbl', {
    attribtion: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

// Array UserID erstellen
var userID = new Array();

// Array Wegedaten erstellen
var wegedaten = new Array();
for (var i = 0; i < wegedaten.length; i++) {
    wegedaten[i] = new Array(6);
    wegedaten[zaehlerWegedaten]["WegeID"] = "";
    wegedaten[zaehlerWegedaten]["UserID"] = "";
    wegedaten[zaehlerWegedaten]["Wegezweck"] = "";
    wegedaten[zaehlerWegedaten]["Startzeit"] = "";
    wegedaten[zaehlerWegedaten]["Dauer"] = "";
    wegedaten[zaehlerWegedaten]["Distanz"] = "";

}

// Array wegedatenVerkehrsmittel erstellen
var wegedatenVerkehrsmittel = new Array();
for (var j = 0; j < wegedatenVerkehrsmittel.length; j++) {
    wegedatenVerkehrsmittel[j] = new Array(1);
    wegedatenVerkehrsmittel[zaehlerWegedaten]["WegeID"] = "";

}

// Array wegedatenKoordinaten erstellen
var wegedatenKoordinaten = new Array();
for (var k = 0; k < wegedatenKoordinaten.length; k++) {
    wegedatenKoordinaten[k] = new Array(1);
    wegedatenKoordinaten[zaehlerWegedaten]["WegeID"] = "";

}

// Array wegedatenAbfahrtAnkunft erstellen
var wegedatenAbfahrtAnkunft = new Array();
for (var l = 0; l < wegedatenAbfahrtAnkunft.length; l++) {
    wegedatenAbfahrtAnkunft[l] = new Array(1);
    wegedatenAbfahrtAnkunft[zaehlerWegedaten]["WegeID"] = "";

}

// Array Anzahl Wege pro User
var anzahlWegeUser = new Array();
for (var m = 0; m < anzahlWegeUser.length; m++) {
    anzahlWegeUser[m] = new Array(2);
    anzahlWegeUser[m]["UserID"] = "";
    anzahlWegeUser[m]["Anzahl Wege"] = 0;
}

// Arrays zum speichern der WegeIDs, die dieses Verkehrsmittel enthalten
var verkehrsmittelZuFuss = new Array();
var verkehrsmittelFahrrad = new Array();
var verkehrsmittelBus = new Array();
var verkehrsmittelStrassenbahn = new Array();
var verkehrsmittelSBahn = new Array();
var verkehrsmittelUBahn = new Array();
var verkehrsmittelSchiffFaehre = new Array();
var verkehrsmittelAutoFahrer = new Array();
var verkehrsmittelAutoMitfahrer = new Array();
var verkehrsmittelReisebus = new Array();
var verkehrsmittelFlugzeug = new Array();
var verkehrsmittelFernzug = new Array();
var verkehrsmittelTaxi = new Array();


// Arrays für Koordinaten
var anzC = "";
var coordinates_lat = new Array();
var coordinates_lng = new Array();

//Array für Ausgabedaten csv-Export
var ausgabe_data= new Array();



// load, loop & read selected JSON files
function readJSONFunction() {

    // Anzeige der Auswahl des Nutzertyp
    document.getElementById("box2").style.display = "block"

    // load selected JSON Files
    let files = document.getElementById("jsonFiles").files;

    // Hilfsvariablen um am Ende Dropdown Menü Auswahl Nutzer zu befüllen
    var anzahlFiles = files.length;
    var durchlaufeneFiles = 0;
    //console.log(anzahlFiles);

    // Hilfsvariable, um Array wegedaten zu befüllen
    var zaehlerWegedaten = 0;

    for (file of files) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let content = JSON.parse(e.target.result)
            //console.log(content);


            // Ausgabe Wegeinformation aktueller Weg
            console.log("WegeID: " + content[0]["a0_wayUUID"] + " NutzerID: " + content[0]["a6_userID"] + " Wegezweck: " + content[0]["a4_purpose"] +
                " Start: " + content[0]["a1_startTime"] + " Dauer: " + content[0]["a2_duration"]
                + " Distanz: " + content[0]["a3_distance"])
            //

            // Array Wegedaten einlesen
            wegedaten[zaehlerWegedaten] = new Array();
            wegedaten[zaehlerWegedaten]["WegeID"] = content[0]["a0_wayUUID"];
            wegedaten[zaehlerWegedaten]["UserID"] = content[0]["a6_userID"];
            wegedaten[zaehlerWegedaten]["Wegezweck"] = content[0]["a4_purpose"];
            wegedaten[zaehlerWegedaten]["Startzeit"] = content[0]["a1_startTime"];
            wegedaten[zaehlerWegedaten]["Dauer"] = content[0]["a2_duration"];
            wegedaten[zaehlerWegedaten]["Distanz"] = content[0]["a3_distance"];

            // wayStages einlesen
            let wayStage = (content[0]["a5_wayStages"])


            //Array wegedatenVerkehrsmittel einlesen
            wegedatenVerkehrsmittel[zaehlerWegedaten] = new Array();
            wegedatenVerkehrsmittel[zaehlerWegedaten]["WegeID"] = content[0]["a0_wayUUID"];
            for (var j = 0; j < wayStage.length; j++) {
                wegedatenVerkehrsmittel[zaehlerWegedaten].push(wayStage[j]["a0_mode"]);

            }
            console.log(wegedatenVerkehrsmittel);

            //Array wegedatenKoordinaten einlesen
            wegedatenKoordinaten[zaehlerWegedaten] = new Array();
            wegedatenKoordinaten[zaehlerWegedaten]["WegeID"] = content[0]["a0_wayUUID"];
            for (var l = 0; l < wayStage.length; l++) {

                let cor = (wayStage[l]["a3_coordinatesList"]);

                var lat0 = 0;
                var lng0 = 0;
                var latanzC = 0;
                var lnganzC = 0;

                for (var c = 0; c < cor.length; c++){

                    //erste Koordinaten eines WayStages speichern
                    if(c == 0){
                        lat0 = cor[c]["coordinate_lat"];
                        lng0 = cor[c]["coordinate_lng"];

                    }

                    //letzte Koordinaten eines WayStages speichern
                    if(c == cor.length-1){
                        latanzC = cor[c]["coordinate_lat"];
                        lnganzC = cor[c]["coordinate_lng"];

                    }

                }

                //console.log("lat[0]: " + lat0);
                //console.log("lng[0]: " + lng0);

                //console.log("lat[anzC]: " + latanzC);
                //console.log("lng[anzC]: " + lnganzC);

                wegedatenKoordinaten[zaehlerWegedaten].push(lat0);
                wegedatenKoordinaten[zaehlerWegedaten].push(lng0);
                wegedatenKoordinaten[zaehlerWegedaten].push(latanzC);
                wegedatenKoordinaten[zaehlerWegedaten].push(lnganzC);

            }
            console.log(wegedatenKoordinaten);

            //Array Abfahrts- und Ankunftszeiten einlesen
            wegedatenAbfahrtAnkunft[zaehlerWegedaten] = new Array();
            wegedatenAbfahrtAnkunft[zaehlerWegedaten]["WegeID"] = content[0]["a0_wayUUID"];
            for (var k = 0; k < wayStage.length; k++) {

                let cor = (wayStage[k]["a3_coordinatesList"]);

                var abfahrt = 0;
                var ankunft = 0;

                for (var d = 0; d < cor.length; d++){

                    //erste Koordinaten eines WayStages speichern
                    if(d == 0){
                        abfahrt = new Date(cor[d]["coordinate_timestamp"]);
                    }

                    //letzte Koordinaten eines WayStages speichern
                    if(d == cor.length-1){
                        ankunft = new Date(cor[d]["coordinate_timestamp"]);
                    }

                }

                //console.log("abfahrt");
                //console.log(abfahrt);

                //console.log("ankunft");
                //console.log(ankunft);

                wegedatenAbfahrtAnkunft[zaehlerWegedaten].push(abfahrt);
                wegedatenAbfahrtAnkunft[zaehlerWegedaten].push(ankunft);

            }
            console.log(wegedatenAbfahrtAnkunft);


            //zaehlerWegedaten erhöhen
            zaehlerWegedaten = zaehlerWegedaten + 1;


            // Hilfsvariablen, damit WegeId bei den Verkehrsmitteln nur einmal gespeichert wird
            var hilfFuss = false;
            var hilfRad = false;
            var hilfBus = false;
            var hilfStrab = false;
            var hilfSBahn = false;
            var hilfUBahn = false;
            var hilfSchiff = false;
            var hilfAutoF = false;
            var hilfAutoM = false;
            var hilfReisebus = false;
            var hilfFernzug = false;
            var hilfTaxi = false;


            // looping though coordinatesList und speichere WegeID, wenn Verkehrsmittel im Weg enthalten
            for (var i = 0; i < wayStage.length; i++) {

                let vm = (wayStage[i]["a0_mode"])

                if(vm == "zu Fuß"){

                    if(hilfFuss == false){
                        verkehrsmittelZuFuss.push(content[0]["a0_wayUUID"]);
                        hilfFuss = true;
                    }

                }

                if(vm == "Fahrrad"){

                    if(hilfRad == false){
                        verkehrsmittelFahrrad.push(content[0]["a0_wayUUID"]);
                        hilfRad = true;
                    }

                }

                if(vm == "Bus"){

                    if(hilfBus == false){
                        verkehrsmittelBus.push(content[0]["a0_wayUUID"]);
                        hilfBus = true;
                    }

                }

                if(vm == "Straßenbahn"){

                    if(hilfStrab == false){
                        verkehrsmittelStrassenbahn.push(content[0]["a0_wayUUID"]);
                        hilfStrab = true;
                    }

                }

                if(vm == "S-Bahn"){

                    if(hilfSBahn == false){
                        verkehrsmittelSBahn.push(content[0]["a0_wayUUID"]);
                        hilfSBahn = true;
                    }

                }

                if(vm == "U-Bahn"){

                    if(hilfUBahn == false){
                        verkehrsmittelUBahn.push(content[0]["a0_wayUUID"]);
                        hilfUBahn = true;
                    }

                }

                if(vm == "Schiff/ Fähre"){

                    if(hilfSchiff == false){
                        verkehrsmittelSchiffFaehre.push(content[0]["a0_wayUUID"]);
                        hilfSchiff = true;
                    }

                }

                if(vm == "Auto (Fahrer)"){

                    if(hilfAutoF == false){
                        verkehrsmittelAutoFahrer.push(content[0]["a0_wayUUID"]);
                        hilfAutoF = true;
                    }

                }

                if(vm == "Auto (Mitfahrer)"){

                    if(hilfAutoM == false){
                        verkehrsmittelAutoMitfahrer.push(content[0]["a0_wayUUID"]);
                        hilfAutoM = true;
                    }

                }

                if(vm == "Reisebus"){

                    if(hilfReisebus == false){
                        verkehrsmittelReisebus.push(content[0]["a0_wayUUID"]);
                        hilfReisebus = true;
                    }

                }

                if(vm == "Fernzug"){

                    if(hilfFernzug == false){
                        verkehrsmittelFernzug.push(content[0]["a0_wayUUID"]);
                        hilfFernzug = true;
                    }

                }

                if(vm == "Taxi"){

                    if(hilfTaxi == false){
                        verkehrsmittelTaxi.push(content[0]["a0_wayUUID"]);
                        hilfTaxi = true;
                    }

                }

            }

            userIdNeu = content[0]["a6_userID"];

            // Füge neue userID dem Array userID hinzu (Array userID noch leer) und speichere userID zum zählen der Wege
            if(userID.length == 0){
                userID.push(userIdNeu);
                anzahlWegeUser[0] = new Object();
                anzahlWegeUser[0]["UserID"] = userIdNeu;
                anzahlWegeUser[0]["Anzahl Wege"] = 1;
            }

            var hilf = false;

            // Wenn neue userID noch nicht im Array userID enthalten ist füge neue userId hinzu und speichere userID zum zählen der Wege dieser userID

            userID.forEach(function(element) {
                if(element == userIdNeu){
                    hilf = true;


                }
            });

            if(hilf == false){
                userID.push(userIdNeu);
                anzahlWegeUser[userID.length-1] = new Object();
                anzahlWegeUser[userID.length-1]["UserID"] = userIdNeu;
                anzahlWegeUser[userID.length-1]["Anzahl Wege"] = 1;
            }

            // erhöhe Anzahl Wege, wenn es nicht der erste eingeleseen Weg ist und wenn der Weg schon vorhanden ist

            if(zaehlerWegedaten > 1 && hilf == true ){
                anzahlWegeUser.forEach(function(element){
                    if(element["UserID"] == userIdNeu) {
                        element["Anzahl Wege"] = element["Anzahl Wege"] + 1;
                   }
                });
            }

            console.log(anzahlWegeUser);
            console.log(userID);

            durchlaufeneFiles = durchlaufeneFiles + 1;

            // wenn alle Wege geprüft wurden Menü Auswahl Nutzer mit Werten befüllen
            if(durchlaufeneFiles == anzahlFiles) {
                aktualisiereNutzer();

                //console.log(verkehrsmittelZuFuss);
                //console.log(verkehrsmittelFahrrad);
                //console.log(verkehrsmittelBus);
                //console.log(verkehrsmittelStrassenbahn);
                //console.log(verkehrsmittelSBahn);
                //console.log(verkehrsmittelUBahn);
                //console.log(verkehrsmittelSchiffFaehre);
                //console.log(verkehrsmittelAutoFahrer);
                //console.log(verkehrsmittelAutoMitfahrer);
                //console.log(verkehrsmittelReisebus);
                //console.log(verkehrsmittelFlugzeug);
                //console.log(verkehrsmittelFernzug);
                //console.log(verkehrsmittelTaxi);
                console.log(wegedaten);
            }

        }

        reader.readAsText(file);

    }

}

function aktualisiereNutzer() {

    // sortiere Array anzahlWegeUser nach Anzahl der Wege absteigend in Hilfsarray sortAnzahlWegeUser

    var sortAnzahlWegeUser = new Array();
    anzahlWegeUser.forEach(function(element) {
        sortAnzahlWegeUser.push({name: element["UserID"],val: element["Anzahl Wege"]});
    });
    sortAnzahlWegeUser.sort(function(a,b){
       return b.val - a.val;
    });

    console.log(sortAnzahlWegeUser);

    // lösche bisherige Werte des Array
    anzahlWegeUser.splice(0,anzahlWegeUser.length);

    // befülle Ursprungsarray mit sortierten Werten
    sortAnzahlWegeUser.forEach(function(element){
        anzahlWegeUser.push({["UserID"]: element.name,["Anzahl Wege"]: element.val});
    });

    console.log(anzahlWegeUser);

    // lösche bisherige Werte des Array
    userID.splice(0,userID.length);

    // befülle Array mit sortierten Werten, damit Reihenfolge UserID-Anzahl Wege gleich der Auswahl der UserId ist
    sortAnzahlWegeUser.forEach(function(element){
        userID.push(element.name);
    });

    console.log(userID);

    // Füge jeden im Array userId gespeicherten Nutzer der Übersicht WegeID-Anzahl Wege hinzu
    var selA = document.getElementById("Anzahl Wege pro Nutzer");

    anzahlWegeUser.forEach(function(element) {
        var user = element["UserID"];
        var anzahl = element["Anzahl Wege"];

        var userAnzahl = "<br>UserID: " + user + "<br>Anzahl Wege: " + anzahl ;
        var opt = document.createElement('UserAnzahl');
        opt.innerHTML = userAnzahl;
        opt.value = userAnzahl;
        selA.appendChild(opt);
    });

    var sel = document.getElementById("AuswahlNutzer");

    // Füge jeden im Array userId gespeicherten Nutzer der Auswahl der userID hinzu

    userID.forEach(function(element) {
        var opt = document.createElement('option');
        opt.innerHTML = element;
        opt.value = element;
        sel.appendChild(opt);
    });

}

// Auswahl Filter
function auswahlFilter() {

    // Abfrage nach gewähltem Filter
    var checkboxesFilter = document.getElementsByName("Filter");
    for(var i = 0; i < checkboxesFilter.length; i++)
    {
        switch (checkboxesFilter[i].value) {
            case "alle Wege":
                if(checkboxesFilter[i].checked){
                    zeichneAlleWege();}
                break;
            case "Wege filtern":
                if(checkboxesFilter[i].checked){
                    // Anzeige der Auswahl der Nutzertypen
                    document.getElementById("box3").style.display = "block"}
                break;
            case "Wege vergleichen":
                if(checkboxesFilter[i].checked){
                    // Anzeige der Auswahl der Nutzertypen
                    auswahlVglKriterien();}
                break;
            default:
                break;
        }
    }
}

// alle Wege zeichnen
function zeichneAlleWege() {

    var wegeIDAlle = new Array();

    // WegeIDs aller Wege, dem Array wegeIDAlle hinzufügen
    for(var i = 0; i < wegedaten.length; i++){
        wegeIDAlle.push(wegedaten[i]["WegeID"]);
    }

    // alle Verkehrsmittel dem Array verkehrsmittel hinzufügen
    var verkehrsmittel = new Array();
    verkehrsmittel = ['zu Fuß', 'Fahrrad', 'Bus', 'Straßenbahn', 'S-Bahn', 'U-Bahn', 'Schiff/ Fähre', 'Auto (Fahrer)', 'Auto (Mitfahrer)', 'Reisebus', 'Flugzeug', 'Fernbus', 'Taxi'];

    console.log("Ende");
    console.log(wegeIDAlle);

    // alle Wege mit allgemeiner Funktion zeichneWeg() darstellen
    zeichneWeg(wegeIDAlle, verkehrsmittel);
}

// Auswahl Nutzer
function auswahlNutzertyp() {

    // Abfrage nach gewähltem Nutzertyp
    var checkboxesNutzer = document.getElementsByName("Nutzertyp");
    for(var i = 0; i < checkboxesNutzer.length; i++)
    {
        switch (checkboxesNutzer[i].value) {
            case "alle Wege des Nutzers":
                if(checkboxesNutzer[i].checked){
                    zeichneAlleWegeNutzer();}
                break;
            case "Pendler":
                if(checkboxesNutzer[i].checked){
                    zeichneAllePendlerwege();}
                break;
            case "Pendler (nur ÖPNV)":
                if(checkboxesNutzer[i].checked){
                    zeichneAllePendlerwegeOEPNV();}
                break;
            case "eigene Auswahl":
                if(checkboxesNutzer[i].checked){
                    // Anzeige der Auswahl der Mobilitätspäferenzen
                    document.getElementById("box4").style.display = "block"}
                break;
            default:
                break;
        }
    }
}

function zeichneAlleWegeNutzer() {
    // Abfrage der gewählten NutzerIDs
    var user = abfrageNutzer();
    console.log(user);

    // Setzen der Wegezwecke Pendler
    var wegezweck = new Array();
    wegezweck = ['Ausbildung', 'Arbeit', 'Bringen/Abholen', 'Einkauf', 'Erledigung', 'Freizeit', 'nach Hause'];

    // Setzen der Startzeit Pendler
    var startzeit = "ganzer Tag";

    // Setzen der Verkehrsmittel Pendler
    var verkehrsmittel = new Array();
    verkehrsmittel = ['zu Fuß', 'Fahrrad', 'Bus', 'Straßenbahn', 'S-Bahn', 'U-Bahn', 'Schiff/ Fähre', 'Auto (Fahrer)', 'Auto (Mitfahrer)', 'Reisebus', 'Flugzeug', 'Fernbus', 'Taxi'];

    // Array für WegeID zu eingestellen Filtern
    var wegeID = new Array();

    // Wegedaten mit oben definierten Einstellungen prüfen
    wegeID = pruefeWegedaten(user, wegezweck, startzeit, verkehrsmittel, wegeID);

    console.log("Ende");
    console.log(wegeID);

    // Wege, die den Filtern entsprechen zeichnen
    zeichneWeg(wegeID, verkehrsmittel);


} // Ende zeichneAllePendlerwege()

function zeichneAllePendlerwege() {
    // Abfrage der gewählten NutzerIDs
    var user = abfrageNutzer();
    console.log(user);

    // Setzen der Wegezwecke Pendler
    var wegezweck = new Array();
    wegezweck = ['Ausbildung', 'Arbeit', 'nach Hause'];

    // Setzen der Startzeit Pendler
    var startzeit = "Morgen und Abend HVZ";

    // Setzen der Verkehrsmittel Pendler
    var verkehrsmittel = new Array();
    verkehrsmittel = ['zu Fuß', 'Fahrrad', 'Bus', 'Straßenbahn', 'S-Bahn', 'U-Bahn', 'Schiff/ Fähre', 'Auto (Fahrer)', 'Auto (Mitfahrer)', 'Reisebus', 'Flugzeug', 'Fernbus', 'Taxi'];

    // Array für WegeID zu eingestellen Filtern
    var wegeID = new Array();

    // Wegedaten mit oben definierten Einstellungen prüfen
    wegeID = pruefeWegedaten(user, wegezweck, startzeit, verkehrsmittel, wegeID);

    console.log("Ende");
    console.log(wegeID);

    // Wege, die den Filtern entsprechen zeichnen
    zeichneWeg(wegeID, verkehrsmittel);


} // Ende zeichneAllePendlerwege()

function zeichneAllePendlerwegeOEPNV() {
    // Abfrage der gewählten NutzerID
    var user = abfrageNutzer();
    console.log(user);

    // Setzen der Wegezwecke Pendler
    var wegezweck = new Array();
    wegezweck = ['Ausbildung', 'Arbeit', 'nach Hause'];

    // Setzen der Startzeit Pendler
    var startzeit = "Morgen und Abend HVZ";

    // Setzen der Verkehrsmittel Pendler
    var verkehrsmittel = new Array();
    verkehrsmittel = ['Bus', 'Straßenbahn', 'S-Bahn', 'U-Bahn'];

    // Array für WegeID zu eingestellen Filtern
    var wegeID = new Array();

    // Wegedaten mit oben definierten Einstellungen prüfen
    wegeID = pruefeWegedaten(user, wegezweck, startzeit, verkehrsmittel, wegeID);

    console.log("Ende");
    console.log(wegeID);

    // Wege, die den Filtern entsprechen zeichnen
    zeichneWeg(wegeID, verkehrsmittel);

} // Ende zeichneAllePendlerwegeOEPNV()

function wendeFilterAn() {
    console.log("Wende Filter an!")

    // Abfrage der gewählten NutzerID
    var user = abfrageNutzer();
    console.log(user);

    // Abfrage der gewählten Wegezwecke
    var wegezweck = new Array();
    wegezweck = abfrageWegezweck();
    console.log(wegezweck);

    // Abfrage der gewählten Startzeit
    var startzeit = abfrageStartzeit();
    console.log(startzeit);

    // Abfrage der gewählten Verkehrsmittel
    var verkehrsmittel = new Array();
    verkehrsmittel = abfrageVerkehrsmittel();
    console.log(verkehrsmittel);

    // Array für WegeID zu eingestellen Filtern
    var wegeID = new Array();

    console.log(wegedaten);

    // Wegedaten mit oben definierten Einstellungen prüfen
    wegeID = pruefeWegedaten(user, wegezweck, startzeit, verkehrsmittel, wegeID);

    console.log("Ende");
    console.log(wegeID);

    // Wege, die den Filtern entsprechen zeichnen
    zeichneWeg(wegeID, verkehrsmittel);

} // Ende wendeFilterAn()

function pruefeWegedaten(user, wegezweck, startzeit, verkehrsmittel, wegeID){
    // Prüfe Wegedaten, wenn sie den Filtereinstellungen entsprechen speichere die wegeID

    // Anfang prüfe Array wegedaten
    for(var i = 0; i < wegedaten.length; i++){

        // Anfang Abfrage Auswahl Nutzer
        if(user == "alle"){

            console.log("if alle");

            // Beginn Abfrage Wegezweck
            var zweckVorhanden = false;

            for(var z = 0; z < wegezweck.length; z++){
                if(wegezweck[z] == wegedaten[i]["Wegezweck"]){
                    zweckVorhanden = true;
                }

            }// Ende Abfrage Wegezweck

            console.log("zweckVorhanden "+ zweckVorhanden);

            // Anfang Abfrage Startzeit
            var startzeitvorhanden = false;

            if(zweckVorhanden == true){

                var startzeitWeg = "";
                var date = new Date();
                var beginnMorgenHVZ = new Date();
                beginnMorgenHVZ.setHours(06,00,00);
                var endeMorgenHVZ = new Date();
                endeMorgenHVZ.setHours(10,00,00);
                var beginnAbendHVZ = new Date();
                beginnAbendHVZ.setHours(16,00,00);
                var endeAbendHVZ = new Date();
                endeAbendHVZ.setHours(20,00,00);


                var beginnEigeneStartzeit = new Date();
                var stundeVon = document.getElementById("vonStunde").value;
                var minuteVon = document.getElementById("vonMinute").value;
                var sekundeVon = document.getElementById("vonSekunde").value;
                beginnEigeneStartzeit.setHours(stundeVon, minuteVon, sekundeVon);

                console.log("beginnEigeneStartzeit");
                console.log(beginnEigeneStartzeit);

                var endeEigeneStartzeit = new Date();
                var stundeBis = document.getElementById("bisStunde").value;
                var minuteBis = document.getElementById("bisMinute").value;
                var sekundeBis = document.getElementById("bisSekunde").value;
                endeEigeneStartzeit.setHours(stundeBis, minuteBis, sekundeBis);

                console.log("endeEigeneStartzeit");
                console.log(endeEigeneStartzeit);


                startzeitWeg = wegedaten[i]["Startzeit"];
                console.log(startzeitWeg);
                var zeit = startzeitWeg.substr(11);
                console.log(zeit);
                var stunden = zeit.substr(0,2);
                var minuten = zeit.substr(3,2);
                var sekunden = zeit.substr(6,2);
                date.setHours(stunden, minuten, sekunden);
                console.log(date);

                switch (startzeit) {
                    case "ganzer Tag":
                        startzeitvorhanden = true;
                        console.log("Startzeit ganzer Tag");
                        break;
                    case "Morgen HVZ":
                        if(date > beginnMorgenHVZ && date < endeMorgenHVZ){
                            console.log("Startzeit in Morgen HVZ");
                            startzeitvorhanden = true;
                        } else {
                            console.log("Startzeit NICHT in Morgen HVZ");
                        }
                        break;
                    case "Abend HVZ":
                        if(date > beginnAbendHVZ && date < endeAbendHVZ){
                            console.log("Startzeit in Abend HVZ");
                            startzeitvorhanden = true;
                        } else {
                            console.log("Startzeit NICHT in Abend HVZ");
                        }
                        break;
                    case "Morgen und Abend HVZ":
                        if(date > beginnMorgenHVZ && date < endeMorgenHVZ || date > beginnAbendHVZ && date < endeAbendHVZ ){
                            console.log("Startzeit in Morgen UND/ODER Abend HVZ");
                            startzeitvorhanden = true;
                        } else {
                            console.log("Startzeit NICHT in Morgen UND/ODER Abend HVZ");
                        }
                        break;
                    case "eigene Startzeit":

                        //Wegedatum definieren
                        console.log(startzeitWeg);
                        var tag = startzeitWeg.substr(0,2);
                        var monat = startzeitWeg.substr(3,2)-1;
                        var jahr = startzeitWeg.substr(6,4);

                        console.log(tag, monat, jahr);

                        date = new Date(jahr, monat, tag, stunden, minuten, sekunden);
                        console.log(date);

                        //eigenes Startdatum von definieren
                        var dateVon = new Date(document.getElementById("vonDatum").value);
                        console.log(dateVon);
                        var tagVon = dateVon.getUTCDate();
                        var monatVon = dateVon.getUTCMonth();
                        var jahrVon = dateVon.getUTCFullYear();
                        beginnEigeneStartzeit = new Date(jahrVon, monatVon, tagVon, stundeVon, minuteVon, sekundeVon);
                        console.log("beginnEigeneStartzeit mit Datum");
                        console.log(beginnEigeneStartzeit);

                        //eigenes Enddatum von definieren
                        var dateBis = new Date(document.getElementById("bisDatum").value);
                        console.log(dateBis);
                        var tagBis = dateBis.getUTCDate();
                        var monatBis = dateBis.getUTCMonth();
                        var jahrBis = dateBis.getUTCFullYear();
                        endeEigeneStartzeit = new Date(jahrBis, monatBis, tagBis, stundeBis, minuteBis, sekundeBis);
                        console.log(" endeEigeneStartzeit mit Datum");
                        console.log(endeEigeneStartzeit);

                        if(date > beginnEigeneStartzeit && date < endeEigeneStartzeit ){
                            console.log("Startzeit in eigener Startzeit");
                            startzeitvorhanden = true;
                        } else {
                            console.log("Startzeit NICHT in eigener Startzeit");
                        }
                        break;
                    default:
                        break;
                }
            } // Ende Abfrage Startzeit

            console.log("startzeitvorhanden "+ startzeitvorhanden);

            // Anfang Abfrage Verkehrsmittel
            var verkehrsmittelVorhanden = false;

            if(startzeitvorhanden == true) {
                for(var k = 0; k < verkehrsmittel.length; k++){

                    switch (verkehrsmittel[k]) {
                        case "zu Fuß":
                            verkehrsmittelZuFuss.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Fahrrad":
                            verkehrsmittelFahrrad.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Bus":
                            verkehrsmittelBus.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Straßenbahn":
                            verkehrsmittelStrassenbahn.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "S-Bahn":
                            verkehrsmittelSBahn.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "U-Bahn":
                            verkehrsmittelUBahn.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Schiff/ Fähre":
                            verkehrsmittelSchiffFaehre.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Auto (Fahrer)":
                            verkehrsmittelAutoFahrer.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Auto (Mitfahrer)":
                            verkehrsmittelAutoMitfahrer.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Reisebus":
                            verkehrsmittelReisebus.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Flugzeug":
                            verkehrsmittelFlugzeug.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Fernzug":
                            verkehrsmittelFernzug.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        case "Taxi":
                            verkehrsmittelTaxi.forEach(function(element){
                                if(element == wegedaten[i]["WegeID"]) {
                                    verkehrsmittelVorhanden = true;
                                }
                            });
                            break;
                        default:
                            break;

                    }
                }
            } // Ende Abfrage Verkehrsmittel

            console.log("verkehrsmittelVorhanden "+ verkehrsmittelVorhanden);

            // Abfrage, ob Wege in das Array wegeId aufgenommen werden soll (nur wenn alle Filterkriterien erfüllt)
            if(zweckVorhanden == true && startzeitvorhanden == true && verkehrsmittelVorhanden == true){
                if(wegeID.length == 0){
                    wegeID.push(wegedaten[i]["WegeID"]);
                    console.log("schreibe wegeID erstes Mal Ende");
                }

                var hilfWegeID = false;

                wegeID.forEach(function(element){
                    if(element == wegedaten[i]["WegeID"]){
                        hilfWegeID = true;
                    }
                });

                if (hilfWegeID == false){
                    wegeID.push(wegedaten[i]["WegeID"]);
                    console.log("schreibe wegeID Ende");
                }

            } // Ende Abfrage, ob Wege in das Array wegeId aufgenommen werden soll

        } else {
            // Anfang prüfe ob Nuter der Wegedaten mit ausgewähltem Nutzer übereinstimmt
            if(wegedaten[i]["UserID"] == user){

                console.log("if ein Nutzer");

                // Beginn Abfrage Wegezweck
                var zweckVorhanden = false;

                for(var z = 0; z < wegezweck.length; z++){
                    if(wegezweck[z] == wegedaten[i]["Wegezweck"]){
                        zweckVorhanden = true;
                    }

                }// Ende Abfrage Wegezweck

                console.log("zweckVorhanden "+ zweckVorhanden);

                // Anfang Abfrage Startzeit
                var startzeitvorhanden = false;

                if(zweckVorhanden == true){

                    var startzeitWeg = "";
                    var date = new Date();
                    var beginnMorgenHVZ = new Date();
                    beginnMorgenHVZ.setHours(06,00,00);
                    var endeMorgenHVZ = new Date();
                    endeMorgenHVZ.setHours(10,00,00);
                    var beginnAbendHVZ = new Date();
                    beginnAbendHVZ.setHours(16,00,00);
                    var endeAbendHVZ = new Date();
                    endeAbendHVZ.setHours(20,00,00);


                    var beginnEigeneStartzeit = new Date();
                    var stundeVon = document.getElementById("vonStunde").value;
                    var minuteVon = document.getElementById("vonMinute").value;
                    var sekundeVon = document.getElementById("vonSekunde").value;
                    beginnEigeneStartzeit.setHours(stundeVon, minuteVon, sekundeVon);

                    console.log("beginnEigeneStartzeit");
                    console.log(beginnEigeneStartzeit);

                    var endeEigeneStartzeit = new Date();
                    var stundeBis = document.getElementById("bisStunde").value;
                    var minuteBis = document.getElementById("bisMinute").value;
                    var sekundeBis = document.getElementById("bisSekunde").value;
                    endeEigeneStartzeit.setHours(stundeBis, minuteBis, sekundeBis);

                    console.log("endeEigeneStartzeit");
                    console.log(endeEigeneStartzeit);


                    startzeitWeg = wegedaten[i]["Startzeit"];
                    console.log(startzeitWeg);
                    var zeit = startzeitWeg.substr(11);
                    console.log(zeit);
                    var stunden = zeit.substr(0,2);
                    var minuten = zeit.substr(3,2);
                    var sekunden = zeit.substr(6,2);
                    date.setHours(stunden, minuten, sekunden);
                    console.log(date);

                    switch (startzeit) {
                        case "ganzer Tag":
                            startzeitvorhanden = true;
                            console.log("Startzeit ganzer Tag");
                            break;
                        case "Morgen HVZ":
                            if(date > beginnMorgenHVZ && date < endeMorgenHVZ){
                                console.log("Startzeit in Morgen HVZ");
                                startzeitvorhanden = true;
                            } else {
                                console.log("Startzeit NICHT in Morgen HVZ");
                            }
                            break;
                        case "Abend HVZ":
                            if(date > beginnAbendHVZ && date < endeAbendHVZ){
                                console.log("Startzeit in Abend HVZ");
                                startzeitvorhanden = true;
                            } else {
                                console.log("Startzeit NICHT in Abend HVZ");
                            }
                            break;
                        case "Morgen und Abend HVZ":
                            if(date > beginnMorgenHVZ && date < endeMorgenHVZ || date > beginnAbendHVZ && date < endeAbendHVZ ){
                                console.log("Startzeit in Morgen UND/ODER Abend HVZ");
                                startzeitvorhanden = true;
                            } else {
                                console.log("Startzeit NICHT in Morgen UND/ODER Abend HVZ");
                            }
                            break;
                        case "eigene Startzeit":

                            //Wegedatum definieren
                            console.log(startzeitWeg);
                            var tag = startzeitWeg.substr(0,2);
                            var monat = startzeitWeg.substr(3,2)-1;
                            var jahr = startzeitWeg.substr(6,4);

                            console.log(tag, monat, jahr);

                            date = new Date(jahr, monat, tag, stunden, minuten, sekunden);
                            console.log(date);

                            //eigenes Startdatum von definieren
                            var dateVon = new Date(document.getElementById("vonDatum").value);
                            console.log(dateVon);
                            var tagVon = dateVon.getUTCDate();
                            var monatVon = dateVon.getUTCMonth();
                            var jahrVon = dateVon.getUTCFullYear();
                            beginnEigeneStartzeit = new Date(jahrVon, monatVon, tagVon, stundeVon, minuteVon, sekundeVon);
                            console.log("beginnEigeneStartzeit mit Datum");
                            console.log(beginnEigeneStartzeit);

                            //eigenes Enddatum von definieren
                            var dateBis = new Date(document.getElementById("bisDatum").value);
                            console.log(dateBis);
                            var tagBis = dateBis.getUTCDate();
                            var monatBis = dateBis.getUTCMonth();
                            var jahrBis = dateBis.getUTCFullYear();
                            endeEigeneStartzeit = new Date(jahrBis, monatBis, tagBis, stundeBis, minuteBis, sekundeBis);
                            console.log(" endeEigeneStartzeit mit Datum");
                            console.log(endeEigeneStartzeit);

                            if(date > beginnEigeneStartzeit && date < endeEigeneStartzeit ){
                                console.log("Startzeit in eigener Startzeit");
                                startzeitvorhanden = true;
                            } else {
                                console.log("Startzeit NICHT in eigener Startzeit");
                            }
                            break;
                        default:
                            break;
                    }
                } // Ende Abfrage Startzeit

                console.log("startzeitvorhanden "+ startzeitvorhanden);

                // Anfang Abfrage Verkehrsmittel
                var verkehrsmittelVorhanden = false;

                if(startzeitvorhanden == true) {
                    for(var k = 0; k < verkehrsmittel.length; k++){

                        switch (verkehrsmittel[k]) {
                            case "zu Fuß":
                                verkehrsmittelZuFuss.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Fahrrad":
                                verkehrsmittelFahrrad.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Bus":
                                verkehrsmittelBus.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Straßenbahn":
                                verkehrsmittelStrassenbahn.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "S-Bahn":
                                verkehrsmittelSBahn.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "U-Bahn":
                                verkehrsmittelUBahn.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Schiff/ Fähre":
                                verkehrsmittelSchiffFaehre.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Auto (Fahrer)":
                                verkehrsmittelAutoFahrer.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Auto (Mitfahrer)":
                                verkehrsmittelAutoMitfahrer.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Reisebus":
                                verkehrsmittelReisebus.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Flugzeug":
                                verkehrsmittelFlugzeug.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Fernzug":
                                verkehrsmittelFernzug.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            case "Taxi":
                                verkehrsmittelTaxi.forEach(function(element){
                                    if(element == wegedaten[i]["WegeID"]) {
                                        verkehrsmittelVorhanden = true;
                                    }
                                });
                                break;
                            default:
                                break;

                        }
                    }
                } // Ende Abfrage Verkehrsmittel

                console.log("verkehrsmittelVorhanden "+ verkehrsmittelVorhanden);

                // Abfrage, ob Wege in das Array wegeId aufgenommen werden soll (nur wenn alle Filterkriterien erfüllt)
                if(zweckVorhanden == true && startzeitvorhanden == true && verkehrsmittelVorhanden == true){
                    if(wegeID.length == 0){
                        wegeID.push(wegedaten[i]["WegeID"]);
                        console.log("schreibe wegeID erstes Mal Ende");
                    }

                    var hilfWegeID = false;

                    wegeID.forEach(function(element){
                        if(element == wegedaten[i]["WegeID"]){
                            hilfWegeID = true;
                        }
                    });

                    if (hilfWegeID == false){
                        wegeID.push(wegedaten[i]["WegeID"]);
                        console.log("schreibe wegeID Ende");
                    }

                } // Ende Abfrage, ob Wege in das Array wegeId aufgenommen werden soll

            } // Ende prüfe ob Nuter der Wegedaten mit ausgewähltem Nutzer übereinstimmt

        } // Ende Abfrage Auswahl Nutzer

        console.log(wegeID);

    }  // Ende prüfe Array wegedaten

    return wegeID;

}

function zeichneWeg(wegeID, verkehrsmittel){

    // Rufe Ausgabe auf, in der alle dargestellten Wege aufgeführt werden
    document.getElementById("box7").style.display = "block";

    // load selected JSON Files
    let filesAuswahl = document.getElementById("jsonFiles").files;

    // read selected JSON Files
    for(file of filesAuswahl) {
        let readerAuswahl = new FileReader();
        readerAuswahl.onload = function (f) {
            let content = JSON.parse(f.target.result);

            // Speichere akutelle WegeID
            var aktuelleWegeId = content[0]["a0_wayUUID"];

            // gehe durch Array wegeID (alle gefilterten wegeIDs)
            for(var a = 0; a < wegeID.length; a++){

                // wenn aktueller Weg in wegeID enthalten gehe weiter
                if(wegeID[a] == aktuelleWegeId){

                    // looping through wayStages
                    let wayStage = (content[0]["a5_wayStages"])
                    //console.log(wayStage)

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

} // Ende zeichneWeg(wegeID)


function wegedatenHerunterladen() {

    var a = 0;
    wegeAnz = Array.from(document.getElementById("Ausgabe").children);
    wegeAnz.forEach(wegAnzeige=>{
        Array.from(wegAnzeige.children).forEach(element=>{

            if (element.className == 'content') {
                console.log(element);
                var t= document.getElementsByClassName('content')[a].innerHTML;
                ausgabe_data.push(t);
                a = a+1;
            } else if(element.className == 'test') {
                Array.from(element.children).forEach(e2=>{
                    if (e2.className == 'content') {
                        console.log(e2);
                        var t= document.getElementsByClassName('content')[a].innerHTML;
                        ausgabe_data.push(t);
                        a = a+1;
                }})

            }

        })

    })

    console.log(ausgabe_data);

    var ausg;

    for (var g = 0; g < ausgabe_data.length; g++){
        var zeile = ausgabe_data[g].toString();
        zeile = zeile.replace("ß","ss");
        console.log(zeile);
        ausg = zeile + '\n';
        ausgabe_data.splice(g,1,ausg);
        console.log(ausgabe_data[g]);
    }

    console.log(ausgabe_data);

    var send= ausgabe_data.join("");

    console.log(send);

    let csvContent = "data:text/csv;charset=utf-8,"
        + send;

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "wegedaten.csv");
    document.body.appendChild(link);
    link.click();

}


function abfrageNutzer() {
    // Abfrage nach gewählten Nutzern
    var checkboxesUser = document.getElementById("AuswahlNutzer");
    var checkedUser = "";

    // speichern der gewählten userID
    checkedUser = checkboxesUser.options[checkboxesUser.selectedIndex].value;
    return checkedUser;
}

function abfrageWegezweck() {
    // Abfrage nach gewählten Wegezwecken
    var checkboxesPurpose = document.getElementsByName("purpose");
    var checkWegezweck = 0;
    var checkedWegezweck = new Array();
    for(var i = 0; i < checkboxesPurpose.length; i++)
    {
        switch (checkboxesPurpose[i].value) {
            case "Ausbildung":
                if(checkboxesPurpose[i].checked){
                    //console.log("Wegezweck Ausbildung gewählt");
                    checkWegezweck = 1;
                    checkedWegezweck.push("Ausbildung");
                }
                break;
            case "Arbeit":
                if(checkboxesPurpose[i].checked){
                    //console.log("Wegezweck Arbeit gewählt");
                    checkWegezweck = 1;
                    checkedWegezweck.push("Arbeit");
                }
                break;
            case "Bringen/Abholen":
                if(checkboxesPurpose[i].checked){
                    //console.log("Wegezweck Bringen/Abholen gewählt");
                    checkWegezweck = 1;
                    checkedWegezweck.push("Bringen/Abholen");
                }
                break;
            case "Einkauf":
                if(checkboxesPurpose[i].checked){
                    //console.log("Wegezweck Einkauf gewählt");
                    checkWegezweck = 1;
                    checkedWegezweck.push("Einkauf");
                }
                break;
            case "Erledigung":
                if(checkboxesPurpose[i].checked){
                    //console.log("Wegezweck Erledigung gewählt");
                    checkWegezweck = 1;
                    checkedWegezweck.push("Erledigung");
                }
                break;
            case "Freizeit":
                if(checkboxesPurpose[i].checked){
                    //console.log("Wegezweck Freizeit gewählt");
                    checkWegezweck = 1;
                    checkedWegezweck.push("Freizeit");
                }
                break;
            case "nach Hause":
                if(checkboxesPurpose[i].checked){
                    //console.log("Wegezweck nach Hause gewählt");
                    checkWegezweck = 1;
                    checkedWegezweck.push("nach Hause");
                }
                break;
            default:
                break;
        }
    }

    if(checkWegezweck == 0) {
        console.log("Kein Wegezweck gewählt!");
    }

    return checkedWegezweck;
}

function abfrageStartzeit() {
    // Abfrage nach Startzeit
    var checkboxesStartTime = document.getElementsByName("startTime");
    var checkStartTime = "";
    for(var i = 0; i < checkboxesStartTime.length; i++)
    {
        switch (checkboxesStartTime[i].value) {
            case "ganzer Tag":
                if(checkboxesStartTime[i].checked){
                    checkStartTime =  "ganzer Tag"}
                break;
            case "Morgen HVZ":
                if(checkboxesStartTime[i].checked){
                    checkStartTime = "Morgen HVZ"}
                break;
            case "Abend HVZ":
                if(checkboxesStartTime[i].checked){
                    checkStartTime = "Abend HVZ"}
                break;
            case "Morgen und Abend HVZ":
                if(checkboxesStartTime[i].checked){
                    checkStartTime = "Morgen und Abend HVZ"}
                break;
            case "eigene Startzeit":
                if(checkboxesStartTime[i].checked){
                    checkStartTime = "eigene Startzeit"}
                break;
            default:
                break;
        }
    }
    return checkStartTime;
}

function abfrageVerkehrsmittel() {
    // Abfrage nach gewählten Verkehrsmitteln
    var checkboxesVerkehrsmittel = document.getElementsByName("verkehrsmittel");
    var checkVerkehrsmittel = 0;
    var checkedVerkehrsmittel = new Array();

    for(var i = 0; i < checkboxesVerkehrsmittel.length; i++)
    {
        switch (checkboxesVerkehrsmittel[i].value) {
            case "zu Fuß":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("zu Fuß");
                    checkVerkehrsmittel = 1;}
                break;
            case "Fahrrad":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Fahrrad");
                    checkVerkehrsmittel = 1;}
                break;
            case "Bus":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Bus");
                    checkVerkehrsmittel = 1;}
                break;
            case "Straßenbahn":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Straßenbahn");
                    checkVerkehrsmittel = 1;}
                break;
            case "S-Bahn":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("S-Bahn");
                    checkVerkehrsmittel = 1;}
                break;
            case "U-Bahn":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("U-Bahn");
                    checkVerkehrsmittel = 1;}
                break;
            case "Schiff/ Fähre":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Schiff/ Fähre");
                    checkVerkehrsmittel = 1;}
                break;
            case "Auto (Fahrer)":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Auto (Fahrer)");
                    checkVerkehrsmittel = 1;}
                break;
            case "Auto (Mitfahrer)":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Auto (Mitfahrer)");
                    checkVerkehrsmittel = 1;}
                break;
            case "Reisebus":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Reisebus");
                    checkVerkehrsmittel = 1;}
                break;
            case "Flugzeug":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Flugzeug");
                    checkVerkehrsmittel = 1;}
                break;
            case "Fernzug":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Fernzug");
                    checkVerkehrsmittel = 1;}
                break;
            case "Taxi":
                if(checkboxesVerkehrsmittel[i].checked){
                    checkedVerkehrsmittel.push("Taxi");
                    checkVerkehrsmittel = 1;}
                break;
            default:
                break;
        }
    }

    if(checkVerkehrsmittel == 0){
        console.log("Kein Verkehrsmittel gewählt!");
    }
    return checkedVerkehrsmittel;
}

function eingabeStartzeit() {
    // ermöglicht bei klick auf "eigene Startzeit" die Eingabe eines Zeitbereichs

    console.log("Click Startzeit");

    document.getElementById("vonDatum").disabled = false;
    document.getElementById("vonStunde").disabled = false;
    document.getElementById("vonMinute").disabled = false;
    document.getElementById("vonSekunde").disabled = false;
    document.getElementById("bisDatum").disabled = false;
    document.getElementById("bisStunde").disabled = false;
    document.getElementById("bisMinute").disabled = false;
    document.getElementById("bisSekunde").disabled = false;

}

function keineEingabeStartzeit() {
    // sperrt bei klick auf andere Option als "eigene Startzeit" die Eingabe eines Zeitbereichs

    document.getElementById("vonDatum").disabled = true;
    document.getElementById("vonStunde").disabled = true;
    document.getElementById("vonMinute").disabled = true;
    document.getElementById("vonSekunde").disabled = true;
    document.getElementById("bisDatum").disabled = true;
    document.getElementById("bisStunde").disabled = true;
    document.getElementById("bisMinute").disabled = true;
    document.getElementById("bisSekunde").disabled = true;
}