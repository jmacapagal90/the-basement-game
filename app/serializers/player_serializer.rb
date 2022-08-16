class PlayerSerializer < ActiveModel::Serializer
  attributes :id,:username, :scores_w_game

  def scores_w_game
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

end
