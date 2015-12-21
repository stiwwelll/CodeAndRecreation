class UserMailer < ActionMailer::Base
  default from: "marco.steffensky@gmail.com"

  def contact_form(email, name, message)
    @message = message
    mail(:from => email,
        :to => 'marco.steffensky@gmail.com',
        :subject => "A new contact form message from #{name}")
  end
end
