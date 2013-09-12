class User < ActiveRecord::Base
	validates_uniqueness_of :username
	belongs_to :movie
end
