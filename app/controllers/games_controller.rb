class GamesController < ApplicationController

    before_action :set_game, only: [:show,:update]

    def index 
        render json: Game.all, status: :ok
    end

    def show 
        render json: @game, status: :ok
    end

    def update
        @game.update!(game_params)
        render json: @game,status: :accepted
    end

    private 

    def set_game
        @game = Game.find(params[:id])
    end

    def game_params
        params.permit(:id,:outcomes_id)
    end

    def score_params
        params.permit(:player_id,:points)
    end
end
