Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # post "/appointment" => "appointments#create" #this is another way to create a route it's more specifc and will only give me the create method

  resources :appointments

  root to: "root#index"
end
