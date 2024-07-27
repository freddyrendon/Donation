require 'rails_helper'

RSpec.describe "Donations", type: :request do
  describe 'GET /api/donations' do
    it 'returns a list of donations' do
      donation = create(:donation)
      get '/api/donations'
      expect(response).to have_http_status(:ok)
      expect(response.body).to include(donation.donor_first_name)
    end
  end
end
