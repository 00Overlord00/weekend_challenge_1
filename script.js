console.log( 'The script is properly linked.' );
var allEmployees = [];
var monthlySpending = annualSpending / 12;
var annualSpending = 0.0;

  var addEmployee = function() {
    //Input variables
    var firstName = document.getElementById( 'firstName' ).value;
    var lastName = document.getElementById( 'lastName' ).value;
    var fullName = firstName +  " " + lastName;

    var idNum = document.getElementById( 'idNumber' ).value;

    var annualSalary = document.getElementById( 'annualSalary' ).value; //Experimental Modification here
    //Internal function variables
    var employee = {'Name': fullName, 'ID': idNum, 'Annual': annualSalary};


    parseFloat(annualSalary); //Convert string to number
    console.log();

        annualSpending += Number(annualSalary);
        parseFloat(annualSpending);
          document.getElementById( 'cashBox' ).innerHTML = parseInt(annualSpending / 12);
        //Push employee onto array of employees
        allEmployees.push(employee);

      //Update/list array in pre-determined div
      var outputText = '';
        for(var i = 0; i < allEmployees.length; i++) {
          outputText += '<p><b>' + 'Name: ' + allEmployees[i].Name + '</b> ID#: ' + allEmployees[i].ID + ' Annual Salary: $' + allEmployees[i].Annual + '</p><br>';
          document.getElementById( 'outputDiv' ).innerHTML = outputText;
         //Everything works to this point.
        }
};

//Step 2: Calculate all employees salaries and report back monthly salary cost.

//Optional 1: Create a button that removes employee from DOM.

//Optional 2: Update total salary cost after employee deleted.
