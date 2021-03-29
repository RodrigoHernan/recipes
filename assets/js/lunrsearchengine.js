
var documents = [{
    "id": 0,
    "url": "/recipes/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/recipes/about",
    "title": "klj",
    "body": "asdafs "
    }, {
    "id": 2,
    "url": "/recipes/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/recipes/contact",
    "title": "Contact",
    "body": "Envianos un email a {{site. name}}. Responderemos lo mas pronto posible! "
    }, {
    "id": 4,
    "url": "/recipes/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 5,
    "url": "/recipes/recipes",
    "title": "Recetas",
    "body": ""
    }, {
    "id": 6,
    "url": "/recipes/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "/recipes/salsa-lo-gladys/",
    "title": "Salsa a lo Gladys",
    "body": "2021/02/21 - Ingredientes:    2 cuartos de pollo.   1 cebolla.   1/2 morrón.   500 cm3 salsa de tomate, en cubos mejor.   1 Hojita de laurel   Pasos:    Picar la cebolla en cuadraditos junto con el morrón.     Calentar el aceite y luego echar el cemorron.     Sofreir hasta que este doradira la cebolla. importante: sin tapa!     Le mandas el pollo, Bien limpito no seas cochino…     Tapa y lo dejas un rato hasta que el pollo tome color blanco y largue un poco de liquido. 5 min aprox.     Tirale el tomate, y la hoja de laurel     5 min. antes de que termine la coccion condimentos     Enjoy! ;)  "
    }, {
    "id": 8,
    "url": "/recipes/calzone-spinaca/",
    "title": "Calzones de spinaca",
    "body": "2020/02/22 - Muy buena receta link"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});