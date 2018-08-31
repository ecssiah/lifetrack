class AddGoalToFocuses < ActiveRecord::Migration[5.2]
  def change
    add_column :focuses, :goal, :integer
  end
end
