$(document).ready(function() {

    let code = "pQcT2V0pRjiFIMmIWb-2XUfS2Rh0ueidyeEd-BrkItDKAzFuZ2BetA==";
    let top = "1"

    $.ajax({
        url: `https://infinite-conquest-api.azurewebsites.net/api/scoreboard-get?code=${ code }&top=${ top }`
    }).then(function(data) {

        let parsed = JSON.parse(data);

        console.log(parsed.ranking);
        
        function writeRow(item, index) {
            console.log(item);
            $('#scoreboard_table > tbody').append(`
                <th>${ item.nick }</th>
                <th>${ item.score }</th>
                <th>${ item.level }</th>
                <th>${ item.coins }</th>
                <th>${ item.wasted }</th>
                <th>${ item.timestamp }</th>`);
        }

        parsed.ranking.forEach(writeRow);

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