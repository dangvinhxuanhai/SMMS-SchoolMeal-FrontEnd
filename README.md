# EduMeal (EMMS) – Web-based School Meal Management System

## 📌 Capstone Project Information

SchoolMeal (EduMeal) is a **web-based school meal management system** designed to modernize how schools in Vietnam handle meal registration, dietary management, inventory tracking, and communication between staff and parents. The project was developed as part of the Capstone Project (Fall 2025) by the SE29\_FA25 group.

EduMeal aims to replace inefficient manual processes with a centralized, responsive platform that ensures transparency, reduces food waste, and improves child nutrition management.

### Supervisor

| Full Name     | Phone      | Email                                         | Title  |
| ------------- | ---------- | --------------------------------------------- | ------ |
| Võ Quốc Trình | 0905558805 | [trinhvq@fe.edu.vn](mailto:trinhvq@fe.edu.vn) | Mentor |

### Student Team

| Full Name            | Student Code | Phone      | Email                                                             | Role   |
| -------------------- | ------------ | ---------- | ----------------------------------------------------------------- | ------ |
| Phan Minh Thành      | DE170798     | 0935087983 | [thanhpmde170798@fpt.edu.vn](mailto:thanhpmde170798@fpt.edu.vn)   | Leader |
| Đặng Vĩnh Xuân Hải   | DE170789     | 0911124072 | [haidvxde170789@fpt.edu.vn](mailto:haidvxde170789@fpt.edu.vn)     | Member |
| Lê Viết Bảo Trung    | DE170769     | 0982441549 | [trunglvbde170769@fpt.edu.vn](mailto:trunglvbde170769@fpt.edu.vn) | Member |
| Nguyễn Tấn Nhật Hưng | DE170350     | 0843093359 | [hungntnde170350@fpt.edu.vn](mailto:hungntnde170350@fpt.edu.vn)   | Member |
| Văn Ngọc Thắng       | DE180947     | 0947690111 | [thangvnde180947@fpt.edu.vn](mailto:thangvnde180947@fpt.edu.vn)   | Member |

---

## 🏫 Project Background & Context

* Many primary schools in Vietnam still rely on manual processes for meal registration, dietary management, and inventory tracking, leading to inefficiencies, food waste, and difficulties in managing allergies or preferences.
* **EduMeal (EMMS)** digitizes the process of school meal management: meal registration, allergy filtering, inventory planning, reporting, and financial management.
* Integrates with class timetables and student attendance to adjust meal portions dynamically and reduce waste.

---

## 🎯 Objectives

* Centralize school meal management for admins, teachers, parents, and kitchen staff.
* Support allergy detection and personalized nutrition planning.
* Automate inventory and procurement calculations.
* Provide dashboards, real-time reports, and financial summaries.
* Deliver a responsive, mobile-optimized bilingual (Vietnamese & English) interface.

---

## 🛠️ Technology Stack

* **Frontend:** Next.js, Tailwind CSS ([Frontend Repo](https://github.com/dangvinhxuanhai/SMMS-SchoolMeal-FrontEnd))
* **Backend:** ASP.NET Core Web API, SQL Server ([Backend Repo](https://github.com/dangvinhxuanhai/SMMS-SchoolMeal-BackEnd))
* **Database:** SQL Server
* **Deployment:** Vercel (FE), DigitalOcean (BE & DB)
* **Version Control:** Git & GitHub
* **AI Services:** OpenAI API, Azure AI, Google Gemini (for menu planning, allergen detection, procurement estimation)

---

## 📌 System Actors & Workflows

### 1. Admin

* Create school & generate invite code for teachers.
* Manage accounts (ban/unban teachers & parents).
* Update contact info and school-wide settings.
* CRUD notifications (send to roles/classes).
* View statistical reports (meals, attendance, revenue, allergies).

### 2. Principal

* Manage teacher, kitchen, and market staff accounts.
* Generate/manage invite codes for staff.
* Import students (bulk Excel or single entry).
* View school-specific reports.
* Send internal notifications.

### 3. Teacher

* Create classes & import students.
* View class rosters and meal schedules.
* Manage student info (attendance, BMI, allergies).
* Report meal incidents.
* Manage student image gallery.

### 4. Kitchen Staff

* CRUD inventory and track expiration.
* Maintain food library with nutritional values.
* Build weekly menus.
* Plan purchases & export ingredient lists.

### 5. Market Staff

* View inventory, food library, and menus.
* Export purchase plans with allergen notes.

### 6. Parents

* Register and pay for meals.
* Update parent/child profiles.
* Track BMI growth charts.
* View weekly menus and allergen details.
* Submit feedback/ratings.
* View invoices and payment status.

---

## 📊 Expected Features

* Meal Registration & Attendance-linked Portioning
* User Management (ban/unban, profile updates)
* Student Profile (allergies, BMI, preferences)
* AI-assisted Menu & Purchase Planning
* Inventory Management (stock control, expiration)
* Feedback & Ratings
* Reporting & Analytics (nutrition, finance, attendance)
* Notifications (meal cutoff, allergen alerts)
* Invoice & Payment (PAYOS gateway with QR code)
* Multilingual Support (Vietnamese & English)
* Smart Search & Indexing (autocomplete, fuzzy search)
* Food Library (nutritional data per 100g)
* Class Management (assign students, track metrics)
* Secure Student Image Gallery
* Authentication (OTP, Google login, role-based access)

---

## ⚙️ Installation & Setup

### Requirements

* Node.js >= 18 (for FE)
* .NET 8 SDK (for BE)
* SQL Server
* Git

### 1. Clone Repositories

```bash
git clone https://github.com/dangvinhxuanhai/SMMS-SchoolMeal-FrontEnd.git
cd SMMS-SchoolMeal-FrontEnd
```

```bash
git clone https://github.com/dangvinhxuanhai/SMMS-SchoolMeal-BackEnd.git
cd SMMS-SchoolMeal-BackEnd
```

### 2. Backend Setup

```bash
cd SMMS-SchoolMeal-BackEnd
dotnet restore
cp appsettings.example.json appsettings.json   # chỉnh sửa cấu hình SQL Server
dotnet ef database update
dotnet run
```

### 3. Frontend Setup

```bash
cd SMMS-SchoolMeal-FrontEnd
npm install
npm run dev
```

### 4. Access Application

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

---

## ⚠️ Limitations (Phase 1)

* Only responsive web app (no native Android/iOS).
* Focused on Vietnamese primary schools.
* Payment gateway semi-simulated (PAYOS integration in progress).
* No IoT device integration in this phase.

---

## 📂 Project Structure

```
EduMeal/
├── docs/                 # Reports & documentation
├── frontend/             # Next.js web app
├── backend/              # ASP.NET Core Web API
├── database/             # SQL Server schema & migrations
├── assets/               # Food images, icons
└── README.md             # This file
```

---

## 🧠 AI Integration Plan

* Use external AI APIs (OpenAI, Azure, Gemini) for:

  * Menu planning optimization
  * Allergen detection & alerts
  * Procurement calculations based on menus & attendance
* AI in development process: requirements analysis, testing, and CI/CD automation.

---

## 🏁 Conclusion

EduMeal (EMMS) is a **centralized, intelligent, and bilingual school meal management system** addressing inefficiencies in Vietnamese schools. It digitizes workflows for parents, teachers, admins, and kitchens, reducing food waste, improving nutrition, and increasing transparency.

Future extensions: **mobile app, IoT kitchen integration, advanced AI-powered nutrition planning**.
