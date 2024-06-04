/*eslint-disable*/

export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let currentDeptIndex = 0;
  let currentEmpIndex = 0;

  return {
    [Symbol.iterator]: function* () {
      while (currentDeptIndex < departments.length) {
        let currentDept = departments[currentDeptIndex];
        let employees = report.allEmployees[currentDept];
        
        while (currentEmpIndex < employees.length) {
          let value = employees[currentEmpIndex];
          currentEmpIndex++;
          yield value;
        }
        
        currentDeptIndex++;
        currentEmpIndex = 0;
      }
    }
  };
}
