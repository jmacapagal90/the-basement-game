class Player < ApplicationRecord
    require 'obscenity/active_model'
    has_many :scores, dependent: :destroy
    has_many :games, through: :scores

    has_secure_password

    validates :username,:password,:email, presence: true
    validates :username,:email, uniqueness: true
    validates :username, :password, :email, format: { without: /\s/}
    validates :username, :email, obscenity: {message: "... Naughty, naughty ..."}
end
