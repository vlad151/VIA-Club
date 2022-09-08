var document, DOMParser, XMLHttpRequest;

function readXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      showData(this);
    }
  };
  xhttp.open("GET", "xml/playerList.xml", true);
  xhttp.send();
}

function showData(xml) {
  var i;
  var j;
  var xmlDoc = xml.responseXML;
  var table =
    "<tr><th>Name</th><th>Number</th><th>Positions</th></tr>";
  var x = xmlDoc.getElementsByTagName("players");

  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("number")[0].childNodes[0].nodeValue +
      "</td>" +
      "<td>";
    for (j = 0; j < x[i].getElementsByTagName("positions").length; j++) {
      table +=
        x[i].getElementsByTagName("positions")[j].childNodes[0].nodeValue +
        "."+"<br>";
    }
    table += "</td></tr>";
  }
  document.getElementById("playersTable").innerHTML = table;
}

readXML();
