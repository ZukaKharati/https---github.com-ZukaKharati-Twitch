function success() {
  if (document.getElementById("textsend").value === "") {
    document.getElementById("button").disabled = true;
  } else {
    document.getElementById("button").disabled = false;
  }
}

function createDivonDots() {
  const container = document.getElementById("dot33");

  const createProductRow = () => {
    const row = document.createElement("div");
    row.classList.add("product-row");
    return row;
  };

  const createProductElement = () => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productField1 = document.createElement("div");
    productField1.classList.add("product-field");
    const productLabel1 = document.createElement("h3");
    productLabel1.classList.add("product-label1");
    productLabel1.innerHTML = "General";
    productField1.appendChild(productLabel1);
    productElement.appendChild(productField1);

    const productField2 = document.createElement("div");
    productField2.classList.add("product-field");
    const productLabel2 = document.createElement("a");
    productLabel2.classList.add("product-label");
    productLabel2.href = "https://www.youtube.com/";
    productLabel2.target = "_blank";
    productLabel2.innerHTML = "About";
    const productLabel20 = document.createElement("p");
    productLabel2.appendChild(productLabel20);
    productField2.appendChild(productLabel2);
    productElement.appendChild(productField2);

    const productField3 = document.createElement("div");
    productField3.classList.add("product-field");
    const productLabel3 = document.createElement("a");
    productLabel3.classList.add("product-label");
    productLabel3.href = "https://www.youtube.com/";
    productLabel3.target = "_blank";
    productLabel3.innerHTML = "Advertisers";
    const productLabel30 = document.createElement("p");
    productLabel3.appendChild(productLabel30);
    productField3.appendChild(productLabel3);
    productElement.appendChild(productField3);

    const productField4 = document.createElement("div");
    productField4.classList.add("product-field");
    const productLabel4 = document.createElement("a");
    productLabel4.classList.add("product-label");
    productLabel4.href = "https://www.youtube.com/";
    productLabel4.target = "_blank";
    productLabel4.innerHTML = "Blog";
    const productLabel40 = document.createElement("p");
    productLabel4.appendChild(productLabel40);
    productField4.appendChild(productLabel4);
    productElement.appendChild(productField4);

    const productField5 = document.createElement("div");
    productField5.classList.add("product-field");
    const productLabel5 = document.createElement("a");
    productLabel5.classList.add("product-label");
    productLabel5.href = "https://www.youtube.com/";
    productLabel5.target = "_blank";
    productLabel5.innerHTML = "Developers";
    const productLabel50 = document.createElement("p");
    productLabel5.appendChild(productLabel50);
    productField5.appendChild(productLabel5);
    productElement.appendChild(productField5);

    return productElement;
  };

  const row = createProductRow();
  const productElement1 = createProductElement();

  row.appendChild(productElement1);
  container.appendChild(row);
}

function logIn() {
  const login = document.getElementById("createlogin");

  const createFirstLoginDiv = () => {
    const row1 = document.createElement("div");
    row1.classList.add("loginfirst");
    return row1;
  };

  const createLogin2 = () => {
    const line1 = document.createElement("div");
    line1.classList.add("line1");

    const line2 = document.createElement("div");
    line2.classList.add("line2");
    let image = document.createElement("img");
    image.src = "./twitch/download.png";
    image.classList.add("imagestyle");
    line2.appendChild(image);

    const line3 = document.createElement("div");
    line3.classList.add("line3");
    const linelabel = document.createElement("h3");
    linelabel.innerText = "Login in to Twitch";
    line3.appendChild(linelabel);
    line1.appendChild(line2);
    line1.appendChild(line3);
    return line1;
  };

  const login1 = createFirstLoginDiv();
  const login2 = createLogin2();

  login1.appendChild(login2);
  login.appendChild(login1);

  const createLogin3 = () => {
    const line4 = document.createElement("div");
    line4.classList.add("line4");
    return line4;
  };

  const createLogin4 = () => {
    const line6 = document.createElement("div");
    line6.classList.add("line6");

    const line7 = document.createElement("div");
    line7.classList.add("line7");
    const line8 = document.createElement("h4");
    line8.innerText = "Username";

    const line9 = document.createElement("div");
    line9.classList.add("line9");
    const line10 = document.createElement("input");
    line10.type = "text";
    line10.id = "txt";
    line9.appendChild(line10);

    line7.appendChild(line8);
    line7.appendChild(line9);
    line6.appendChild(line7);

    return line6;
  };

  const createLogin5 = () => {
    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("passwordDiv");

    const passwordDiv2 = document.createElement("div");
    passwordDiv2.classList.add("passwordDiv2");

    const passworDiv21 = document.createElement("div");
    passworDiv21.classList.add("passwordDiv21");

    const passwordDivh4 = document.createElement("h4");
    passwordDivh4.classList.add("passwordDivh4");
    passwordDivh4.innerText = "Password";

    const passwordDivinput = document.createElement("input");
    passwordDivinput.type = "text";
    passwordDivinput.id = "txt";

    const link = document.createElement("div");
    const linktoanotherpage = document.createElement("a");
    linktoanotherpage.classList.add("linktoanotherpage");
    linktoanotherpage.href = "https://www.youtube.com/";
    linktoanotherpage.target = "_blank";
    linktoanotherpage.innerHTML = "Trouble logging in?";
    link.appendChild(linktoanotherpage);

    passworDiv21.appendChild(passwordDivh4);
    passworDiv21.appendChild(passwordDivinput);
    passwordDiv2.appendChild(passworDiv21);
    passwordDiv2.appendChild(link);
    passwordDiv.appendChild(passwordDiv2);

    return passwordDiv;
  };

  const createLoginButton = () => {
    const loginBtn = document.createElement("div");
    loginBtn.classList.add("loginbtn");
    const loginButton = document.createElement("button");
    const buttontext = document.createTextNode("Log in");
    loginButton.appendChild(buttontext);
    loginBtn.appendChild(loginButton);

    return loginBtn;
  };

  const createLastLDivInLogin = () => {
    const account = document.createElement("div");
    account.classList.add("account21");
    const accountButton = document.createElement("button");
    accountButton.classList.add("buttonSignUp");
    const accountButtonText = document.createTextNode("Don't have an account? Sign Up");
    accountButton.appendChild(accountButtonText);
    account.appendChild(accountButton);
    return account;
  };

  const line5 = createLogin3();
  const linee5 = createLogin4();
  const line9 = createLogin5();
  const login100 = createLoginButton();
  const login101 = createLastLDivInLogin();

  line5.appendChild(linee5);
  line5.appendChild(line9);
  login1.appendChild(line5);
  login1.appendChild(login100);
  login1.appendChild(login101);
}
