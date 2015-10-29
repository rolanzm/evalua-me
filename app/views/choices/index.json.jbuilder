json.array!(@choices) do |choice|
  json.extract! choice, :id, :question_id, :statement, :selected
  json.url choice_url(choice, format: :json)
end
