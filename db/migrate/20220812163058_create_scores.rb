class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.belongs_to :player 
      t.belongs_to :game
      t.integer :points
      t.timestamps
    end
  end
end
