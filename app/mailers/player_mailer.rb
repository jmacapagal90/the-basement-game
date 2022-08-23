class PlayerMailer < ApplicationMailer
    def welcome_email(player)
        @player = player
        mail(to: @player.email, subject: 'Welcome to The Basement...')
    end

    def reset_password_email(player)
        @player = player
        mail(to: @player.email, subject: 'The Basement: Reset Password')
    end
end
