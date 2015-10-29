# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151029011324) do

  create_table "choices", force: :cascade do |t|
    t.integer  "question_id", limit: 4
    t.string   "statement",   limit: 255
    t.boolean  "selected",    limit: 1
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "choices", ["question_id"], name: "index_choices_on_question_id", using: :btree

  create_table "courses", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "exams", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.integer  "course_id",  limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "exams", ["course_id"], name: "index_exams_on_course_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.integer  "exam_id",    limit: 4
    t.integer  "topic_id",   limit: 4
    t.integer  "difficulty", limit: 4
    t.string   "statement",  limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "questions", ["exam_id"], name: "index_questions_on_exam_id", using: :btree
  add_index "questions", ["topic_id"], name: "index_questions_on_topic_id", using: :btree

  create_table "topics", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.integer  "course_id",  limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "topics", ["course_id"], name: "index_topics_on_course_id", using: :btree

  add_foreign_key "choices", "questions"
  add_foreign_key "exams", "courses"
  add_foreign_key "questions", "exams"
  add_foreign_key "questions", "topics"
  add_foreign_key "topics", "courses"
end
