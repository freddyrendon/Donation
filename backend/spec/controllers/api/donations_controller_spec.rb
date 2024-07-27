require 'rails_helper'

RSpec.describe Api::DonationsController, type: :controller do
  let!(:donation) { create(:donation) }

  describe "GET #index" do
    it "returns a success response" do
      get :index
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      get :show, params: { id: donation.id }
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid parameters" do
      it "creates a new Donation" do
        expect {
          post :create, params: { donation: attributes_for(:donation) }
        }.to change(Donation, :count).by(1)
      end

      it "renders a JSON response with the new donation" do
        post :create, params: { donation: attributes_for(:donation) }
        expect(response).to have_http_status(:created)
        expect(response.content_type).to include("application/json")
      end
    end

    context "with invalid parameters" do
      it "renders a JSON response with errors for the new donation" do
        post :create, params: { donation: attributes_for(:donation, donor_first_name: nil) }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "PATCH/PUT #update" do
    context "with valid parameters" do
      it "updates the requested donation" do
        patch :update, params: { id: donation.id, donation: { donor_first_name: "Jane" } }
        donation.reload
        expect(donation.donor_first_name).to eq("Jane")
      end

      it "renders a JSON response with the donation" do
        patch :update, params: { id: donation.id, donation: { donor_first_name: "Jane" } }
        expect(response).to be_successful
      end
    end

    context "with invalid parameters" do
      it "renders a JSON response with errors for the donation" do
        patch :update, params: { id: donation.id, donation: { donor_first_name: nil } }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested donation" do
      expect {
        delete :destroy, params: { id: donation.id }
      }.to change(Donation, :count).by(-1)
    end
  end
end