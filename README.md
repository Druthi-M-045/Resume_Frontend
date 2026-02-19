# Resume Fraud Detection System — Frontend

Modern React frontend scaffold for the Resume Fraud Detection System.

Quick start

1. Install dependencies:

```powershell
npm install
npx tailwindcss init
```

2. Start dev server:

```powershell
npm run dev
```

Notes
- The frontend expects a backend API at `http://localhost:8000/analyze` (POST multipart/form-data).
- This scaffold uses Tailwind CSS. Run `npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch` if needed with a custom setup; Vite + Tailwind are already configured in `postcss.config.cjs`.
# Resume_Frontend