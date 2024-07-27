FactoryBot.define do
  factory :donation do
    donor_first_name { "John" }
    donor_last_name { "Doe" }
    donor_email { "john.doe@example.com" }
    donation_type { "Clothing" }
    donation_quantity { 10 }
    donation_date { Date.today }
  end
end