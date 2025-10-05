# VehiQL 🚗📊

![Project Banner Placeholder](https://raw.githubusercontent.com/Himanshu040324/VehiQL/main/public/Dashboard.png)

> **An Intelligent, Secure, and AI-Powered Vehicle Data Management Platform.**

VehiQL is a modern web application designed for the efficient and secure collection and management of vehicle-related data. Built on the **Next.js** framework and secured by **Arcjet** and **Clerk**, the platform offers a seamless user experience and innovative data-gathering capabilities using **Google GenAI**.

## 🚀 Live Demo

Experience the platform in action:
👉 **[https://vehi-ql-three.vercel.app/](https://vehi-ql-three.vercel.app/)**

---

## ✨ Key Features

|  Icon  | Feature                   | Technology                                                                       |
| :----: | :------------------------ | :------------------------------------------------------------------------------- |
| **🔐** | **Secure Authentication** | Seamless user login and management powered by **Clerk**.                         |
| **🧠** | **AI-Powered Forms**      | Generate context-aware data collection forms using **Google GenAI** integration. |
| **🛡️** | **Web Protection**        | Enhanced security and attack prevention implemented via **Arcjet**.              |
| **🏗️** | **Modern UI/UX**          | Beautiful, accessible, and responsive components built with **shadcn/ui**.       |
| **🗄️** | **Robust Data Layer**     | Scalable data storage and querying handled by **Supabase**.                      |
| **✅** | **Type-Safe Validation**  | Client-side data integrity ensured by **Zod** and **react-form**.                |
| **🖼️** | **Easy File Uploads**     | Simple and robust file handling using **react-dropzone**.                        |

---

## 🛠️ Tech Stack

This project is built using a powerful, modern full-stack JavaScript environment.

[![Next.js](https://img.shields.io/badge/Next.js-Black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=green)](https://supabase.io/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Arcjet](https://img.shields.io/badge/Arcjet-5900FF?style=for-the-badge&logoColor=white)](https://arcjet.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ui.shadcn.com/)
[![Google GenAI](https://img.shields.io/badge/Google%20GenAI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google/)
[![Zod](https://img.shields.io/badge/Zod-3E67A6?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

---

## ⚙️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Himanshu040324/VehiQL.git](https://github.com/Himanshu040324/VehiQL.git)
    cd VehiQL
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up Environment Variables:**
    Create a file named `.env.local` in the root directory and add your API keys and configuration settings:

    ```env
    # Clerk Authentication Keys
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
    CLERK_SECRET_KEY=sk_live_...

    # Supabase Database Keys
    SUPABASE_URL=https://<your_project_ref>.supabase.co
    SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiI...

    # Arcjet Security Key
    ARCJET_KEY=arc_...

    # Google Generative AI Key
    GOOGLE_GENAI_API_KEY=AIzaSy...
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📸 Screenshots

_Replace this table with actual images of your application for maximum impact!_

|                                                    Login Page                                                    |                                                 Data Collection Form                                                  |                                                    Dashboard View                                                    |
| :--------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| ![Login Screenshot](https://raw.githubusercontent.com/Himanshu040324/VehiQL/main/vehiql-ai/public/LoginPage.png) | ![Form Screenshot](https://raw.githubusercontent.com/Himanshu040324/VehiQL/main/vehiql-ai/public/DataCollectForm.png) | ![Dashboard Screenshot](https://raw.githubusercontent.com/Himanshu040324/VehiQL/main/vehiql-ai/public/Dashboard.png) |

---

## 👋 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/amazing-feature`).
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

## 🧑‍💻 Contact

Himanshu - [https://www.linkedin.com/in/himanshu040324/]

Project Link: [https://github.com/Himanshu040324/VehiQL](https://github.com/Himanshu040324/VehiQL)
