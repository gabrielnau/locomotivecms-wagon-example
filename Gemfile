source 'https://rubygems.org'

# ruby '1.9.3'

gem 'locomotivecms_wagon', '1.0.2'

group :development do
  # Mac OS X
  gem 'rb-fsevent', '~> 0.9.1', require: RUBY_PLATFORM.include?('darwin') && 'rb-fsevent'

  # Unix
  gem 'therubyracer', require: 'v8', platforms: :ruby

  # TODO: Windows
end

group :misc do
  # Add your extra gems here
  gem 'susy', require: 'susy'
  gem 'sass-globbing'
  gem 'compass'
  gem 'pry'
  # gem 'redcarpet', require: 'redcarpet'
end