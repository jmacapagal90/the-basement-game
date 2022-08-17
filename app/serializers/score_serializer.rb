class ScoreSerializer < ActiveModel::Serializer
  attributes :id,:player_id, :username,:game_id,:points, :created_at,:updated_at do
    object.order(:updated_at)
  end
  has_many :game
  

  def username
    Player.find(object.player_id).username
  end

  def updated_at
    object.updated_at.strftime("%m/%d/%Y @ %I:%M:%S%p")
  end

  def created_at
    object.created_at.strftime("%m/%d/%Y @ %I:%M:%S%p")
  end

end
