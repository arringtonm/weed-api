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
    });
  });

// "race" form

  $("#race-form").submit(function(event){
    event.preventDefault();
    $("#race-result").append("<p>Don't forget to breath....</p>");
    let type = $("input:checked").val();
    // console.log("test");
    // console.log(type);
    $.get(`http://strainapi.evanbusse.com/${strainApiKey}/strains/search/race/${type}`)
    .then(function(response){
      $("#race-result").empty();
      for (var i = 0; i < response.length; i++) {
        // let output = response[i].name;
        let id = response[i].id;
        $("#race-result").append(`<p><a href="http://strainapi.evanbusse.com/${strainApiKey}/strains/data/desc/${id}">${response[i].name}</a></p>`);
      }
    }).fail(function(error){
      $("#race-result").empty();
      $("#race-result").append("<h3>No results found, man</h3>");
    });
  });

// effects form

  $("#effects-form").submit(function(event){
    event.preventDefault();
    $("#effects-result").append("<p>Don't forget to breath....</p>");
    let type = $("input:checked").val();
    // console.log("test");
    console.log(type);
    let link = `http://strainapi.evanbusse.com/${strainApiKey}/strains/search/effect/${type}`;
    console.log(link);
    $.get(`http://strainapi.evanbusse.com/${strainApiKey}/strains/search/effect/${type}`)
    .then(function(response){
      $("#effects-result").empty();
      for (var i = 0; i < response.length; i++) {
        // let output = response[i].name;
        let id = response[i].id;
        $("#effects-result").append(`<p><a href="http://strainapi.evanbusse.com/${strainApiKey}/strains/data/desc/${id}">${response[i].name}</a></p>`);
      }
    }).fail(function(error){
      $("#effects-result").empty();
      $("#effects-result").append("<h3>No results found, man</h3>");
    });
  });


});
