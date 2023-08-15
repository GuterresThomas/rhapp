import {  } from "react";


export default function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        birthdate: '',
        gender: '',
        marital_status: '',
        cpf: '',
        address: '',
        phone: '',
        email: '',
        position: '',
        department: '',
        hire_date: '',
        salary: '',
    })

    const fetchEmployees = async () => {
        const response = await fetch('http://localhost:3000/employee')
        const data = await response.json()
        setEmployees(data)
    }

    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <div>
            
        </div>
    )
}