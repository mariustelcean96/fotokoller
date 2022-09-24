$(function(){
    var item_template = 
     '<div class="item">' +
       '<a href="<%= obj.imageURL %>"><img alt="<%= obj.altText %>" src="<%= obj.imageURL %>"></a>' +
       '<h4><%= obj.lastname %>, <%= obj.firstname %></h4>' + 
       '<p class="tags">' + 
       '<% if (obj.category) {  %><%= obj.category %><% } %>' +
       '<% if (obj.company) {  %>, <%= obj.company %><% } %>' +
       '<% if (obj.year) {  %>, <%= obj.year %><% } %>' +
       ', <i><%= obj.ID %></i>' +
       '</p>' +
       '<p class="desc"><%= obj.description %></p>' +
     '</div>';
  settings = { 
    items            : example_items,
    facets           : { 
                        'category'     : 'Categorie',
                        'company'    : 'Companie',
                        'year'     : 'An concepere',
                        'backgroundColor' : 'Culoare fundal',
                        'foregroundColor' : 'Culoare prim-plan'
  
    },  
    resultSelector   : '#results',
    facetSelector    : '#facets',
    resultTemplate   : item_template,
    paginationCount  : 80,
    orderByOptions   : {'firstname': 'Prenume', 'lastname': 'Nume', 'category': 'Categorie', 'RANDOM': 'Aleator'},
    facetSortOption  : {'company': ["Foto Koller"]}
  }   

  // use them!
  $.facetelize(settings);

});


