# SchoolMeal (EduMeal) – Web-based School Meal Management System

## 📌 Overview

SchoolMeal (EduMeal) is a **web-based school meal management system** designed to modernize how schools in Vietnam handle meal registration, dietary management, inventory tracking, and communication between staff and parents. The project was developed as part of the Capstone Project (Fall 2025) by the SE29\_FA25\_deptraivodich group.

EduMeal aims to replace inefficient manual processes with a centralized, responsive platform that ensures transparency, reduces food waste, and improves child nutrition management.

---

## 👨‍💻 Project Information

* **Project name:** SchoolMeal (EduMeal)
* **Project code:** SMMS
* **Software type:** Web Application
* **Group:** SE29\_FA25\_deptraivodich

### Project Team

| Full Name            | Role     | Email                                                             | Mobile     |
| -------------------- | -------- | ----------------------------------------------------------------- | ---------- |
| Vo Quoc Trinh        | Lecturer | [trinhvq@fe.edu.vn](mailto:trinhvq@fe.edu.vn)                     | 0905558805 |
| Phan Minh Thanh      | Member   | [thanhpmde170798@fpt.edu.vn](mailto:thanhpmde170798@fpt.edu.vn)   | 0935087983 |
| Dang Vinh Xuan Hai   | Member   | [haidvxde170789@fpt.edu.vn](mailto:haidvxde170789@fpt.edu.vn)     | 0911124072 |
| Le Viet Bao Trung    | Member   | [trunglvbde170769@fpt.edu.vn](mailto:trunglvbde170769@fpt.edu.vn) | 0982441549 |
| Nguyen Tan Nhat Hung | Member   | [hungntnde170350@fpt.edu.vn](mailto:hungntnde170350@fpt.edu.vn)   | 0843093359 |
| Van Ngoc Thang       | Member   | [thangvnde180947@fpt.edu.vn](mailto:thangvnde180947@fpt.edu.vn)   | 0947690111 |

---

## 🏫 Product Background

Many schools in Vietnam still rely on manual processes for meal registration and inventory tracking, leading to inefficiencies and food waste. EduMeal was developed to:

* Centralize meal management
* Track allergies and preferences
* Reduce food waste via accurate attendance-linked portions
* Increase transparency between schools and parents

---

## 🔍 Existing Systems & Market Gap

* **Lunchtab:** Strong in logistics & finance but weak in nutrition analysis.
* **Nutrikid:** Great nutritional insights but lacks real-time management & reporting.
* **LunchTime Software:** Comprehensive but tailored to U.S. context, not suitable for Vietnam.

➡️ **Opportunity:** EduMeal combines the strengths of these systems while addressing the specific needs of Vietnamese schools.

---

## 🚀 Business Opportunity

* Rising parental concerns on child nutrition & food safety.
* Schools undergoing **digital transformation**.
* Government push for educational digitalization.

EduMeal provides a **scalable, transparent, and intelligent platform** that benefits admins, teachers, kitchen staff, parents, and principals.

---

## 🎯 Software Product Vision

EduMeal is a **centralized, intelligent, and multilingual system** that:

* Provides nutrition-aware meal planning
* Tracks inventory & purchases
* Allows parents to register, pay, and monitor meals
* Ensures communication between parents, teachers, and kitchen staff
* Reduces errors and food waste

---

## 📌 System Actors & Workflows

### 1. **Admin**

* Create school & generate invite code
* Manage teacher accounts (ban/unban)
* Update contact info
* CRUD notifications (send to roles/classes)
* View system-wide statistical reports

### 2. **Principal**

* Manage teacher/kitchen/market staff accounts
* Manage invite codes for internal staff
* View school-specific reports
* Send announcements to roles/classes
* Bulk or single student import (Excel upload or manual entry)

### 3. **Teacher**

* Create classes & import student list
* View meal schedule per class/day
* Manage student info (attendance, BMI, allergies)
* Report meal incidents
* Manage student photo albums

### 4. **Kitchen Staff**

* Manage inventory (CRUD)
* Maintain food library
* Build weekly menus
* Plan purchases & export ingredient lists

### 5. **Market Staff**

* View inventory, food library, and weekly menu
* Access purchase plans & export Excel shopping lists

### 6. **Parents**

* Register and pay for meals
* Update personal & child profiles
* Track BMI and growth charts
* View weekly menus & allergen details
* Send feedback to teachers/kitchen
* View invoices & payment status

---

## 🛠️ Major Features

* **Meal Registration & Attendance-Linked Portions (FE-01)**
* **Purchase Planning & Inventory Management (FE-01’, FE-05)**
* **Account & Notification Management (FE-02, FE-08)**
* **Student Profiles & Health Tracking (FE-03, FE-13, FE-14)**
* **Food Library & Menu Builder (FE-04, FE-12)**
* **Feedback & Invoices (FE-06, FE-09)**
* **Reports & Analytics (FE-07)**
* **Bilingual Interface & Search (FE-10, FE-11)**
* **Role-Based Access Control (FE-15)**

---

## ⚙️ Installation & Setup

### 🔗 Source Code

* **Frontend (React):** [SMMS-SchoolMeal-FrontEnd](https://github.com/dangvinhxuanhai/SMMS-SchoolMeal-FrontEnd)
* **Backend (Node.js/Express):** [SMMS-SchoolMeal-BackEnd](https://github.com/dangvinhxuanhai/SMMS-SchoolMeal-BackEnd)

### 1. Requirements

* Node.js >= 18
* npm hoặc yarn
* MySQL / PostgreSQL
* Git

### 2. Clone repositories

```bash
git clone https://github.com/dangvinhxuanhai/SMMS-SchoolMeal-FrontEnd.git
cd SMMS-SchoolMeal-FrontEnd
```

```bash
git clone https://github.com/dangvinhxuanhai/SMMS-SchoolMeal-BackEnd.git
cd SMMS-SchoolMeal-BackEnd
```

### 3. Backend Setup

```bash
cd SMMS-SchoolMeal-BackEnd
npm install
cp .env.example .env   # chỉnh sửa config database (MySQL/Postgres)
npm run migrate
npm start
```

### 4. Frontend Setup

```bash
cd SMMS-SchoolMeal-FrontEnd
npm install
npm run dev
```

### 5. Access Application

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để truy cập giao diện.

---

## 📊 Reporting & Deliverables

* Statistical reports (attendance, revenue, allergies, nutrition)
* Export options: **Excel / PDF** for authorities or principals

---

## ⚠️ Limitations (Current Scope)

* No native Android/iOS app (web responsive only)
* Limited to Vietnamese primary schools in phase 1
* External AI API integrations only (no in-house training)
* Payment gateway simulated, not fully integrated
* No IoT device integration (future scope)

---

## 📂 Project Structure (Proposed)

```
SchoolMeal/
├── docs/                 # Project documents & reports
├── frontend/             # React/Next.js web app
├── backend/              # Node.js/Express API
├── database/             # SQL schema & migrations
├── assets/               # Food images, icons
└── README.md             # This file
```

---

## 🏁 Conclusion

EduMeal addresses the **real-world challenges of school meal management in Vietnam** by integrating logistics, nutrition, and communication into one web platform. The system benefits **all stakeholders**: parents, teachers, kitchen staff, principals, and administrators.

Future directions include **mobile app development, IoT integration, and advanced AI-powered nutrition planning**.
