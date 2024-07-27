class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.string :donor_first_name
      t.string :donor_last_name
      t.string :donor_email
      t.string :donation_type
      t.integer :donation_quantity
      t.date :donation_date

      t.timestamps
    end
  end
end
