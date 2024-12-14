<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">EMPLOYWISE</h1></p>
<p align="center">
	<em><code>❯ A Web App for Managing Employee Data</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/TanishqRawat0112/employwise?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/TanishqRawat0112/employwise?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/TanishqRawat0112/employwise?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/TanishqRawat0112/employwise?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

<code>❯ Employwise is a web application designed to manage employee data efficiently. It allows administrators to manage users, view detailed employee lists, and edit user information with ease. Built with React, this app offers a seamless user experience and intuitive UI for managing employee data.</code>

---

#### 🌐 Live Demo
Check out the deployed project: [employwisedeploy-n0t1144az-tanishqrawat0112s-projects.vercel.app](https://employwisedeploy-n0t1144az-tanishqrawat0112s-projects.vercel.app/)
OR
Check out the deployed project: [employwisedeploy.vercel.app](https://employwisedeploy.vercel.app/)

---

##  Features

<code>❯ Employee Login system</code><br>
<code>❯ User Registration and Authentication</code><br>
<code>❯ Pagination for user lists</code><br>
<code>❯ User editing feature</code><br>
<code>❯ Responsive Design for all screen sizes</code>

---

##  Project Structure

```sh
└── employwise/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── components
        ├── index.css
        ├── index.js
        └── services
```


###  Project Index
<details open>
	<summary><b><code>EMPLOYWISE/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ Defines the dependency tree for the project</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ Contains metadata, dependencies, and scripts for the project</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/index.css'>index.css</a></b></td>
				<td><code>❯ Global CSS for the application</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/App.css'>App.css</a></b></td>
				<td><code>❯ Component-specific styles for the main application view</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/App.js'>App.js</a></b></td>
				<td><code>❯ Main application component</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/index.js'>index.js</a></b></td>
				<td><code>❯ Entry point for the React application</code></td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/components/Login.jsx'>Login.jsx</a></b></td>
						<td><code>❯  Component for handling login functionality</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/components/Pagination.jsx'>Pagination.jsx</a></b></td>
						<td><code>❯  Component for paginated user list</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/components/UsersList.jsx'>UsersList.jsx</a></b></td>
						<td><code>❯ Component displaying the list of users</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/components/EditUser.jsx'>EditUser.jsx</a></b></td>
						<td><code>❯  Component for editing user details</code></td>
					</tr>
					</table>
					<details>
						<summary><b>styles</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/components/styles/EditUser.css'>EditUser.css</a></b></td>
								<td><code>❯ Styles for the EditUser component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/components/styles/Login.css'>Login.css</a></b></td>
								<td><code>❯ Styles for the Login component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/components/styles/UserList.css'>UserList.css</a></b></td>
								<td><code>❯ Styles for the UsersList component</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/src/services/api.js'>api.js</a></b></td>
						<td><code>❯ Handles API calls for user authentication and data</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- public Submodule -->
		<summary><b>public</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/public/index.html'>index.html</a></b></td>
				<td><code>❯ Main HTML file</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/public/manifest.json'>manifest.json</a></b></td>
				<td><code>❯ Defines the web app manifest</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/TanishqRawat0112/employwise/blob/master/public/robots.txt'>robots.txt</a></b></td>
				<td><code>❯ Defines rules for search engine crawlers</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with employwise, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript(React)
- **Package Manager:** Npm


###  Installation

Install employwise using one of the following methods:

**Build from source:**

1. Clone the employwise repository:
```sh
❯ git clone https://github.com/TanishqRawat0112/employwise
```

2. Navigate to the project directory:
```sh
❯ cd employwise
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯❯ npm install
```




###  Usage
Run employwise using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ ❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement Login functionality.</strike>
- [X] **`Task 2`**: <strike>Listing all users.</strike>
- [X] **`Task 3`**: <strike>Edit, delete and update users.</strike>

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/TanishqRawat0112/employwise/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/TanishqRawat0112/employwise/issues)**: Submit bugs found or log feature requests for the `employwise` project.
- **💡 [Submit Pull Requests](https://github.com/TanishqRawat0112/employwise/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/TanishqRawat0112/employwise
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/TanishqRawat0112/employwise/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=TanishqRawat0112/employwise">
   </a>
</p>
</details>

---


##  Acknowledgments

- Special thanks to the React community and open-source contributors.

---
