const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle");


toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    })
    //======================================================
    //changing profile picture
const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#propic');
const file = document.querySelector('#file');
const uploadbtn = document.querySelector('#uploadbtn');
//hover on profile pic
imgDiv.addEventListener('mouseenter', function() {
    uploadbtn.style.display = "block";
});
//hover out profile pic
imgDiv.addEventListener('mouseleave', function() {
    uploadbtn.style.display = "none";
});

//photo upload
file.addEventListener('change', function() {
    const chooseFile = this.files[0];
    if (chooseFile) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(chooseFile);
    }
});
//=========================================================
//changing header picture
const imgH = document.querySelector('.headerContainer');
const imgs = document.querySelector('#headerp');
const files = document.querySelector('#headImg');
const uploadHeaderbtn = document.querySelector('#uploadHeader');
//hover on profile pic
imgH.addEventListener('mouseenter', function() {
    uploadHeaderbtn.style.display = "block";
});
//hover out profile pic
imgH.addEventListener('mouseleave', function() {
    uploadHeaderbtn.style.display = "none";
});

//photo upload
files.addEventListener('change', function() {
    const choosen = this.files[0];
    if (choosen) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            imgs.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosen);
    }
});
//==========================================
var indexValue = 1;
showblogbox(indexValue);

function btn_slide(e) {
    showblogbox(indexValue = e);
}

function side_slide(e) {
    showblogbox(indexValue += e);
}

function showblogbox(e) {
    var i;
    const blog_box = document.querySelectorAll('blog_box');
    const sliders = document.querySelectorAll('number_list span');
    if (e > blog_box.length) {
        indexValue = 1
    }
    if (e < 1) {
        indexValue = blog_box.length
    }
    for (i = 0; i < blog_box.length; i++) {
        blog_box[i].style.display = "none";

    }
    blog_box[indexValue - 1].style.display = "block";


}



//blog content



function myDate() {
    const ID = Date.now();
    return ID;
}
document.getElementById("btnaddEmployee").addEventListener("click", function(event) {
    event.preventDefault()
    var EmployeeID = myDate();
    var EmployeeName = document.getElementById("txtEmployeeName").value;
    var Address = document.getElementById("txtAddress").value;
    var PostalCode = document.getElementById("txtPostalCode").value;
    var btneditId = "btnedit" + EmployeeID;
    var btndeleteId = "btndelete" + EmployeeID;
    var tablerow = "<tr Id='" + EmployeeID + "'   data-EmployeeID='" + EmployeeID + "'   data-EmployeeName='" + EmployeeName + "' data-Address='" + Address + "'   data-PostalCode='" + PostalCode + "'>"

    +"<td class='td-data'>" + EmployeeID + "</td>" +
        "<td class='td-data'>" + EmployeeName + "</td>" +
        "<td class='td-data'>" + Address + "</td>" +
        "<td class='td-data'>" + PostalCode + "</td>" +
        "<td class='td-data'>" +
        "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" + EmployeeID + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + EmployeeID + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>" +
        "</td>" +
        "</tr>";
    debugger;
    document.getElementById('tblbody').innerHTML += tablerow;
    document.getElementById('txtEmployeeName').value = "";
    document.getElementById('txtAddress').value = "";
    document.getElementById('txtPostalCode').value = "";
});

function showeditrow(EmployeeID) {
    debugger;
    var EmployeeRow = document.getElementById(EmployeeID); //this gives tr of  whose button was clicked

    var data = EmployeeRow.querySelectorAll(".td-data");

    /*returns array of all elements with
    "row-data" class within the row with given id*/

    var EmployeeID = data[0].innerHTML;
    var EmployeeName = data[1].innerHTML;
    var Address = data[2].innerHTML;
    var PostalCode = data[3].innerHTML;
    var btneditId = "btnedit" + EmployeeID;
    data[0].innerHTML = '<input name="txtupdate_EmployeeID"  disabled id="txtupdate_EmployeeID" value="' + EmployeeID + '"/>';
    data[1].innerHTML = '<input name="txtupdate_EmployeeName" id="txtupdate_EmployeeName" value="' + EmployeeName + '"/>';
    data[2].innerHTML = '<input name="txtupdate_Address" id="txtupdate_Address" value="' + Address + '"/>';
    data[3].innerHTML = '<input name="txtupdate_PostalCode" id="txtupdate_PostalCode" value="' + PostalCode + '"/>';

    data[4].innerHTML =
        "<button class='btn btn-primary btn-xs btn-updateEmployee' onclick='updateemployees(" + EmployeeID + ")'>" +
        "<i class='fa fa-pencil' aria-hidden='true'></i>Update</button>" +
        "<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancelupdate(" + EmployeeID + ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>" +
        "<button class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + EmployeeID + ")'>" +
        "<i class='fa fa-trash' aria-hidden='true'></i>Delete</button>"
}

function cancelupdate(EmployeeID) {
    debugger;
    var btneditId = "btnedit" + EmployeeID;
    var btndeleteId = "btndelete" + EmployeeID;

    var EmployeeRow = document.getElementById(EmployeeID); //this gives tr of  whose button was clicked
    var data = EmployeeRow.querySelectorAll(".td-data");

    var EmployeeName = EmployeeRow.getAttribute("data-EmployeeName");
    var Address = EmployeeRow.getAttribute("data-Address");
    var PostalCode = EmployeeRow.getAttribute("data-PostalCode");


    data[0].innerHTML = EmployeeID;
    data[1].innerHTML = EmployeeName;
    data[2].innerHTML = Address;
    data[3].innerHTML = PostalCode;

    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" + EmployeeID + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + EmployeeID + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[4].innerHTML = actionbtn;
}

function deleteEmployeeRow(EmployeeID) {
    document.getElementById(EmployeeID).remove();
}

function updateemployees(EmployeeID) {
    var btneditId = "btnedit" + EmployeeID;
    var btndeleteId = "btndelete" + EmployeeID;

    var EmployeeRow = document.getElementById(EmployeeID); //this gives tr of  whose button was clicked
    var data = EmployeeRow.querySelectorAll(".td-data");

    var EmployeeName = data[1].querySelector("#txtupdate_EmployeeName").value;
    var Address = data[2].querySelector("#txtupdate_Address").value;
    var PostalCode = data[3].querySelector("#txtupdate_PostalCode").value;


    data[0].innerHTML = EmployeeID;
    data[1].innerHTML = EmployeeName;
    data[2].innerHTML = Address;
    data[3].innerHTML = PostalCode;

    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" + EmployeeID + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + EmployeeID + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[4].innerHTML = actionbtn;
}








//page control

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id)

        })
    }
}

function SwitchPage(page_id) {
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}

//rich text
const elements = document.querySelectorAll('.btn');

elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];
        if (command == 'createLink' || command == 'insertImage') {
            let url = prompt('Enter the link here', 'http://');
            document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null);

        }
    });
});

//search
$('#search-put').on('keyup', function() {
        var value = $(this).val()
        console.log('Value:', value)
    })
    //=================



//expert report
'use strict';

var numberOfItems = $('#page .list-group').length; // Get total number of the items that should be paginated
var limitPerPage = 4; // Limit of items per each page
$('#page .list-group:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits (e.g., 5th item, 6th item, etc.)
var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>"); // Add first page marker

// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)
for (var i = 2; i <= totalPages; i++) {
    $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
}

// Add next button after all the page numbers  
$(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

// Function that displays new items based on page number that was clicked
$(".pagination li.current-page").on("click", function() {
    // Check if page number that was clicked on is the current page that is being displayed
    if ($(this).hasClass('active')) {
        return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
    } else {
        var currentPage = $(this).index(); // Get the current page number
        $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
        $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
        $("#page .list-group").hide(); // Hide all items in loop, this case, all the list groups
        var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

        // Loop through total items, selecting a new set of items based on page number
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
        }
    }

});

// Function to navigate to the next page when users click on the next-page id (next page button)
$("#next-page").on("click", function() {
    var currentPage = $(".pagination li.active").index(); // Identify the current active page
    // Check to make sure that navigating to the next page will not exceed the total number of pages
    if (currentPage === totalPages) {
        return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
    } else {
        currentPage++; // Increment the page by one
        $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
        $("#page .list-group").hide(); // Hide all items in the pagination loop
        var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

        // Loop through total items, selecting a new set of items based on page number
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
        }

        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
    }
});

// Function to navigate to the previous page when users click on the previous-page id (previous page button)
$("#previous-page").on("click", function() {
    var currentPage = $(".pagination li.active").index(); // Identify the current active page
    // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
    if (currentPage === 1) {
        return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
    } else {
        currentPage--; // Decrement page by one
        $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
        $("#page .list-group").hide(); // Hide all items in the pagination loop
        var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

        // Loop through total items, selecting a new set of items based on page number
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#page .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
        }

        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
    }
});

//drop down select
function getSelectValue() {
    var selectedValue = document.getElementById("listDumb").value;
    console.log(selectedValue);
}
getSelectValue();





//====================pie charts================================//