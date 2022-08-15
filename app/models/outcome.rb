class Outcome < ApplicationRecord
    belongs_to :decision 
    belongs_to :game, optional: true
end
