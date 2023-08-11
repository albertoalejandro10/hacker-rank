function gradingStudents (grades) {
  const roundedGrades = grades.map(grade => {
    if (grade < 38) {
      return grade
    } else {
      const remainder = grade % 5
      if (remainder >= 3) {
        grade = grade + (5 - remainder)
        return grade
      } else {
        return grade
      }
    }
  })
  return roundedGrades
}

const grades = [73, 67, 38, 33]
gradingStudents(grades)
