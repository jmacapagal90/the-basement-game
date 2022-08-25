class Player < ApplicationRecord
    require 'obscenity/active_model'
    has_many :scores, dependent: :destroy
    has_many :games, through: :scores

    has_secure_password

    
    validates :username,:email, presence: true
    validates :username,:email, uniqueness: true
    validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
    validates :username, :password, :email, format: { without: /\s/}
    validates :username, :email, obscenity: {message: "... Naughty, naughty ..."}
    validate :profanity_username

    def profanity_username
        if username.start_with?("shit","piss","fuck","cunt","cocksucker","cock","motherfucker","tits","fart","turd","twat","nig","spic","wetback","chink","gook","nazi","heil","letsgobrandon","fag","kike","dike") 
            errors.add(:username,'...You kiss your mother with that mouth?')
        end
    end


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
