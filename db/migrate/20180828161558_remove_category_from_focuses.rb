class RemoveCategoryFromFocuses < ActiveRecord::Migration[5.2]
  def change
    remove_column :focuses, :category, :string
  end
end
