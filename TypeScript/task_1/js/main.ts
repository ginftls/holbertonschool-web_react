// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Create teacher objects
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Additional examples to demonstrate the interface functionality
const teacher1: Teacher = {
  firstName: 'Alice',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  subject: 'Mathematics',
  department: 'Science'
};

const teacher2: Teacher = {
  firstName: 'Bob',
  lastName: 'Johnson',
  fullTimeEmployee: false,
  location: 'California',
  hourlyRate: 25,
  availableDays: ['Monday', 'Wednesday', 'Friday']
};

console.log('Teacher 1:', teacher1);
console.log('Teacher 2:', teacher2);
