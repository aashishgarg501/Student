import React, { useState } from 'react';
import './Student.css';
import Data from '../StudentsData.json';
const Student = () => {
    const [value, setvalue] = useState("");
    const [count, setcount] = useState(Data);
    const [tableFilter, setTableFilter] = useState([]);

    const ChangeFun = (e) => {
        if (e.target.value != "") {
            setvalue(e.target.value);
            const filterTable = count.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        }
        else {
            setvalue(e.target.value);
            setcount([...count])
        }
    }
    return (<>

        <div className="main-div">
            <h1>Student Data List</h1>
            <input type="text" placeholder='Search...' value={value} onChange={ChangeFun} />


            <div className='second-div'>
                <table>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>

                        <th>Class</th>
                        <th>Age</th>

                    </tr>


                    {value.length > 0 ? tableFilter.map((abc) => {
                        return (<tr> <td>{abc.RollNumber}</td>
                            <td>{abc.Name}</td>
                            <td>{abc.Class}</td>
                            <td>{abc.Age}</td>
                        </tr>)

                    })
                        :
                        count.map((abc) => {
                            return (<tr> <td>{abc.RollNumber}</td>
                                <td>{abc.Name}</td>
                                <td>{abc.Class}</td>
                                <td>{abc.Age}</td>
                            </tr>)

                        })
                    }





                </table>
            </div>

        </div>
    </>);
}

export default Student;