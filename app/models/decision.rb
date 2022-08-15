class Decision < ApplicationRecord
    has_one :sub_decision, foreign_key: :prev_devision_id, class_name: 'Decision'
    belongs_to :prev_decision, class_name: "Decision", optional: true

    has_one :outcome

    belongs_to :game, optional: true
end
