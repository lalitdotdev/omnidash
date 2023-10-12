# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023

![store-dash](https://socialify.git.ci/mrExplorist/AdaptoCMS/image?description=1&descriptionEditable=Full%20Stack%20E-Commerce%20%2B%20Dashboard%20%26%20CMS%3A%20Next.js%2013%20App%20Router%2C%20React%2C%20Tailwind%2C%20Prisma%2C%20MySQL%0A%0A&language=1&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Light)

This is a repository for a Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL

**Key Features**:

1. **Unified Admin Dashboard as CMS, Admin, and API**:

   - The admin dashboard serves as a versatile hub, offering CMS capabilities, administrative tools, and API endpoints all in one place.
     
     **Customizable**
     The dashboard is highly customizable to suit your specific needs. It provides API endpoints that allow you to connect and create tailored functionality. You can customize the dashboard to handle various tasks, manage different types of content, and adapt it to your unique requirements.

2. **Multi-Vendor Support**:

   - Manage multiple vendors and stores effortlessly from a single CMS. You can create distinct stores like "Shoe store," "Laptop store," and "Suit store," with the CMS generating individualized API routes for each store. This flexibility empowers you to operate diverse e-commerce ventures seamlessly.

3. **Category Management**:

   - Create, update, and delete product categories with ease. This feature allows you to efficiently organize and classify your products for a well-structured online store.

4. **Product Management**:

   - Have complete control over your product catalog. Create, update, and delete products effortlessly, ensuring that your e-commerce offerings are always up-to-date.

5. **Image Management**:

   - Enhance your product listings by uploading multiple images per product. You can change these images whenever necessary, ensuring that your products are visually appealing and accurately represented.

6. **Filter Creation**:

   - Tailor the shopping experience by creating, updating, and deleting filters, such as "Color" and "Size." These filters can be matched with products during the creation process, making it easier for customers to find the products they desire.

7. **Billboard Management**:

   - Customize your online store's appearance with "Billboards," which are prominent text sections displayed at the top of the page. Attach billboards to specific categories or use them independently. The admin automatically generates API endpoints for all billboard configurations.

8. **Powerful Search and Pagination**:

   - Facilitate effortless product discovery with a robust search system. Customers can search through categories, products, sizes, colors, and billboards. Additionally, pagination ensures that search results are manageable and user-friendly.

9. **Featured Products**:

   - Boost product visibility by designating certain products as "featured." These products will be prominently displayed on the homepage, driving more attention and potentially increasing sales.

10. **Order Management**:

- Streamline order processing with comprehensive order management capabilities. Keep track of orders, manage order fulfillment, and provide customers with a seamless shopping experience.

11. **Sales Analytics and Revenue Graphs**:

- Gain valuable insights into your e-commerce business with detailed sales analytics. Visualize your revenue trends and performance through interactive graphs, allowing you to make data-driven decisions and optimize your operations.

12. **Clerk Authentication**:

- Implement secure Clerk Authentication, enhancing user registration and sign-in processes. Ensure that your e-commerce platform is protected and that user data remains confidential.

13. **Order Creation and Payment Processing**:

- Enable customers to place orders effortlessly. Implement a secure Stripe checkout process, making online payments safe and convenient. Customers can pay using various payment methods, enhancing their shopping experience.

14. **Stripe Webhooks**:

- Integrate Stripe webhooks to automate key processes like payment confirmation, order updates, and subscription management. This ensures real-time synchronization and enhances order and payment processing efficiency.

15. **Robust Database Management**:

- Utilize a powerful combination of MySQL, Prisma, and PlanetScale for your database needs. This ensures efficient data storage, retrieval, and scalability, enabling your e-commerce platform to handle increased loads as your business grows.

In summary, this Full Stack E-Commerce + Dashboard & CMS project offers a comprehensive set of features to create a dynamic and user-friendly online shopping experience. From flexible vendor management to advanced search capabilities and secure payment processing, this application equips you with the tools needed to succeed in the competitive world of e-commerce. Whether you're launching a new store or expanding your existing business, these features provide a solid foundation for your online presence.

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/mrExplorist/store-dash.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
