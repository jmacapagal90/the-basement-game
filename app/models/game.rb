class Game < ApplicationRecord
    has_many :scores, dependent: :destroy
    has_many :players, through: :scores
    has_many :decisions
    has_one :outcome
end
