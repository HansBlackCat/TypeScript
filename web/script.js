window.onload = function() {
    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth(); // 0-11
    var year = d.getFullYear(); 
    var first_date = month_name[month] + " " + 1 + " " + year; // ex January 1 2020
    var tmp = new this.Date(first_date).toDateString;
    var first_day = tmp.substring(0, 3); // Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day); //1
    var days = new this.Date(year, month+1, 0).getDate(); //30
    var calendar = this.get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');

    // row
    for (var i = 0; i <= 6; i++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);

    // 2nd row
    tr = document.createElement('tr');
    var c;
    for (i=0; i<=6; i++) {
        if (c==day_no)  {
            break;
        }
        var td = document.createElement('ts');
        td.innerHTML="";
        tr.appendChild(td);
    }
    var count = 1;
    for (; i<=6; i++) {
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    // rest
    for (var j=3; j<6; j++) {
        tr = document.createElement('tr');
        for (var k=0; k<=6; k++) {
            if (count > days) {
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}