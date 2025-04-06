# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

**Black Talent Spotlight Platform**  

🌟 Overview  
The **Black Talent Spotlight Platform** is a web application that showcases top Black professionals across various industries. Users can browse talent profiles, filter by industry/skills, and explore featured **Top Talent**.  

The goal is to **celebrate Black excellence** and provide businesses with an easier way to discover and connect with professionals.  
🛠 Tech Stack  
- **Frontend**: React.js, Tailwind CSS  
- **API**: Public Free API (e.g., [RandomUser API](https://randomuser.me/), [DummyJSON](https://dummyjson.com/users))  
- **Hosting**: Netlify / Vercel  

🔥 Features  
✅ **Talent Profile Cards** – Displays professionals' names, job titles, portfolio links, and skills.  
✅ **Search & Filters** – Users can filter by **industry, skills, and location**.  
✅ **Top Talent Section** – Highlights professionals with the best portfolios.  
✅ **Job Listings UI** – A section for businesses to post job opportunities (UI only).  
✅ **Dashboard Page** – Shows stats like **top-viewed profiles**.  

📂 Project Structure  
```
📦 black-talent-platform
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┃ ┣ 📜 Footer.jsx
 ┃ ┃ ┣ 📜 TalentProfileCard.jsx
 ┃ ┃ ┣ 📜 TopTalentSection.jsx
 ┃ ┃ ┣ 📜 TalentSearch.jsx
 ┃ ┃ ┣ 📜 JobLBoard.jsx
 ┃ ┃ ┗ 📜 Dashboard.jsx
 ┃ ┣ 📂 data
 ┃ ┃ ┗ 📜 talentData.js  # Mock data or API integration
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 styles.css
 ┃ ┗ 📂 assets  # Images, logos, etc.
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 .gitignore
```

🚀 Getting Started  

**1️⃣ Clone the Repository**  
```sh
git clone https://github.com/michaeldapaaah/black-talent-platform.git
cd black-talent-platform
```

**2️⃣ Install Dependencies**  
```sh
npm install
```

**3️⃣ Run the App**  
```sh
npm run dev
```

The app should be running at **http://localhost:5173** (if using Vite) or **http://localhost:3000** (if using Create React App).  

 🔗 API Integration  
We are fetching user profiles from **[DummyJSON API](https://dummyjson.com/users)**.  
To test the API, use this URL:  
```sh
https://dummyjson.com/users
```
📝 Contribution  
Feel free to contribute! Open a pull request if you have improvements.  

