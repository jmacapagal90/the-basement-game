class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :username,:game_id,:points, :updated_at do
    object.order(:updated_at)
  end
  has_many :game
  

  def username
    Player.find(object.player_id).username
  end

  def updated_at
    object.updated_at.strftime("%m/%d/%Y @ %I:%M%p")
  end

end
