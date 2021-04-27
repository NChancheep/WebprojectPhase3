function alwayscheck() {
  const login = localStorage.getItem('login');
  if(login)
  {
    document.getElementById("showSearch").innerHTML = `<a href="HtmlSearchpage.html">SEARCH</a>`;
    document.getElementById("showLogout").innerHTML = `<a href="" onclick="logoutset()">LOGOUT</a>`;
    document.getElementById("memberIn1").innerHTML = `<a href="HtmlAccountpage.html"><i class=""></i><b>MEMBER</b></a>`;
    document.getElementById("memberIn2").innerHTML = `<a href="HtmlAccountpage.html"><i class="glyphicon glyphicon-user"></i></a>`;
  } 
  else{
    document.getElementById("showLogin").innerHTML = `<a href="HtmlLoginpage.html">LOGIN</a>`;
    document.getElementById("memberOut1").innerHTML = `<a href="HtmlLoginpage.html"><i class=""></i><b>MEMBER</b></a>`;
    document.getElementById("memberOut2").innerHTML = `<a href="HtmlLoginpage.html"><i class="glyphicon glyphicon-user"></i></a>`;
  } 
}

function logoutset()
{
  localStorage.clear();
  alert("logout successful");
}
///if already login must onclick logout only
