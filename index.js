$(document).ready(function () {

    $("#search").on('click', function() {
      searchPlaces();
    });
});

function searchPlaces(element) {
    let searched = element.val();
    console.log(process.env);
    let url = "https://maps.googleapis.com/maps/api/place/textsearch/xml?query="+searched+"&key="
    $.ajax('/url', {
      type: 'GET',
      dataType: 'json',
      data: {term: selected},
      success: function(result) {
        console.log(result);
        },
      error: function() {
        console.log('Error');
      }
    });
  }
  