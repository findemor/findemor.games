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

        function writeRow(item, index) {
            
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
                <th>${ Date.parse(item.timestamp).toString("MMMM yyyy") }</th></tr>`);
        }

        parsed.ranking.forEach(writeRow);

        if (!found) {
            $('#scoreboard_table > tbody').append(`<tr>
                <th scope="row">...</th>
                <th>...</th>
                <th>...</th>
                <th>...</th>
                <th>...</th>
                <th>...</th></tr>`);
            $('#scoreboard_table > tbody').append(`<tr class="active">
                <th scope="row">${ parsed.udata.nick }</th>
                <th>${ parsed.udata.score }</th>
                <th>${ parsed.udata.level }</th>
                <th>${ parsed.udata.coins }</th>
                <th>${ parsed.udata.wasted }</th>
                <th>${ Date.parse(parsed.udata.timestamp).toString("MMMM yyyy") }</th></tr>`);
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