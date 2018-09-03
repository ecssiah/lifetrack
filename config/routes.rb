Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :focuses, only: [:index, :create, :update, :destroy]
      resources :settings, only: [:index, :update]  
    end
  end
end
