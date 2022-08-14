$(document).ready(function() {

    var urlParams = new URLSearchParams(window.location.search);
    let mjwt = urlParams.get('mjwt');

    /*$("button[id='submit']").click(function(e){
        submitForm(e);
    });*/

    
    //$("nav").remove();
    //$("footer").remove();
    //$("div.pt-5").remove();
    //$("p.post-metadata.text-muted").remove();
 
    $("nav").css("display", "none");
    $("footer").css("display", "none");
    $("div.pt-5").css("display", "none");
    $("p.post-metadata.text-muted").css("display", "none");
    $("#displayError").css("display", "none");

    $("#submit").click(submitForm);
    

    function isEmpty(val){
        return (val === undefined || val == null || val.length <= 0) ? true : false;
    }

    function putData(mjwt, nick, twitter, callback) {

        let code = "lMfZO5wtqhOhSJdRUAblqC1hpDBlmfaVle5Om1-YiQhYAzFu5I9sNw==";
        let qpnick = encodeURI(nick);
        let qptwitter = isEmpty(twitter) ? "" : "&twitter="+encodeURI(twitter);
        
        $.ajax({
            url: `https://infinite-conquest-api.azurewebsites.net/api/scoreboard-put?code=${ code }&mjwt=${ mjwt }&nick=${ qpnick }${ qptwitter }`
        }).then(function(data) {
            console.log(data);
        })
        .done(function (data) {
            callback(null, data); })
        .fail(function(err) {
            callback(err, null);
        });
    }

    function submitForm() {
        //console.log("try submit");
        //
        try {
            $("#displayError").css("display", "none");
            let nick = $("#nick").val().trim();
            let twitter = $("#twitter").val().trim();
            let uuid = JSON.parse(atob(mjwt.split('.')[0])).uuid;

            if (twitter.startsWith("@")) {
                twitter = twitter.Remove(0,1);
            }

            if (isEmpty(uuid) || isEmpty(mjwt) || isEmpty(nick)) {
                console.log(`uuid=${uuid}, mjwt=${mjwt}, nick=${nick}, twitter=${twitter}`);
                //console.log("preventDefault");
                $("#displayError").css("display", "block");
                return false;
            } else {
                //console.log("submit form");
                putData(mjwt, nick, twitter, (err, data) => {
                    if (err) {
                        console.log(err);
                        $("#displayError").css("display", "block");
                        return false;
                    } else {
                        //vamos al scoreboard
                        window.location.href = `https://games.findemor.es/game/infinite-conquest-scoreboard?uuid=${uuid}`;
                        return true;
                    }
                });
            }
        } catch (err)
        {
            console.log("err: " + err);

            return false;
        }
    }

});

/*

ranking
<th>item.nick</th>
<th>item.score</th>
<th>item.level</th>
<th>item.coins</th>
<th>item.wasted</th>
<th>item.timestamp</th>

*/