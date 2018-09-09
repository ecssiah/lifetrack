class ChangeIterationsToPeriods < ActiveRecord::Migration[5.2]
  def change
    rename_column :focuses, :iterations, :periods
  end
end
