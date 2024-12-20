# Context Store Project
This project is an e-commerce application developed using React, HTML, CSS and Bootstrap. The application has basic e-commerce features such as listing products by category, adding and managing products to the cart, and calculating the total prices of products in the cart.

In the project, a central state management was provided using React Context (useContext), and data was pulled from the Fake API Store with Axios. While transitions between pages were provided with React Router, notifications were presented to the user with React-Toastify. In addition, a loader taken from the UIverse site is shown while data is being loaded.

## Preview
A preview of my Context Store project is in the gif below.

![contextStore](https://github.com/user-attachments/assets/153149bf-9a7f-40fa-815b-f901bc86d1dc)

## Features
* Home Page: The home page contains a section listing product categories. When categories are clicked, products belonging to the relevant category are listed.
* Cart Page: Details of products added to the cart can be viewed. Product quantities can be increased, decreased or completely deleted.
* Product Prices and Total: The total price of products in the cart is dynamically calculated and displayed.
* Notifications: When products are added to the cart, removed or their quantities change, the user is notified with the React-Toastify library.
* Responsive Design: A mobile-friendly responsive design has been implemented with Bootstrap and customized CSS.
* Loader: While the data is being loaded, a loading animation from the UIverse library is displayed.
* Page Transitions: React Router is used for page transitions.

##  Technologies
* React.js (useContext, React Router)
* Axios (API data retrieval)
* React-Toastify (Notifications)
* Bootstrap (Responsive design and style)
* CSS (Customized style and layout)
* UIverse (Loader)
