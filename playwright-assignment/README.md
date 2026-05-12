\# Playwright Kanban Board Automation Framework



\## Project Overview



This project is an end-to-end automation testing framework developed using Playwright and TypeScript.



The framework automates validation of tasks, columns, and tags in a Kanban Board application.



The solution was implemented using:



\- Playwright

\- TypeScript

\- Data-Driven Testing

\- Page Object Model (POM)



The framework is designed to be:

\- scalable

\- reusable

\- maintainable

\- easy to extend



\---



\# Assignment Objective



The assignment required:



\- Login automation

\- Validation of tasks in correct Kanban columns

\- Validation of task tags

\- Dynamic test execution

\- Data-driven framework design

\- Reduced code duplication

\- Scalable automation architecture



\---



\# Technologies Used



| Technology | Purpose |

|---|---|

| Playwright | Browser automation |

| TypeScript | Automation scripting |

| Node.js | Runtime environment |

| JSON | Test data management |

| Git | Version control |



\---



\# Framework Architecture



The framework follows a clean enterprise automation structure.



\## Project Structure



```text

playwright-assignment

│

├── data

│   └── testData.json

│

├── pages

│   ├── LoginPage.ts

│   └── DashboardPage.ts

│

├── tests

│   └── taskValidation.spec.ts

│

├── playwright.config.ts

├── package.json

└── README.md

```



\---



\# Folder Explanation



\## data



Stores test data in JSON format.



File:

```text

testData.json

```



Purpose:

\- centralized test data

\- easy maintenance

\- scalable test management

\- dynamic test execution



\---



\## pages



Contains Page Object Model classes.



Files:

\- LoginPage.ts

\- DashboardPage.ts



Purpose:

\- reusable locators

\- reusable methods

\- separation of concerns

\- improved maintainability



\---



\## tests



Contains actual test execution logic.



File:

```text

taskValidation.spec.ts

```



Purpose:

\- dynamic test execution

\- scenario validation

\- integration of page objects and test data



\---



\# Framework Features



\## Login Automation



Automates:

\- username entry

\- password entry

\- login button click

\- login success validation



Credentials used:

\- Username: admin

\- Password: password123



\---



\## Data-Driven Testing



All test scenarios are stored inside:



```text

data/testData.json

```



Example:



```json

{

&#x20; "application": "Web Application",

&#x20; "task": "Fix navigation bug",

&#x20; "column": "To Do",

&#x20; "tags": \["Bug"]

}

```



Dynamic test execution is implemented using:



```ts

for (const data of testData)

```



Benefits:

\- avoids duplicate tests

\- improves scalability

\- easier maintenance



\---



\# Page Object Model (POM)



The framework uses the Page Object Model design pattern.



\## Benefits



\- reusable methods

\- cleaner code

\- centralized locators

\- easier maintenance

\- better scalability



\---



\# Test Scenarios Covered



| Application | Task | Column | Tags |

|---|---|---|---|

| Web Application | Implement user authentication | To Do | Feature, High Priority |

| Web Application | Fix navigation bug | To Do | Bug |

| Web Application | Design system updates | In Progress | Design |

| Mobile Application | Push notification system | To Do | Feature |

| Mobile Application | Offline mode | In Progress | Feature, High Priority |

| Mobile Application | App icon design | Done | Design |



\---



\# Playwright Configuration



Configured features:



\- Chromium browser

\- Headless execution

\- HTML reporting

\- Screenshot on failure

\- Video recording on failure



Configuration file:



```text

playwright.config.ts

```



\---



\# Installation Steps



\## 1. Clone Repository



```bash

git clone <repository-url>

```



\---



\## 2. Navigate to Project



```bash

cd playwright-assignment

```



\---



\## 3. Install Dependencies



```bash

npm install

```



\---



\## 4. Install Playwright Browsers



```bash

npx playwright install

```



\---



\# Execute Tests



Run all tests:



```bash

npm test

```



OR



```bash

npx playwright test

```



\---



\# HTML Reporting



Generate and open HTML report:



```bash

npx playwright show-report

```



Report includes:

\- execution summary

\- passed/failed tests

\- screenshots

\- videos

\- debugging details



\---



\# Locator Strategy



The framework uses:

\- role-based locators

\- scoped locators

\- regex-based matching



Example:



```ts

getByRole('button', {

&#x20; name: new RegExp(application)

})

```



Benefits:

\- stable automation

\- reduced flaky tests

\- improved reliability



\---



\# Challenges Faced



\## 1. Locator Ambiguity



Issue:

\- multiple elements matched same text



Solution:

\- implemented scoped role-based locators



\---



\## 2. Playwright Installation Issues



Issue:

```text

playwright is not recognized

```



Solution:

```bash

npm install -D @playwright/test

```



\---



\## 3. Dynamic Column Validation



Issue:

\- incorrect semantic locator usage



Solution:

\- reverted to DOM-compatible locator strategy



\---



\# Final Result



Successful execution:



```text

6 passed

```



\---



\# Key Automation Concepts Used



\- Playwright Automation

\- TypeScript

\- Page Object Model

\- Data-Driven Testing

\- Dynamic Test Execution

\- Reusable Framework Design

\- HTML Reporting

\- Scoped Locator Strategy



\---



\# Conclusion



This project successfully implements a scalable and maintainable Playwright automation framework using TypeScript.



The framework:

\- automates login functionality

\- validates Kanban tasks dynamically

\- validates task tags

\- minimizes code duplication

\- supports scalability

\- follows enterprise automation practices



Final Status:



```text

All 6 test cases passed successfully.

```

