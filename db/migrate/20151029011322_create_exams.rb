class CreateExams < ActiveRecord::Migration
  def change
    create_table :exams do |t|
      t.string :name
      t.references :course, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
