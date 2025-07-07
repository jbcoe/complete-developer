# Complete Developer Project

TypeScript Express server project following "The Complete Developer" book.

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Compile and run:**

   ```bash
   npx tsc
   npm start
   ```

3. **Visit:** http://localhost:3000/hello

## Development

**Run directly (no compilation):**

```bash
npx ts-node index.ts
```

**Check for errors:**

```bash
npx tsc --noEmit
```

## Endpoints

- `/hello` - Greeting
- `/api/names` - API names
- `/api/weather/:zipcode` - Weather data (e.g., `/api/weather/12345`)
