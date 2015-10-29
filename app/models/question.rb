class Question < ActiveRecord::Base
  belongs_to :exam
  belongs_to :topic
  has_many :choices
end
