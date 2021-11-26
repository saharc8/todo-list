let priority = "Normal";

function setPriority(p) {
  priority = p;
  document.getElementById("ddbtn").innerHTML = priority;
}

var priorityMap = {
  Urgent: { key: 1, value: "red" },
  Critical: { key: 2, value: "orange" },
  Normal: { key: 3, value: "green" },
  "If You Can": { key: 4, value: "blue" },
};

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

window.addEventListener("keypress", checkKeyPressed, false);

function checkKeyPressed(k) {
  if (k.keyCode == "13") {
    newElement();
  }
}

function newElement() {
  var li = document.createElement("li");
  li.setAttribute("id", priorityMap[priority].key);
  var inputValue = document.getElementById("myTODO").value + " - ";
  li.innerHTML =
    inputValue +
    '<font color="' +
    priorityMap[priority].value +
    '">' +
    priority +
    "</font>";
  if (
    document.getElementById("myTODO").value.length < 6 ||
    document.getElementById("myTODO").value.length > 42
  ) {
    alert("The value must between 6-42 chars");
  } else {
    document.getElementById("list").appendChild(li);
  }

  function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("list");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("LI");
      for (i = 0; i < b.length - 1; i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }

  sortList();

  var elems = $("#list").children("li").remove();
  elems.sort(function (a, b) {
    return a.id - b.id;
  });
  $("#list").append(elems);

  document.getElementById("myTODO").value = "";
}
