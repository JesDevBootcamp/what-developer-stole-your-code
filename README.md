# What Developer Stole Your Code?

A satirical Vite React App that tells you what developer stole your precious code!

![Screenshot of Website](./screenshots/homepage.png)

## Getting Started

Clone the project into a local directory:

```bash
git clone https://github.com/JesDevBootcamp/what-developer-stole-your-code.git
```

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start
```

**You're all set! Navigate to `http://localhost/` to see it running live!**

## API endpoints

The application supports some basic HTTP API endpoints:

Return an array of all current suspects:

```bash
GET /api/
```

Add a new suspect if not already existing:

```bash
PUT /api/:suspect
```

Update the last person to have stolen from you:

```bash
POST /api/thief/:thief
```

Delete the name of the person who stole from you:

```bash
DELETE /api/:name
```

**Have Fun!**

## Acknowledgment
Built by Joshua Elijah Sandoval.