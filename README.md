# Simple To-Do Manager (MERN, ESM)

## Ziel

CRUD für To-Dos (Titel, Status, Fälligkeitsdatum) mit React-Frontend, Express-API, MongoDB Atlas, Cloud-Deployment.

## Lokal starten

### Backend

- `cd server`
- `.env` aus `.env.example` erstellen und Werte füllen
- `npm i && npm run dev` → http://localhost:4000/api/health

### Frontend

- `cd client`
- optional `.env` mit `VITE_API_URL=http://localhost:4000/api`
- `npm i && npm run dev` → http://localhost:5173

## API (Beispiele)

GET /api/todos?status=all|open|done&sort=-createdAt|createdAt|dueDate|-dueDate  
GET /api/todos/:id  
POST /api/todos { title, dueDate? }  
PATCH /api/todos/:id { title?, done?, dueDate? }  
DELETE /api/todos/:id

## Deployment

- API: Render (Env: MONGO_URI, PORT, CORS_ORIGIN)
- Frontend: Vercel (Env: VITE_API_URL)

## Reflexion (Stichworte)

- CORS/ENV, Validierung (Titel Pflicht), Loading/Empty-States, State-Management mit React Hooks
