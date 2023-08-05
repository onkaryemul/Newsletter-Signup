
The Newsletter-Signup project is a web application that allows users to subscribe to a newsletter. Users can enter their first name, last name, and email address to receive updates, news, or promotional content from the website. The application integrates with the Mailchimp API to securely store user information and manage the email list. Upon successful subscription, users receive a confirmation message, while any errors during the signup process result in a friendly error message.

# Newsletter-Signup

The Newsletter-Signup project is a web application that allows users to subscribe to a newsletter. Users can enter their first name, last name, and email address to receive updates, news, or promotional content from the website. The application integrates with the Mailchimp API to securely store user information and manage the email list.

## Features:

- Simple and user-friendly signup form to capture user details.
- Integration with Mailchimp API for secure storage and management of email subscribers.
- Success and failure pages to provide appropriate feedback to users.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory and add the following environment variables:

   - MAILCHIMP_API_URL="Mailchimp API endpoint"
   - USERNAME="Your Mailchimp username"
   - API_KEY="Your Mailchimp API key"

4. Start the server using `node app.js`.
5. Access the application by visiting `http://localhost:3000` in your web browser.

## Usage

1. Visit the homepage to access the signup form.
2. Enter your first name, last name, and email address in the form.
3. Click the "Subscribe" button to submit your information.
4. Upon successful subscription, you will be redirected to a "Success" page.
5. If there's an error during the signup process, you will be redirected to a "Failure" page with appropriate feedback.

## Technologies Used

- Node.js
- Express
- Mailchimp API
- HTML, CSS, JavaScript

## Contributors

- Onkar Yemul

---
For more details about the code implementation and routes, refer to the `app.js` file.
