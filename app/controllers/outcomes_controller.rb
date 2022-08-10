class OutcomesController < ApplicationController
    def index 
        render json: Outcome.all, status: :ok
    end
end
