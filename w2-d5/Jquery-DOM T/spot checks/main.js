//spot check 1
// $("button").click(function(){
//     const relevantPrint = $(this).closest("div").find("span").text();
//     alert(relevantPrint);
// })

//spot check 2
$("button").on("click",function(){
    console.log( $(".container").find("p").text());
})