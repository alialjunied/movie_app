class User < ActiveRecord::Base
	#attr_accessible :username
	validates_uniqueness_of :username
	has_many :movies
end
