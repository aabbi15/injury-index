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


Here is the technical documentation for the frontend of your "Injury Index" application, specifically for the Next.js implementation. This documentation is intended for developers to understand the structure, functionality, and flow of the application.

---



## Project Structure
The frontend is structured with the following major components and pages:

- **Pages**
  - `/login`
  - `/profile`
  - `/addreport`
  - `/viewreports`
  - `/report/[id]` (Dynamic route for detailed report view)

- **Components**
  - `Layout`: Custom layout using Ant Design, including a sidebar, footer, and main content area.
  - `BodyMap`: SVG component for selecting body parts on the `/addreport` page.
  - `ReportList`: Component to list and filter reports on the `/viewreports` page.
  - `ReportDetails`: Component for displaying detailed report information on the `/report/[id]` page.

## Pages Description

### 1. Login Page (`/login`)
- **Purpose**: 
  - The login page is displayed to users who are not authenticated. If a logged-in user attempts to access this route, they are redirected to the `/profile` page.
  
- **Functionality**:
  - Standard login form where users enter their credentials.
  - On successful login, users are redirected to their profile page (`/profile`).

- **Redirection Logic**:
  - If an unauthenticated user tries to access any protected route, they are redirected to `/login`.
  - If an authenticated user tries to access `/login`, they are redirected to `/profile`.

### 2. Profile Page (`/profile`)
- **Purpose**: 
  - Displays the logged-in user's profile information, including their photo, name, email, and the date they joined.

- **Layout**:
  - Follows the Ant Design layout with a sidebar, footer, and main content area.
  - If a user is not logged in, they are redirected to the `/login` page.

- **Components**:
  - `UserProfile`: Component displaying the user's information.
  - Redirection logic ensures that only authenticated users can access this page.

### 3. Add Report Page (`/addreport`)
- **Purpose**: 
  - Allows users to add a new injury report by interacting with a body map (an SVG with clickable body parts).

- **Functionality**:
  - Users can click on body parts in the SVG to mark them as injured. When a body part is clicked, it turns red, and a column appears on the side where users can enter details about the injury.
  - The "Submit Report" button sends the entered data to the backend, where it is stored in the database.

- **Layout**:
  - Follows the Ant Design layout.
  - The body map interaction is the core feature of this page, enabling intuitive injury reporting.

- **Components**:
  - `BodyMap`: Interactive SVG for selecting injured body parts.
  - `InjuryDetailsForm`: Form for entering injury details corresponding to the selected body part.

### 4. View Reports Page (`/viewreports`)
- **Purpose**: 
  - Displays a list of all injury reports, with options to filter the reports based on different criteria.

- **Functionality**:
  - Users can filter reports using the following options:
    - Search by Reporter Email
    - Oldest Reports First
    - Latest Reports First
    - Oldest Injury Dates First
    - Latest Injury Dates First
    - Reports by Date Range
    - Injuries by Date Range
    - My Reports Only (admin)
    - No Filter (None)
  - Each report has a "View Details" button that navigates to the detailed report page (`/report/[id]`).

- **Layout**:
  - Follows the Ant Design layout with a sidebar and footer.
  - The main content area lists the reports with filtering options.

- **Components**:
  - `ReportList`: Displays a list of reports with filter options.
  - `FilterOptions`: Dropdown or radio buttons for selecting a filter criteria.

### 5. Detailed Report Page (`/report/[id]`)
- **Purpose**: 
  - Displays the full details of a specific injury report, including all injured body parts and other relevant information.

- **Functionality**:
  - The page is accessed via a dynamic route that includes the report ID (`/report/[id]`).
  - Users can view all details about the injury, including a breakdown by body part.
  - A "Delete Report" button allows users to remove the report from the database.

- **Layout**:
  - Follows the Ant Design layout with a sidebar and footer.
  - The main content area displays the detailed information about the report.

- **Components**:
  - `ReportDetails`: Displays all the details for the selected report.
  - `DeleteButton`: Triggers the deletion of the report.

## Routing Logic

- **Authentication**:
  - Pages such as `/profile`, `/addreport`, `/viewreports`, and `/report/[id]` are protected and require user authentication.
  - The `/login` page is the only route accessible without authentication.

- **Redirection**:
  - Unauthenticated users attempting to access protected routes are redirected to `/login`.
  - Authenticated users attempting to access `/login` are redirected to `/profile`.

## Conclusion
This documentation provides an overview of the frontend architecture of the Injury Index application. It outlines the main pages, their functionality, and how they interact with each other. Developers should refer to this document to understand the flow of the application and the purpose of each page within the Next.js project.

--- 

This documentation should give developers a clear understanding of how the frontend of the Injury Index application is structured and how to work with it. If you need more detailed explanations or additional sections, feel free to ask!

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