# README – Simple To-Do Manager (MERN)

Dies ist eine kleine **To-Do-App**, mit der man Aufgaben anlegen, anzeigen, erledigen und löschen kann.  
Sie wurde mit dem **MERN-Stack** entwickelt:

- **MongoDB** (Atlas-Cloud-Datenbank)
- **Express.js** (Backend/API)
- **React.js** (Frontend/UI)
- **Node.js** (Server-Umgebung)

---

## Funktionen

- Aufgaben anlegen mit Titel und optionalem Fälligkeitsdatum
- Aufgaben als „erledigt“ markieren
- Aufgaben bearbeiten oder löschen
- Aufgaben nach Status filtern (alle, offen, erledigt)
- Aufgaben nach Erstelldatum oder Fälligkeit sortieren
- Daten werden in der **Cloud-Datenbank (MongoDB Atlas)** gespeichert
- Frontend läuft online auf **Vercel**, Backend auf **Render**

---

## Voraussetzungen

Um das Projekt lokal zu starten oder weiterzuentwickeln, brauchst du:

- [Node.js](https://nodejs.org/) (Version 18 oder neuer)
- [Git](https://git-scm.com/downloads)
- Einen kostenlosen Account bei [MongoDB Atlas](https://www.mongodb.com/atlas)
- Einen kostenlosen Account bei [GitHub](https://github.com/)
- Optional: Accounts bei [Render](https://render.com) und [Vercel](https://vercel.com) (für Deployment)

---

## Projektstruktur

```
todo-app/
├─ server/   → Backend (Express.js + MongoDB)
└─ client/   → Frontend (React.js)
```

---

## Installation & Start (lokal)

### 1. Projekt klonen

Lade das Projekt von GitHub herunter (oder klone es, wenn du Git kennst):

```bash
git clone https://github.com/joshuabucher/todo-app-server.git
git clone https://github.com/joshuabucher/todo-app-client.git
```

---

### 2. Backend einrichten (`server/`)

1. In den Ordner wechseln:
   ```bash
   cd todo-app-server
   ```
2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
3. `.env`-Datei anlegen (im Ordner `server/`):
   ```
   PORT=4000
   MONGO_URI=mongodb+srv://<BENUTZER>:<PASSWORT>@cluster0.xxxxxx.mongodb.net/todoapp
   CORS_ORIGIN=http://localhost:5173
   ```
   - **MONGO_URI**: Hier kommt dein Connection-String von **MongoDB Atlas** rein.
   - **CORS_ORIGIN**: Für lokales Testen `http://localhost:5173`.
4. Server starten:
   ```bash
   npm run dev
   ```
5. Test im Browser:
   ```
   http://localhost:4000/api/health
   ```
   → Ausgabe sollte sein:
   ```json
   { "ok": true }
   ```

---

### 3. Frontend einrichten (`client/`)

1. In den Ordner wechseln:
   ```bash
   cd todo-app-client
   ```
2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
3. Optional: `.env` im Ordner `client/` erstellen:
   ```
   VITE_API_URL=http://localhost:4000/api
   ```
4. Frontend starten:
   ```bash
   npm run dev
   ```
5. Test im Browser:
   ```
   http://localhost:5173
   ```
   → Die App sollte erscheinen und Todos anzeigen.

---

## Deployment (online stellen)

### Backend → Render

1. `server/`-Ordner als Repo zu GitHub pushen.
2. Auf [render.com](https://render.com) → **New → Web Service**.
3. Repo auswählen → Einstellungen:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Node: 18 oder 20
4. Environment Variables hinzufügen:
   ```
   MONGO_URI=... (dein Atlas-String)
   PORT=4000
   CORS_ORIGIN=https://<DEINE-VERCEL-URL>
   ```
5. Deploy → API-URL merken, z. B.:
   ```
   https://todo-app-server.onrender.com/api
   ```

---

### Frontend → Vercel

1. `client/`-Ordner als Repo zu GitHub pushen.
2. Auf [vercel.com](https://vercel.com) → **Add New Project**.
3. Repo auswählen → Framework = **Vite**.
4. Environment Variable hinzufügen:
   ```
   VITE_API_URL=https://todo-app-server.onrender.com/api
   ```
5. Deploy → URL merken, z. B.:
   ```
   https://todo-app-client.vercel.app
   ```

---

### CORS final einstellen

Auf Render → Service → **Settings → Environment**:

```
CORS_ORIGIN=https://todo-app-client.vercel.app
```

→ **Save** → **Redeploy**.

Damit darf dein Frontend auf dein Backend zugreifen.

---

## Funktionstest

1. Öffne deine Vercel-URL.
2. Neues Todo anlegen → es sollte in der Liste erscheinen.
3. In MongoDB Compass prüfen → DB `todoapp` → Collection `todos` → das neue Todo ist gespeichert.

---

## Häufige Probleme

- **CORS-Fehler im Browser**  
  → `CORS_ORIGIN` auf Render exakt auf deine Vercel-URL setzen (ohne `/` am Ende).

- **Todos werden nicht gespeichert**  
  → Prüfen, ob `VITE_API_URL` auf Vercel korrekt gesetzt ist.

- **„Cannot GET /“ auf Render**  
  → Normal, API läuft unter `/api/...`. Teste `/api/health`.

- **MongoDB Atlas Fehler**  
  → In Atlas unter _Network Access_ `0.0.0.0/0` freigeben, damit Render zugreifen darf.

---

## Fazit

Mit dieser Anleitung kannst du die App:

- **lokal starten** (`localhost:5173`)
- oder **online nutzen** über Render (Backend) + Vercel (Frontend).
