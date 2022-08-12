class PlayersController < ApplicationController
    before_action :authorize, only: [:show]
    wrap_parameters format: []
    def create 
        player = Player.create!(player_params)
        if player.valid?
            session[:user_id] = player.id
            render json: player, status: :created
        else
            render json: {error: player.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index 
        render json: Player.all, status: :ok
    end

    def show 
        player = Player.find_by(id: session[:user_id])
        render json: player, status: :ok
    end
    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end

    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end

end
