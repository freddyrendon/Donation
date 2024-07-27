Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :donations
  end

  get '*path', to: "static_pages#frontend_index"

end
