### Project Documentation for Backend and Database

---

## Project Overview

This project is a Next.js application that implements an API to handle reporting incidents, such as injuries, with the use of Prisma as the ORM (Object-Relational Mapping) and MongoDB as the database. The backend consists of two main API routes: `auth` and `db`. The `auth` route is responsible for authentication using Auth0, while the `db` route manages database interactions for creating, retrieving, and deleting reports.

---

## API Structure

### 1. **Auth Route**

- **Purpose**: Manages user authentication.
- **Implementation**: Uses Auth0 for handling authentication within the Next.js application.
- **Key Functionality**:
  - Authentication is set up using the built-in `handleAuth` function provided by Auth0.


### 2. **DB Route**

The `db` route has four main sub-routes:

#### a. **Add Report**

- **Purpose**: Adds a new incident report to the database.
- **Key Functionality**:
  - Accepts a request body containing details such as `adminEmail`, `injuryDetails`, `reporterEmail`, `reporterName`, and `injuryTime`.
  - Checks if the admin and reporter exist in the database; if not, they are created.
  - The injury details are associated with the newly created report, and each body part of the injury is stored in the database.

```javascript
import prisma from "../../../../lib/prisma";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const body = await req.json(); 
  const { adminEmail, injuryDetails, reporterEmail, reporterName, injuryTime } = body;

  // (Database operations to store the report and associated details)
  return NextResponse.json(result);
}
```

#### b. **Delete Report**

- **Purpose**: Deletes an existing report along with all associated injuries.
- **Key Functionality**:
  - Accepts a report ID as the request body.
  - Deletes all injuries associated with the report, then deletes the report itself.



#### c. **Get Report**

- **Purpose**: Retrieves all details related to a specific report.
- **Key Functionality**:
  - Accepts a report ID as the request body.
  - Fetches all injury details associated with the report.


```

#### d. **Report Details**

- **Purpose**: Retrieves detailed information about a report, including the reporter and admin details.
- **Key Functionality**:
  - Accepts a report ID as the request body.
  - Fetches the report, along with the injuries, reporter details, and admin details associated with it.

```javascript
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req,res){
    const body = await req.json();
    const reportId = body.reportId;

    // (Database operations to fetch detailed report info)
    return NextResponse.json({adminName, reporterName, reporterEmail, adminEmail, injuryTime, createdAt, injuries});
}
```

---

## Database Structure

### Database: MongoDB with Prisma ORM

The database is structured using the Prisma ORM, which simplifies interactions with the MongoDB database. The database consists of four main models (tables):

1. **Report**:
   - Stores the details of each incident report.
   - Fields: `id`, `injuryTime`, `reporterEmail`, `adminEmail`, `createdAt`.
   - Relationships: 
     - `reporter` (many-to-one with `Reporter` model).
     - `admin` (many-to-one with `Admin` model).
     - `injuries` (one-to-many with `Injury` model).

2. **Reporter**:
   - Stores the information of reporters who submit reports.
   - Fields: `id`, `email`, `name`.
   - Relationships:
     - `reports` (one-to-many with `Report` model).

3. **Admin**:
   - Stores information about admins who are responsible for the reports.
   - Fields: `id`, `email`, `name`.
   - Relationships:
     - `adminReports` (one-to-many with `Report` model).

4. **Injury**:
   - Stores details about injuries reported in each incident.
   - Fields: `id`, `bodyPart`, `details`, `reportId`.
   - Relationships:
     - `report` (many-to-one with `Report` model).

### Relationship Summary

- **One-to-Many Relationships**:
  - A `Reporter` can be associated with multiple `Reports`.
  - An `Admin` can be associated with multiple `Reports`.
  - A `Report` can have multiple `Injuries`.



## Installation and Setup

### Prerequisites

- Node.js
- MongoDB
- Prisma
- Auth0 Account

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Setup Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables for Prisma and Auth0:
     ```plaintext
     DATABASE_URL=<Your MongoDB connection string>
     AUTH0_SECRET=<Your Auth0 Secret>
     AUTH0_BASE_URL=<Your Auth0 Base URL>
     AUTH0_ISSUER_BASE_URL=<Your Auth0 Issuer Base URL>
     AUTH0_CLIENT_ID=<Your Auth0 Client ID>
     AUTH0_CLIENT_SECRET=<Your Auth0 Client Secret>
     ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. **Access the API**:
   - The API routes are available at `/api/auth` for authentication and `/api/db` for database operations.

---

## Usage

- **Authentication**: Use the `/api/auth` route to manage user authentication with Auth0.
- **Add a Report**: POST to `/api/db/addreport` with the necessary details to add a new report.
- **Delete a Report**: POST to `/api/db/deletereport` with the report ID to delete an existing report.
- **Get Report Details**: POST to `/api/db/getreport` or `/api/db/reportdetails` to retrieve information about a specific report.

---

## License

This project is licensed under the MIT License.

---

This documentation provides an overview of the backend structure, API routes, and database schema. It should help developers understand how to set up and use the project effectively.