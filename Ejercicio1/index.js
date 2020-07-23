
let salariesArray = {
	"languages":[
		{"name":"Python", "average_salary": "120000"},
		{"name":"Java", "average_salary": "104000"},
		{"name":"JavaScript", "average_salary": "114000"},
		{"name":"C++", "average_salary": "108000"},
		{"name":"C#", "average_salary": "96000"},
		{"name":"C", "average_salary": "104000"},
		{"name":"PHP", "average_salary": "90000"},
		{"name":"Ruby", "average_salary": "134000"},
		{"name":"Swift", "average_salary": "125000"},
		{"name":"GO", "average_salary": "93000"}
	]
}

let newArray = [
    {"name":"Scala", "average_salary": "160000"},
    {"name":"Cobol", "average_salary": "70000"},
    {"name":"Perl", "average_salary": "87000"}]


function main(opcion){
    let output;

    switch(opcion){
        case 1:
            output = calculateAverageSalary(salariesArray);
            break;

        case 2:
            output = formatJSONtoString(calculateCOPSalaries(salariesArray));
            break;

        case 3:
            output = formatJSONtoString(calculateMonthlySalaries(salariesArray));
            break;

        case 4:
            output = formatJSONtoString(addNewLanguages(salariesArray, newArray));
            break;

        case 5:
            output = formatJSONtoString(sortingSalariesArray(salariesArray));
            break;
    }

    return output;
}


function formatJSONtoString(objectList){
    let stringOutput = '';
    
    objectList.forEach(element => {
        stringOutput = stringOutput + element.name +" - " + element.average_salary + "\n";
    });
    
    return stringOutput;
}


function calculateAverageSalary(salaryArray){
    let salaries = [];
    let sum = 0;
    
    salaryArray.languages.forEach(element => {
        sum = parseInt(sum) + parseInt(element.average_salary);
    });
    let average = parseFloat(sum)/parseFloat(salaryArray.languages.length);
    
    return average;
}

function calculateCOPSalaries(salaryArray){
    let salaries = [];
    newSalariesList = JSON.parse( JSON.stringify( salaryArray.languages));
    
    newSalariesList.forEach(element => {
        element.average_salary = parseFloat(element.average_salary) * parseFloat(3600);
    });

    return newSalariesList;
}

function calculateMonthlySalaries(salaryArray){
    let salaries = [];
    newSalariesList = JSON.parse( JSON.stringify( salaryArray.languages));
    
    newSalariesList.forEach(element => {
        element.average_salary = (parseFloat(element.average_salary) / parseFloat(12)).toFixed(2);
    });
    
    return newSalariesList;
}

function addNewLanguages(salaryArray, newLanguageSalary){
    newSalariesList = JSON.parse( JSON.stringify( salaryArray.languages));
    
    newLanguageSalary.forEach( element => {
        newSalariesList.push(element);
    })
    
    return newSalariesList;
}

function sortingSalariesArray(salaryArray){
    newSalariesList = JSON.parse( JSON.stringify( salaryArray.languages));
    
    newSalariesList.sort(function (a, b) {
        if (parseInt(a.average_salary) < parseInt(b.average_salary)) {
          return 1;
        }
        if (parseInt(a.average_salary) > parseInt(b.average_salary)) {
          return -1;
        }
        return 0;
      });
    
    return newSalariesList;
}

