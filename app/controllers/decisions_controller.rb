class DecisionsController < ApplicationController

    def index 
        render json: Decision.all, status: :ok
    end
end
