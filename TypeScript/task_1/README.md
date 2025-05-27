# TypeScript Teacher Interface Project

This project demonstrates creating a TypeScript interface for teachers with readonly properties and index signatures for dynamic attributes.

## Project Structure

```
task_1/
├── js/
│   └── main.ts
├── dist/
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Features

- Defines a `Teacher` interface with specific property requirements
- Uses `readonly` modifiers for firstName and lastName (can only be set during initialization)
- Includes optional `yearsOfExperience` property
- Supports dynamic attributes through index signature `[propName: string]: any`
- Demonstrates the interface with multiple teacher examples

## Teacher Interface Properties

- `firstName`: string (readonly) - can only be set during initialization
- `lastName`: string (readonly) - can only be set during initialization
- `fullTimeEmployee`: boolean
- `yearsOfExperience`: number (optional)
- `location`: string
- Dynamic properties: any attribute with string key and any value type

## Setup Instructions

1. Create the `task_1` directory
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

## Example Usage

```typescript
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
```

## Requirements Met

- ✅ Uses TypeScript with `.ts` extension
- ✅ All variables use TypeScript types
- ✅ No TypeScript compiler warnings or errors
- ✅ Compatible with Ubuntu 18.04
- ✅ Jest version 24.9.* compatible
- ✅ All files end with newline
- ✅ firstName and lastName are readonly (initialization only)
- ✅ yearsOfExperience is optional
- ✅ Dynamic attributes supported via index signature

## Interface Definition

```typescript
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
```

The interface allows adding any additional properties (like `contract`, `subject`, `department`, etc.) without explicitly defining them in the interface.