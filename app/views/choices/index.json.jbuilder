json.array!(@choices) do |choice|
  json.extract! choice, :id, :question_id, :statement, :selected
  json.url exam_question_choice_url(@exam_id, choice.question_id, choice, format: :json)
end
