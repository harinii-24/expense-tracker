# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Expense Tracker (React)

A simple and user-friendly **Expense Tracker application** built using **React**.  
It helps users track daily expenses, visualize spending using a colorful pie chart, and get budget alerts.

---

## 🚀 Features

- ➕ Add expenses with title, amount, and category
- 🗑️ Delete expenses
- 📊 Colorful Pie Chart for expense visualization
- ⚠️ Budget alert when expenses exceed the limit
- 💾 Data stored in Local Storage (data not lost on refresh)
- 🎨 Clean and simple UI

---

## 🛠️ Tech Stack

- **React**
- **Recharts** (for Pie Chart)
- **JavaScript (ES6)**
- **CSS**
- **LocalStorage**

---

## 📦 Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/harinii-24/expense-tracker.git
cd expense-tracker
npm install
npm start
http://localhost:3000

Future Improvements

Monthly expense summary

Category-wise budget limits

Export expenses as CSV

Authentication
Author

Harini
GitHub: harinii-24
