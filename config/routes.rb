# config/routes.rb
Rails.application.routes.draw do
  resources :outcomes, only: [:index,:show]
  resources :decisions, only: [:index,:show]

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

