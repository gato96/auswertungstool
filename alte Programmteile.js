function bildeWegepaarealt() {

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

                //TODO Test element["UserID"] == undefined prüfen, ob if angesprochen wird
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
    var zaehlVgl = Math.round(wegeIDVgl.length/2);
    console.log("wegedaten.length" );
    console.log(wegedaten.length);
    console.log("zaehlVgl" );
    console.log(zaehlVgl);

    //speichere nur ein Wegepaar mit den gleichen beiden Wegen
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



