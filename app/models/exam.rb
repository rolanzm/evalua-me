class Exam < ActiveRecord::Base
  has_one :course #belongs_to
  has_many :questions
  has_many :choices, through: :questions
end
