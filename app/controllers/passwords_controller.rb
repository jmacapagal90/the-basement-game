class PasswordsController < ApplicationController
    def forgot
        if params[:email].blank? # check if email is present
          return render json: {errors: 'Email not present'}
        end
    
        player = Player.find_by(email: params[:email]) # if present find user by email
    
        if player.present?
            player.generate_password_token! #generate pass token
            PlayerMailer.reset_password_email(player).deliver_now
          render json: {status: 'ok'}, status: :ok
        else
          render json: {errors: ['Email address not found. Please check and try again.']}, status: :not_found
        end
    end
    
    def reset
        
        token = params[:token].to_s

        if params[:email].blank?
            return render json: {error: 'Token not present'}
        end

        player = Player.find_by(reset_password_token: token)

        if player.present? && player.password_token_valid?
            if player.reset_password!(params[:password])
                render json: {status: 'ok'}, status: :ok
            else
                render json: {errors: player.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {errors:  ['Link not valid or expired. Try generating a new link.']}, status: :not_found
        end

    end


end
