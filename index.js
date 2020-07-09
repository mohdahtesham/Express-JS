
const http = new XMLHttpRequest()

http.open("GET", "http://localhost:8888/about")
http.send()

http.onload = () => console.log(http.responseText)