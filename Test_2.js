function bildeMittelwerte(wegeIDVglWegepaareAnfang) {

    wegeIDVglWegepaareAnfang.forEach(function(element){
        var wegeID1 = element["WegeID 1"];
        var wegeID2 = element["WegeID 2"];
        var userID = element["UserID"];

        console.log("wegeID1");
        console.log(wegeID1);
        console.log("wegeID2");
        console.log(wegeID2);


        //Mittelwert Koordinaten
        console.log("Mittelwert Koordinaten");
        var weg1Zaehler = "";
        var weg2Zaehler = "";

        for (var z = 0; z < wegedatenKoordinaten.length; z++){
            if (wegeID1 == wegedatenKoordinaten[z]["WegeID"]){
                weg1Zaehler = z;
            }
            if (wegeID2 == wegedatenKoordinaten[z]["WegeID"]){
                weg2Zaehler = z;
            }

        }

        console.log("wegedatenKoordinaten[weg1Zaehler]");
        console.log(wegedatenKoordinaten[weg1Zaehler]);
        console.log("wegedatenKoordinaten[weg1Zaehler].length");
        console.log(wegedatenKoordinaten[weg1Zaehler].length);
        console.log("wegedatenKoordinaten[weg2Zaehler]");
        console.log(wegedatenKoordinaten[weg2Zaehler]);
        console.log("wegedatenKoordinaten[weg2Zaehler].length");
        console.log(wegedatenKoordinaten[weg2Zaehler].length);

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
                var distanz = vergleichsFunktion(wegedatenKoordinaten[weg1Zaehler][k], wegedatenKoordinaten[weg1Zaehler][k+1], wegedatenKoordinaten[weg2Zaehler][k], wegedatenKoordinaten[weg2Zaehler][k+1]);

                werteKoordinatenAlle.push(distanz);

            }

        } else {
            console.log("Koordinatenanzahl stimmt nicht überein");
        }

        //Mittelwert Koordinaten Umstieg
        console.log("Koordinaten Umstieg");
        console.log("wegedatenKoordinaten[weg1Zaehler]");
        console.log(wegedatenKoordinaten[weg1Zaehler]);
        console.log("wegedatenKoordinaten[weg1Zaehler].length");
        console.log(wegedatenKoordinaten[weg1Zaehler].length);
        console.log(wegedatenKoordinaten[weg2Zaehler]);
        console.log("wegedatenKoordinaten[weg2Zaehler]");
        console.log("wegedatenKoordinaten[weg2Zaehler].length");
        console.log(wegedatenKoordinaten[weg2Zaehler].length);

        if(wegedatenKoordinaten[weg1Zaehler].length == wegedatenKoordinaten[weg2Zaehler].length){

            for( var l = 0; l < wegedatenKoordinaten[weg1Zaehler].length-2; l = l + 2){
                console.log(l);
                console.log("wegedatenKoordinaten[weg1Zaehler][l]");
                console.log(wegedatenKoordinaten[weg1Zaehler][l]);
                console.log("wegedatenKoordinaten[weg1Zaehler][l+1]");
                console.log(wegedatenKoordinaten[weg1Zaehler][l+1]);
                console.log("wegedatenKoordinaten[weg1Zaehler][l+2]");
                console.log(wegedatenKoordinaten[weg1Zaehler][l+2]);
                console.log("wegedatenKoordinaten[weg1Zaehler][l+3]");
                console.log(wegedatenKoordinaten[weg1Zaehler][l+3]);

                console.log("wegedatenKoordinaten[weg2Zaehler][l]");
                console.log(wegedatenKoordinaten[weg2Zaehler][l]);
                console.log("wegedatenKoordinaten[weg2Zaehler][l+1]");
                console.log(wegedatenKoordinaten[weg2Zaehler][l+1]);
                console.log("wegedatenKoordinaten[weg2Zaehler][l+2]");
                console.log(wegedatenKoordinaten[weg2Zaehler][l+2]);
                console.log("wegedatenKoordinaten[weg2Zaehler][l+3]");
                console.log(wegedatenKoordinaten[weg2Zaehler][l+3]);

                //Vergleich Distanz weg1Zaehler][l]/weg1Zaehler][l+1] und weg1Zaehler][l+2]/weg1Zaehler][l+3]
                console.log(wegedatenKoordinaten[weg1Zaehler][l], wegedatenKoordinaten[weg1Zaehler][l+1], wegedatenKoordinaten[weg1Zaehler][l+2], wegedatenKoordinaten[weg1Zaehler][l+3]);
                var distanzweg1Zaehler = vergleichsFunktion(wegedatenKoordinaten[weg1Zaehler][l], wegedatenKoordinaten[weg1Zaehler][l+1], wegedatenKoordinaten[weg1Zaehler][l+2], wegedatenKoordinaten[weg1Zaehler][l+3]);

                //Vergleich Distanz weg2Zaehler][l]/weg2Zaehler][l+1] und weg2Zaehler][l+2]/weg2Zaehler][l+3]
                console.log(wegedatenKoordinaten[weg2Zaehler][l], wegedatenKoordinaten[weg2Zaehler][l+1], wegedatenKoordinaten[weg2Zaehler][l+2], wegedatenKoordinaten[weg2Zaehler][l+3]);
                var distanzweg2Zaehler = vergleichsFunktion(wegedatenKoordinaten[weg2Zaehler][l], wegedatenKoordinaten[weg2Zaehler][l+1], wegedatenKoordinaten[weg2Zaehler][l+2], wegedatenKoordinaten[weg2Zaehler][l+3]);

                var distanz = "";
                if(distanzweg1Zaehler > distanzweg2Zaehler){
                    distanz = distanzweg1Zaehler - distanzweg2Zaehler;

                } else {
                    distanz = distanzweg2Zaehler - distanzweg1Zaehler;
                }

                console.log("distanz");
                console.log(distanz);
                werteKoordinatenUmstiegAlle.push(distanz);

            }

        } else {
            console.log("Koordinatenanzahl Umstieg stimmt nicht überein");
        }

        //Mittelwert Startzeit
        console.log("Mittelwert Startzeit");
        var dateStart = new Date(Date.now());
        console.log("dateStart");
        console.log(dateStart);

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
        //date3: date2 mit gleichem Datum wie date1, damit Startzeit überprüft werden kann
        var date3 = new Date(jahr1, monat1, tag1, stunden2, minuten2, sekunden2);
        console.log("date3");
        console.log(date3);

        var zeitdifferenz ="";
        if(date1 < date3){
            zeitdifferenz = vergleichsFunktionZeit(date1, date3);
        } else {
            zeitdifferenz = vergleichsFunktionZeit(date3, date1);
        }

        console.log("zeitdifferenz");
        console.log(zeitdifferenz);

        var zeitdiffDate = millisekundenInDateWandeln(zeitdifferenz, dateStart);
        console.log("zeitdiff");
        console.log(zeitdiffDate);

        werteStartzeitAlle.push(zeitdiffDate);

        //Mittelwert Umstiegszeit
        console.log("Mittelwert Umstiegszeit");
        if(wegedatenAbfahrtAnkunft[weg1Zaehler].length == wegedatenAbfahrtAnkunft[weg2Zaehler].length){

            for( var m = 0; m < wegedatenAbfahrtAnkunft[weg1Zaehler].length-2; m = m + 2){
                console.log(m);
                console.log("wegedatenAbfahrtAnkunft[weg1Zaehler][m+1]");
                console.log(wegedatenAbfahrtAnkunft[weg1Zaehler][m+1]);
                console.log("wegedatenAbfahrtAnkunft[weg1Zaehler][m+2]");
                console.log(wegedatenAbfahrtAnkunft[weg1Zaehler][m+2]);

                console.log("wegedatenAbfahrtAnkunft[weg2Zaehler][m+1]");
                console.log(wegedatenAbfahrtAnkunft[weg2Zaehler][m+1]);
                console.log("wegedatenAbfahrtAnkunft[weg2Zaehler][m+2]");
                console.log(wegedatenAbfahrtAnkunft[weg2Zaehler][m+2]);

                //Vergleich Umstiegszeit weg1Zaehler][m+1] und weg1Zaehler][m+2]
                console.log(wegedatenAbfahrtAnkunft[weg1Zaehler][m+1], wegedatenAbfahrtAnkunft[weg1Zaehler][m+2]);
                var umstiegszeitweg1Zaehler = vergleichsFunktionZeit(wegedatenAbfahrtAnkunft[weg1Zaehler][m+1], wegedatenAbfahrtAnkunft[weg1Zaehler][m+2]);
                console.log("umstiegszeitweg1Zaehler");
                console.log(umstiegszeitweg1Zaehler);

                //Vergleich Umstiegszeit weg2Zaehler][m] und weg2Zaehler][m+1]
                console.log(wegedatenAbfahrtAnkunft[weg2Zaehler][m+1], wegedatenAbfahrtAnkunft[weg2Zaehler][m+1]);
                var umstiegszeitweg2Zaehler = vergleichsFunktionZeit(wegedatenAbfahrtAnkunft[weg2Zaehler][m+1], wegedatenAbfahrtAnkunft[weg2Zaehler][m+2]);
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

                var zeitdiffDate = millisekundenInDateWandeln(zeitdifferenz, dateStart);
                console.log("zeitdiff");
                console.log(zeitdiffDate);

                werteUmsteigszeitAlle.push(zeitdiffDate);

            }

        } else {
            console.log("Anzahl Zeitwerte Umstieg stimmt nicht überein");
        }

        //Mittelwert Wegezweck
        console.log("Mittelwert Wegezweck");
        var wegeZweck1= wegedaten[weg1Zaehler]["Wegezweck"];

        //console.log(weg1Zaehler);
        console.log("wegeZweck1");
        console.log(wegeZweck1);

        var wegeZweck2= wegedaten[weg2Zaehler]["Wegezweck"];

        //console.log(weg2Zaehler);
        console.log("wegeZweck2");
        console.log(wegeZweck2);

        werteWegezweckAlle.push({"Wegezweck 1": wegeZweck1, "Wegezweck 2": wegeZweck2});

        //Mittelwert Verkehrsmittel
        console.log("Mittelwert Verkehrsmittel");
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

        var vmListe1 = "";
        var vmListe2 = "";

        if(wegedatenVerkehrsmittel[zaehlerwegedatenVM1].length == wegedatenVerkehrsmittel[zaehlerwegedatenVM2].length){

            for (var w = 0; w < wegedatenVerkehrsmittel[zaehlerwegedatenVM1].length; w++){
                console.log("wegedatenVerkehrsmittel[zaehlerwegedatenVM1][w]");
                console.log(wegedatenVerkehrsmittel[zaehlerwegedatenVM1][w]);
                console.log("wegedatenVerkehrsmittel[zaehlerwegedatenVM2][w]");
                console.log(wegedatenVerkehrsmittel[zaehlerwegedatenVM2][w]);

                vmListe1 = vmListe1 + " + " + wegedatenVerkehrsmittel[zaehlerwegedatenVM1][w];
                vmListe2 = vmListe2 + " + " + wegedatenVerkehrsmittel[zaehlerwegedatenVM2][w];

            }

        } else {
            console.log("Verkehrsmittelanzahl stimmt nicht überein");
        }

        werteVerkehrsmittelAlle.push({"Verkehrsmittel 1": vmListe1, "Verkehrsmittel 2": vmListe2});

    });

    console.log("Bilde Mittelwerte Berechnung");
    var mittelwertKoordinatenAlle = bildeMittelwertZahl(werteKoordinatenAlle);

    mittelwerteWegepaareAlle.push({"Koordinaten": mittelwertKoordinatenAlle});

    console.log("werteKoordinatenAlle");
    console.log(werteKoordinatenAlle);

    var mittelwertKoordinatenUmstiegAlle = bildeMittelwertZahl(werteKoordinatenUmstiegAlle);

    mittelwerteWegepaareAlle.push({"Koordinaten Umstieg": mittelwertKoordinatenUmstiegAlle});

    console.log("werteKoordinatenUmstiegAlle");
    console.log(werteKoordinatenUmstiegAlle);

    var mittelwertStartzeitAlle = bildeMittelwertDate(werteStartzeitAlle);

    var stuSt = mittelwertStartzeitAlle.getHours();
    var minSt = mittelwertStartzeitAlle.getMinutes();
    var secSt = mittelwertStartzeitAlle.getSeconds();

    var mittelwertStartzeitAlleText = stuSt + ":" + minSt + ":" + secSt;

    mittelwerteWegepaareAlle.push({"Startzeit": mittelwertStartzeitAlleText});

    console.log("werteStartzeitAlle");
    console.log(werteStartzeitAlle);

    var mittelwertUmstiegszeitAlle = bildeMittelwertDate(werteUmsteigszeitAlle);

    var stuUm = mittelwertUmstiegszeitAlle.getHours();
    var minUm = mittelwertUmstiegszeitAlle.getMinutes();
    var secUm = mittelwertUmstiegszeitAlle.getSeconds();

    var mittelwertUmstiegszeitAlleText = stuUm + ":" + minUm + ":" + secUm;

    mittelwerteWegepaareAlle.push({"Umsteigszeit": mittelwertUmstiegszeitAlleText});

    console.log("werteUmstiegszeitAlle");
    console.log(werteUmsteigszeitAlle);

    var mittelwertWegezweckAlle = bildeMittelwertWegezweck(werteWegezweckAlle);

    //TODO Copy zu Ausgabe
    var mittelwertWegezweckAlleText = "";
    mittelwertWegezweckAlle.forEach(function(element){
        var text = "Wegezweck 1:" + " " + element["Wegezweck 1"] + " " + "Wegezweck 2:" + " " + element["Wegezweck 2"] + " " + "Anzahl:" + " " + element["Anzahl"];
        mittelwertWegezweckAlleText = mittelwertWegezweckAlleText + text;
    });

    mittelwerteWegepaareAlle.push({"Wegezweck": mittelwertWegezweckAlleText});

    console.log("werteWegezweckAlle");
    console.log(werteWegezweckAlle);

    var mittelwertVerkehrsmittelAlle = bildeMittelwertVerkehrsmittel(werteVerkehrsmittelAlle);

    //TODO Copy zu Ausgabe
    var mittelwertVerkehrsmittelAlleText = "";
    mittelwertVerkehrsmittelAlle.forEach(function(element){
        var text = "Verkehrsmittel 1:" + " " + element["Verkehrsmittel 1"] + " " + "Verkehrsmittel 2:" + " " +"<p></p>"+ element["Verkehrsmittel 2"] + " " + "Anzahl:" + " " + element["Anzahl"];
        mittelwertVerkehrsmittelAlleText = mittelwertVerkehrsmittelAlleText + text;
    });

    mittelwerteWegepaareAlle.push({"Verkehrsmittel": mittelwertVerkehrsmittelAlleText});

    console.log("werteVerkehrsmittelAlle");
    console.log(werteVerkehrsmittelAlle);

    console.log("mittelwerteWegepaareAlle");
    console.log(mittelwerteWegepaareAlle);

}//Ende bildeMittelwert()


function waehleWege(wegeIDVglWegepaare, wegeIDVglKoordinaten, wegeIDVglKoordinatenUmstieg, wegeIDVglStartzeit, wegeIDVglDauerUmstieg, wegeIDVglWegezweck, wegeIDVglVerkehrsmittel) {

    document.getElementById("box9").style.display = "block";

    //Anzahl der Wegepaare, die Vergleichsfiltern entsprechen
    console.log("wegeIDVglWegepaare.length");
    console.log(wegeIDVglWegepaare.length);
    console.log("mittelwerteWegepaare");
    console.log(mittelwerteWegepaare);
    console.log("wegeIDVglKoordinaten.length");
    console.log(wegeIDVglKoordinaten.length);
    console.log("wegeIDVglKoordinatenUmstieg.length");
    console.log(wegeIDVglKoordinatenUmstieg.length);
    console.log("wegeIDVglStartzeit.length");
    console.log(wegeIDVglStartzeit.length);
    console.log("wegeIDVglDauerUmstieg.length");
    console.log(wegeIDVglDauerUmstieg.length);
    console.log("wegeIDVglWegezweck.length");
    console.log(wegeIDVglWegezweck.length);
    console.log("wegeIDVglVerkehrsmittel.length");
    console.log(wegeIDVglVerkehrsmittel.length);

    var ergebnisseFilter = "<b>Mittelwerte aller Wegepaare: </b>" + mittelwerteWegepaare  +
        "<br><b>Anzahl aller grob gefilterten Wegepaare: </b>" + wegeIDVglWegepaare.length +
        "<br><b>Anzahl Wege, die Vergleichskriterium entsprechen: </b>" +
        "<br> Koordinaten: " + wegeIDVglKoordinaten.length +
        "<br> Umstiegsweg: " + wegeIDVglKoordinatenUmstieg.length +
        "<br> Startzeit: " + wegeIDVglStartzeit.length +
        "<br> Umstiegsdauer: " + wegeIDVglDauerUmstieg.length +
        "<br> Wegezweck: " + wegeIDVglWegezweck.length +
        "<br> Verkehrsmittel: " + wegeIDVglVerkehrsmittel.length + "<p></p>";
    var sel = document.getElementById("AusgabeErgebnis");
    var erg = document.createElement('Ergebnis');
    erg.innerHTML = ergebnisseFilter;
    erg.value = ergebnisseFilter;
    sel.appendChild(erg);

}//Ende waehleWege()

function sammlePassendeWegepaare(){
    //TODO wenn element aus wegeIDVglWegepaare in anderen Arrays enthalten zähle?
    //TODO Überarbeitung

    console.log("sammlePassendeWegepaare");

    // Abfrage nach gewählten Vergleichsmethoden
    var checkboxChecked = new Array();
    var checkboxesvergleichsfilter = document.getElementsByName("vergleichsfilter");
    for(var i = 0; i < checkboxesvergleichsfilter.length; i++)
    {
        switch (checkboxesvergleichsfilter[i].value) {
            case "Koordinaten":
                if(checkboxesvergleichsfilter[i].checked){
                    checkboxChecked.push("Koordinaten");}
                break;
            case "Umstiegsweg":
                if(checkboxesvergleichsfilter[i].checked){
                    checkboxChecked.push("Umstiegsweg");}
                break;
            case "Startzeit":
                if(checkboxesvergleichsfilter[i].checked){
                    checkboxChecked.push("Startzeit");}
                break;
            case "Umstiegsdauer":
                if(checkboxesvergleichsfilter[i].checked){
                    checkboxChecked.push("Umstiegsdauer");}
                break;
            case "Wegezweck":
                if(checkboxesvergleichsfilter[i].checked){
                    checkboxChecked.push("Wegezweck");}
                break;
            case "Verkehrsmittel":
                if(checkboxesvergleichsfilter[i].checked){
                    checkboxChecked.push("Verkehrsmittel");}
                break;
            default:
                break;
        }
    }

    wegeIDVglWegepaare.forEach(function(element){
        var wegeID1 = element["WegeID 1"];
        var wegeID2 = element["WegeID 2"];
        var userID = element["UserID"];

        console.log("wegeID1");
        console.log(wegeID1);
        console.log("wegeID2");
        console.log(wegeID2);

        for(var i = 0; i < checkboxesvergleichsfilter.length; i++){
            switch (checkboxesvergleichsfilter[i].value) {
                case "Koordinaten":
                    if(checkboxesvergleichsfilter[i].checked){
                        console.log("checked");
                        wegeIDVglKoordinaten.forEach(function(element1){
                            console.log("wegeIDVglKoordinaten.forEach(function(element1)");
                            var vWegeID1 = element1["WegeID 1"];
                            var vWegeID2 = element1["WegeID 2"];
                            console.log("vWegeID1");
                            console.log(vWegeID1);
                            console.log("vWegeID2");
                            console.log(vWegeID2);
                            if(wegeID1 == vWegeID1  && wegeID2 == vWegeID2){
                                console.log("push");
                                wegeIDVglWegepaareFilter.push(element);
                            }
                        });}
                    break;
                case "Umstiegsweg":
                    if(checkboxesvergleichsfilter[i].checked){
                        console.log("checked2");
                        wegeIDVglKoordinatenUmstieg.forEach(function(element1){
                            var vWegeID1 = element1["WegeID 1"];
                            var vWegeID2 = element1["WegeID 2"];
                            if(wegeID1 == vWegeID1  && wegeID2 == vWegeID2){
                                wegeIDVglWegepaareFilter.push(element);
                            }
                        });}
                    break;
                case "Startzeit":
                    if(checkboxesvergleichsfilter[i].checked){
                        wegeIDVglStartzeit.forEach(function(element1){
                            var vWegeID1 = element1["WegeID 1"];
                            var vWegeID2 = element1["WegeID 2"];
                            if(wegeID1 == vWegeID1  && wegeID2 == vWegeID2){
                                wegeIDVglWegepaareFilter.push(element);
                            }
                        });}
                    break;
                case "Umstiegsdauer":
                    if(checkboxesvergleichsfilter[i].checked){
                        wegeIDVglDauerUmstieg.forEach(function(element1){
                            var vWegeID1 = element1["WegeID 1"];
                            var vWegeID2 = element1["WegeID 2"];
                            if(wegeID1 == vWegeID1  && wegeID2 == vWegeID2){
                                wegeIDVglWegepaareFilter.push(element);
                            }
                        });}
                    break;
                case "Wegezweck":
                    if(checkboxesvergleichsfilter[i].checked){
                        wegeIDVglWegezweck.forEach(function(element1){
                            var vWegeID1 = element1["WegeID 1"];
                            var vWegeID2 = element1["WegeID 2"];
                            if(wegeID1 == vWegeID1  && wegeID2 == vWegeID2){
                                wegeIDVglWegepaareFilter.push(element);
                            }
                        });}
                    break;
                case "Verkehrsmittel":
                    if(checkboxesvergleichsfilter[i].checked){
                        wegeIDVglVerkehrsmittel.forEach(function(element1){
                            var vWegeID1 = element1["WegeID 1"];
                            var vWegeID2 = element1["WegeID 2"];
                            if(wegeID1 == vWegeID1  && wegeID2 == vWegeID2){
                                wegeIDVglWegepaareFilter.push(element);
                            }
                        });}
                    break;
                default:
                    break;
            }

        };


    });

    console.log("wegeIDVglWegepaareFilter Ende sammlePassendeWegepaare()");
    console.log(wegeIDVglWegepaareFilter);

    //speichere nur ein Wegepaar mit den gleichen beiden Wegen

    wegeIDVglWegepaareFilter.forEach(function(element){
        if (wegeIDVglWegepaareFilter.includes(element) == false){
            wegeIDVglWegepaareFilterEinfach.push(element);
        }
    });

    console.log("wegeIDVglWegepaareFilterEinfach Ende sammlePassendeWegepaare()");
    console.log(wegeIDVglWegepaareFilterEinfach);

    return  wegeIDVglWegepaareFilterEinfach;
}//Ende sammlePassendeWegepaare()