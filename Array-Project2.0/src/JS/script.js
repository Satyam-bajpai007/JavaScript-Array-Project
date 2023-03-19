// Variables
let gen = "<option value=''>-Select-</option>";
let sele = document.getElementById("updt_lst");

let gen2 = "<option value=''>-Select-</option>";
let sele2 = document.getElementById("choose1");

let gen3 = "<option value=''>-Select Product-</option>";
let sele3 = document.getElementById("bill");

let txt = [{
    company: "OnePlus",
    model: "Nord2",
    memory: 128,
    price: 27000,
    Quantity: 50,
    Rating: 4,
  },
  {
    company: "Samsung",
    model: "Galaxy S23",
    memory: 512,
    price: 125000,
    Quantity: 20,
    Rating: 5,
  },
  {
    company: "OnePlus",
    model: "11",
    memory: 256,
    price: 56000,
    Quantity: 40,
    Rating: 4,
  },
  {
    company: "Redmi",
    model: "Note 12",
    memory: 128,
    price: 25000,
    Quantity: 50,
    Rating: 4,
  },
  {
    company: "Oppo",
    model: "Find X2",
    memory: 512,
    price: 80000,
    Quantity: 30,
    Rating: 3,
  },
  {
    company: "Vivo",
    model: "X80 pro",
    memory: 256,
    price: 76000,
    Quantity: 30,
    Rating: 4,
  },
];

// Display Function 

var body = document.getElementById("tbdy");
var foot = document.getElementById("tft");
var row, c0, c1, c2, c3, c4, c5, c6;
let cnt = 0;

function display() {
  for (let i = 0; i < txt.length; i++) {
    row = body.insertRow(-1);
    c0 = row.insertCell(0);
    c1 = row.insertCell(1);
    c2 = row.insertCell(2);
    c3 = row.insertCell(3);
    c4 = row.insertCell(4);
    c5 = row.insertCell(5);
    c6 = row.insertCell(6);
    c0.innerHTML = "<input type='checkbox' onclick='press(" + cnt + ")'>";
    c1.innerText = txt[i].company;
    c2.innerText = txt[i].model;
    c3.innerText = txt[i].memory;
    c4.innerText = txt[i].price;
    c5.innerText = txt[i].Quantity;
    c6.innerText = txt[i].Rating;
    cnt++;
  }
  generation();
  generation1();
  generation2();
}
display();

// Create Function 

function create() {
  var a = document.getElementById("company").value;
  var b = document.getElementById("model").value;
  var c = document.getElementById("memory").value;
  var d = document.getElementById("price").value;
  var lst = {
    company: a,
    model: b,
    memory: c,
    price: d,
    Quantity: "0",
    Rating: "0",
  };
  txt.push(lst);
  row = body.insertRow(-1);
  c0 = row.insertCell(0);
  c1 = row.insertCell(1);
  c2 = row.insertCell(2);
  c3 = row.insertCell(3);
  c4 = row.insertCell(4);
  c5 = row.insertCell(5);
  c6 = row.insertCell(6);
  c0.innerHTML = "<input type='checkbox' onclick='press(" + cnt + ")'>";
  c1.innerText = a;
  c2.innerText = b;
  c3.innerText = c;
  c4.innerText = d;
  c5.innerText = 0;
  c6.innerText = 0;
  cnt++;
  del.push[false];
  generation();
  generation1();
  generation2();
}
let flag1 = 0;
let count = 0;
let body1 = document.getElementById("tbdy1");
let foot1 = document.getElementById("tft1");

// Seaching Function 

function searching() {
  let s_val = document.getElementById("select").value;
  let srch_val = document.getElementById("search").value;
  if (flag1 == 1) {
    for (let i = 0; i < count; i++) {
      document.getElementById("tbdy1").deleteRow(0);
    }
    count = 0;
  }

  for (let i = 0; i < txt.length; i++) {
    if (txt[i][s_val] == srch_val) {
      flag1 = 1;
      count++;
      row = body1.insertRow(-1);
      c0 = row.insertCell(0);
      c1 = row.insertCell(1);
      c2 = row.insertCell(2);
      c3 = row.insertCell(3);
      c4 = row.insertCell(4);
      c5 = row.insertCell(5);
      c6 = row.insertCell(6);
      c0.innerHTML = "<input type='checkbox'>";
      c1.innerText = txt[i].company;
      c2.innerText = txt[i].model;
      c3.innerText = txt[i].memory;
      c4.innerText = txt[i].price;
      c5.innerText = txt[i].Quantity;
      c6.innerText = txt[i].Rating;
    }
  }
}

let flag = 0;
let body2 = document.getElementById("tbdy2");
let foot2 = document.getElementById("tft2");

// Sorting Function 

function sorting() {
  var srt = document.getElementById("select1").value;
  var srt_by = document.getElementById("select2").value;
  if (typeof txt[0][srt_by] == "number") {
    if (srt == "ascending") {
      txt = txt.sort((a, b) => {
        return a[srt_by] - b[srt_by];
      });
    } else if (srt == "decending") {
      txt = txt.sort((a, b) => {
        return b[srt_by] - a[srt_by];
      });
    }
  } else {
    if (srt == "ascending") {
      txt = txt.sort((a, b) => {
        let fa = a[srt_by].toLowerCase(),
          fb = b[srt_by].toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } else if (srt == "decending") {
      txt.sort((a, b) => {
        let fa = a[srt_by].toLowerCase(),
          fb = b[srt_by].toLowerCase();

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
    }
  }
  if (flag == 1) {
    for (let i = 0; i < txt.length; i++) {
      document.getElementById("tbdy2").deleteRow(0);
    }
  }
  for (let i = 0; i < txt.length; i++) {
    flag = 1;
    row = body2.insertRow(-1);
    c0 = row.insertCell(0);
    c1 = row.insertCell(1);
    c2 = row.insertCell(2);
    c3 = row.insertCell(3);
    c4 = row.insertCell(4);
    c5 = row.insertCell(5);
    c6 = row.insertCell(6);
    c0.innerHTML = "<input type='checkbox'>";
    c1.innerText = txt[i].company;
    c2.innerText = txt[i].model;
    c3.innerText = txt[i].memory;
    c4.innerText = txt[i].price;
    c5.innerText = txt[i].Quantity;
    c6.innerText = txt[i].Rating;
  }
}
let del = [];
for (let i = 0; i < txt.length; i++) {
  del.push(false);
}

function press(val) {
  if (del[val] == false) {
    del[val] = true;
  } else {
    del[val] = false;
  }
  console.log(del);
}

// Deletion Function 

function deletion() {
  for (let i = 0; i < txt.length; i++) {
    document.getElementById("tbdy").deleteRow(0);
  }
  for (let i = txt.length - 1; i > -1; i--) {
    if (del[i] == true) {
      txt.splice(i, 1);
      del.splice(i, 1);
    }
  }
  for (let i = 0; i < del.length; i++) {
    del[i] = false;
  }
  cnt = 0;
  console.log(del);
  display();
}

let flag2 = 0;
let count1 = 0;
var body3 = document.getElementById("tbdy3");

// Filter Function 

function filter() {
  let mini = document.getElementById("min").value;
  let maxi = document.getElementById("max").value;
  if (flag2 == 1) {
    for (let i = 0; i < count1; i++) {
      document.getElementById("tbdy3").deleteRow(0);
    }
    count1 = 0;
  }
  for (let i = 0; i < txt.length; i++) {
    if (txt[i].price >= mini && txt[i].price <= maxi) {
      row = body3.insertRow(-1);
      c0 = row.insertCell(0);
      c1 = row.insertCell(1);
      c2 = row.insertCell(2);
      c3 = row.insertCell(3);
      c4 = row.insertCell(4);
      c5 = row.insertCell(5);
      c6 = row.insertCell(6);
      c0.innerHTML = "<input type='checkbox'>";
      c1.innerText = txt[i].company;
      c2.innerText = txt[i].model;
      c3.innerText = txt[i].memory;
      c4.innerText = txt[i].price;
      c5.innerText = txt[i].Quantity;
      c6.innerText = txt[i].Rating;
      flag2 = 1;
      count1++;
    }
  }
}
 
// Updation Function 

function generation() {
  gen = "";
  for (let i = 0; i < txt.length; i++) {
    gen +=
      "<option value=" +
      i +
      ">" +
      txt[i].company +
      " " +
      txt[i].model +
      "</option>";
  }
  sele.innerHTML = gen;
}

let lst1 = 0;

function change(value) {
  lst1 = value;
}

function update() {
  let updt = document.getElementById("for_updt").value;
  txt[lst1].Quantity = updt;
  for (let i = 0; i < txt.length; i++) {
    document.getElementById("tbdy").deleteRow(0);
  }
  display();
}

// Rating Funtion 

function generation1() {
  gen2 = "";
  for (let i = 0; i < txt.length; i++) {
    gen2 +=
      "<option value=" +
      i +
      ">" +
      txt[i].company +
      " " +
      txt[i].model +
      "</option>";
  }
  sele2.innerHTML = gen2;
}

let lst2 = 0;
let lst3 = 0;

function choice1(value) {
  lst2 = value;
}

function choice2(value) {
  lst3 = value;
}

function update1() {
  txt[lst2].Rating = lst3;
  for (let i = 0; i < txt.length; i++) {
    document.getElementById("tbdy").deleteRow(0);
  }
  display();
}

function generation2() {
  gen3 = "";
  for (let i = 0; i < txt.length; i++) {
    gen3 +=
      "<option value=" +
      i +
      ">" +
      txt[i].company +
      " " +
      txt[i].model +
      "</option>";
  }
  sele3.innerHTML = gen3;
}

// Bill Generation function 

let lst4 = 0

function bill_gen(value) {
  lst4 = value;
}

let bill_txt = ""
let body4 = document.getElementById("tbdy4");
let lst_bill = []

function add_bill() {
  if ((txt[lst4].Quantity < (Number(document.getElementById("bill_value").value))) || ((Number(document.getElementById("bill_value").value)) < 1)) {
    document.getElementById("p_foot").innerHTML = "Invalid Quantity"
  } else {
    row = body4.insertRow(-1);
    c0 = row.insertCell(0);
    c1 = row.insertCell(1);
    c2 = row.insertCell(2);
    c3 = row.insertCell(3);
    c4 = row.insertCell(4);
    c5 = row.insertCell(5);
    c6 = row.insertCell(6);
    c0.innerHTML = "<input type='checkbox'>";
    c1.innerText = txt[lst4].company;
    c2.innerText = txt[lst4].model;
    c3.innerText = txt[lst4].memory;
    c4.innerText = txt[lst4].price;
    c5.innerText = (Number(document.getElementById("bill_value").value));
    c6.innerText = txt[lst4].Rating;
    txt[lst4].Quantity -= (Number(document.getElementById("bill_value").value))
    document.getElementById("p_foot").innerHTML = ''
    lst_bill.push([lst4,Number(document.getElementById("bill_value").value)])
  }
  for (let i = 0; i < txt.length; i++) {
    document.getElementById("tbdy").deleteRow(0);
  }
  display()
}

let total_money = 0;
let total_product = 0;
function generate_bill(params) {
  for (let i = 0; i < lst_bill.length; i++) {
    total_product+=lst_bill[i][1]
    total_money+=(lst_bill[i][1]*txt[lst_bill[i][0]].price)
    
  }
  // console.log(total_product)
  // console.log(total_money)
  document.getElementById("p_foot").innerHTML = "<b>Total Price: "+total_money+" Total Product: "+total_product+"</b>";
}
// ------------------------------------------------------------------------------------------------------------------------------------