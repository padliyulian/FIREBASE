 // Initialize Firebase
 var config = {
  
 };
 firebase.initializeApp(config);

 let db = firebase.database();
 let refDB = db.ref('students');

 refDB.on('value', resolveData, rejectData);
 refDB.on('child_added', function () {
     return console.log('user baru berhasil nambah');
 });

 function resolveData(data) {
     let students = data.val();
     buildList(students);
 }

 function rejectData(err) {
     console.log(err);
 }

 const buildList = (students) => {
     let data = '';
     students.forEach(student => {
         data +=
             `
        <ul>
          <li>nama : ${student.name}</li>
          <li>jurusan : ${student.study}</li>
        </ul>
      `;
     });

     document.querySelector('.list').innerHTML = data;
 }
