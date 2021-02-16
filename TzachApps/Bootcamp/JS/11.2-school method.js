//Tzach Mordechai.  

const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};



// 1. A method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.

school.findPerson = function (type, id) {
  return this[type].filter(person => person.id === id)[0];
};
console.log(school.findPerson("students", 13));

// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject.
// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.
school.assignStudent = function (id, subject) {
  let theTeacher = this['teachers'].find(teacher => teacher.subjects.includes(subject) && teacher.capacityLeft > 0);
  theTeacher.capacityLeft-=1;
  theTeacher.students.push(id);
  return theTeacher || 'Sorry, no available teachers left'
};
console.log(school.assignStudent(13, 'history'));

// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects
school.assignTeachersSubject = function (teacherId, subject) {
  let theTeacher = this['teachers'].find(teacher => teacher.id===teacherId && !teacher.subjects.includes(subject) );
  theTeacher.subjects.push(subject);
  return theTeacher;
};
console.log(school.assignTeachersSubject(1, 'history8'));

// 4. Create a new method of anything you want.

school.isTeachersSubject = function (teacherId, subject) {
  let theTeacher = this['teachers'].find(teacher => teacher.id===teacherId && teacher.subjects.includes(subject) );  
  return typeof(theTeacher) != "undefined"  ;
};
console.log(school.isTeachersSubject(1, 'history9'));
