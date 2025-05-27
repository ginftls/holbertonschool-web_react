# TypeScript Director and Teacher Interfaces Project

This project demonstrates creating TypeScript interfaces for Directors and Teachers with different work behaviors, along with a factory function to create employees based on salary.

## Project Structure

```
task_2/
├── js/
│   └── main.ts
├── dist/
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Features

- **DirectorInterface**: Defines methods for director work behavior
- **TeacherInterface**: Defines methods for teacher work behavior  
- **Director Class**: Implements DirectorInterface with specific director behaviors
- **Teacher Class**: Implements TeacherInterface with specific teacher behaviors
- **createEmployee Function**: Factory function that returns Director or Teacher based on salary

## Interface Definitions

### DirectorInterface
```typescript
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
```

### TeacherInterface
```typescript
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
```

## Class Implementations

### Director Class
- `workFromHome()` → "Working from home"
- `getCoffeeBreak()` → "Getting a coffee break"
- `workDirectorTasks()` → "Getting to director tasks"

### Teacher Class
- `workFromHome()` → "Cannot work from home"
- `getCoffeeBreak()` → "Cannot have a break"
- `workTeacherTasks()` → "Getting to work"

## createEmployee Function

Factory function with the following logic:
- **Input**: `salary` (number or string)
- **Output**: Director or Teacher instance
- **Logic**: 
  - If salary is a number and < 500 → returns Teacher
  - Otherwise → returns Director

## Example Usage

```typescript
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director
```

## Setup Instructions

1. Create the `task_2` directory
2. Copy all configuration files into the directory
3. Place `main.ts` in the `js/` subdirectory
4. Install dependencies:
   ```bash
   npm install
   ```

## Build and Run

- Build the project: `npm run build`
- Run development server: `npm run dev`
- Run tests: `npm run test`

## Requirements Met

- ✅ Uses TypeScript with `.ts` extension
- ✅ All variables use TypeScript types
- ✅ No TypeScript compiler warnings or errors
- ✅ Compatible with Ubuntu 18.04
- ✅ Jest version 24.9.* compatible
- ✅ All files end with newline
- ✅ DirectorInterface with 3 required methods
- ✅ TeacherInterface with 3 required methods
- ✅ Director class implements DirectorInterface
- ✅ Teacher class implements TeacherInterface
- ✅ createEmployee function with salary-based logic
- ✅ Union return type (Director | Teacher)

## Testing

The code includes comprehensive testing of the createEmployee function and demonstrates the different behaviors of Director and Teacher instances.