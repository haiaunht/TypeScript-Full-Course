// Code goes here!
class Department {
  //private name: string;
  protected employees: string[] = [];
  //private readonly id: string; //cannot change after initilize

  // constructor(n: string) {
  //   this.name = n;
  // }

  //shortcut contructor and initilize, there is no nee line 3
  constructor(private readonly id: string, private name: string) {
    //this.id = id
    //this.name = n;
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesDetail() {
    console.log(this.id);
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id : string, admins: string[]) {
    super(id, "IT"); //this needed to called first
    this.admins = admins;
  }
}

const accounting = new Department("d1", "Accounting");

// const copy = {name: 'copy', describe: accounting.describe};
// copy.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Kara');
accounting.describe();
accounting.printEmployeesDetail();

const it = new ITDepartment("it", ['Max']);
it.addEmployee('Au');
it.printEmployeesDetail();
console.log(it.admins)


class AccountingDepartment extends Department {
  private lastReport : string;

  get mostRecentReport() {
    if (this.lastReport)
      return this.lastReport;
    throw new Error('No report found')
  }

  set mostRecentReport(value : string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.lastReport = value;
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'AccountingDept');
    this.lastReport = reports[0];
  }

  //override addEmployee of Department
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text : string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accountDept = new AccountingDepartment('d2', []);

//console.log(accountDept.mostRecentReport); this will throw error
accountDept.addReport('Something went wrong...');
accountDept.printReports();

console.log(accountDept.mostRecentReport);
accountDept.mostRecentReport = 'Test last report';
console.log(accountDept.mostRecentReport);


//testing static createEmployye
const emp1 = Department.createEmployee('Whooo');
console.log(emp1);