# Student Management Page

## Project Description
This project is a responsive **Student Management Page** built using **React JS** and **Tailwind CSS**. It displays a list of students with paginated results and adapts to different screen sizes, offering:

- **Desktop View**: A table layout displaying all student details.
- **Mobile View**: Cards displaying essential student details.

The app uses mock data stored in a `students.json` file and simulates API-like behavior using a `getStudents` function.

---

## Features
1. **Pagination**: Displays 10 students per page.
2. **Responsive Design**:
   - **Desktop**: Full table view.
   - **Mobile**: Cards with key details.
3. **Styling**: Tailwind CSS ensures a modern and visually appealing interface.
4. **Code Modularity**: Separate React components for easier management.

---

## Technologies Used
- **React JS**
- **Tailwind CSS**
- **shadcn/ui** for Data Table component

---

## Installation

### Prerequisites
- Node.js (>=16.x)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Amansingh-06/student-management-application.git
   
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the app in your browser at `http://localhost:3000` (or as specified).

---

## File Structure
```
src/
|-- components/
|   |-- StudentTable.jsx      # Table view for desktop
|   |-- StudentCard.jsx       # Card view for mobile
|   |-- Pagination.jsx        # Pagination controls
|
|-- data/
|   |-- students.json         # Mock student data
|
|-- utils/
|   |-- getStudents.js        # Simulated API function
|
|-- App.jsx                   # Main app component
|-- index.css                 # Global styles
|-- main.jsx                  # Entry point
```

---

## Deployment
This app is deployed on **Vercel**. Access the live version here:
[[Live Demo](https://student-managment-application.vercel.app/)

### Steps to Deploy on Vercel:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy the app:
   ```bash
   vercel
   ```

---

## How to Use
1. **View Students**: Browse the paginated student list.
2. **Switch Layouts**:
   - Resize your browser to see the layout change from table to cards.
3. **Navigate Pages**: Use the pagination controls to navigate between pages.

---

## Example Mock Data (`students.json`)
```json
[
  {
    "name": "John Doe",
    "age": 20,
    "marks": 85,
    "avgMarks": 80,
    "rollNumber": "A102",
    "class": "10th Grade",
    "city": "New York",
    "attendance": "95%"
  },
  {
    "name": "Jane Smith",
    "age": 19,
    "marks": 78,
    "avgMarks": 74,
    "rollNumber": "B203",
    "class": "10th Grade",
    "city": "Los Angeles",
    "attendance": "89%"
  }
]
```

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## Author
**Aman Kumar Singh**  

