Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :focuses, only: [:index, :create, :update, :destroy]
      resource :settings, only: [:index, :update]  
    end
  end
end
