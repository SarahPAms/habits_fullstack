class CreateFrequencies < ActiveRecord::Migration[5.1]
  def change
    create_table :frequencies do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.boolean :completed
      t.integer :times_completed

      t.timestamps
    end
  end
end
