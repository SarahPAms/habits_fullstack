class AddGoalToCategories < ActiveRecord::Migration[5.1]
  def change
    add_reference :categories, :goal, foreign_key: true
  end
end
