class Score < ApplicationRecord
    belongs_to :player
    belongs_to :game, optional: true

    default_scope { order(updated_at: :desc) }
end
