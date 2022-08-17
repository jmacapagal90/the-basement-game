class PlayerSerializer < ActiveModel::Serializer
  attributes :id,:username, :created_at,:updated_at,:scores_w_summary, 

  def scores_w_summary
    self.object.scores.map do |score|
      {
        player_id: score.player_id,
        game_id: score.game_id,
        points: score.points,
        summary: Outcome.find(Game.find(score.game_id).outcomes_id).summary,
        created_at: score.created_at.strftime("%m/%d/%Y @ %I:%M%p"),
        updated_at: score.updated_at.strftime("%m/%d/%Y @ %I:%M%p")
      }
    end
  end

  def updated_at
    object.updated_at.strftime("%m/%d/%Y @ %I:%M:%S%p")
  end

  def created_at
    object.created_at.strftime("%m/%d/%Y @ %I:%M:%S%p")
  end
end
