$(document).ready(function() {

    let code = "pQcT2V0pRjiFIMmIWb-2XUfS2Rh0ueidyeEd-BrkItDKAzFuZ2BetA==";
    let top = "100"

    var urlParams = new URLSearchParams(window.location.search);
    let uuid = urlParams.get('uuid');

    let uuidParam = uuid ? `&uuid=${ uuid }` : ""

    $.ajax({
        url: `https://infinite-conquest-api.azurewebsites.net/api/scoreboard-get?code=${ code }&top=${ top }${ uuidParam}`
    }).then(function(data) {

        let parsed = JSON.parse(data);
        let found = false;

        console.log(parsed.ranking);

        function appendRow(item) {

            let strDate = Date.parse(item.timestamp).toLocaleDateString('en-us',{day: 'numeric'});

            $('#scoreboard_table > tbody').append(buildRow({
                nick: item.nick,
                score: item.score,
                level: item.level,
                coins: item.coins,
                wasted: item.wasted,
                date: strDate
            }));
        }

        function buildRow(item) {
            
            let c = "";
            if (!found && item.uuid == uuid) {
                c = "active"
            };

            $('#scoreboard_table > tbody').append(`<tr class="${c}">
                <th scope="row">${ item.nick }</th>
                <th>${ item.score }</th>
                <th>${ item.level }</th>
                <th>${ item.coins }</th>
                <th>${ item.wasted }</th>
                <th>${ item.date }</th></tr>`);
        }

        parsed.ranking.forEach(appendRow);

        if (!found) {

            let strDate = Date.parse(parsed.udata.timestamp).toLocaleDateString('en-us',{day: 'numeric'});

            $('#scoreboard_table > tbody').append(buildRow({ nick: "...", score: "...", level: "...", coins: "...", wasted: "...", date: "..." }));
            $('#scoreboard_table > tbody').append(buildRow({ nick: parsed.udata.nick, score: parsed.udata.score, level: parsed.udata.level, 
                coins: parsed.udata.coins, wasted: parsed.udata.wasted, date: strDate }));
        }

    });
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