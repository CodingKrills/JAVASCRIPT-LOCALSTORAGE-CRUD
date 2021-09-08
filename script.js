let id = "";

localStorage.clear();
selectData();

function manageData() {
  document.getElementById("msg").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("msg").innerHTML = "Name is required !";
  } else {
    if (id == "") {
      let arr = JSON.parse(localStorage.getItem("crud"));
      console.log(arr);
      if (arr == null) {
        let data = [name];
        localStorage.setItem("crud", JSON.stringify(data));
      } else {
        arr.push(name);
        localStorage.setItem("crud", JSON.stringify(arr));
      }

      document.getElementById("msg").innerHTML = "Data Added !";
    } else {
    }
  }
  selectData();
  document.getElementById("name").value = "";
}

function selectData() {
  // get data
  let arr = JSON.parse(localStorage.getItem("crud"));

  if (arr != null) {
    let html = "";
    let sno = 1;
    for (let k in arr) {
      html =
        html +
        `<tr><td>${sno}</td><td>${arr[k]}</td></td><td><a href='javascript:void(0)' onclick="deleteData()">DELETE</a></td></tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = html;
  }
}

function editData() {}

function deleteData() {}
