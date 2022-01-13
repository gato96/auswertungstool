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

//Beginn Funktionen
async function vergleicheWege() {

    console.log("Start Vergleich");

    console.log("Bilde Wegepaare");
    wegeIDVglWegepaare = bildeWegepaare();
    console.log("wegeIDVglWegepaare");
    /*var hilfs = true
    while(hilfs) {
        hilfs = !(anzahlfiles == wegeIDVglWegepaare.length)
    }*/
    console.log(wegeIDVglWegepaare);

    //Beginn Vergleiche

    /*console.log("Vergleich Koordinaten");
    wegeIDVglWegepaare = vergleicheKoordinaten.apply(wegeIDVglWegepaare);
    console.log("Ende Vergleich Koordinaten");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);



    console.log("Vergleich Wegezweck");
    wegeIDVglWegepaare =  vergleicheWegezweck(wegeIDVglWegepaare);
    console.log("Ende Vergleich Wegezweck");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

     */

    console.log("Vergleich Verkehrsmittel");
    wegeIDVglWegepaare = vergleicheVerkehrsmittel(wegeIDVglWegepaare);
    console.log("Ende Vergleich Verkehrsmittel");
    console.log("wegeIDVglWegepaare");
    console.log(wegeIDVglWegepaare);

    console.log("Vergleich Startzeit");
    wegeIDVglWegepaare =  vergleicheStartzeit(wegeIDVglWegepaare);
    console.log("Ende Vergleich Startzeit");
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
    //TODO Vergleich Koordinaten Readfile stoppen, dann Vergleich Wege
    //TODO Vergleich Koordinaten vergleich Koordinaten anlegen
    //TODO Vergleich Koordinaten Festlegung Koordinatenbereich
    //TODO Vergleich Koordinaten freie Eingabe von Koordinatenbereichen?
    //TODO Vergleich Koordinaten sichtbare log-Ausgaben verschönern

    wegeIDVglWegepaare = this;

    wegeIDVglKoordinaten = wegeIDVglWegepaare;

    return wegeIDVglKoordinaten;
} //vergleicheKoordinaten()

function vergleicheStartzeit(wegeIDVglWegepaare){

    //Vergleich Zeit
    // nehme ersten Weg und suche passenden Weg in bestimmtem Zeitbereich (?)
    //TODO Vergleich Zeit Festlegung Zeitbereich
    //TODO Vergleich Zeit freie Eingabe von Zeitbereichen?

    //Festlegung Zeitbereich von und bis
    var startzeitraumStu = 1;
    var startzeitraumMin = 0;
    var startzeitraumSec = 0;

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

var resolvedFlag = false;

function vergleicheVerkehrsmittel(wegeIDVglWegepaare) {

    //Vergleich Verkehrsmittel
    // nehme ersten Weg und suche passenden Weg mit gleichem Verkehrsmittel
    //TODO Vergleich Verkehrsmittel sichtbare Kommentare verschönern
    //TODO Vergleich Verkehrsmittel Readfile stoppen, dann Vergleich Wege
    //TODO Vergleich Verkehrsmittel sichtbare log-Ausgaben verschönern


    var vmVgl = false;


    // load selected JSON Files
    let filesVM = document.getElementById("jsonFiles").files;

    // Hilfsvariablen um am Ende Dropdown Menü Auswahl Nutzer zu befüllen
    var anzahlFiles = filesVM.length;
    //var durchlaufeneFiles = 0;
    console.log("anzahlFiles");
    console.log(anzahlFiles);

    var wS1 = false;
    var wS2 = false;

    t()


    //wegeIDVglWegezweck.forEach(function(element){

    async function t() {
        for(const paar of wegeIDVglWegepaare) {
            var wegeID1 = paar["WegeID 1"];
            var wegeID2 = paar["WegeID 2"];
            aktuellesElement = paar;
            console.log("aktuellesElement");
            console.log(aktuellesElement);
            var durchlaufeneFiles = 0;
            const key = wegeIDVglWegepaare.indexOf(paar)
            await leseFile(wegeID1, wegeID2, vmVgl, wS1, wS2, durchlaufeneFiles, filesVM, anzahlFiles, key)
        }

    }









    console.log("Ende auslesen read Vgl Verkehrsmittel");
    console.log("verkehrsmittelWeg1");
    console.log(verkehrsmittelWeg1);
    console.log("verkehrsmittelWeg2");
    console.log(verkehrsmittelWeg2);

    console.log("wegeIDVglVerkehrsmittel");
    console.log(wegeIDVglVerkehrsmittel);

    //console.log("2vmVgl nach Reader");
    //console.log(vmVgl);

    //console.log("4vmVgl vor Return");
    //console.log(vmVgl);


    return wegeIDVglVerkehrsmittel;
} //Ende vergleiche Verkehrsmittel()

async function leseFile(wegeID1, wegeID2, vmVgl, wS1, wS2, durchlaufeneFiles, filesVM, anzahlFiles, key) {

    return new Promise((resolve,reject)=>{
        //here our function should be implemented
        setTimeout(()=>async function(){
            console.log("Hello from inside the testAsync function vglVM");

            // read selected JSON Files
            for(file of filesVM) {
                let readerVM = new FileReader();
                await readerVM.onload = async function (f) {
                    let content = JSON.parse(f.target.result);

                    //verkehrsmittelWeg1 = [];
                    //verkehrsmittelWeg2 = [];

                    // Speichere akutelle WegeID
                    var aktuelleWegeId = content[0]["a0_wayUUID"];

                    // wenn aktueller Weg in wegeID enthalten gehe weiter
                    if (wegeID1 === aktuelleWegeId) {

                        // looping through wayStages
                        let wayStage = (content[0]["a5_wayStages"])
                        console.log("wegeID1");
                        console.log(wegeID1);
                        console.log("wayStage");
                        console.log(wayStage);

                        // looping though wayStages
                        for (var i = 0; i < wayStage.length; i++) {

                            let vmI = wayStage[i]["a0_mode"];
                            console.log("vmI");
                            console.log(vmI);
                            // speichere Verkehrsmittel der Etappe/wayStage
                            verkehrsmittelWeg1.push(vmI);
                            console.log("verkehrsmittelWeg1");
                            console.log(verkehrsmittelWeg1);
                            if (i == wayStage.length - 1) {
                                wS1 = true;

                            }

                        }

                    }

                    // wenn aktueller Weg in wegeID enthalten gehe weiter
                    if (wegeID2 === aktuelleWegeId) {

                        // looping through wayStages
                        let wayStage = (content[0]["a5_wayStages"])
                        console.log("wegeID2");
                        console.log(wegeID2);
                        console.log("wayStage");
                        console.log(wayStage);

                        // looping though wayStages
                        for (var i = 0; i < wayStage.length; i++) {

                            let vmI = wayStage[i]["a0_mode"];
                            console.log("vmI");
                            console.log(vmI);
                            // speichere Verkehrsmittel der Etappe/wayStage
                            verkehrsmittelWeg2.push(vmI);
                            console.log("verkehrsmittelWeg2");
                            console.log(verkehrsmittelWeg2);

                            if (i == wayStage.length - 1) {
                                wS2 = true;

                            }

                        }

                    }

                    if (wS1 == true && wS2 == true) {
                        vergleicheVM(wegeID1, wegeID2, aktuellesElement);
                        wS1 = false;
                        wS2 = false;

                    }

                    console.log("1vmVgl in Reader");
                    console.log(vmVgl);

                    durchlaufeneFiles = durchlaufeneFiles + 1;

                    if (durchlaufeneFiles == anzahlFiles) {

                        endeRead(wegeID1, wegeID2, aktuellesElement);

                        if (Object.is(wegeIDVglWegepaare.length - 1, key)) {
                            endeVglVM();
                        }


                    }

                }
                readerVM.readAsText(file);
            }




            resolve();
            ;} , 5000
        );
    });


}


function endeVglVM(){

    vmVgl = true;

    resolvedFlag = true;


    console.log("3vmVgl endeVglVM");
    console.log(vmVgl);

    console.log("ENDE Vgl Verkehrsmittel");

    console.log("wegeIDVglVerkehrsmittel");
    console.log(wegeIDVglVerkehrsmittel);

} //Ende endeVglVM()

function vergleicheVM(wegeID1, wegeID2, aktuellesElement) {
    console.log("Ende Read File");

    console.log(wegeID1);
    console.log(wegeID2);
    //console.log(aktuellesElement);

    var ausgabeElement = new Object();
    ausgabeElement["WegeID 1"] = wegeID1;
    ausgabeElement["WegeID 2"] = wegeID2;

    console.log("ausgabeElement");
    console.log(ausgabeElement);


    var zV = 0;

    for(var v = 0; v < verkehrsmittelWeg1.length; v++){

        if(verkehrsmittelWeg1[v] == verkehrsmittelWeg2[v]) {
            zV = zV + 1;

        }

    }

    var vmGleichZ = 0;

    if (verkehrsmittelWeg1.length == zV){

        for(var w = 0; w < zV; w++){
            if(verkehrsmittelWeg1[w] != verkehrsmittelWeg2[w]){
                vmGleichZ = vmGleichZ + 1;
            }

        }

        if (vmGleichZ == 0){
            console.log("Test alles gleich");
            //wegeIDVglVerkehrsmittel.push(aktuellesElement);
            //wegeIDVglVerkehrsmittel.push(ausgabeElement);
            wegeIDVglVerkehrsmittel.push({"WegeID 1": wegeID1, "WegeID 2": wegeID2});

            console.log("Speichere gleiches Verkehrsmittel");
        } else {
            console.log("Verkehrsmittel stimmen nicht überein");
        }


    } else {
        console.log("Verkehrsmittelanzahl stimmt nicht überein");
    }

    console.log("Ende eines vglVM");

    console.log("verkehrsmittelWeg1");
    console.log(verkehrsmittelWeg1);
    console.log("verkehrsmittelWeg2");
    console.log(verkehrsmittelWeg2);

    console.log("wegeIDVglVerkehrsmittel");
    console.log(wegeIDVglVerkehrsmittel);

    verkehrsmittelWeg1 = [];
    verkehrsmittelWeg2 = [];


} //Ende vergleicheVM()

function endeRead(wegeID1, wegeID2, aktuellesElement) {
    console.log("Ende Read Files eines foreach-Elements");

    console.log("Ende vgl Verkehrsmittel");

    console.log("verkehrsmittelWeg1");
    console.log(verkehrsmittelWeg1);
    console.log("verkehrsmittelWeg2");
    console.log(verkehrsmittelWeg2);

    console.log("wegeIDVglVerkehrsmittel");
    console.log(wegeIDVglVerkehrsmittel);


} //Ende endeRead()