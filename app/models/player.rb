class Player < ApplicationRecord
    has_many :scores, dependent: :destroy
    has_many :games, through: :scores

    has_secure_password

    validates :username,:password,:email, presence: true
    validates :username, :password, :email, format: { without: /\s/}
end
