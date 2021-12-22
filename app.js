
// developers function
const somrat = document.querySelector('.developers-team');

devs.map(data => {
    somrat.innerHTML +=`

    <div class="developers-item">
    <div class="developers-picture">
        <img src="${data.photo}"
            alt="Nina Cooper">
    </div>
    <div class="devs-content">
        <h2>${data.name}</h2>
        <h3>Age: ${data.age}</h3>
        <h4>${data.skill}</h4>
        <p>${data.position}</p>
        <span>${data.location}</span>
    </div>
    </div>

    `;
});

// students function

const teacher = document.querySelector('.students-team');

students.map(data =>{
    teacher.innerHTML +=`

    <div class="students-item">
    <div class="students-box">
        <div class="students-picture">
            <img src="${data.photo}"
                alt="Nina Cooper">
        </div>
        <div class="students-content">
            <h2>${data.name}</h2>
            <p>Age: ${data.age}</p>
            <p><span>Class: ${data.class}</span> <Span>Roll: ${data.roll}</Span></p>
            <span>Location: ${data.location}</span>
        </div>
    </div>
    </div>


    `;
})

// phnbook function

const number = document.querySelector('.phnnumber-box tbody ');

phnbook.map((data, index) =>{
    number.innerHTML +=`
    <tr>
        <td>${index+1}</td>
        <td>${data.name}</td>
        <td>${data.relationship}</td>
        <td>${data.location}</td>
        <td>${data.phnnumber}</td>
        <td><img src="${data.picture}" alt="somrat"></td>
    </tr>
    `
})
// End