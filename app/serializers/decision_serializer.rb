class DecisionSerializer < ActiveModel::Serializer
  attributes :id, :prompt,:prev_decision_id, :answer
  has_one :outcome
end
