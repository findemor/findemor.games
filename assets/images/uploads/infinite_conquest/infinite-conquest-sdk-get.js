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

        function formatDate(strd) {
            let d = new Date(strd);
            return `${ d.getMonth() }/${ d.getFullYear() }`;
        }

        function appendRow(item) {
            $('#scoreboard_table > tbody').append(buildRow({
                nick: item.nick,
                score: item.score,
                level: item.level,
                coins: item.coins,
                wasted: item.wasted,
                date: formatDate(item.timestamp)
            }));
        }

        function buildRow(item) {
            
            let c = "";
            if (!found && item.uuid == uuid) {
                c = "highlight"
            };

            $('#scoreboard_table > tbody').append(`<tr class="${c}">
                <th scope="row" class="row">${ item.nick }</th>
                <th>${ item.score }</th>
                <th>${ item.level }</th>
                <th>${ item.coins }</th>
                <th>${ item.wasted }</th>
                <th>${ item.date }</th></tr>`);
        }

        parsed.ranking.forEach(appendRow);

        console.log(`found ${ found} parsed.udata.uuid [${ parsed.data.uuid }] param [${ uuid }]`);

        if (!found && parsed.udata) {
            $('#scoreboard_table > tbody').append(buildRow({ nick: "...", score: "...", level: "...", coins: "...", wasted: "...", date: "..." }));
            $('#scoreboard_table > tbody').append(buildRow({ nick: parsed.udata.nick, score: parsed.udata.score, level: parsed.udata.level, 
                coins: parsed.udata.coins, wasted: parsed.udata.wasted, date: formatDate(parsed.udata.timestamp) }));
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