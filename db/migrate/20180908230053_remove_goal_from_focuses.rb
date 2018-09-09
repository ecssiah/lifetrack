class RemoveGoalFromFocuses < ActiveRecord::Migration[5.2]
  def change
    remove_column :focuses, :goal, :integer
  end
end
