class ScoreSerializer < ActiveModel::Serializer
  attributes :id,:player_id, :username,:game_id,:points, :created_at,:updated_at
  has_many :game
  

  def username
    Player.find(object.player_id).username
  end


end
