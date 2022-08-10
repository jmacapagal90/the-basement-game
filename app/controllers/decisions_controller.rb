class DecisionsController < ApplicationController

    def index 
        render json: Decision.all, status: :ok
    end
    
    # def show 
    #     render json: @decision, status: :ok
    # end

    private

    # def set_decision
    #     @decision = Decision.find(1)
    # end
end
