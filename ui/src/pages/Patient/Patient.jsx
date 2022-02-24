import React, { useState, useEffect } from "react";
import "./Patient.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export default function Patient() {

    const [isLoad, setIsLoad] = useState(false);

    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Nationality, setNationality] = useState();
    const [Religion, setReligion] = useState();
    const [Career, setCareer] = useState();
    const [MaritalStatus, setMaritalStatus] = useState();
    const [AllergyHistory, setAllergyHistory] = useState();
    const [MobilePhone, setMobilePhone] = useState();
    const [Email, setEmail] = useState();
    const [Address, setAddress] = useState();
    const [Village, setVillage] = useState();
    const [Road, setRoad] = useState();
    const [Sub_district, setSub_district] = useState();
    const [District, setDistrict] = useState();
    const [Province, setProvince] = useState();
    const [Code, setCode] = useState();
    const [patient, setPatient] = useState([]);
    const [location, setLocation] = useState([]);
    const { id } = useParams();

    const fetchPatients = async () => {
        const response = await axios.get("http://127.0.0.1:8000/patient/" + id).catch((err) => console.log(err));
        const patient_data = response.data;
        const location_data = response.data.Location;
        setPatient(patient_data);
        setLocation(location_data);

        setFirstName(patient_data.FirstName);
        setLastName(patient_data.LastName);
        setNationality(patient_data.Nationality);
        setReligion(patient_data.Religion);
        setCareer(patient_data.Career);
        setMaritalStatus(patient_data.MaritalStatus);
        setAllergyHistory(patient_data.AllergyHistory);
        setMobilePhone(patient_data.MobilePhone);
        setEmail(patient_data.Email);
        
    
        setAddress(location_data.Address);
        setVillage(location_data.Village);
        setRoad(location_data.Road);
        setSub_district(location_data.Sub_district);
        setDistrict(location_data.District);
        setProvince(location_data.Province);
        setCode(location_data.Code);
        setIsLoad(!isLoad);
    };

    useEffect(() => {
        fetchPatients();
    }, [id]);

   

    const handleSubmit = async () =>{
        // setData(data.filter(item=>item.id !== id));
        const locations = {
            id: location.id,
            Address: Address,
            Village: Village,
            Road: Road,
            Sub_district: Sub_district,
            District: District,
            Province: Province,
            Code: Code,
        };
        const patients = {
            id: patient.id,
            IDCardNumber: patient.IDCardNumber,
            Prefix: patient.Prefix,
            FirstName: FirstName,
            LastName: LastName,
            Gender: patient.Gender,
            DateOfBirth: patient.DateOfBirth,
            Nationality: Nationality,
            Religion: Religion,
            Career: Career,
            CountryOfBirth: patient.CountryOfBirth,
            ProvinceOfBirth: patient.ProvinceOfBirth,
            MaritalStatus: MaritalStatus,
            BloodType: patient.BloodType,
            AllergyHistory: AllergyHistory,
            FatherName: patient.FatherName,
            MotherName: patient.MotherName,
            MobilePhone: MobilePhone,
            Email: Email,
            Location:locations,
        };
        console.log(patients);
        axios.put('http://127.0.0.1:8000/patient',patients).then(res=>{
            window.location.replace("http://localhost:3000/patient/"+id);
        }).catch(err=>console.log(err));
        
      };

    if(!isLoad){
        return (
            <h1 className='Loading'>Loading Page</h1>
        );
    }
    return (
        <div className="patient">
            <div className="patientTitleContainer">
                <h1 className="patientTitle">Patients</h1>
                <Link to="/newPatient">
                    <button className="patientAddBtn">Create Patient</button>
                </Link>
            </div>
            <div className="patientContainer">
                <div className="patientShow">
                    <div className="patientShowTop">
                        <div className="patientShowTopTitle">
                            <span className="patientShowName">{patient.FirstName+" "+patient.LastName}</span>
                            <span className="patientShowOccupation">{Career}</span>
                        </div>
                    </div>
                    <div className="patientShowBottom">
                        <span className="patientShowTitle">Personal Information</span>
                        <div className="patientShowDetail">
                            <div className="patientShowInfo">
                                <span className="patientShowInfoPre">เลขบัตรประชาชน:</span>
                                <span className="patientShowInfoTitle">{patient.IDCardNumber}</span>
                            </div>
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">เพศ:</span>
                                    <span className="patientShowInfoTitle">{patient.Gender}</span>
                                </div>
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">วัน/เดือน/ปีเกิด:</span>
                                    <span className="patientShowInfoTitle">{patient.DateOfBirth}</span>
                                </div>
                            </div>
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">สัญชาติ:</span>
                                    <span className="patientShowInfoTitle">{patient.Nationality}</span>
                                </div>
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">ศาสนา:</span>
                                    <span className="patientShowInfoTitle">{patient.Religion}</span>
                                </div>
                            </div>
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">ประเทศที่เกิด:</span>
                                    <span className="patientShowInfoTitle">{patient.CountryOfBirth}</span>
                                </div>
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">จังหวัดที่เกิด:</span>
                                    <span className="patientShowInfoTitle">{patient.ProvinceOfBirth}</span>
                                </div>
                                
                                
                            </div>
                            <div className="patientShowInfo">
                                <span className="patientShowInfoPre">สถานะภาพสมรส:</span>
                                <span className="patientShowInfoTitle">{patient.MaritalStatus}</span>
                            </div>
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">หมู่เลือด:</span>
                                    <span className="patientShowInfoTitle">{patient.BloodType}</span>
                                </div>
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</span>
                                    <span className="patientShowInfoTitle">{patient.AllergyHistory}</span>
                                </div>
                            </div>
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">ชื่อ-นามสกุล บิดา:</span>
                                    <span className="patientShowInfoTitle">{patient.FatherName}</span>
                                </div>
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">ชื่อ-นามสกุล มารดา:</span>
                                    <span className="patientShowInfoTitle">{patient.MotherName}</span>
                                </div>
                            </div>
                        </div>
                        <span className="patientShowTitle">Contact Information</span>
                        <div className="patientShowDetail">
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">บ้านเลขที่ (ที่ติดต่อได้):</span>
                                    <span className="patientShowInfoTitle">{location.Address}</span>
                                </div>
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">หมู่ที่:</span>
                                    <span className="patientShowInfoTitle">{location.Village}</span>
                                </div>
                                
                                
                            </div>
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">ถนน:</span>
                                    <span className="patientShowInfoTitle">{location.Road}</span>
                                </div>
                                
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">ตำบล / แขวง:</span>
                                    <span className="patientShowInfoTitle">{location.Sub_district}</span>
                                </div>
                                
                            </div>
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">อำเภอ / เขต:</span>
                                    <span className="patientShowInfoTitle">{location.District}</span>
                                </div>
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">จังหวัด:</span>
                                    <span className="patientShowInfoTitle">{location.Province}</span>
                                </div>
                            </div>
                            <div className="patientShowInfo">
                                <span className="patientShowInfoPre">รหัสไปรษณีย์:</span>
                                <span className="patientShowInfoTitle">{location.Code}</span>
                            </div>
                            <div className="patientShowInfo2">
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">เบอร์โทรศัพท์มือถือ:</span>
                                    <span className="patientShowInfoTitle">{patient.MobilePhone}</span>
                                </div>
                                <div className="patientShowInfo">
                                    <span className="patientShowInfoPre">E-mail:</span>
                                    <span className="patientShowInfoTitle">{patient.Email}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="patientUpdate">
                    <span className="patientUpdateTitle">Edit</span>
                    <form className="patientUpdateForm" onSubmit={handleSubmit} >
                        <span className="patientShowTitle">Personal Information</span>
                        <div className="patientUpdatePersonal">
                            <div className="patientUpdateItem2">
                                <div className="patientUpdateItem">
                                    <label>ชื่อ:</label>
                                    <input type="text" value={FirstName} className="patientUpdateInput" onChange={(data)=>setFirstName(data.target.value)} required/>
                                </div>
                                <div className="patientUpdateItem">
                                    <label>นามสกุล:</label>
                                    <input type="text" value={LastName} className="patientUpdateInput" onChange={(data)=>setLastName(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="patientUpdateItem">
                                <label>อาชีพ:</label>
                                <input type="text" value={Career} className="patientUpdateInput" onChange={(data)=>setCareer(data.target.value)} required/>
                            </div>
                            <div className="patientUpdateItem2">
                                <div className="patientUpdateItem">
                                    <label>สัญชาติ:</label>
                                    <input type="text" value={Nationality} className="patientUpdateInput" onChange={(data)=>setNationality(data.target.value)} required/>
                                </div>
                                <div className="patientUpdateItem">
                                    <label>ศาสนา:</label>
                                    <input type="text" value={Religion} className="patientUpdateInput" onChange={(data)=>setReligion(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="patientUpdateItem2">
                                <div className="patientUpdateItem">
                                    <label>สถานะภาพสมรส:</label>
                                    <input type="text" value={MaritalStatus} className="patientUpdateInput" onChange={(data)=>setMaritalStatus(data.target.value)} required/>
                                </div>
                                <div className="patientUpdateItem">
                                    <label>ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</label>
                                    <input type="text" value={AllergyHistory} className="patientUpdateInput" onChange={(data)=>setAllergyHistory(data.target.value)} required/>
                                </div>
                            </div>
                        </div>
                        <span className="patientShowTitle">Contact Information</span>
                        <div className="patientUpdateContact">
                            <div className="patientUpdateItem3">
                                <div className="patientUpdateItem">
                                    <label>บ้านเลขที่ (ที่ติดต่อได้):</label>
                                    <input type="text" value={Address} className="patientUpdateInput" onChange={(data)=>setAddress(data.target.value)} required/>
                                </div>
                                <div className="patientUpdateItem">
                                    <label>หมู่ที่:</label>
                                    <input type="text" value={Village} className="patientUpdateInput" onChange={(data)=>setVillage(data.target.value)} required/>
                                </div>
                                
                                <div className="patientUpdateItem">
                                    <label>ถนน:</label>
                                    <input type="text" value={Road} className="patientUpdateInput" onChange={(data)=>setRoad(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="patientUpdateItem4">
                                
                                <div className="patientUpdateItem">
                                    <label>ตำบล / แขวง:</label>
                                    <input type="text" value={Sub_district} className="patientUpdateInput" onChange={(data)=>setSub_district(data.target.value)} required/>
                                </div>
                                <div className="patientUpdateItem">
                                    <label>อำเภอ / เขต:</label>
                                    <input type="text" value={District} className="patientUpdateInput" onChange={(data)=>setDistrict(data.target.value)} required/>
                                </div>
                                <div className="patientUpdateItem">
                                    <label>จังหวัด:</label>
                                    <input type="text" value={Province} className="patientUpdateInput" onChange={(data)=>setProvince(data.target.value)} required/>
                                </div>
                                <div className="patientUpdateItem">
                                    <label>รหัสไปรษณีย์:</label>
                                    <input type="text" value={Code} className="patientUpdateInput" onChange={(data)=>setCode(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="patientUpdateItem2">
                                <div className="patientUpdateItem">
                                    <label>เบอร์โทรศัพท์มือถือ:</label>
                                    <input type="text" value={MobilePhone} className="patientUpdateInput" onChange={(data)=>setMobilePhone(data.target.value)} required/>
                                </div>
                                <div className="patientUpdateItem">
                                    <label>E-mail:</label>
                                    <input type="text" value={Email} className="patientUpdateInput" onChange={(data)=>setEmail(data.target.value)} required/>
                                </div>
                            </div>
                        </div>
                        <div className="patientUpdateRight">
                            <button type="submit" className="patientUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
