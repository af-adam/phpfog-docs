require 'sinatra'

get '/' do
  redirect '_site/index.html'
end
