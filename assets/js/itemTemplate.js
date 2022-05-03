$(function(){
    var item_template = 
     '<div class="item">' +
       '<img src="<%= obj.imageURL %>">' +
       '<h4><%= obj.lastname %>, <%= obj.firstname %></h4>' + 
       '<p class="tags">' + 
       '<% if (obj.category) {  %><%= obj.category %><% } %>' +
       '<% if (obj.company) {  %>, <%= obj.company %><% } %>' +
       '<% if (obj.an) {  %>, <%= obj.an %><% } %>' +
       '</p>' +
       '<p class="desc"><%= obj.description %></p>' +
     '</div>';
  settings = { 
    items            : example_items,
    facets           : { 
                        'category'     : 'Categorie',
                        'company'    : 'Companie',
                        'an'     : 'An concepere'
  
    },  
    resultSelector   : '#results',
    facetSelector    : '#facets',
    resultTemplate   : item_template,
    paginationCount  : 50,
    orderByOptions   : {'firstname': 'First name', 'lastname': 'Last name', 'category': 'Category', 'RANDOM': 'Random'},
    facetSortOption  : {'company': ["Foto Koller", "Limart 2000"]}
  }   

  // use them!
  $.facetelize(settings);

});