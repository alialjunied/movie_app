class User < ActiveRecord::Base
	attr_accessible :username
	validates_uniqueness_of :username
end
