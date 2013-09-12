class VideosController < ApplicationController
	respond_to :json

	#action to get all the videos
	def index
		@movies = Movie.all
		respond_with @movies
	end

	#to show just one record
	def show
		@movie = Movie.find params[:id]
		respond_with @movie
	end

	#def update
	#	@movie = Movie.find params[:id]
		#TODO: validation of params
		#@movie.update_attributes(title: => params[:title], :summary => params[:summary])
	#end

end