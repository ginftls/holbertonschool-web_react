// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student variables
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California"
};

// Store students in an array
const studentsList: Array<Student> = [student1, student2];

// Create and render the table
document.addEventListener('DOMContentLoaded', (): void => {
  // Create table element
  const table: HTMLTableElement = document.createElement('table');
  
  // Create table header
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  
  const firstNameHeader: HTMLTableCellElement = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  
  const locationHeader: HTMLTableCellElement = document.createElement('th');
  locationHeader.textContent = 'Location';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create table body
  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  
  // Iterate through studentsList and create rows
  studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement('tr');
    
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  
  // Append table to the document body
  document.body.appendChild(table);
});
