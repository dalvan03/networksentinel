// Temporary ambient declarations to mitigate local TypeScript diagnostics.
// Prefer installing dependencies locally: run `npm install` in the project root.

// Common libraries used in the project. These stubs prevent "Cannot find module" errors
// when `node_modules` isn't installed in the local workspace.
declare module 'react';
declare module 'react/jsx-runtime';
declare module '@hookform/resolvers/zod';
declare module 'react-hook-form';
declare module 'zod';
declare module 'lucide-react';

// JSX intrinsic elements fallback to reduce
// "JSX element implicitly has type 'any'" diagnostics.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}