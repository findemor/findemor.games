$(document).ready(function() {
    $.ajax({
        url: "https://infinite-conquest-api.azurewebsites.net/api/scoreboard-get?code=pQcT2V0pRjiFIMmIWb-2XUfS2Rh0ueidyeEd-BrkItDKAzFuZ2BetA==&top=1&uuid=c12bc5ad-ce28-45fa-b3d6-514ecbe8bb9f"
    }).then(function(data) {
        console.log(data);
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});