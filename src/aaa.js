

function buildInvoices() {
    document.getElementById('siteH3').innerText = 'Invoices';
    document.getElementById('mainTableBody').innerHTML = "";
    document.getElementById('navInvoices').className = 'active';
    document.getElementById('siteContentMain').style.display = 'block'; // set the Invoices div to show content;
    buildRowInvoices();
  
    document.getElementById('plusButton').style.display = 'block';
    document.getElementById('plusButton').innerHTML = `
    <button class = "plusButton" id = "newInvoice">
        <span class = "iconPlusButton"></span>
        <span class = "buttonText">Invoice</span> 
    </button> `;
  
    document.getElementById('whitespace').innerHTML = 
    `<input type="text" id="searchBox" class="searchBox" onkeyup="searchTable()" placeholder="Search...">
    <button class="closeIcon" onclick="clearSearch()">X</button>
    <span class="material-symbols-outlined searchIcon">search</span>
    <button class = "blueLinkButton" onclick = "itemTemplates()">Manage Templates</button>`;
  
    document.getElementById('mainTableHead').innerHTML = `<tr class = "tableHeadRow">
                                    <th class="tdOrder3">DATE</th>
                                    <th class="tdOrder4">NUMBER</th>
                                    <th class="tdOrder1">CUSTOMER</th>
                                    <th class="tdOrder2">AMOUNT</th>
                                    <th class="tdOrder5">STATUS</th>
                                </tr>`
  
    const element = document.getElementById("newInvoice");
    element.addEventListener("click", () => {
      console.log("New Invoice")
      document.getElementById('previewInvoiceSlider').style.height = '100%';
      newInvoicePreview = true;
      buildInvoicePreview();
      buildInvoiceEdit();
      location.hash = `#newInvoice${invoiceNumber}`;
    })
  }
  
  function buildRowInvoices() {
  
    let data = invoicesDb;
  
    function compareStrings(a, b) {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
  
    data.sort(function (a, b) {
        return compareStrings(b.invoiceDate, a.invoiceDate);
    })
  
    data.sort(function (a, b) {
        if (a.invoiceDate === b.invoiceDate) {
            return compareStrings(b.invoiceNumber, a.invoiceNumber);
        }
    })
  
  let invoiceTotal = 390
    for (var i = 0; i < data.length; i++) {
  
        // let invoiceTotal = invoiceTotalFromLocation(i);
        let row;
        if (data[i].payment === true) {
                row = `<tr class="tableRow">
              <td class = "tdOrder3">${formatDate(data[i].invoiceDate)}
                            <a href = "#previewInv${data[i].invoiceNumber}" class = "rowLink" ></a></td >
              <td class = "tdOrder4">${data[i].invoiceNumber}</td>
              <td class= "tdOrder1">${data[i].customerName}</td>
                            <td class= "tdOrder2">$${invoiceTotal.toFixed(2)}</td>
                            <td class= "tdOrder5 green">PAID</td>
          </tr>`;
            
        } else if (data[i].payment === false) {
            row = `<tr class="tableRow">
              <td class = "tdOrder3">${formatDate(data[i].invoiceDate)}
                            <a href = "#previewInv${data[i].invoiceNumber}"
                            class = "rowLink" ></a></td >
              <td class = "tdOrder4">${data[i].invoiceNumber}</td>
              <td class= "tdOrder1">${data[i].customerName}</td>
                            <td class= "tdOrder2">$${invoiceTotal.toFixed(2)}</td>
                            <td class = "tdOrder5 red">OPEN</td>
          </tr>`;
  
        } 
        document.getElementById('mainTableBody').innerHTML += row;
        }
  
  }

// Preview Invoice
function buildInvoicePreview() {
document.getElementById('previewInvoiceSlider').innerHTML = 
              
              `<div id="previewInv" class="previewInvoice">  
                <button class="buttonBack" onclick="killPreviewInvoice()">
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
                <h3 class="previewInvoiceH3" id="previewInvoiceH3"></h3>
                <button class="buttonToggle" onclick="togglePageView()">
                    <span class="material-symbols-outlined">pageview</span>
                </button>
                <button class="buttonExit" onclick="killPreviewInvoice()">
                    <span class="material-symbols-outlined">close</span>
                </button>

                <!-- Preview Summary -->
                <table class="tableInvoiceSummary">
                    <tbody id="tbodyinvoiceSummary">
                        <tr class="tableRowInvoiceSummary">
                            <td>Date</td>
                            <td id="invoiceSummaryDate"></td>
                        </tr>
                        <tr class="tableRowInvoiceSummary">
                            <td>Customer</td>
                            <td id="invoiceSummaryName"></td>
                        </tr>
                        <tr class="tableRowInvoiceSummary">
                            <td>Total</td>
                            <td id="invoiceSummaryTotal"></td>
                        </tr>
                        <tr class="tableRowInvoiceSummary">
                            <td>Status</td>
                            <td id="invoiceSummaryStatus"></td>
                        </tr>
                    </tbody>
                </table>

                <!-- Preview Footer-->

                <div class="previewInvoiceFooter">
                    <button class="buttonClose button" onclick="killPreviewInvoice()">
                        Close
                    </button>
                    <button id="myBtn" class="buttonDelete button" onclick="deleteInvoice()">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                    <button class="buttonDL button" onclick="dlPDF()">
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </button>
                    <button class="buttonPrint button" onclick="printPDF()">
                        <span class="material-symbols-outlined">
                            print
                        </span>
                    </button>
                    <button class="buttonPayment button" onclick="buildInvoicePayment()">
                            <span class="material-symbols-outlined">
                                price_check
                            </span>
                    </button>
                    <button class="buttonEdit button" onclick="buildInvoiceEdit()">
                        Edit
                    </button>
                </div>

                <!-- Invoice Page-->

                <div id="invoicePageWrapper" class="invoicePageWrapper">
                    <!-- Font Set Within this class using vw vh to scale -->

                    <div class="invoicePageCompany">
                        <p id="companyName"></p>
                        <address id="companyAddress">
                        </address>
                    </div>

                    <!--Company Logo-->
                    <div class="invoicePageLogoWidth">
                        <div class="invoicePageLogoHeight">
                            <img src="https://cylon-skin-job.github.io/Solobooks/companyLogo.png" alt="Company Logo"
                                class="invoicePageLogo">
                        </div>
                    </div>


                    <!--Customer Address-->
                    <div class="invoicePageCustomer">
                        <h6 class="invoiceH6">BILL TO:</h6>
                        <p id="invoiceName"></p>
                        <address class="address" id="invoiceAddress">
                        </address>
                    </div>

                    <!--Invoice # and date -->
                    <div class="invoicePageDate">
                        <h5 class="invoicePageH5">INVOICE</h5>
                        <table class="invoicePageTable1">
                            <tbody>
                                <tr>
                                    <td>
                                        Invoice No.
                                    </td>
                                    <td id="invoiceNum">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Date
                                    </td>
                                    <td id="invoiceDate">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Item descriptions and amount -->
                    <div class="invoicePageDescription">
                        <div class="preDescriptionAmount">
                            <span class="iDesc">
                                Description
                            </span>
                            <span class="iAmount">
                                Amount
                            </span>
                        </div>

                        <div id="invoiceTableItem1" class="i1"></div>
                        <div id="invoiceTableAmount1" class="a1"></div>

                        <div id="invoiceTableItem2" class="i2"></div>
                        <div id="invoiceTableAmount2" class="a2"></div>

                        <div id="invoiceTableItem3" class="i3"></div>
                        <div id="invoiceTableAmount3" class="a3"></div>

                        <div id="invoiceTableItem4" class="i4"></div>
                        <div id="invoiceTableAmount4" class="a4"></div>

                        <div id="invoiceTableItem5" class="i5">
                        </div>
                        <div id="invoiceTableAmount5" class="a5">
                        </div>

                        <div id="invoiceTableItem6" class="i6">
                        </div>
                        <div id="invoiceTableAmount6" class="a6">
                        </div>

                        <div class="iT">
                            Total
                        </div>
                        <div class="iTotal" id="invoiceTotal">
                        </div>
                    </div>

                    <!--Footer-->

                    <div class="invoicePageFooter">
                        <address>Phone: (867) 867-5309 | Email: accountspayable@rcexhaust.com</address>
                    </div>
                </div>
            </div> `
  var tablet = window.matchMedia("(max-width: 1024px)");
  if (tablet.matches) { // If media query matches
      document.getElementById('previewInvoiceSlider').style.width = '100%';
      document.getElementById('previewInv').style.display = 'block';
  } else {
      document.getElementById('previewInvoiceSlider').style.height = '100%';
      document.getElementById('previewInv').style.display = 'grid';
  }
  if (location.hash.charAt(1) === "i") {
      resetDataVariables();
  }
  drawInvoice();
}
