import PropTypes from "prop-types"

export const StudentInfo = ({student}) => {
  return (
    <div className="">
      <p><b>Имя:</b> {student.name}</p>
      <p><b>Фамилия:</b> {student.lastName}</p>
      <p><b>Год рождения:</b> {student.birth}</p>
      <p><b>Портфолио:</b> <a href={student.portfolioUrl}>{student.portfolioUrl}</a></p>
    </div>
  )
}

StudentInfo.propTypes = {
  student: PropTypes.object
}
