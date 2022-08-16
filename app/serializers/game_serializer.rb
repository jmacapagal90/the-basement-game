class GameSerializer < ActiveModel::Serializer
  attributes :id,:game_w_outcome, :updated_at, :created_at
  def game_w_outcome
    outcome = Outcome.find(object.outcomes_id)
    outcome.summary
  end

  def updated_at
    object.updated_at.strftime("%m/%d/%Y @ %I:%M%p")
  end

  def created_at
    object.created_at.strftime("%m/%d/%Y @ %I:%M%p")
  end
end
