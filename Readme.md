# Mini ecommer website with Spring boot and React

## Student Information

- Student ID: 618691
- Student Name: Aung Thu Moe
- Email: amoe@miu.edu

## Folder Structure

- `backend`: Spring boot application
- `frontend`: React application

## Project Requirements
- Java 23
- Maven 3.8.1
- Node 21 or later

## How to run

1. Run backend application
   - Go to `backend` folder
   - Run `docker-compose up -d` to start the database
   - Copy `application-dev.yml.example` to `application.-dev.yml`
   - Please do not delete `application.yml` file, you need both files
   - Update `application-dev.yml` with your database connection information, and other configurations such as AWS credentials for file upload
   - Run `openssl rand -base64 64` to generate a secret key and update `application-dev.yml` with the generated key
   - Run `mvn spring-boot:run` or import the project to your IDE and run the application
2. Run frontend application
   - Go to `frontend` folder
   - Run `npm install` or `yarn install`
   - Update `.env` file with the backend URL
   - Run `npm start` or `yarn start`

## Features

- User registration and login
- Product management
- Shopping cart
- Order management
- File upload
- Search products
- Pagination
- Seller, buyer and Admin roles
- Admin dashboard
- Seller dashborad
- JWT authentication
