function getCountryLanguage() {
    var countryName = document.getElementById("country-name").value;

	var query = "https://restcountries.eu/rest/v2/name/"+countryName;
	query = query.replace(/ /g, "%20");
	var countryRequest = new XMLHttpRequest();
	countryRequest.open('GET', query, false);
	countryRequest.send();
	var countryInformation = JSON.parse(countryRequest.responseText);

	alert("The official language is " + countryInformation[0].languages[0].name);

}

function getCountrySunrise() {
	var countryName = document.getElementById("country-name").value;

	var query = "https://restcountries.eu/rest/v2/name/"+countryName;
	query = query.replace(/ /g, "%20");
	var countryRequest = new XMLHttpRequest();
	countryRequest.open('GET', query, false);
	countryRequest.send();
	var countryInformation = JSON.parse(countryRequest.responseText);
	var lat = countryInformation[0].latlng[0];
	var lng = countryInformation[0].latlng[1];
	var query = "https://api.sunrise-sunset.org/json?lat=" +lat+ "&lng=" + lng;
	var request = new XMLHttpRequest();
	request.open('GET', query, false);
	request.send();
	var requestInformation = JSON.parse(request.responseText);
	alert("The sunrise time is " + requestInformation.results.sunrise);
}

window.onload = init;
