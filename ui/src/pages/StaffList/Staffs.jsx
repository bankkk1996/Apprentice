import React, {useEffect, useState} from 'react'
import './Staffs.css'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function Staffs() {

  const [staffs, setStaffs] = useState([]);
  const [isLoad, setIsLoad] = useState(false)


  const fetchStaffs = async () =>{
    const response = await axios.get('http://127.0.0.1:8000/staff').catch(err=>console.log(err));
    setStaffs(response.data);
    setIsLoad(!isLoad);
  }

  useEffect(() => {
    fetchStaffs();
  }, []);
  


  // const [data, setData] = useState(staffs);
  const handleDelete = async (id) =>{

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.delete("http://127.0.0.1:8000/staff/" + id).then(res=>{
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
            <Link to={"/staff/"+params.row.id}>
              <button className='staffListEdit'>Edit</button>
            </Link>
            
            <AiOutlineDelete className='staffListDelete' onClick={()=>handleDelete(params.row.id)}/>
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
    <div className='staffList'>
      <div className="staffTitleContainer">
        <h1 className='staffTitle'>Staffs</h1>
        <Link to="/newStaff">
          <button className="staffAddBtn">Create Staff</button>
        </Link>
      </div>
      <DataGrid
        rows={staffs}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
