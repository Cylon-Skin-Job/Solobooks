let table = document.createElement('table');
table.className = "top-table invoices-table-unpaid";
let thead = document.createElement('thead');
thead.className = "table-head-row";
let tbody = document.createElement('tbody');
tbody.className = "row-hover";
tbody.setAttribute("id", "tbody");

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('table').appendChild(table);

$.ajax({
    method: 'GET',
    url: 'https://cylon-skin-job.github.io/Solobooks/data.json',
    success: function (response) {
        myArray = response.data
        buildTable(myArray)
        console.log(myArray)
    }
})

function buildTable(data) {
    var tableRow = document.getElementById('tbody')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
							<td class = "td-order-3">${data[i].iDate}</td>
							<td class = "td-order-4">${data[i].iNum}</td>
							<td class= "td-order-1">${data[i].iCus}</td>
                            <td class= "td-order-5">${data[i].iStat}</td>
                            <td class= "td-order-2">${data[i].iTotal}</td>
					</tr>`
        tableRow.innerHTML += row


    }
}