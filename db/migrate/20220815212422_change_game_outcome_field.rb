class ChangeGameOutcomeField < ActiveRecord::Migration[6.1]
  def change
    remove_column :games, :outcome
    add_belongs_to :games, :decision
  end
end
