class CreateHabits < ActiveRecord::Migration[5.1]
  def change
    create_table :habits do |t|
      t.string :habit_name
      t.text :habit_description
      t.integer :proposed_iterations
      t.datetime :proposed_duration

      t.timestamps
    end
  end
end
