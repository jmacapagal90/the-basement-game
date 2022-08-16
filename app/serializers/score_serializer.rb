class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :username,:game_id,:points
  has_many :game

  def username
    Player.find(object.player_id).username
  end

end
