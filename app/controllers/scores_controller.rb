class ScoresController < ApplicationController
    def index 
        render json: Score.all, status: :ok
    end
end
