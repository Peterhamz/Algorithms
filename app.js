const student1 = {
  id: 1,
  name: "Reed",
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }
}
// constructor function
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;  
    setTimeout(student1, 10000)
  }
  
  Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];   
  }
  
  const student2 = new Student(1, 'Reed');
  const student3 = new Student(2, 'Doug');
  
  student2.addSubject('Math');
  student3.addSubject('Physics');
  console.log(student3.subjects);

  console.error("Error occured")

  // 
  // Fetching catching, and handling Error from an endpoint

  fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  })
  .then(person => {
      console.log(`${person.name} works for ${person.company.name}`);
  })
  .catch(err => console.log(err));