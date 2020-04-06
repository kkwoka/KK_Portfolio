function showPics() {
    let apiKey = "15905492-1fc69d8c442194d1c035bd455";
    let queryURL = "https://pixabay.com/api/?key=" + apiKey + "&q=puppies&image_type=photo";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#apiBox").text("");
        for (i = 0; i < 6; i++) {
            let imgURL = response.hits[i].webformatURL;
            let pic = $(`<img src='${imgURL}' width='400' height='400'></img>`).css('margin-bottom', '10px');
            $("#apiBox").append(`\n`);
            $("#apiBox").append(pic);

        }
    })
}

function getPics() {
    let apiKey = "15905492-1fc69d8c442194d1c035bd455";
    let apiInput = $("#apiInput").val();
    let queryURL = "https://pixabay.com/api/?key=" + apiKey + "&q=" + apiInput + "&image_type=photo";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("#apiBox").text("");
        for (i = 0; i < 6; i++) {
            let imgURL = response.hits[i].webformatURL;
            let pic = $(`<img src='${imgURL}' width='400' height='400'></img>`).css('margin-bottom', '10px');
            pic.attr('margin-bottom', '10px')
            $("#apiBox").append(`\n`);
            $("#apiBox").append(pic);

        }
    })
};

function getAPI() {
    let queryURL = "https://dog.ceo/api/breeds/image/random";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.message)
        let imgURL = response.message;
        let pic = $(`<img src='${imgURL}'></img>`).css('margin-bottom', '10px');
        $("#apiBox").text("");
        $("#apiBox").append(pic);

    })
}


showPics();
$(document).on("click", "#submit", getPics);
// $(document).on("click", "#submit", getAPI);