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
