import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import AddEmployee from "./components/AddEmployee";

function App() {
  const [role, setRole] = useState("dev");
  const [name, setName] = useState("");

  const [employees, setEmployees] = useState([
    {
      id:1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/11883261/pexels-photo-11883261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:2,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:3,
      name: "John",
      role: "Software-engineer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:4,
      name: "Melania",
      role: "Web-developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:5,
      name: "Corey",
      role: "designer",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:6,
      name: "Jake",
      role: "manager",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);


  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if(id == employee.id) {
        return{...employee, name: newName, role: newRole};
      }

      return employee;
    } );
    setEmployees(updatedEmployees);
  }

  function NewEmployee(name, role, img) {

   const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    };

    setEmployees([...employees, newEmployee])
  }


  const showEmployee = true;
  return (
    <div className="App ">

      {showEmployee ? (
        <>
          <div className="flex flex-wrap justify-center">

            {employees.map((employee) => {

              return (
                <Employee
                  key = {employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>

          < AddEmployee newEmployee={NewEmployee }/>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
