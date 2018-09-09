class AddTimeToFocuses < ActiveRecord::Migration[5.2]
  def change
    add_column :focuses, :time, :float
  end
end
