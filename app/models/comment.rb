class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :product

  validates :body, presence: true
  validates :user, presence: true
  validates :product, presence: true
  validates :rating, numericality: { only_integer: true }

  validate :clean_language

  after_create :update_redis


  private

  def clean_language
    if body.include? "fuck"
      errors.add(:clean_language, "Behave!")
    end
  end

  def update_redis
    $redis.incr("cache:users:#{user_id}:comment_count")
  end

end
