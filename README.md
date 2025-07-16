# Starks_2025

# 📘 Git Workflow for Assignment Submissions

Welcome to the assignment submission repository.  
Each participant must maintain their **own branch** (named after their full name or ID) and push all their assignments to that branch. This helps keep the project organized, conflict-free, and easy to review.

---

## ✅ Prerequisites

- Git installed on your local machine
- A GitHub account
- Access to this repository (Clone or Fork access granted)

---

## 🪜 Step-by-Step Workflow

### 1. Clone the Repository

```bash
git clone https://github.com/DineshSripathi718/unofficalBrollyCEOs-2025.git
cd <assignment-repo>
```

### 2. Create a Branch with Your Name (Only Once)

```bash
git checkout -b yourname
```

### 3. Add Your Assignment

-  Create your assignment folder like this:

```bash
assignments/yourname/assignment1/
```

### 4. Stage and Commit the Changes
```bash
git add .
git commit -m "Assignment 1 submission by Your Name"
```

### 5. Push Your Branch to GitHub

```bash
git push -u origin yourname

#Use -u only during the first push. For later pushes, simply use:

git push
```

### 6. Create a Pull Request (PR)

- Visit the repository on GitHub

- Click “Compare & pull request”

- Ensure the PR is from yourname branch to the main branch

- Add a title like: "Assignment 1 - Your Name"

- Write a short description of your submission

#### Click “Create Pull Request”

### 7. Folder Structure Example
```bash
  assignments/
  ├── tony_stark/
  │   ├── assignment1/
  │   └── assignment2/
  ├── john_doe/
  │   ├── assignment1/
  │   └── assignment2/
```

## Important Rules
1. 🔀 One branch per student — named using your full name or ID.

2. 🚫 Do NOT push directly to the main branch.

3. 🗂️ Maintain proper folder structure: assignments/yourname/assignmentX/.

4. 🔃 One Pull Request per assignment — even if using the same branch.

5. 🔄 Keep your branch updated by regularly pulling the latest main changes:

```bash
git checkout yourname
git pull origin main --rebase
```

6. Use clear commit messages, e.g., "Assignment 2 submission - Veerendra".

7. 🔒 Do not touch or alter others' branches or folders.

8. 📣 Ask before making any repo-wide changes (like renaming/moving folders).

9. ✅ Push only complete and tested work.

10. 🧪 Ensure your code runs without errors before submitting a PR.

# Git Command Summary

```bash
# Clone the repo
git clone https://github.com/<org>/<repo>.git
cd <repo>

# Create and switch to your personal branch
git checkout -b yourname

# Stage and commit your assignment
git add .
git commit -m "Assignment X submission by Your Name"

# Push to your personal branch
git push -u origin yourname

# Pull the latest changes from main to stay up to date
git checkout yourname
git pull origin main --rebase
```

# 💬 Support

If you face any issues or have questions, feel free to open an issue in the repo or contact the instructor/admin.

Happy coding! 💻🚀
