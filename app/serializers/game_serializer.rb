class GameSerializer < ActiveModel::Serializer
  attributes :id,:game_w_outcome, :updated_at, :created_at, :outcomes_id
  def game_w_outcome
    outcome = Outcome.find(object.outcomes_id)
    outcome.summary
  end

end
