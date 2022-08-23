class Player < ApplicationRecord
    require 'obscenity/active_model'
    has_many :scores, dependent: :destroy
    has_many :games, through: :scores

    has_secure_password

    validates :username,:password,:email, presence: true
    validates :username,:email, uniqueness: true
    validates :username, :password, :email, format: { without: /\s/}
    validates :username, :email, obscenity: {message: "... Naughty, naughty ..."}

    def generate_password_token!
        self.reset_password_token = generate_token
        self.reset_password_sent_at = Time.now.utc
        save!
       end
       
    def password_token_valid?
        (self.reset_password_sent_at + 4.hours) > Time.now.utc
    end
    
    def reset_password!(password)
        self.reset_password_token = nil
        self.password = password
        save!
    end
       
    private
    
    def generate_token
    SecureRandom.hex(10)
    end    
end
