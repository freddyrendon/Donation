class Api::DonationsController < ApplicationController
    before_action :set_donation, only: [:show, :update, :destroy]

 # GET /api/donations
  def index
    @donations = Donation.all
    render json: @donations
  end

  # GET /api/donations/:id
  def show
    render json: @donation
  end

  # POST /api/donations
  def create
    @donation = Donation.new(donation_params)

    if @donation.save
      render json: @donation, status: :created, location: api_donation_url(@donation)
    else
      render json: @donation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/donations/:id
  def update
    if @donation.update(donation_params)
      render json: @donation
    else
      render json: @donation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/donations/:id
  def destroy
    @donation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_donation
      @donation = Donation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def donation_params
      params.require(:donation).permit(:donor_first_name, :donor_last_name, :donor_email, :donation_type, :donation_quantity, :donation_date)
    end
end
