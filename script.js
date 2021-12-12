"use strict";
const nameSelect = document.getElementById("name"); //string
const dateSelect = document.getElementById("date"); //string
const amountSelect = document.getElementById("amount"); //string
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const table = document.getElementById("tbody");
//const tr = document.getElementById("trsecond");

nameSelect.value = "";
amountSelect.value = "";
dateSelect.value = "";

addBtn.addEventListener("click", function () {
  if (
    nameSelect.value != "" &&
    dateSelect.value != "" &&
    amountSelect.value != ""
  ) {
    //List name, date and amount in table. So I have to create a new tr and 3 <td> tags to add these to their respective places.

    //Declare this var outside the functions so they have access.
    const tr = document.createElement("tr");

    //This function creates a new <tr>
    const newTr = function () {
      tr.appendChild(document.createTextNode(""));
      table.appendChild(tr);
    };

    //This functin creates a <td> for the nameSelect field
    const expenseItem = function () {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(nameSelect.value));
      tr.appendChild(td);
    };

    //This function creates a <td> for the dateSelect Field.
    const dateItem = function () {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(dateSelect.value));
      tr.appendChild(td);
    };

    //This function creates a <td> for the amountSelect field.
    const amountItem = function () {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(amountSelect.value));
      tr.appendChild(td);

      //create delete button on items bug: Work on this tomm
      const del = document.createElement("button");
      del.innerHTML = "DONE";
      tr.appendChild(del);
      del.setAttribute("id", "xout");
      del.addEventListener("click", function () {
        tr.setAttribute("hidden", true);
      });
    };

    //The 4 funct call for above. Is there a better way for this.
    newTr();
    expenseItem();
    dateItem();
    amountItem();

    //Hide trfirst ('No expenses added yet text').
    const hidePreview = document.getElementById("trfirst");
    hidePreview.setAttribute("hidden", true);

    //Clear contents of cells on click if all field filled in
    nameSelect.value = "";
    amountSelect.value = "";
    dateSelect.value = "";
  } else {
    alert("Please enter all three fields.");
  }
});

//Code to clear text input field on click
clearBtn.addEventListener("click", function () {
  nameSelect.value = "";
  amountSelect.value = "";
  dateSelect.value = "";
});
