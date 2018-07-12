class AddHabitToGoals < ActiveRecord::Migration[5.1]
  def change
    add_reference :goals, :habit, foreign_key: true
  end
end
