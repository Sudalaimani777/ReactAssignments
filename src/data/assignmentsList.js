// Task 1
import { StudentProfile, EmployeeCard, ProductCard, MovieDetails, CompanyInfo, Assignment1Task6, Assignment1Task7, Assignment1Task8 } from "../assignments/assignment1";
// Task 2
import { Assignment2Task1, Assignment2Task2 } from "../assignments/assignment2";
// Task 3
import { Assignment3Task1, Assignment3Task2, Assignment3Task3, Assignment3Task4, Assignment3Task5, InterviewOrientedTask, InterviewTask, PropDrillingTask } from "../assignments/assignments3";


export const assignments = [
  {
    id: "day1",
    title: "Assignment 1",
    tasks: [
      { id: 1, title: "Student Profile", path: "/day1/student-profile", component: StudentProfile },
      { id: 2, title: "Employee Card", path: "/day1/employee-card", component: EmployeeCard },
      { id: 3, title: "Product Card", path: "/day1/product-card", component: ProductCard },
      { id: 4, title: "Movie Details", path: "/day1/movie-details", component: MovieDetails },
      { id: 5, title: "Company Info", path: "/day1/company-info", component: CompanyInfo },
      { id: 6, title: "Task 6 - Header", path: "/day1/task6", component: Assignment1Task6 },
      { id: 7, title: "Task 7 - Layout", path: "/day1/task7", component: Assignment1Task7 },
      { id: 8, title: "Task 8 - Landing Page", path: "/day1/task8", component: Assignment1Task8 },
    ],
  },
  {
    id: "assignment2",
    title: "Assignment 2",
    tasks: [
      { id: 1, title: "Task 1 - NavLink Navigation", path: "/assignment2/task1/*", component: Assignment2Task1 },
      { id: 2, title: "Task 2 - Login & Register", path: "/assignment2/task2/*", component: Assignment2Task2 },
    ],
  },
  {
    id: "assignment3",
    title: "Assignment 3",
    tasks: [
      { id: 1, title: "Task 1 - Student Profile", path: "/assignment3/task1", component: Assignment3Task1 },
      { id: 2, title: "Task 2 - Employee Card", path: "/assignment3/task2", component: Assignment3Task2 },
      { id: 3, title: "Task 3 - Product Details", path: "/assignment3/task3", component: Assignment3Task3 },
      { id: 4, title: "Task 4 - User Skills", path: "/assignment3/task5", component: Assignment3Task4 },
      { id: 5, title: "Task 5 - User Information Card", path: "/assignment3/task5", component: Assignment3Task5 },
      { id: 6, title: "Task 6 - Bonus Interview Task", path: "/assignment3/interviewTask", component: InterviewTask },
      { id: 7, title: "Task 7 - Props Drilling Task", path: "/assignment3/propDrillingTask", component: PropDrillingTask },
      { id: 8, title: "Task 8 - Interview-Oriented Task", path: "/assignment3/interviewOrientedTask", component: InterviewOrientedTask },
    ]
  }
];