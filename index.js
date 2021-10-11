const ipEl = document.getElementById("ip-el")

let request = new XMLHttpRequest()
request.open('GET', "https://api.ipify.org?format=json", true)
request.onload = function () {
    ipEl.innerHTML = "Current IP: " + JSON.parse( request.response )["ip"]
}
request.send()
