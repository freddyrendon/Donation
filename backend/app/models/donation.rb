class Donation < ApplicationRecord
  validates :donor_first_name, presence: true
  validates :donor_last_name, presence: true
  validates :donor_email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :donation_type, presence: true
  validates :donation_quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :donation_date, presence: true
end
