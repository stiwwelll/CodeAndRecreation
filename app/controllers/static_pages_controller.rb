class StaticPagesController < ApplicationController

  def landing_page
    @products = Product.limit(3)
  end

  def about
  end

  def contact
  end
end
