let searchCityName = document.getElementById("search_city_name");
searchCityName.addEventListener("keypress", function(event) {

    if ( event.key === "Enter" ){
        console.log(searchCityName.value)

        let city = searchCityName.value;

        localStorage.setItem("cityName",JSON.stringify(city))
    }

    window.location.href = "./mainPage.html"
})


function hotels(){
    // console.log("add path to hotels page")
    window.location.href = "./mainPage.html"
}

function ThingsToDo(){
    window.location.href = "indexp.html"
}
