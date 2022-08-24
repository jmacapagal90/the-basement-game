class ScoresController < ApplicationController

    before_action :set_score, only: [:show,:update]

    def index 
        render json: Score.all.order(updated_at: :desc), status: :ok
    end

    def create 
        new_score = Score.create!(score_create_params)
        new_score.create_game!(id: new_score.id, outcomes_id: 1)
        new_score.update!(game_id: new_score.id)
        render json: new_score, status: :created 
    end

    def show
        render json: @score, status: :ok 
    end

    def update 
        @score.update!(score_update_params)
        render json: @score, status: :accepted 
    end

    private 

    def set_score
        @score = Score.find(params[:id])
    end

    def score_create_params
        params.permit(:id,:player_id,:points)
    end

    def score_update_params
        params.permit(:id,:points)
    end

end
