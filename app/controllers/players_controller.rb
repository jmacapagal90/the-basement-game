class PlayersController < ApplicationController
    before_action :authorize, only: [:show]
    before_action :set_player, only: [:show,:destroy]
    wrap_parameters format: []
    def create 
        player = Player.create!(player_params)
        if player.valid?
            session[:user_id] = player.id
            render json: player, status: :created
            PlayerMailer.welcome_email(player).deliver_now
        else
            render json: {error: player.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index 
        render json: Player.all, status: :ok
    end

    def show 
        render json: @player, status: :ok
    end

    def destroy
        @player.destroy
        head :no_content
    end

    private

    def set_player
        @player = Player.find_by(id: session[:user_id])
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end

    def player_params
        params.permit(:username, :password, :password_confirmation, :email)
    end

end
