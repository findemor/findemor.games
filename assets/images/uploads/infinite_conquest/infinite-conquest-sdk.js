$(document).ready(function() {

    let code = "pQcT2V0pRjiFIMmIWb-2XUfS2Rh0ueidyeEd-BrkItDKAzFuZ2BetA==";
    let top = "1"

    $.ajax({
        url: `https://infinite-conquest-api.azurewebsites.net/api/scoreboard-get?code=${ code }&top=${ top }`
    }).then(function(data) {
        console.log(JSON.parse(data));
        console.log(data.ranking);
       console.log("write");
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

        data.ranking.forEach(writeRow);

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