console.log("script")

let siteHash;
window.addEventListener('load', function () {
    location.hash = "#overview";
    siteHash = "#overview";
    buildOverview()
    alert("Version 05.08.2023");
})



// Overview

/* function buildOverview() {
    document.getElementById('siteH3').innerText = 'Overview';
    document.getElementById('navOverview').className = 'active'; // set navigation to light purple
    document.getElementById('siteContentOverview').style.display = 'flex'; // set the Overview div to show content;
    buildCards();
    overviewSelectMonitor();
}

function buildCards() {

    updateInvoiceTotals();
    let paid = invoicesTotalPaid;
    document.getElementById('overviewPaidTotal').innerText = "";
    document.getElementById('overviewPaidTotal').innerText = `$${paid.toFixed(2)}`;

    let unpaid = invoicesTotalUnpaid;
    document.getElementById('overviewUnpaidTotal').innerText = "";
        document.getElementById('overviewUnpaidTotal').innerText = `$${unpaid.toFixed(2)}`;  //Invoice card total

    let expenses = expenseTotalFromDatabase();
    let profit = paid - expenses;

    if (paid === 0 && expenses === 0) {
        document.getElementById('overviewBarPayments').style.height = '0px'; // Payments set to full height
        document.getElementById('overviewBarExpenses').style.height = '0px';
        document.getElementById('overviewBarProfit').style.height = '0px';
    }else if (paid > expenses) {
        document.getElementById('overviewBarPayments').style.height = '200px'; // Payments set to full height
        let expenseBar = expenses / (paid / 200) + "px"; // Math to determine what portion of 200px is proportional
        document.getElementById('overviewBarExpenses').style.height = expenseBar;
        let profitBar = profit / (paid / 200) + "px"; // Math to determine what portion of 200px is proportional
        document.getElementById('overviewBarProfit').style.height = profitBar;
    } else {
        document.getElementById('overviewBarExpenses').style.height = '200px';
        let paymentBar = paid / (expenses / 200) + "px";
        document.getElementById('overviewBarPayments').style.height = paymentBar;
        document.getElementById('overviewBarProfit').style.height = '0px'; // if expenses are higher than payments, profit bar set to 0px;
    }

    let increment = Math.floor((paid + unpaid) / 100);
    let paidPercent = Math.floor(paid / increment);
    let unpaidPercent = Math.floor(unpaid / increment);

    document.getElementById('invoiceBarPaid').style.width = "0px";
    document.getElementById('invoiceBarUnpaid').style.width = "0px";

    document.getElementById('invoiceBarPaid').style.width = `${paidPercent}%`;
    document.getElementById('invoiceBarUnpaid').style.width = `${unpaidPercent}%`;
    document.getElementById('overviewPayments').innerHTML = `$${paid.toFixed(2)}`;
    document.getElementById('overviewExpenses').innerHTML = `$${expenses.toFixed(2)}`;
    document.getElementById('overviewProfit').innerHTML = `$${profit.toFixed(2)}`;

    expensesCard(db[3].expenses); // adds data to Expense Card
    paymentRows();

}

// Overview Functions

function updateInvoiceTotals() { // checks invoice section of db for paid invoices and returns a total which is passed to invoicesPaidTotal above
    var counterPaid = 0;
    var counterUnpaid = 0; // counter is placeholder for the amount to be returned after loop finishes

    for (var i = 0; i < invoices.length; i++) {

        let payment = invoices[i].amount1;
        let date = invoices[i].invoiceDate;

        if (payment === true && date <= sortDateTop && date >= sortDateBottom) { // loop checks each invoices for "true" and if so adds that invoice total to the counter

            let newPaid = invoiceTotalFromLocation(i);
            counterPaid += newPaid;
        } else if (payment === false && date <= sortDateTop && date >= sortDateBottom) {
             let newUnpaid = invoiceTotalFromLocation(i);
             counterUnpaid += newUnpaid;
        }
    }
    invoicesTotalPaid = counterPaid;
    invoicesTotalUnpaid = counterUnpaid;
} /*

