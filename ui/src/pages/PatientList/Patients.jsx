import React, {useEffect, useState} from 'react'
import './Patients.css'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function Patients() {

  const [patients, setPatients] = useState([]);
  const [isLoad, setIsLoad] = useState(false);


  const fetchPatients = async () =>{
    const response = await axios.get('http://127.0.0.1:8000/patient').catch(err=>console.log(err));
    setPatients(response.data);
    setIsLoad(!isLoad);
  }

  useEffect(() => {
    fetchPatients();
  }, []);
  


  // const [data, setData] = useState(patients);
  const handleDelete = async (id) =>{
    // setData(data.filter(item=>item.id !== id));

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const response = axios.delete("http://127.0.0.1:8000/patient/" + id).catch((err) => console.log(err));
            window.location.reload(true);
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
    
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'FirstName',
      headerName: 'First Name',
      width: 150,
      editable: true,
    },
    {
      field: 'LastName',
      headerName: 'Last Name',
      width: 150,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.FirstName || ''} ${params.row.LastName || ''}`,
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'Career',
      headerName: 'Career',
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) =>{
        return(
          <>
            <Link to={"/patient/"+params.row.id}>
              <button className='patientListEdit'>Edit</button>
            </Link>
            
            <AiOutlineDelete className='patientListDelete' onClick={()=>handleDelete(params.row.id)}/>
          </>
          
        )
      }
    },
  ];
  
  if(!isLoad){
    return (
      <h1 className='Loading'>Loading Page</h1>
    );
  }

  return (
    <div className='patientList'>
      <div className="patientTitleContainer">
        <h1 className='patientTitle'>Patients</h1>
        <Link to="/newPatient">
          <button className="patientAddBtn">Create Patient</button>
        </Link>
      </div>
      <DataGrid
        rows={patients}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
