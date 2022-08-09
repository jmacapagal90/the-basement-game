class CreateDecisions < ActiveRecord::Migration[6.1]
  def change
    create_table :decisions do |t|
      t.string :prompt
      t.references :prev_decision, foreign_key: { to_table: :decisions }
      t.boolean :answer
      t.timestamps
    end
  end
end
