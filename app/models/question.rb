class Question < ActiveRecord::Base
  belongs_to :exam
  has_one :topic
  has_many :choices
end
