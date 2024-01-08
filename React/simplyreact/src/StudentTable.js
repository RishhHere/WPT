import React from 'react';

export default class StudentTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{name:"Allen", marks:80}, {name:"Gail", marks:85}, {name:"Musk", marks:85}, {name:"Christopher", marks:80}],
    };
  }
  deleteStudent = (index) => {
    this.setState({
      data: this.state.data.filter((student, idx) => idx !== index),
    });
  };
  render() {
    return (  
    <div class="p-3 mb-2 bg-warning text-dark">  
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Delete Row</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td><button onClick={() => this.deleteStudent(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}