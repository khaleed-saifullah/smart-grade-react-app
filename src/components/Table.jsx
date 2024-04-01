import data from "../utils/studentData";
const Table = () => {
  const classOneStudents = data.filter((student) => student.class == 1);
  const classTwoStudents = data.filter((student) => student.class == 2);
  return (
    <div className="student-table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Scroes</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-dark text-white" colSpan="4">
              Class One
            </td>
          </tr>

          {classOneStudents.map((student, index) => {
            return (
              <tr key={index}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.score}</td>
                <td>{student.percentage}</td>
              </tr>
            );
          })}

          <tr>
            <td className="bg-dark text-white" colSpan="4">
              Class Two
            </td>
          </tr>
          {classTwoStudents.map((student, index) => {
            return (
              <tr key={index}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.score}</td>
                <td>{student.percentage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
