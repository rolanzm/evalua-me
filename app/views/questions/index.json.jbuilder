json.array!(@questions) do |question|
  json.extract! question, :id, :exam_id, :topic_id, :difficulty, :statement
  json.url question_url(question, format: :json)
end
