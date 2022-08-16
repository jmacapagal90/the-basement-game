class RemoveDecisionAddOutcomeRef < ActiveRecord::Migration[6.1]
  def change
    remove_reference :games, :decision
    add_reference :games, :outcomes
  end
end
