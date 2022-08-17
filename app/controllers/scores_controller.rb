class ScoresController < ApplicationController

    before_action :set_score, only: [:show,:update]
    def index 
        render json: Score.all, status: :ok
    end

    def update 
        @score = Score.update!(score_params)
        render json: @score, status: :created 
    end

    def create 
        new_score = Score.create(score_params)
        byebug
        new_score.create_game!(id: new_score.game_id,outcomes_id: 1)
        render json: new_score, status: :created 
    end

    def show
        render json: @score, status: :ok 
    end

    private 

    def set_score
        @score = Score.find(params[:id])
    end

    def score_params
        params.permit(:id,:player_id,:game_id,:points)
    end

end
