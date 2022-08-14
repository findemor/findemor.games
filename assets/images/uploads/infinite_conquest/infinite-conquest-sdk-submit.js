$(document).ready(function() {

    let code = "pQcT2V0pRjiFIMmIWb-2XUfS2Rh0ueidyeEd-BrkItDKAzFuZ2BetA==";

    var urlParams = new URLSearchParams(window.location.search);
    let uuid = urlParams.get('uuid');
    let mjwt = urlParams.get('mjwt');

    $("button[id='submit']").click(function(e){
        submitForm(e);
    });

    function submitForm(e) {

        var form = $(this).closest('form');
        if (!form.data("bs.validator").validate().hasErrors()) {
            e.preventDefault();
            // Here go the trick! Fire a custom event to the form
            console.log("submit");

            let nick = $("#nick").val().Trim();
            let twitter = $("#twitter").val().Trim();

            if (twitter.startsWith("@")) {
                twitter = twitter.Remove(0,1);
            }

            console.log(uuid);
            console.log(mjwt);
            console.log(nick);
            console.log(twitter);
        } else  {
            console.log('Form still not valid');
        }
       
    }

    /*
    let uuidParam = uuid ? `&uuid=${ uuid }` : ""

    $.ajax({
        url: `https://infinite-conquest-api.azurewebsites.net/api/scoreboard-get?code=${ code }&top=${ top }${ uuidParam}`
    }).then(function(data) {

        let parsed = JSON.parse(data);
        let found = false;

        console.log(parsed.ranking);

        function formatDate(strd) {
            let d = new Date(strd);
            return `${ d.getMonth() }/${ d.getFullYear() }`;
        }

        function appendRow(item, index) {
            $('#scoreboard_table > tbody').append(buildRow(
            index + 1,
            {
                nick: item.nick,
                score: item.score,
                level: item.level,
                coins: item.coins,
                wasted: item.wasted,
                date: formatDate(item.timestamp)
            }));
        }

        function buildRow(i, item) {
            
            let c = "";
            console.log(`[${ item.uuid}] [${ uuid }] == ${ (item.uuid == uuid) }`);
            if (uuid && item.uuid == uuid) {
                c = "class=\"highlight\"";
            };

            let king = item.nick;
            if (item.twitter) {
                king = `<a href="https://www.twitter.com/${ item.twitter }" target="_blank">${ item.nick  }</a>`;
            }

            $('#scoreboard_table > tbody').append(`<tr ${c}>
                <th>${ i }</th>
                <th scope="row" class="crow">${ item.nick }</th>
                <th>${ item.score }</th>
                <th>${ item.level }</th>
                <th>${ item.coins }</th>
                <th>${ item.wasted }</th>
                <th>${ item.date }</th></tr>`);
        }

        parsed.ranking.forEach(appendRow);


        if (!found && parsed.udata) {
            //console.log(`found ${ found} parsed.udata.uuid [${ parsed.udata.uuid }] param [${ uuid }]`);
            $('#scoreboard_table > tbody').append(buildRow("", { nick: "...", score: "...", level: "...", coins: "...", wasted: "...", date: "..." }));
            $('#scoreboard_table > tbody').append(buildRow("", { nick: parsed.udata.nick, twitter: parsed.udata.twitter, score: parsed.udata.score, level: parsed.udata.level, 
                coins: parsed.udata.coins, wasted: parsed.udata.wasted, uuid: parsed.udata.uuid, date: formatDate(parsed.udata.timestamp) }));
        }

    });

    */
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