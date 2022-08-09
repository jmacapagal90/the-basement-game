class CreateOutcomes < ActiveRecord::Migration[6.1]
  def change
    create_table :outcomes do |t|
      t.string :result
      t.belongs_to :decision
      t.timestamps
    end
  end
end
