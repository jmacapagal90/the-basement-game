# config/routes.rb
Rails.application.routes.draw do
  resources :outcomes
  resources :decisions
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

