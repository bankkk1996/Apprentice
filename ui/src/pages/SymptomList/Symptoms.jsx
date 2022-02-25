import React, {useEffect, useState} from 'react'
import './Symptoms.css'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function Symptoms() {

  const [symptoms, setSymptoms] = useState([]);
  const [isLoad, setIsLoad] = useState(false);


  const fetchSymptoms = async () =>{
    const response = await axios.get('http://127.0.0.1:8000/symptom').catch(err=>console.log(err));
    setSymptoms(response.data);
    setIsLoad(!isLoad);
  }

  useEffect(() => {
    fetchSymptoms();
  }, []);
  


  // const [data, setData] = useState(symptoms);
  const handleDelete = async (id) =>{
    // setData(data.filter(item=>item.id !== id));

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const response = axios.delete("http://127.0.0.1:8000/symptom/" + id).catch((err) => console.log(err));
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
        field: 'patient',
        headerName: 'Patient',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.Patients.FirstName || ''} ${params.row.Patients.LastName || ''}`,
    },
    {
        field: 'staff',
        headerName: 'Staff',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.Staff.FirstName || ''} ${params.row.Staff.LastName || ''}`,
    },
    {
      field: 'Symptoms',
      headerName: 'Symptoms',
      width: 200,
      editable: true,
    },
    {
      field: 'SymptomsDetail',
      headerName: 'Detail',
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
            <Link to={"/symptom/"+params.row.id}>
              <button className='symptomListEdit'>Edit</button>
            </Link>
            
            <AiOutlineDelete className='symptomListDelete' onClick={()=>handleDelete(params.row.id)}/>
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
    <div className='symptomList'>
      <div className="symptomTitleContainer">
        <h1 className='symptomTitle'>Symptoms</h1>
        <Link to="/newSymptom">
          <button className="symptomAddBtn">Create Symptom</button>
        </Link>
      </div>
      <DataGrid
        rows={symptoms}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
