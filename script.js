function display(e) {
  e.preventDefault();
  let firstname = document.querySelector('#fname').value;
  let lastname = document.querySelector('#mname').value;
  let middlename = document.querySelector('#lname').value;
  let gender = document.querySelector('#male').value;
  let dob = document.querySelector('#dob').value;
  let regnumber = document.querySelector('#regnumber').value;
  let yos = document.querySelector('#yos').value;
  let pg = document.querySelector('#pg').value;
  let cdtls = document.querySelector('#cdtls').value;
  let email = document.querySelector('#email').value;
  let psadd = document.querySelector('#psadd').value;


  document.querySelector('#dfname').innerText = firstname;
  document.querySelector('#dmname').innerText = middlename;
  document.querySelector('#dlname').innerText = lastname;

  displayGender(gender);

  document.querySelector('#ddob').innerText = dob;
  document.querySelector('#dregnum').innerText = regnumber;
  document.querySelector('#dyos').innerText = yos;

  displayPg(pg)

  document.querySelector('#dcddtls').innerText = cdtls;
  document.querySelector('#demail').innerText = email;
  document.querySelector('#dpsadd').innerText = psadd;

}


function displayPg(pg) {
  programId = parseInt(pg);
  switch (programId) {
    case 1:
      document.querySelector('#dpg').innerText = 'Bsc Business Information Technology';
      break;
    case 2: 
      document.querySelector('#dpg').innerText = 'Bsc Computer Systems and Security';
      break;
    case 3:
      document.querySelector('#dpg').innerText = 'Bsc Medical Microbiology';
      break;
    case 4:
      document.querySelector('#dpg').innerText = 'Bsc Medical Imaging';
      break;
    case 5:
      document.querySelector('#dpg').innerText = 'Ba Indegionous Knowledge and System';
      break;
    default:
      document.querySelector('#dpg').innerText = '';
      break;
  }
}


function displayGender(gender) {
  let radioInputs = document.getElementsByName('gender');
  
  radioInputs.forEach(element => {
    if (element.checked && isMale(element.value)) {
      document.querySelector('#dgender').innerText = 'Male';
    }else if (element.checked && isFemale(element.value)) {
      document.querySelector('#dgender').innerText = 'Female';
    }
  });
}

function isMale(value) {
  return value === 'M';
}

function isFemale(value) {
  return value === 'F';
}