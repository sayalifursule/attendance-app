const form =
document.getElementById("attendanceForm");

const attendanceTable =
document.getElementById("attendanceTable");

const searchInput =
document.getElementById("searchInput");

const totalStudents =
document.getElementById("totalStudents");

const presentCount =
document.getElementById("presentCount");

const absentCount =
document.getElementById("absentCount");

let attendanceRecords =
JSON.parse(localStorage.getItem("attendance")) || [];

renderTable();

form.addEventListener("submit", function(e){

    e.preventDefault();

    const studentName =
    document.getElementById("studentName").value;

    const subject =
    document.getElementById("subject").value;

    const date =
    document.getElementById("date").value;

    const status =
    document.getElementById("status").value;

    const newRecord = {
        id:Date.now(),
        studentName,
        subject,
        date,
        status
    };

    attendanceRecords.push(newRecord);

    saveToLocalStorage();

    renderTable();

    form.reset();

});

function renderTable(filteredData = attendanceRecords){

    attendanceTable.innerHTML = "";

    filteredData.forEach((record)=>{

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${record.studentName}</td>

            <td>${record.subject}</td>

            <td>${record.date}</td>

            <td class="${
                record.status === "Present"
                ? "status-present"
                : "status-absent"
            }">

                ${record.status}

            </td>

            <td>

                <button
                class="delete-btn"
                onclick="deleteRecord(${record.id})">

                Delete

                </button>

            </td>
        `;

        attendanceTable.appendChild(row);

    });

    updateDashboard();

}

function deleteRecord(id){

    attendanceRecords =
    attendanceRecords.filter(
        record => record.id !== id
    );

    saveToLocalStorage();

    renderTable();

}

function updateDashboard(){

    totalStudents.innerText =
    attendanceRecords.length;

    const present =
    attendanceRecords.filter(
        record => record.status === "Present"
    ).length;

    const absent =
    attendanceRecords.filter(
        record => record.status === "Absent"
    ).length;

    presentCount.innerText = present;

    absentCount.innerText = absent;

}

function saveToLocalStorage(){

    localStorage.setItem(
        "attendance",
        JSON.stringify(attendanceRecords)
    );

}

searchInput.addEventListener("keyup", ()=>{

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    attendanceRecords.filter(record =>
        record.studentName
        .toLowerCase()
        .includes(value)
    );

    renderTable(filtered);

});