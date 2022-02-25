import React, {useState ,useEffect} from "react";
import "./NewSymptom.css";
import axios from "axios";
import Select from 'react-select'

export default function NewSymptom() {
    const [Staff, setStaff] = useState();
    const [Patient, setPatient] = useState();
    const [Symptoms, setSymptoms] = useState();
    const [SymptomsDetail, setSymptomsDetail] = useState();
    const [patients, setPatients] = useState();
    const [staffs, setStaffs] = useState();
    
    const [optionsP, setOptionsP] = useState();
    const [optionsS, setOptionsS] = useState();
    const [sP, setsP] = useState();
    const [sS, setsS] = useState();

  const fetchSymptoms = async () =>{
    const response_p = await axios.get('http://127.0.0.1:8000/patient').catch(err=>console.log(err));
    setPatients(response_p.data);
    const response_s = await axios.get('http://127.0.0.1:8000/staff').catch(err=>console.log(err));
    setStaffs(response_s.data);
    const op = [];
    response_p.data.map((data)=>{
        const o = {
            value: data.id,
            label: data.FirstName+' '+data.LastName
        };
        op.push(o);
        
    });
    setOptionsP(op);
    const os = [];
    response_s.data.map((data)=>{
        const o = {
            value: data.id,
            label: data.FirstName+' '+data.LastName
        };
        os.push(o);
        
    });
    setOptionsS(os);
  }

  useEffect(() => {
    fetchSymptoms();
  }, []);
  const handleSubmit = async () =>{
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    const symptom = {
        Date: date,
        Staff: sS,
        Patients: sP,
        Symptoms: Symptoms,
        SymptomsDetail: SymptomsDetail,
    };
    const response = await axios.post('http://127.0.0.1:8000/symptom',symptom).catch(err=>console.log(err));
    window.location.replace("http://localhost:3000/symptoms");
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const handleP= (event)=>{
      console.log(event.target.value);
  }


  return (
    <div className="newSymptom">
      <h1 className="newSymptomTitle">New Symptom</h1>
      {/* <form className="newSymptomForm" onSubmit={handleSubmit}> */}
        <span className="newSymptomTitlePersonal">Symptom Information</span>
        <div className="newSymptomPersonal">
          <div className="newSymptomItem">
            <label>อาการ:</label>
            <input type="text" placeholder="" onChange={(data)=>setSymptoms(data.target.value)} required />
          </div>
          <div className="newSymptomItem">
            <label>รายละเอียด:</label>
            <textarea type="text" placeholder="" onChange={(data)=>setSymptomsDetail(data.target.value)} required />
          </div>
          <div className="newSymptomItem2">
            <div className="newSymptomItem">
                <label>ผู้ป่วย:</label>
                <Select options={optionsP}  onChange={(value)=>setsP(value.value)} required/>
            </div>
            <div className="newSymptomItem">
                <label>เจ้าหน้าที่:</label>
                <Select options={optionsS} onChange={(value)=>setsS(value.value)} required/>
            </div>
          </div>
        </div>
        
        <div className="newSymptomItem">
          <div className="newSymptomItemB">
            <button type="submit" className="newSymptomBT" onClick={handleSubmit}>Crate</button>
          </div>
        </div>
      {/* </form> */}
    </div>
  );
}
