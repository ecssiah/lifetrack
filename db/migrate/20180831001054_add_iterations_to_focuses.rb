class AddIterationsToFocuses < ActiveRecord::Migration[5.2]
  def change
    add_column :focuses, :iterations, :integer
  end
end
