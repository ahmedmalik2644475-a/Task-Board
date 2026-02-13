
---

# 📝 File-Based Task Manager API (Express + EJS)

This is a simple **CRUD-based task manager** built using **Node.js**, **Express.js**, and **EJS**.
The application stores tasks as `.txt` files using Node’s built-in File System (`fs`) module instead of a database.

Each task is saved as a file inside a local `/files` directory, making this a lightweight, beginner-friendly backend project focused on routing, file handling, and server-side rendering.

---

## 🚀 What This Project Does

* Create new tasks (saved as `.txt` files)
* Read and display all tasks
* View individual task details
* Edit and update existing tasks
* Delete tasks
* Render dynamic pages using EJS templates
* Serve static files from a public folder

This project demonstrates:

* Express routing
* Route parameters (`req.params`)
* Form handling (`req.body`)
* File operations (`fs.readFile`, `fs.writeFile`, `fs.unlink`, `fs.readdir`)
* Server-side rendering with EJS
* Basic CRUD operations without a database

---

## 🛠 Tech Stack

* Node.js
* Express.js
* EJS (Embedded JavaScript Templates)
* File System (`fs` module)
* Path module

---

## 📂 Project Structure

```
project-folder/
│
├── files/              # Stores task text files
├── public/             # Static assets (CSS, JS, etc.)
├── views/              # EJS templates
│   ├── index.ejs
│   ├── show.ejs
│   └── edit.ejs
│
├── app.js              # Main server file
└── package.json
```

---

## ⚙️ Installation & Running the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
node app.js
```

### 4️⃣ Open in Browser

```
http://localhost:3000
```

If you see "its running.." in the terminal, the server started successfully.

---

# 🔌 API / Routes Explanation

Below are the available routes and how to test them.

---

## 1️⃣ GET `/`

**Description:**
Displays all task files from the `/files` folder.

**How to check:**
Open in browser:

```
http://localhost:3000/
```

---

## 2️⃣ POST `/create`

**Description:**
Creates a new task file.

* The title becomes the filename (spaces removed).
* The details become file content.

**How to test (Browser Method):**

* Fill the form on the homepage.
* Submit it.
* A new `.txt` file will be created inside `/files`.

**How to test (Postman Method):**

* Method: `POST`
* URL: `http://localhost:3000/create`
* Body → `x-www-form-urlencoded`

```
title: My Task
details: This is my first task
```

---

## 3️⃣ GET `/file/:filename`

**Description:**
Displays a specific task file.

**Example:**

```
http://localhost:3000/file/MyTask.txt
```

If file exists → shows content
If not → returns `Task not found`

---

## 4️⃣ GET `/edit/:filename`

**Description:**
Opens edit page for a specific task.

**Example:**

```
http://localhost:3000/edit/MyTask.txt
```

---

## 5️⃣ POST `/update/:filename`

**Description:**
Updates an existing task:

* Deletes old file
* Creates new file with updated name/content

**How to test (Postman):**

* Method: `POST`
* URL: `http://localhost:3000/update/MyTask.txt`
* Body → `x-www-form-urlencoded`

```
new: UpdatedTask.txt
newContent: Updated task content here
```

---

## 6️⃣ GET `/delete/:filename`

**Description:**
Deletes a task file permanently.

**Example:**

```
http://localhost:3000/delete/MyTask.txt
```

After deletion → redirects to homepage.

---

# 🧠 How It Works Internally

* `fs.readdir()` → Reads all files
* `fs.writeFile()` → Creates new task
* `fs.readFile()` → Reads task content
* `fs.unlink()` → Deletes file
* Express route parameters (`:filename`) dynamically access files
* EJS renders dynamic data into views

---

# ⚠️ Limitations

* No database (file-based storage only)
* No authentication
* No input validation
* No filename conflict handling
* Minimal error handling

---

# 🔮 Possible Improvements

* Add MongoDB or SQL database
* Add user authentication
* Add validation & sanitization
* Add better UI/UX
* Add REST API JSON responses
* Prevent duplicate filenames
* Add confirmation before delete

---

# 📌 Purpose of This Project

This project was built to practice:

* Express routing
* CRUD operations
* File handling in Node.js
* Server-side rendering
* Basic backend architecture
---

* 🔥 A more professional resume-level README
* 🚀 Deployment guide (Render / Railway)
* 📸 Add screenshot section
* 🏆 Turn this into a portfolio-ready project description
