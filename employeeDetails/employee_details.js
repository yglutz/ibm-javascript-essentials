const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Charlie Brown', age: 32, department: 'Marketing', salary: 55000 },
    { id: 5, name: 'Diana Prince', age: 29, department: 'IT', salary: 52000 },
    { id: 6, name: 'Ethan Hunt', age: 40, department: 'Operations', salary: 70000 },
    { id: 7, name: 'Fiona Gallagher', age: 26, department: 'Sales', salary: 48000 },
    { id: 8, name: 'George Costanza', age: 38, department: 'Customer Service', salary: 43000 },
    { id: 9, name: 'Hannah Montana', age: 24, department: 'IT', salary: 49000 },
    { id: 10, name: 'Ian Malcolm', age: 45, department: 'Research', salary: 75000 }
];

const totalEmployees = employees.map((employee) =>
    `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`
).join('');

function displayEmployees() {
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, emplooyee) => acc + emplooyee.salary, 0)
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const displayHREmployees = hrEmployees.map((employee) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    console.log(displayHREmployees);
    document.getElementById('employeesDetails').innerHTML = displayHREmployees;
}

function findEmployeeById(id) {
    const employee = employees.find(employee => employee.id === id);
    if (employee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = '<p>No Employee with this ID found.</p>';
    }
}
