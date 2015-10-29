class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.references :question, index: true, foreign_key: true
      t.string :statement
      t.boolean :selected

      t.timestamps null: false
    end
  end
end
