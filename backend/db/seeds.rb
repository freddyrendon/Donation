# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Donation.create(donor_first_name: 'John', donor_last_name: 'Doe', donor_email: 'john.doe@example.com', donation_type: 'money', donation_quantity: 100, donation_date: '2024-01-01')
