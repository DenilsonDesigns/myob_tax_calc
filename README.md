## MYOB Developer Challenge

### To run:

#### npm install to get necessary packages (run command `npm i`)

#### Then `node index.js "FirstName LastName" 60000` to run main package

#### (Where FirstName is the employees first name and LastName is employees LastName) and 60000 can be replaced by a positive integer representing the employees salary.

#### To run tests: `npm test`

============================================

#### Design decisions:

#### Although a small application, I decided to have separate classes for Payslip and Employee even though it could have easily been done in a single class (or even not using OOP at all). This will make the program more extensible in the future, for example if the Employee class starts having more fields or specific functionality. OOP style also makes the code cleaner in general than a pure scripting solution.

#### Class methods were written to "only do one thing", this makes re-factoring and testing easier.

#### The tax rates and tax thresholds are exported to a constants file and could easily be changes in that one file while not breaking functionality elsewhere in the app.

#### Testing: I have tested all the main functionality of the classes.
