const generatorArr = []

$(".generator").click(function(){
    const thisGenerator = $(this);
    const computer = thisGenerator.closest(".computer");
    const bus = computer.find(".BUS");
    const processor = computer.find(".processor");
    

    const dataID = computer.data().id;
    generatorArr.push({cmp_id: dataID})
    const processorID = processor.attr('id');

    const busNumber = bus.text();


    const summary = `The computer's data-id: ${dataID}.\nThe BUS number: ${busNumber}.\nThe processor ID: ${processorID}.`
    console.log(summary)
})

$(".validator").click(function(){
    const thisValidator = $(this);

    const processor = thisValidator.closest(".ram").siblings(".processor");
    const generatorText = $(processor).find(".generator").text();
    const MB = thisValidator.closest(".ram").siblings(".MB").text()

    const QRS = thisValidator.closest(".computer").find(".QR").map(function(){
        return $(this).text()
    })

   

    // const summary = `Generator:${generatorText}.\nMB:${MB}.\QRS ${QRS[0]}, ${QRS[1]}`
    // console.log(summary)
})

