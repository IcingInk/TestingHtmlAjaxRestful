$(document).ready(function() {
       var token='542399c30d1e55fcaa853a0fa7e56ec5231e7404a7181ce59177f25467a8726e'; 
    $.ajax({
       type: 'GET',
       contentType: 'application/json; charset=utf-8',
       dataType: 'json', // data type of response
       url: "http://apiv3.iucnredlist.org/api/v3/species/vulpes%20vulpes?token="+token,
//       url: "http://apiv3.iucnredlist.org/api/v3/species/ursus%20arctos?token="+token,
       //url: "http://apiv3.iucnredlist.org/api/v3/species/ursus%20arctos?token=542399c30d1e55fcaa853a0fa7e56ec5231e7404a7181ce59177f25467a8726e"
    }).then(function(data) {
       $('.iucn-name').append(data.name);
       $('.iucn-category').append(data.result[0].category);
       $('.iucn-main_common_name').append(data.result[0].main_common_name);
    });
});