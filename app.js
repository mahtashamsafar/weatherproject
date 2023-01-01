let weather = {
    "apikey": "6b2ce6c4ba815408972ddff4a93bbc07",
    fetchWeather: function (city) {
        fetch(
            ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, description, temp, humidity, speed);
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = `${temp}°C`;
        document.querySelector('.humidity').innerText = `Humidity : ${humidity}%`;
        document.querySelector('.wind').innerText = `WindSpeed : ${speed}km/h`;
    },
    search: function () {
        this.fetchWeather(document.querySelector('.searchBar').value);
    }
};

document.querySelector('.searchbutton').addEventListener('click', function () {
    weather.search();
});
document.querySelector('.searchbutton').addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        weather.search();
    }
});
