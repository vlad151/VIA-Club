var document, DOMParser, XMLHttpRequest;

function readXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      showData(this);
    }
  };
  xhttp.open("GET", "xml/match 3-6-2021.xml", true);
  xhttp.send();
}

function showData(xml) {
  var i;
  var j;
  var xmlDoc = xml.responseXML;
  var table =
    "<tr><th>Opponent</th><th>Date</th><th>Match Type</th><th>Line Up</th><th>Bench</th></tr>";
  var x = xmlDoc.getElementsByTagName("Match");
if(x[0].getElementsByTagName("matchType")[0].childNodes[0].nodeValue=="League")
{
    var n = 16
}
if(x[0].getElementsByTagName("matchType")[0].childNodes[0].nodeValue=="Cup")
{
    var n = 17
}
if(x[0].getElementsByTagName("matchType")[0].childNodes[0].nodeValue=="Friendly")
{
    var n = 40
}
  
    table +=
      "<tr><td>" +
      x[0].getElementsByTagName("opponent")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[0].getElementsByTagName("day")[0].childNodes[0].nodeValue + "/"+x[0].getElementsByTagName("month")[0].childNodes[0].nodeValue +"/"+x[0].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[0].getElementsByTagName("matchType")[0].childNodes[0].nodeValue +
      "</td>" + "<td>";
    for (j = 0; j < 11; j++) {
      table +=
        x[0].getElementsByTagName("players")[j].getElementsByTagName("name")[0].childNodes[0].nodeValue + 
        "<br>";
    }
     table += "</td>" + "<td>";
    for (k = 11; k < n; k++) {
      table +=
        x[0].getElementsByTagName("players")[k].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "<br>";
    }
    table += "</td></tr>";
  
  document.getElementById("matchTable").innerHTML = table;
}

readXML();