class PlayerSerializer < ActiveModel::Serializer
  attributes :id,:username, :scores_w_game
  
  def scores_w_game
    self.object.scores.map do |score|
      {
        player_id: score.player_id,
        game_id: score.game_id,
        points: score.points,
        last_decision: score.game.decision_id
      }
    end
  end

end
