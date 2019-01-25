$(document).ready(function (){
    var quote= "";
    function injection(data){
        quote = data.quote;
        console.log(quote);
        $(".quote").text(quote);
    }

    $.ajax({
        url:"https://thatsthespir.it/api",
        type: "GET",
        dataType: "json",
        timeout: 5000,
        success: function(data ){
            injection(data);
        },
        fail: function(){
            alert("request failed");
        }
    });
});