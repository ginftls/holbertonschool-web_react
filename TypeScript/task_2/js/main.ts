// DirectorInterface with 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test the createEmployee function
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Additional testing
const employee1: Director | Teacher = createEmployee(200);
const employee2: Director | Teacher = createEmployee(1000);
const employee3: Director | Teacher = createEmployee('$500');

console.log('Employee 1 work from home:', employee1.workFromHome());
console.log('Employee 1 coffee break:', employee1.getCoffeeBreak());

console.log('Employee 2 work from home:', employee2.workFromHome());
console.log('Employee 2 coffee break:', employee2.getCoffeeBreak());

console.log('Employee 3 work from home:', employee3.workFromHome());
console.log('Employee 3 coffee break:', employee3.getCoffeeBreak());

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Test the executeWork function
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach class based on subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Test the teachClass function
console.log(teachClass('Math'));
console.log(teachClass('History'));
