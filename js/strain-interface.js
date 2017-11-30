import { Lookup } from "./../js/strain.js";
import { strainApiKey } from "./../.env";


$(document).ready(function() {
  $("#strain-form").submit(function(event){
    event.preventDefault();
    $("#result").append("<p>One Second DUDE!....Groovy</p>");
    let strain = $("#strain-type").val();
    $.get(`http://strainapi.evanbusse.com/${strainApiKey}/strains/search/name/${strain}`)
    .then(function(response){
      $("#result").empty();
      for (var i = 0; i < response.length; i++) {
        $("#result").append(`<div class="list-item"><a href="http://strainapi.evanbusse.com/${strainApiKey}/strains/data/desc/${response[i].id}">${response[i].name}</a><div class="desc">${response[i].desc}</div>`);
      }
    }).fail(function(error) {
      $("#result").empty();
      $("#result").append("<h3>No results found, man</h3>");
    });
  });

// "race" form

  $("#race-form").submit(function(event){
    event.preventDefault();
    $("#result").append("<p>Don't forget to breath....</p>");
    let type = $(".race:checked").val();
    $.get(`http://strainapi.evanbusse.com/${strainApiKey}/strains/search/race/${type}`)
    .then(function(response){
      $("#result").empty();
      for (var i = 0; i < response.length; i++) {
        let id = response[i].id;
        $("#result").append(`<div class="list-item"><a href="http://strainapi.evanbusse.com/${strainApiKey}/strains/data/desc/${id}">${response[i].name}</a></div>`);
      }
    }).fail(function(error){
      $("#result").empty();
      $("#result").append("<h3>No results found, man</h3>");
    });
  });

// effects form

  $("#effects-form").submit(function(event){
    event.preventDefault();
    $("#result").append("<p>Don't forget to breath....</p>");
    let type = $(".effects:checked").val();
    let link = `http://strainapi.evanbusse.com/${strainApiKey}/strains/search/effect/${type}`;
    $.get(`http://strainapi.evanbusse.com/${strainApiKey}/strains/search/effect/${type}`)
    .then(function(response){
      $("#result").empty();
      for (var i = 0; i < response.length; i++) {
        let id = response[i].id;
        $("#result").append(`<div class="list-item"><a href="http://strainapi.evanbusse.com/${strainApiKey}/strains/data/desc/${id}">${response[i].name}</a></div>`);
      }
    }).fail(function(error){
      $("#result").empty();
      $("#result").append("<h3>No results found, man</h3>");
    });
  });

// 155884215
// 2508340784287317695
// 76561198116149943 *


});
