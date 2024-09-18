# IOE Syllabus Data Repository

Welcome to the **IOE Syllabus Data Repository**! This repository contains syllabus data for various subjects offered by the Institute of Engineering (IOE). The syllabus files are organized by faculty and semester, providing an easy-to-navigate structure for students and educators.

## Remaining Tasks
- [] Add a new syllabus for the batch of 2081 B.S.
- [] Make a syllabus struture consistent and uniform.
  
## 📁 Repository Structure

Here’s how the repository is structured:

```
├── README.md
├── LICENSE
├── faculties
│   ├── faculty1
│   │   ├── semester1
│   │   │   ├── subject1.md
│   │   │   ├── subject2.md
│   │   │   └── ...
│   │   ├── semester2
│   │   │   └── subject1.md
│   │   └── ...
│   ├── faculty2
│   │   └── ...
│   └── ...
└── 
```

- **README.md**: This file provides an overview of the repository.
- **LICENSE**: Defines the license for the repository.
- **faculties**: Contains subfolders for each faculty. Each faculty has semester-specific folders, and within each semester folder, you'll find Markdown files for each subject.


## 📝 Editing and Contributing

If you'd like to update the syllabus data or contribute new content, follow these detailed steps:

### 1. **Fork the Repository**

Start by forking the repository to your own GitHub account. This creates a copy of the repository where you can make changes without affecting the original repository.

- Click on the "Fork" button at the top-right corner of the repository's GitHub page.

### 2. **Clone the Forked Repository**

After forking, clone the repository to your local machine so you can work on the files locally.

```bash
git clone https://github.com/iamshishirgaire/IOE-Syllabus-Data
```

### 3. **Install a Markdown Editor**

You can use any text editor to edit the `.md` files, but a Markdown editor will make it easier to see how your changes will look when rendered. Some popular options include:

- **VS Code** with the [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) extension.
- **Typora**: A simple, clean Markdown editor with live preview.
- **Obsidian**: A feature-rich Markdown editor with support for folders and file linking.

### 4. **Navigate to the Syllabus File**

Find the syllabus file you want to edit within the `faculties/` directory. For example, if you want to edit the syllabus for a subject in `faculty1`, `semester1`, you can navigate as follows:

```bash
cd faculties/faculty1/semester1
```

### 5. **Edit the Syllabus File**

Open the desired Markdown file (e.g., `subject1.md`) in your Markdown editor. Make your changes or updates to the syllabus. Be sure to follow the existing structure for consistency.

### 6. **Create a New Branch for Your Changes**

Before making any changes, it's best practice to create a new branch. This helps to isolate your changes and makes it easier to manage multiple updates.

```bash
git checkout -b update-subject1-syllabus
```

Name your branch something descriptive, like `update-subject1-syllabus`.

### 7. **Commit Your Changes**

Once you've made your changes and saved the file, you can commit your changes. Follow these steps:

1. **Stage your changes** (this tells Git which files you want to include in the commit):

   ```bash
   git add faculties/faculty1/semester1/subject1.md
   ```

2. **Commit your changes** with a descriptive message:

   ```bash
   git commit -m "Updated syllabus for Subject 1 in Semester 1"
   ```

### 8. **Push Your Changes to GitHub**

Now that your changes are committed, push them to your forked repository on GitHub:

```bash
git push origin update-subject1-syllabus
```

This uploads your local branch to your remote forked repository.

### 9. **Create a Pull Request (PR)**

1. After pushing your branch, go to your GitHub repository and you will see a prompt to create a pull request.
2. Click on "Compare & pull request."
3. Add a descriptive title and explain the changes you’ve made in the PR description.
4. Submit the pull request.

Once submitted, the repository maintainers will review your changes, and after approval, they will be merged into the main repository.

---

### 🎯 Best Practices for Contributing

- **Keep your changes focused**: Try to limit each pull request to a specific update (e.g., one subject or one semester's syllabus).
- **Write clear commit messages**: Use descriptive commit messages to explain the changes you've made.
- **Review your changes**: Before pushing, double-check your Markdown formatting using the editor’s preview mode.

By following these detailed steps, you can ensure your contributions are well-structured and ready to be reviewed and merged efficiently.

## 📜 License

This repository is licensed under the **GNU General Public License v3.0**. See the [LICENSE](./LICENSE) file for more details.

---