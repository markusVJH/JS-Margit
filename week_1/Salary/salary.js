function dailySalary() {  
    const hourlySalary = prompt('What is your hourly salary?');
    const hoursWorked = prompt('How many hours did you work?');

    if (hoursWorked <= 7) {
         dailySalary = hourlySalary * hoursWorked;
    } else if (hoursWorked > 7 && hoursWorked <= 9) {
         dailySalary = (hourlySalary * hoursWorked) + (hourlySalary * 0.5 * (hoursWorked - 7));
    } else {
         dailySalary = (hourlySalary * hoursWorked) + (hourlySalary * 0.5 * 2) + (hourlySalary * (hoursWorked -9));
    }
    return dailySalary;
}

alert(("The day's salary is ") + dailySalary() + '.');