MYSQL HOMEWORKS
- Create a new DB called (school_of_rock)
- Create 3 tables 
  
* Studends[
    id,
    name,
    birthday (date)
* ]
  
* Lessons(שיעורים (כמו מתמטיקה, אנגלית וכדומה))[
    id,
    name,
     class
* ]
  
* Grades[
    id, 
    studend.id (connected to students (id) as a forign key)
    lesson.id (connected to lessons (id) as a forign key)
* ]

(In the next lesson we will learn how to constraint two fields together so a student can't have two grades on the same lesson (field) (If you manage to do it yourself - GREAT!)

Add at least 10 students 
Add at lest 5 lossons
Add one grade to each student in each lessone.

Queries 
 - Get all students.
 - Get all lessons.
 - Get all Grades.
 - Get The Maximum grade from grades table.
 - Get The min Grade from grades table.
 - Get the last student that insrted into students table.


 - Get the name of the student that got the highst score.
