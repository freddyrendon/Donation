# Donation Management Application

This is a donation management application built with Ruby on Rails for the backend and React for the frontend. The application allows users to add and view donations. The primary focus is on core functionalities rather than design.

## Features

- Add new donations.
- View all donations.
- Data is stored in the backend (Rails) and fetched by the frontend (React).
- Unit testing for backend using RSpec.
- Frontend testing using Playwright.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Ruby (version 3.0.0 or later)
- Rails (version 6.1.7.7 or later)
- Node.js (version 20.12.1 or later)
- npm (version 10.5.0 or later)
- PostgreSQL
- RSpec
- Playwright


### Setup Backend (Rails)

1. **Clone the repository**:
    ```sh
    git clone https://github.com/freddyrendon/Donation.git
    cd /backend
    ```

2. **Install backend dependencies**:
    ```sh
    cd backend/
    bundle install
    ```

3. **Setup the database**:
    ```sh
    rails db:create
    rails db:migrate
    ```

4. **Run RSpec tests**:
    ```sh
    bundle exec rspec
    ```

5. **Start the Rails server**:
    ```sh
    rails s  
    ```

### Setup Frontend (React)

1. **Navigate to the frontend directory**:
    ```sh
    cd ../frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the React development server**:
    ```sh
    npm run start
    ```

4. **Run Playwright tests**:
    ```sh
    npx playwright test
    ```

## API Endpoints

- **GET /api/donations**: Fetch all donations.
- **POST /api/donations**: Create a new donation.
- **GET /api/donations/:id**: Fetch a specific donation.
- **PATCH/PUT /api/donations/:id**: Update a specific donation.
- **DELETE /api/donations/:id**: Delete a specific donation.

## Backend (Rails)

- `app/models/donation.rb`: Donation model.
- `app/controllers/api/donations_controller.rb`: Donations controller with actions to handle API requests.
- `spec/models/donation_spec.rb`: RSpec tests for the Donation model.
- `spec/requests/donations_spec.rb`: RSpec tests for the Donations API.
- `config/routes.rb`: Defines the API routes for donations.

## Frontend (React)

- `src/components/DonationForm.js`: Form to add new donations.
- `src/components/DonationList.js`: Displays a list of all donations.
- `src/store/donations.js`: Redux slice for managing donations state.
- `tests/`: Playwright tests for the frontend components.

## Comments on Code

The code is well-organized and reusable. Here are some points of focus:

- **Data Modeling**: The Rails backend is designed to handle CRUD operations for donations.
- **State Management**: Redux is used in the React frontend to manage the state of donations.
- **Forms Validation**: Basic form validation is implemented in the React frontend.
- **Unit Testing**: RSpec is used for backend testing, and Playwright is used for frontend testing.
