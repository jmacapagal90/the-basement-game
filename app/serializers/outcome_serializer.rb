class OutcomeSerializer < ActiveModel::Serializer
  attributes :id, :result, :summary,:decision_id
end
