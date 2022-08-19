# config/routes.rb
Rails.application.routes.draw do
  resources :games, only: [:index, :create, :update,:show]
  resources :scores
  resources :players, only: [:index, :show,:destroy]
  resources :outcomes, only: [:index,:show]
  resources :decisions, only: [:index,:show]

  # create user signup
  post "/signup", to: "players#create"

  # show authenticated user
  get '/myaccount', to: "players#show"

  # create new session
  post "/login", to: "session#create"

  # destroys session
  delete "/logout", to: "session#destroy"

  # default path
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  
end

