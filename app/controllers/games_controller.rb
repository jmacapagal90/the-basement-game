class GamesController < ApplicationController

    before_action :set_game, only: [:show,:update]

    def index 
        render json: Game.all, status: :ok
    end

    def show 
        render json: @game, status: :ok
    end

    def create 
        @new_game = Game.create!(game_params)
        render json: @new_game, status: :created
    end

    def update
        @game.update!(game_update_params_outcome)
        render json: @game,status: :accepted
    end

    private 

    def set_game
        @game = Game.find(params[:id])
    end

    def game_params
        params.permit(:outcomes_id)
    end

    def game_update_params_outcome
        params.permit(:id,:outcomes_id)
    end
end
