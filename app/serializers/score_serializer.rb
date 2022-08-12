class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :player_id,:game_id,:points
  has_many :game
end
