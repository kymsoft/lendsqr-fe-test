# Lendsqr Project Documentation
A Work trial project for my job application at Lendsqr to showcase my expertise in Frontend Development with Typescript and NextJs

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Reusable Components](#reusable-components)
- [Challenges](#challenges)
- [Features Summary](#features-summary)


## Installation

1. Creating a New NextJs project
``` After Creating Project folder named Lendsqrproject ```
  npx create-next-app@latest --typescript ./

  ```Run project``` npm run dev 

2. Getting all necessary images and fonts from the Figma file
- Download WorkSans, Avenir Next and Roboto
- Get the Onboarding image, Lendsqr logo, and certain icons

3. Installing required packages
- Material UI (npm install @mui/material)
- Radix UI packages (npm install @radix-ui/react-dropdown-menu @radix-ui/react-icons @radix-ui/react-slot @radix-ui/react-label)
- React-icons (npm install react-icons)
- Sass (npm install sass)
- Zod (npm install zod)
- React-hook-form (npm install react-hook-form)


## Folder Structure

├── app
     ├── (auth) ```NextJs Group Routes```
          ├── log-in
          ├── forgot-password
     ├── (dashboard)
          ├── (routes)
               ├── dashboard
               ├── users
├── assets ```Storing all necessary assets in the project```
     ├── fonts
     ├── images
├── components ``` Storing all the reusable components in the project ```
     ├── ui
├── constants ``` Storing all reusable image objects and data objects```
├── node_modules
├── schemas ``` Storing all form schemas ```
├── .gitignore
├── next.config.js ``` Containing the env which stores the mock API in the project ```
├── tsconfig.json
└── package.json


## Technologies Used
   Project is written in Typescript
   
1. NextJs (A React-based framework)
2. Material UI (Third-party UI library for reusable components such as Button, Divider, and Tabs)
3. React-hook-form (A form management library)
4. Scss (A CSS preprocessor for proper project styling and media handling)
5. React-icons (A library for reusable icons)
6. json-generator.com (URL for generating Random 500 records used in the project)
7. Mocky.io (This was also used due to a major challenge in generating a URL for the generated records. I copied the generated records from json-generator.com and pasted them in Mocky.io to generate a URL)


## Usage

1. Log-in Page:
   Starting with the login page, I created the displayed onboarding image alongside the log-in form.
2. Navbar component
3. Sidebar component
4. Table
5. User Details Cards
6. User Details Page

## Reusable Components
List of all reusable components created in the project for smooth operations and reusablility:

Major Components:
  1. Login Form - login-form.tsx
  2. Navbar - navbar.tsx
  3. Onboarding - onboarding.tsx
  4. Sidebar - sidebar.tsx
  5. Table - table.tsx
  6. Tabs Panel - tabs-panel.tsx

UI components:
  1. Card - card.tsx
  2. Custom Tabs Panel custom-tabs-panel.tsx 
  3. Dropdown Menu - dropdown.tsx
  4. Form error - form-error.tsx
  5. Form - form.tsx
  6. Header - header.tsx
  7. Input - input.tsx
  8. Search Form - search-form.tsx
  9. General Details Panel - general-details-panel.tsx
  10. Form Wrapper - form-wrapper.tsx
  11. Filter Form - filter-form.tsx
  12. Empty Tab -empty-tab.tsx

Constants:
  1. Image Components
  2. Data Objects including Sidebar Links, Card Data, Table Headers and Custom Styles for Statuses


## Challenges

The challenges I experienced during development were majorly between two operations:
1. Filtering the table data without third-party tools
2. Generating a stable data-set URL from json-generator

How I tackled my challenges
1. I implemented my expertise in debugging and unit testing in each input for filtering. Along the line, I visited stack overflow to research on where the bug came from. This led to a successful filtered table from the provided table data.
2. Because the URL from json-generator had authorization issues, I copied my generated dataset from json-genrator and pasted it on Mocky.io to generate my mockAPI.


## Features Summary
This project was developed as part of a front-end job application for Lendsqr. Its primary goal is demonstrating expertise in TypeScript, Next.js, and front-end libraries to build a functional and responsive web application. The application simulates a user management interface, featuring essential pages and components to showcase a user-friendly design and robust functionality.

Project Overview
The application includes the following key components:

1. Login Page:
    A secure login page where users enter their credentials to access the dashboard. Provides validation feedback to ensure proper credential input, utilizing TypeScript for type safety and form handling.

2. Users Dashboard:
- A centralized user dashboard that displays summarized user statistics:
  - Total Users: Total number of users in the system.
  - Active Users: Number of users currently active.
  - Users with Loans: Count of users with active loans.
  - Users with Savings: Count of users with active savings accounts.

```The dashboard leverages my created Card Component for each statistic to enhance readability and structure.```
- A dynamic user data table:
  Displays a detailed list of users, including columns for key user information. Includes pagination, sorting, and filtering to improve user experience and enable easy navigation through large data sets.

3. User Details Page:
    A detailed profile page for each user is accessible by selecting a user from the table. It displays full user information, including personal details, account information, and transactional history. It is also designed to be responsive and visually engaging, with structured information layouts for quick accessibility.


Key Features
- Responsive Design: Optimized for both desktop and mobile, ensuring a seamless experience across devices.
- Data Handling: Implements dynamic data loading, sorting, and filtering in the user table to improve usability and interaction.
- Modular Structure: Organized components and pages for maintainability and scalability, demonstrating best practices in modern front-end development.











