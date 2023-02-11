## Getting Started with TS Template

This template includes the core technology stack: typescript, redux and tailwind

## Сommands for self-assembly
- npx create-react-app --template typescript .
- npm install -D tailwindcss
- npx tailwindcss init

    content for tailwind.config.js:
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

    content for index.css:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

- npm install @reduxjs/toolkit react-redux
- npm install react-router-dom