# 🍽️ Restaurant Website

A modern, responsive restaurant landing page built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Radix UI](https://www.radix-ui.com/). This app is fully containerized using Docker.
![Screenshot from 2025-05-27 21-05-57](https://github.com/user-attachments/assets/6570dbb6-b654-46fc-9666-0670a206f868)

---

## 🚀 Features

- Next.js 15 App Router
- Tailwind CSS 3
- Radix UI components
- TypeScript support
- Fully responsive design
- Dockerized deployment

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/siddhantbhattarai/nextjs-restaurant-bella-vista.git
cd nextjs-restaurant-bella-vista
````

### 2. Install Dependencies

Ensure you have [`pnpm`](https://pnpm.io/) installed:

```bash
npm install -g pnpm
```

Then install the dependencies:

```bash
pnpm install
```

### 3. Run Locally (Development)

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐳 Docker Setup
### Prerequisite: Docker Installation
``` bash
sudo apt update
sudo apt install docker.io
sudo chown $USER:$USER /var/run/docker.sock
```
### 1. Build Docker Image

```bash
docker build -t restaurant-website .
```

### 2. Run the Docker Container

```bash
docker run -p 3000:3000 restaurant-website
```

> ✅ Your app will now be available at [http://localhost:3000](http://localhost:3000)

---

## 🧼 Rebuilding Docker Image (after changes)

If you've made updates to the code:

```bash
docker build -t restaurant-website .
docker stop $(docker ps -q --filter ancestor=restaurant-website)
docker run -p 3000:3000 restaurant-website
```

---

## 📦 Project Structure

```
.
├── app/                 # App directory (Next.js App Router)
├── components/          # UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities & libraries
├── public/              # Static assets
├── styles/              # Global styles
├── Dockerfile           # Docker configuration
├── package.json         # Project metadata and scripts
└── tailwind.config.ts   # Tailwind CSS configuration
```

---

## ⚙️ Environment Notes

* Port **3000** must be open locally.
* If you get module path errors like `@/components/...`, ensure `tsconfig.json` has correct `paths`.
* Make sure your components exist under the correct paths if you change any folder names.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Siddhant** — https://github.com/siddhantbhattarai

---
