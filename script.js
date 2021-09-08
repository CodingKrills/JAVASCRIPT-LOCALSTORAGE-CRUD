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
      let arr = JSON.parse(localStorage.getItem("crud"));
			arr[id]=name;
			localStorage.setItem("crud", JSON.stringify(data));
			document.getElementById('msg').innerHTML='Data updated';
    }
  }
  document.getElementById("name").value = "";
  selectData();
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
        `<tr>
        <td>${sno}</td>
        <td>${arr[k]}</td>
        <td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;</td>
        <td><a href='javascript:void(0)' onclick="deleteData(${k})">DELETE</a></td>
        </tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = html;
  }
}

function editData(eid){
	id=eid;
	let arr=JSON.parse(localStorage.getItem('crud'));;
	document.getElementById('name').value=arr[eid];
}

function deleteData(id) {
  alert("DELETE CALL");
  alert(id);

  // * Get all The Data
  let arr = JSON.parse(localStorage.getItem("crud"));

  arr.splice(id, 1);

  // * Set The Updated Data

  localStorage.setItem("crud", JSON.stringify(arr));
  selectData();
}
