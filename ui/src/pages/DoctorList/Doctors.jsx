import React, {useEffect, useState} from 'react'
import './Doctors.css'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const [isLoad, setIsLoad] = useState(false)


  const fetchDoctors = async () =>{
    const response = await axios.get('http://127.0.0.1:8000/doctor').catch(err=>console.log(err));
    setDoctors(response.data);
    setIsLoad(!isLoad);
  }

  useEffect(() => {
    fetchDoctors();
  }, []);
  


  // const [data, setData] = useState(doctors);
  const handleDelete = async (id) =>{

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.delete("http://127.0.0.1:8000/doctor/" + id).then(res=>{
              window.location.reload(true);
            }).catch((err) => console.log(err));
            
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
      editable: false,
    },
    {
      field: 'LastName',
      headerName: 'Last Name',
      width: 150,
      editable: false,
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
      editable: false,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) =>{
        return(
          <>
            <Link to={"/doctor/"+params.row.id}>
              <button className='doctorListEdit'>Edit</button>
            </Link>
            
            <AiOutlineDelete className='doctorListDelete' onClick={()=>handleDelete(params.row.id)}/>
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
    <div className='doctorList'>
      <div className="doctorTitleContainer">
        <h1 className='doctorTitle'>Doctors</h1>
        <Link to="/newDoctor">
          <button className="doctorAddBtn">Create Doctor</button>
        </Link>
      </div>
      <DataGrid
        rows={doctors}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
