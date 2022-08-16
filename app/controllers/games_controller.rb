class GamesController < ApplicationController

    before_action :set_game, only: :show

    def index 
        render json: Game.all, status: :ok
    end

    def show 
        render json: @game, status: :ok
    end

    def create 
        Game.create!(game_params)
    end

    private 

    def set_game
        @game = Game.find(params[:id])
    end

    def game_params
        params.permit(:outcomes_id)
    end
end
