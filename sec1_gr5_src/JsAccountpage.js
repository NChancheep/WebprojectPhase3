function myFunction() {
  const login = localStorage.getItem('login');
  const adminlogin = localStorage.getItem('admin');
  if(login)
  {
    const fName = localStorage.getItem('firstname');
    document.getElementById("fNameOut").innerHTML = fName;

    const lName = localStorage.getItem('lastname');
    document.getElementById("lNameOut").innerHTML = lName;

    const Email = localStorage.getItem('email');
    document.getElementById("EmailOut").innerHTML = Email;
    const address = localStorage.getItem('address');
    document.getElementById("addressOut").innerHTML = address;
    const age = localStorage.getItem('age');
    document.getElementById("ageOut").innerHTML = age;
    if (adminlogin) {
      document.getElementById("adminbutton").innerHTML = `<input type="button" class="button"
      onClick="location.href='HtmlAdminpage.html'" value='Admin' />`;
    }
  }
  else{
    alert("login first");
        location.replace("HtmlLoginpage.html");
  }
  }