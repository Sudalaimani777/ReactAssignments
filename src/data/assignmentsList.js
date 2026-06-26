// Task 1
import { StudentProfile, EmployeeCard, ProductCard, MovieDetails, CompanyInfo, Assignment1Task6, Assignment1Task7, Assignment1Task8 } from "../assignments/assignment1";
// Task 2
import { Assignment2Task1, Assignment2Task2 } from "../assignments/assignment2";
// Task 3
import { Assignment3Task1, Assignment3Task2, Assignment3Task3, Assignment3Task4, Assignment3Task5, InterviewOrientedTask, InterviewTask, PropDrillingTask } from "../assignments/assignments3";
// Task 4
import { SchoolCardUI, SchoolCourseDashboard, SchoolManagementDashboard } from "../assignments/assignment4";
// Task 5
import { ArrrayInState, ArrrayOfObjectsInState, ClassComponent, CounterApp, LifeCycleMethods, ObjectsInState, UseStateSyntax } from "../assignments/assignment5";
// Task 6
import {
  AgeIncrement as Assignment6AgeIncrement,
  AttendanceTracker,
  BankBalance,
  CounterApp as Assignment6CounterApp,
  CourseSelection,
  EmployeeStatus,
  LoginStatus as Assignment6LoginStatus,
  MobileNumber,
  ProductDetails,
  ProfileVisibility,
  SalaryUpdate,
  ShowAndHideContent,
  StudentNameChange as Assignment6StudentNameChange,
  ThemeSwitch as Assignment6ThemeSwitch,
  UserDataLoading,
} from "../assignments/assignment6";
// Task 7
import { Assignment7 } from "../assignments/assignment7";
// Task 8
import { TodoList } from "../assignments/assignment8";
// Task 9
import { WithAuth, WithBackgroundColor } from "../assignments/assignment9";
// Task 10
import { CRUDApp } from "../assignments/assignment10";
// Task 11
import { StudentRegistration, EmployeeRegistration } from "../assignments/assignment11";
// Task 12
import { Authentication } from "../assignments/assignment12";







export const assignments = [
  // Assignment 1
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
  // Assignment 2
  {
    id: "assignment2",
    title: "Assignment 2",
    tasks: [
      { id: 1, title: "Task 1 - NavLink Navigation", path: "/assignment2/task1/*", component: Assignment2Task1 },
      { id: 2, title: "Task 2 - Login & Register", path: "/assignment2/task2/*", component: Assignment2Task2 },
    ],
  },
  // Assignment 3
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
  },
  // Assignment 4
  {
    id: "assignment4",
    title: "Assignment 4",
    tasks: [
      { id: 1, title: "Task 1 - School Cards UI", path: "/assignment4/schoolCard", component: SchoolCardUI },
      { id: 2, title: "Task 2 - School Courses Dashboard", path: "/assignment4/schoolCourse", component: SchoolCourseDashboard },
      { id: 3, title: "Task 3 - School Management Dashboard", path: "/assignment4/schoolManagement", component: SchoolManagementDashboard },
    ]
  },
  // Assignment 5
  {
    id: "assignmetn5",
    title: "Assignment 5",
    tasks: [
      { id: 1, title: "Task 1 - Make the class component and print the Value on the screen", path: "/assignment5/classComponent", component: ClassComponent },
      { id: 2, title: "Task 2 - Add the Life cycle methods on the console.", path: "/assignment5/lifeCycleMethod", component: LifeCycleMethods },
      { id: 3, title: "Task 3 - Make the Syntax of using useState().", path: "/assignment5/useStateSyntax", component: UseStateSyntax },
      { id: 4, title: "Task 4 - Make the Counter Program using state", path: "/assignment5/counterApp", component: CounterApp },
      { id: 5, title: "Task 5 - Make the Object inside the useState and showing in the HTML?", path: "/assignment5/objInState", component: ObjectsInState },
      { id: 6, title: "Task 6 - Make the array and showing in the below", path: "/assignment5/arrayInState", component: ArrrayOfObjectsInState },
      { id: 7, title: "Task 7 - Make the Array of Object and rendering using Map()", path: "/assignment5/arrayOfObjUsingMap", component: ArrrayInState },
    ]
  },
  // Assignment 6
  {
    id: "assignment6",
    title: "Assignment 6",
    tasks: [
      { id: 1, title: "Task 1 - Counter App", path: "/assignment6/task1", component: Assignment6CounterApp },
      { id: 2, title: "Task 2 - Student Name Change", path: "/assignment6/task2", component: Assignment6StudentNameChange },
      { id: 3, title: "Task 3 - Age Increment", path: "/assignment6/task3", component: Assignment6AgeIncrement },
      { id: 4, title: "Task 4 - Login Status", path: "/assignment6/task4", component: Assignment6LoginStatus },
      { id: 5, title: "Task 5 - Theme Switch", path: "/assignment6/task5", component: Assignment6ThemeSwitch },
      { id: 6, title: "Task 6 - Show And Hide Content", path: "/assignment6/task6", component: ShowAndHideContent },
      { id: 7, title: "Task 7 - User Data Loading", path: "/assignment6/task7", component: UserDataLoading },
      { id: 8, title: "Task 8 - Product Details", path: "/assignment6/task8", component: ProductDetails },
      { id: 9, title: "Task 9 - Mobile Number", path: "/assignment6/task9", component: MobileNumber },
      { id: 10, title: "Task 10 - Salary Update", path: "/assignment6/task10", component: SalaryUpdate },
      { id: 11, title: "Task 11 - Course Selection", path: "/assignment6/task11", component: CourseSelection },
      { id: 12, title: "Task 12 - Employee Status", path: "/assignment6/task12", component: EmployeeStatus },
      { id: 13, title: "Task 13 - Attendance Tracker", path: "/assignment6/task13", component: AttendanceTracker },
      { id: 14, title: "Task 14 - Profile Visibility", path: "/assignment6/task14", component: ProfileVisibility },
      { id: 15, title: "Task 15 - Bank Balance", path: "/assignment6/task15", component: BankBalance },
    ]
  },
  // Assignment 7
  {
    id: "assignment7",
    title: "Assignment 7",
    tasks: [
      { id: 1, title: "Task for UseState Object array and array of object to showing and update the values.", path: "/assignment7/*", component: Assignment7 }
    ]
  },
  // Assignment 8
  {
    id: "assignment8",
    title: "Todo List",
    tasks: [
      { id: 1, title: "Todo List", path: "/assignment8/todoapp", component: TodoList }
    ]
  },
  // Assignment 9
  {
    id: "assignment9",
    title: "Assignment 9",
    tasks: [
      { id: 1, title: "With Background Color", path: "/assignment9/withbackgroundcolor", component: WithBackgroundColor },
      { id: 2, title: "With Auth", path: "/assignment9/withauth", component: WithAuth },
    ]
  },
  //Assignment 10
  {
    id: "assignment10",
    title: "Assignment 10",
    tasks: [
      { id: 1, title: "CRUD APP", path: "/assignment10/crud", component: CRUDApp }
    ]
  },
  // Assignmetn 11
  {
    id: "assignment11",
    title: "Assignment 11",
    tasks: [
      { id: 1, title: "Student Registration", path: "/assignment10/studentregistration", component: StudentRegistration },
      { id: 2, title: "Employee Registration", path: "/assignment10/employeeregistration", component: EmployeeRegistration }
    ]
  }, {
    id: "assignment12", 
    title: "Assignment 12",
    tasks: [
      { id: 1, title: "Authentication", path: "/assignment/12/authentication/",routePath:"/assignment/12/authentication/*", component: Authentication }
    ]
  }
];





