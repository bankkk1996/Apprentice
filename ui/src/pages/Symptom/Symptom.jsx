import React, { useState, useEffect } from "react";
import "./Symptom.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export default function Symptom() {

    const [isLoad, setIsLoad] = useState(false);

    const [Symptoms, setSymptoms] = useState();
    const [SymptomsDetail, setSymptomsDetail] = useState();
    const [symptom, setSymptom] = useState([]);
    const { id } = useParams();

    const fetchSymptoms = async () => {
        const response = await axios.get("http://127.0.0.1:8000/symptom/" + id).catch((err) => console.log(err));
        const symptom_data = response.data;
        console.log(symptom_data);
        setSymptom(symptom_data);

        setSymptoms(symptom_data.Symptoms);
        setSymptomsDetail(symptom_data.SymptomsDetail);
        setIsLoad(!isLoad);
    };

    useEffect(() => {
        fetchSymptoms();
    }, [id]);

   

    const handleSubmit = async () =>{
        // setData(data.filter(item=>item.id !== id));
        
        const symptoms = {
            id: symptom.id,
            Date: symptom.Date,
            Staff: symptom.Staff,
            Patients: symptom.Patients,
            Symptoms: Symptoms,
            SymptomsDetail: SymptomsDetail,
            
        };
        axios.put('http://127.0.0.1:8000/symptom',symptoms).then(res=>{
            window.location.replace("http://localhost:3000/symptom/"+id);
        }).catch(err=>console.log(err));
        
      };
    if(!isLoad){
        return (
            <h1 className='Loading'>Loading Page</h1>
        );
    }

    return (
        <div className="symptom">
            <div className="symptomTitleContainer">
                <h1 className="symptomTitle">Symptoms</h1>
                <Link to="/newSymptom">
                    <button className="symptomAddBtn">Create Symptom</button>
                </Link>
            </div>
            <div className="symptomContainer">
                <div className="symptomShow">
                    
                    <div className="symptomShowBottom">
                        <span className="symptomShowTitle">Symptom Information</span>
                        <div className="symptomShowDetail">
                            <div className="symptomShowInfo">
                                <span className="symptomShowInfoPre">อาการ:</span>
                                <span className="symptomShowInfoTitle">{symptom.Symptoms}</span>
                            </div>
                            <div className="symptomShowInfo">
                                <span className="symptomShowInfoPre">รายละเอียด:</span>
                                <span className="symptomShowInfoTitle">{symptom.SymptomsDetail}</span>
                            </div>
                            <div className="symptomShowInfo">
                                <span className="symptomShowInfoPre">วันที่:</span>
                                <span className="symptomShowInfoTitle">{symptom.Date}</span>
                            </div>
                        </div>
                        <div className="symptomDetailUser">
                            <div className="symptomDetail">
                                <span className="symptomShowTitle">Patient Information</span>
                                <div className="symptomShowDetail">
                                    <div className="symptomShowInfo">
                                        <span className="symptomShowInfoPre">ชื่อ:</span>
                                        <span className="symptomShowInfoTitle">{symptom.Patients.FirstName+" "+symptom.Patients.LastName}</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="symptomDetail">
                                <span className="symptomShowTitle">Staff Information</span>
                                <div className="symptomShowDetail">
                                    <div className="symptomShowInfo">
                                    <span className="symptomShowInfoPre">ชื่อ:</span>
                                        <span className="symptomShowInfoTitle">{symptom.Staff.FirstName+" "+symptom.Staff.LastName}</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="symptomUpdate">
                    <span className="symptomUpdateTitle">Edit</span>
                    <form className="symptomUpdateForm" onSubmit={handleSubmit} >
                        <span className="symptomShowTitle">Symptom Information</span>
                        <div className="symptomUpdatePersonal">
                            <div className="symptomUpdateItem">
                                <label>ชื่ออาการ:</label>
                                <input type="text" value={Symptoms} className="symptomUpdateInput" onChange={(data)=>setSymptoms(data.target.value)} required/>
                            </div>
                            <div className="symptomUpdateItem">
                                <label>รายละเอียด:</label>
                                <textarea type="text" value={SymptomsDetail} className="symptomUpdateTextarea" onChange={(data)=>setSymptomsDetail(data.target.value)} required/>
                            </div>
                        </div>
                        <div className="symptomUpdateRight">
                            <button type="submit" className="symptomUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
