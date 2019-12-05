class ApplicationController < ActionController::Base
	http_basic_authenticate_with name: 'rashmi', password: 'zoovisit1', except: [:index, :show]
end
