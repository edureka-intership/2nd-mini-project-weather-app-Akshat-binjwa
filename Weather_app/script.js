function testing() {
    // const search = document.getElementByid('Search');
    var wind = document.getElementById("Wind");
    var City = document.getElementById("Text-field").value;
    var humidity = document.getElementById("Humidity");
    var Weather_n = document.getElementById("weather-n");
    var Temp = document.getElementById("Temp");
    var result;



    //********************Fetching API********************//

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + City + '&appid=30192f9b900ab362a6d33eb0438b4b58')
        .then(a => a.json())
        .then(data => { result = data; Result_output(); })
        .catch(error => { alert("No City Found. Please Enter Correct City") })

    function Result_output() {

        Weather_n.innerHTML = "Weather in " + City.toLowerCase() + " : " + result.weather[0].description;


        //*****************Humidity******************//
        var hoomidity = result.main.humidity;
        humidity.innerHTML = " Humidity  &nbsp &nbsp &nbsp: " + hoomidity + "%"


        //********************Wind********************//
        var wind_speed = result.wind.speed;
        wind.innerHTML = "Wind Speed &nbsp: " + wind_speed + " MPH";



        //********************Temperature********************//
        var temperature = result.main.temp;
        var Celcius= temperature-273.15;
         var cel=parseInt(Celcius);
        Temp.innerHTML = cel + "&degC";


        //*****************Visibility*****************//
        var Visibility= result.visibility;
        document.getElementById("Visiblity").innerHTML="Visibility &nbsp &nbsp &nbsp : "+Visibility/1000+ " KM"

    }

}