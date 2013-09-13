$(document).ready(function( ){

	//backbone to model client-side
	//MODEL
	Movie = Backbone.Model.extend({ 
		url : function(){
			return "http://cs3213.herokuapp.com/movies/" + this.get('id') + ".json"
		}
	});

	var movie = new Movie();
	movie.url = "http://cs3213.herokuapp.com/movies/4.json"

	movie.fetch({
		success : function( ){
			console.log(movie.get("title"));
		}
	});

	//---------
	//COLLECTION
	var Movies = Backbone.Collection.extend({
		model : Movie //the collection is a collection of the model Movie
	});
	var movies = new Movies( );

	//specify location to get data to populate collection
	movies.url = "http://cs3213.herokuapp.com/movies.json"

	//pull (fetch) the data
	movies.fetch({

		//upon success, run anoymous function
		success : function( ){
			movies_view = new MoviesView({ }) //create collection view
			_.each(movies.models, function(model){ //for each movie model in the collection, pass in that model
				movies_view.addOne(model); //execute addOne method
			});
		}
	});

	var MoviesView = Backbone.View.extend({
		el : ".movies", //the DOM Element class 'movies'
		addOne : function(model){ //function called addOne takes in a model
			
			view = new MovieView({ model : model }); //create a MovieView object specifying the model

			var img = $('<img/>').attr({ 'src' : model.get('img_url') })
			$(view.el).append(img);

			$('ul.movies').append(view.render());
		}
	});
	//----------
	//VIEW

	var MovieView = Backbone.View.extend({
		tagName: "li", //insert into <ul> tag
		events : {
			"click" : "showMovie"
		},
		showMovie : function(){
			//TODO: show movie detials
		},
		render: function( ){ //how to insert into <ul> tag
			return $(this.el).text( this.model.get('title') ); //pass in model in new MovieView({ model : model}), we have access to this.model
		}
	});
});