
// $.getJSON('http://miroshkin.netlify.com/json/life-expectancy.json', function(data) {
//     //data is the JSON string
//     console.log(data);
// });
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
    var list = JSON.parse(xhr.responseText);
    var listHTML = "<ul>";
    alert(list.length);
    for(var i=0; i<list.length; i += 1){
      alert("start loop");
      listHTML += "<li>";
      listHTML += list[i].Country + " " + list[i].BothSexesLifeExpectancy;
      listHTML += "</li>";
    }
    listHTML += "</ul>";
    document.getElementById("content").innerHTML = listHTML;
  }
}
xhr.open("GET", "https://miroshkin.netlify.com/json/life-expectancy.json");
xhr.send();
