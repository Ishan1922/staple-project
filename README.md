# 📌 Staple Assignment – GitHub GraphQL API Integration

A React-based application that interacts with GitHub’s GraphQL API using Apollo Client, enabling users to:
✅ View their personal repositories
✅ Fetch related Pull Requests
✅ Create new repositories

## 🛠 Project Setup

### 1️⃣ Clone the Repository
```sh
git clone <repository_url>
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the project root and add:
```sh
VITE_GITHUB_TOKEN=your_personal_access_token
```
### 4️⃣ Start the Development Server
```sh
npm run dev
```

## 🚀 Features
- **List Personal Repositories**: Fetch and display your GitHub repositories.
- **Repository Details**: View pull requests (open & closed) when clicking on a repository.
- **Create Repository**: Form-based repo creation using Apollo GraphQL mutations.
- **Pagination**: Navigate through repositories efficiently.
- **Material-UI Design**: Clean and modern UI components.

## 🔧 Tech Stack : React, Node, Material UI, Apollo Client (refer package.json for exact versions)

## 🔄 Deployment (Vercel)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Add **Environment Variables** (Settings → Environment Variables)
4. Click **Deploy** and wait for the build to complete.
5. Access your live project at the provided URL.

### 🔹 Challenges Faced
1. **GitHub Token Exposure:**
   - Implemented `.env.local` for security
   - Updated `.gitignore` to prevent accidental commits

2. **Migration from Webpack to Vite:**
   - Updated `package.json` scripts
   - Adjusted `vite.config.js` for proper JSX handling
