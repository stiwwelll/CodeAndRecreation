# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

Actionmailer::Base.smtp_settings = {
  :address => 'smtp.sendgrid.net',
  :port => '587',
  :authentication => :plain,
  :user_name => ENV ['marco.steffensky@gmail.com'],
  :password => ENV ['forVert85294'],
  :domain => 'heroku.com',
  :enable_starttls_auto => true
}
