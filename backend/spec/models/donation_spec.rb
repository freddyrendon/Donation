require 'rails_helper'

RSpec.describe Donation, type: :model do
    subject { 
    described_class.new(
      donor_first_name: "John",
      donor_last_name: "Doe",
      donor_email: "john.doe@example.com",
      donation_type: "Clothing",
      donation_quantity: 10,
      donation_date: Date.today
    )
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a donor_first_name" do
    subject.donor_first_name = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a donor_last_name" do
    subject.donor_last_name = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a donor_email" do
    subject.donor_email = nil
    expect(subject).to_not be_valid
  end

  it "is not valid with an invalid email format" do
    subject.donor_email = "invalidemail"
    expect(subject).to_not be_valid
  end

  it "is not valid without a donation_type" do
    subject.donation_type = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a donation_quantity" do
    subject.donation_quantity = nil
    expect(subject).to_not be_valid
  end

  it "is not valid with a non-integer donation_quantity" do
    subject.donation_quantity = 10.5
    expect(subject).to_not be_valid
  end

  it "is not valid with a donation_quantity less than 1" do
    subject.donation_quantity = 0
    expect(subject).to_not be_valid
  end

  it "is not valid without a donation_date" do
    subject.donation_date = nil
    expect(subject).to_not be_valid
  end
end
