---

<h1 align="center">Internationalization Boilerplate (Next.js 15 + TypeScript)</h1>

<p align="center">
  A powerful, scalable, and modern i18n-ready boilerplate for your Next.js apps.
  <br/>
  <b>Made with love by Shehryar Ahmed</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/NextIntl-4.0-blueviolet?style=for-the-badge" />
</p>

---

## ✨ About This Boilerplate

This project is a clean and scalable **Internationalization (i18n)** Boilerplate built using:

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Next-Intl v4**

It supports dynamic language switching with locale-based routing. Designed especially for large-scale applications (20-30+ pages) where localization structure needs to stay clean, modular, and maintainable.

---

## 📁 Folder Structure

```
/messages
  /en
    common.json
    home.json
    about.json
    contact.json
  /ar
    common.json
    home.json
    about.json
    contact.json
/src
  /components
    Navbar.tsx
  /app
    layout.tsx
    page.tsx
next.config.js
```

- `/messages`: Contains translation files organized by locale and page.
- `/components`: Reusable components with full translation support.
- `/app`: Pages using localized texts with dynamic routing.

---

## 🌍 Tech Stack

| Tech | Usage |
|:---|:---|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) | Fullstack React Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white) | Type Safety & Better DX |
| ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white) | Utility First CSS Framework |
| ![Next-Intl](https://img.shields.io/badge/NextIntl-4.0-purple?style=for-the-badge) | Localization Support |

---

## 🛠️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install Dependencies**

```bash
yarn install
# or
npm install
```

3. **Run Locally**

```bash
yarn dev
# or
npm run dev
```

Open `http://localhost:3000` to view your app.

---

## 👉 Features

- Fully dynamic locale routing
- Separate translation files for each page
- Language switcher with select dropdown
- TailwindCSS styled components
- Server-side translation loading
- Future proof scalable structure

---

## 🔄 Future Improvements

- Add Dark Mode Support
- Add SEO metadata translations
- Add CMS integration for dynamic content

---

## 📖 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

<p align="center">
  Built with passion ❤️ by <b>Shehryar Ahmed</b>
</p>

---

