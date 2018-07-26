Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  mount_devise_token_auth_for 'User', at: '/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :categories, except: [:destroy]
  end
end
