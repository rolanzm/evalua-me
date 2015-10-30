json.array!(@questions) do |question|
  json.extract! question, :id, :exam_id, :topic_id, :difficulty, :statement
  json.url exam_question_url(question.exam_id, question, format: :json)
end
