class Movie < ActiveRecord::Base
	validates_uniqueness_of :title
	#attr_accessible :title, :summary, :img_url
 	validates_presence_of :title, :summary
 	has_many :reviews
end
