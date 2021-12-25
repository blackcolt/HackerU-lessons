SELECT students.id, students.name, grades.grade, lessons.name
FROM students
INNER JOIN grades ON students.id=grades.student_id
INNER JOIN lessons ON lessons.id=grades.lesson_id
ORDER BY grades.grade DESC

