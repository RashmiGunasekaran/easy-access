Rails.application.routes.draw do
  resources :animals
  root  'animals#lander'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
