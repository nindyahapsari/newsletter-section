# Newsletter Subscription Section

This section is designed to be responsive and user-friendly,
allowing users to subscribe to a newsletter seamlessly.

## Project Overview

In this project, I developed a responsive newsletter subscription form based on the given designs. The form allows users to enter their email addresses to sign up for the newsletter. The main goals were to ensure the form is responsive, implements client-side validation, and submits the details to an API endpoint.

### Design Fidelity

- Followed the design closely, using the specified text colors, font sizes, font weights, spacing, and dimensions.

### Responsive Behavior

- **Text Size**: Adjusts based on screen width.
- **Responsive Layout**: Content stacks vertically on smaller screens and aligns horizontally on wider screens.
- **Element Adaptability**: Text elements and images resize without distortion or loss of quality.

### Interactivity

- **Button States**: Styled buttons to reflect normal, hover, and focus states.
- **Input Field States**: Styled input fields to reflect normal, focus, filled, disabled, error, error filled, and error focused states.
- **Client-side Validation**: Implemented email validation to catch errors before reaching the server, ensuring a smoother user experience.

### API Submission

- **Success Feedback**: On successful validation, the form submits data to the API endpoint and displays "Subscription successful! Please check your email to confirm."
- **Error Handling**: Displays appropriate error messages for API errors such as "Failed to subscribe. Please ensure your email is correct or try again later."

### Cross-browser Compatibility

- Ensured compatibility with major browsers including Chrome, Firefox, and Safari through development.

### Performance Optimization

- Optimized image assets and code for quick load times.

### Accessibility and Semantics

- Ensured the form is accessible according to WCAG guidelines, using semantic HTML and ARIA roles, proper alt tags for images.

## Tech Stack

- **Tailwind CSS**
- **Next.js**
- **React.js**
- **React Hook Form** for form handling
- **Zod** for validation
- **Daisy UI** for frontend components

## Screenshots

![newsletter-section-screenshot](https://github.com/user-attachments/assets/36f3ae97-4e09-4517-80aa-c79f5f102772)


## How to Run

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.

Thank you for checking out my project!
