class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.references :exam, index: true, foreign_key: true
      t.references :topic, index: true, foreign_key: true
      t.integer :difficulty
      t.string :statement

      t.timestamps null: false
    end
  end
end
