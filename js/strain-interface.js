import { Lookup } from "./../js/strain.js";
import { strainApiKey } from "./../.env";


$(document).ready(function() {
  $("#strain-form").submit(function(event){
    event.preventDefault();
    $("#strain-result").append("<p>One Second DUDE!....Groovy</p>");
    let strain = $("#strain-type").val();
    $.get(`http://strainapi.evanbusse.com/${strainApiKey}/strains/search/name/${strain}`)
    .then(function(response){
      $("#strain-result").empty();
      // console.log("length: " + response.length);
      for (var i = 0; i < response.length; i++) {
        let output = response[i].name;
        // console.log(output);
        $("#strain-result").append("<p>" + output + "</p>");
      }
    }).fail(function(error) {
      $("#strain-result").empty();
      $("#strain-result").append("<h3>No results found, man</h3>");
      alert("bummer")
    });
  });
});
