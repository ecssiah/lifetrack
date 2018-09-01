Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :focuses, :settings
    end
  end
end
