class CreateFocuses < ActiveRecord::Migration[5.2]
  def change
    create_table :focuses do |t|
      t.string :name
      t.string :category
      t.integer :level
      t.float :experience

      t.timestamps
    end
  end
end
