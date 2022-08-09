class Decision < ApplicationRecord
    has_one :sub_decision, foreign_key: :prev_devision_id, class_name: 'Decision'
    has_one :outcomes

end
