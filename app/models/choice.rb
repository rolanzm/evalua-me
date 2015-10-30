class Choice < ActiveRecord::Base
  belongs_to :question
  has_one :exam, through: :question
end
