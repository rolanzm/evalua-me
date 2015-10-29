json.array!(@topics) do |topic|
  json.extract! topic, :id, :name, :course_id
  json.url course_topic_url(topic.course_id, topic, format: :json)
end
