class PlayerMailer < ApplicationMailer
    def welcome_email(player)
        @player = player
        mail(to: @player.email, subject: 'Welcome to the Basement...')
      end
end
