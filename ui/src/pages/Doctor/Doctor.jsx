import React, { useState, useEffect } from "react";
import "./Doctor.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export default function Doctor() {

    const [isLoad, setIsLoad] = useState(false);

    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Nationality, setNationality] = useState();
    const [Religion, setReligion] = useState();
    const [MaritalStatus, setMaritalStatus] = useState();
    const [AllergyHistory, setAllergyHistory] = useState();
    const [Position, setPosition] = useState();
    const [Department, setDepartment] = useState();
    const [MobilePhone, setMobilePhone] = useState();
    const [Email, setEmail] = useState();
    const [Address, setAddress] = useState();
    const [Village, setVillage] = useState();
    const [Road, setRoad] = useState();
    const [Sub_district, setSub_district] = useState();
    const [District, setDistrict] = useState();
    const [Province, setProvince] = useState();
    const [Code, setCode] = useState();
    const [doctor, setDoctor] = useState([]);
    const [location, setLocation] = useState([]);
    const { id } = useParams();

    const fetchDoctors = async () => {
        const response = await axios.get("http://127.0.0.1:8000/doctor/" + id).catch((err) => console.log(err));
        const doctor_data = response.data;
        const location_data = response.data.Location;
        setDoctor(doctor_data);
        setLocation(location_data);

        setFirstName(doctor_data.FirstName);
        setLastName(doctor_data.LastName);
        setNationality(doctor_data.Nationality);
        setReligion(doctor_data.Religion);
        setMaritalStatus(doctor_data.MaritalStatus);
        setAllergyHistory(doctor_data.AllergyHistory);
        setPosition(doctor_data.Position);
        setDepartment(doctor_data.Department);
        setMobilePhone(doctor_data.MobilePhone);
        setEmail(doctor_data.Email);
        
    
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
        fetchDoctors();
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
        const doctors = {
            id: doctor.id,
            IDCardNumber: doctor.IDCardNumber,
            Prefix: doctor.Prefix,
            FirstName: FirstName,
            LastName: LastName,
            Gender: doctor.Gender,
            DateOfBirth: doctor.DateOfBirth,
            Nationality: Nationality,
            Religion: Religion,
            MaritalStatus: MaritalStatus,
            BloodType: doctor.BloodType,
            AllergyHistory: AllergyHistory,
            Position: Position,
            ProfessionalLicenseNumber: doctor.ProfessionalLicenseNumber,
            Department: Department,
            MobilePhone: MobilePhone,
            Email: Email,
            Location:locations,
        };
        console.log(doctors);
        axios.put('http://127.0.0.1:8000/doctor',doctors).then(res=>{
            window.location.replace("http://localhost:3000/doctor/"+id);
        }).catch(err=>console.log(err));
        
      };
    if(!isLoad){
        return (
            <h1 className='Loading'>Loading Page</h1>
        );
    }

    return (
        <div className="doctor">
            <div className="doctorTitleContainer">
                <h1 className="doctorTitle">Doctors</h1>
                <Link to="/newDoctor">
                    <button className="doctorAddBtn">Create Doctor</button>
                </Link>
            </div>
            <div className="doctorContainer">
                <div className="doctorShow">
                    <div className="doctorShowTop">
                        <div className="doctorShowTopTitle">
                            <span className="doctorShowName">{doctor.FirstName+" "+doctor.LastName}</span>
                            <span className="doctorShowOccupation">Doctor</span>
                        </div>
                    </div>
                    <div className="doctorShowBottom">
                        <span className="doctorShowTitle">Personal Information</span>
                        <div className="doctorShowDetail">
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">เลขบัตรประชาชน:</span>
                                    <span className="doctorShowInfoTitle">{doctor.IDCardNumber}</span>
                                </div>
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">เลขที่ใบประกอบวิชาชีพ:</span>
                                    <span className="doctorShowInfoTitle">{doctor.ProfessionalLicenseNumber}</span>
                                </div>
                            </div>
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">เพศ:</span>
                                    <span className="doctorShowInfoTitle">{doctor.Gender}</span>
                                </div>
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">วัน/เดือน/ปีเกิด:</span>
                                    <span className="doctorShowInfoTitle">{doctor.DateOfBirth}</span>
                                </div>
                            </div>
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">สัญชาติ:</span>
                                    <span className="doctorShowInfoTitle">{doctor.Nationality}</span>
                                </div>
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">ศาสนา:</span>
                                    <span className="doctorShowInfoTitle">{doctor.Religion}</span>
                                </div>
                            </div>
                            <div className="doctorShowInfo">
                                <span className="doctorShowInfoPre">สถานะภาพสมรส:</span>
                                <span className="doctorShowInfoTitle">{doctor.MaritalStatus}</span>
                            </div>
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">หมู่เลือด:</span>
                                    <span className="doctorShowInfoTitle">{doctor.BloodType}</span>
                                </div>
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</span>
                                    <span className="doctorShowInfoTitle">{doctor.AllergyHistory}</span>
                                </div>
                            </div>
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">ตำแหน่ง:</span>
                                    <span className="doctorShowInfoTitle">{doctor.Position}</span>
                                </div>
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">แผนก:</span>
                                    <span className="doctorShowInfoTitle">{doctor.Department}</span>
                                </div>
                            </div>
                        </div>
                        <span className="doctorShowTitle">Contact Information</span>
                        <div className="doctorShowDetail">
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">บ้านเลขที่:</span>
                                    <span className="doctorShowInfoTitle">{location.Address}</span>
                                </div>
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">หมู่ที่:</span>
                                    <span className="doctorShowInfoTitle">{location.Village}</span>
                                </div>
                                
                                
                            </div>
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">ถนน:</span>
                                    <span className="doctorShowInfoTitle">{location.Road}</span>
                                </div>
                                
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">ตำบล / แขวง:</span>
                                    <span className="doctorShowInfoTitle">{location.Sub_district}</span>
                                </div>
                                
                            </div>
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">อำเภอ / เขต:</span>
                                    <span className="doctorShowInfoTitle">{location.District}</span>
                                </div>
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">จังหวัด:</span>
                                    <span className="doctorShowInfoTitle">{location.Province}</span>
                                </div>
                            </div>
                            <div className="doctorShowInfo">
                                <span className="doctorShowInfoPre">รหัสไปรษณีย์:</span>
                                <span className="doctorShowInfoTitle">{location.Code}</span>
                            </div>
                            <div className="doctorShowInfo2">
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">เบอร์โทรศัพท์มือถือ:</span>
                                    <span className="doctorShowInfoTitle">{doctor.MobilePhone}</span>
                                </div>
                                <div className="doctorShowInfo">
                                    <span className="doctorShowInfoPre">E-mail:</span>
                                    <span className="doctorShowInfoTitle">{doctor.Email}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="doctorUpdate">
                    <span className="doctorUpdateTitle">Edit</span>
                    <form className="doctorUpdateForm" onSubmit={handleSubmit} >
                        <span className="doctorShowTitle">Personal Information</span>
                        <div className="doctorUpdatePersonal">
                            <div className="doctorUpdateItem2">
                                <div className="doctorUpdateItem">
                                    <label>ชื่อ:</label>
                                    <input type="text" value={FirstName} className="doctorUpdateInput" onChange={(data)=>setFirstName(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>นามสกุล:</label>
                                    <input type="text" value={LastName} className="doctorUpdateInput" onChange={(data)=>setLastName(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="doctorUpdateItem2">
                                <div className="doctorUpdateItem">
                                    <label>สัญชาติ:</label>
                                    <input type="text" value={Nationality} className="doctorUpdateInput" onChange={(data)=>setNationality(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>ศาสนา:</label>
                                    <input type="text" value={Religion} className="doctorUpdateInput" onChange={(data)=>setReligion(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="doctorUpdateItem2">
                                <div className="doctorUpdateItem">
                                    <label>สถานะภาพสมรส:</label>
                                    <input type="text" value={MaritalStatus} className="doctorUpdateInput" onChange={(data)=>setMaritalStatus(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</label>
                                    <input type="text" value={AllergyHistory} className="doctorUpdateInput" onChange={(data)=>setAllergyHistory(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="doctorUpdateItem2">
                                <div className="doctorUpdateItem">
                                    <label>ตำแหน่ง:</label>
                                    <input type="text" value={Position} className="doctorUpdateInput" onChange={(data)=>setPosition(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>แผนก:</label>
                                    <input type="text" value={Department} className="doctorUpdateInput" onChange={(data)=>setDepartment(data.target.value)} required/>
                                </div>
                            </div>
                        </div>
                        <span className="doctorShowTitle">Contact Information</span>
                        <div className="doctorUpdateContact">
                            <div className="doctorUpdateItem3">
                                <div className="doctorUpdateItem">
                                    <label>บ้านเลขที่ (ที่ติดต่อได้):</label>
                                    <input type="text" value={Address} className="doctorUpdateInput" onChange={(data)=>setAddress(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>หมู่ที่:</label>
                                    <input type="text" value={Village} className="doctorUpdateInput" onChange={(data)=>setVillage(data.target.value)} required/>
                                </div>
                                
                                <div className="doctorUpdateItem">
                                    <label>ถนน:</label>
                                    <input type="text" value={Road} className="doctorUpdateInput" onChange={(data)=>setRoad(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="doctorUpdateItem4">
                                
                                <div className="doctorUpdateItem">
                                    <label>ตำบล / แขวง:</label>
                                    <input type="text" value={Sub_district} className="doctorUpdateInput" onChange={(data)=>setSub_district(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>อำเภอ / เขต:</label>
                                    <input type="text" value={District} className="doctorUpdateInput" onChange={(data)=>setDistrict(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>จังหวัด:</label>
                                    <input type="text" value={Province} className="doctorUpdateInput" onChange={(data)=>setProvince(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>รหัสไปรษณีย์:</label>
                                    <input type="text" value={Code} className="doctorUpdateInput" onChange={(data)=>setCode(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="doctorUpdateItem2">
                                <div className="doctorUpdateItem">
                                    <label>เบอร์โทรศัพท์มือถือ:</label>
                                    <input type="text" value={MobilePhone} className="doctorUpdateInput" onChange={(data)=>setMobilePhone(data.target.value)} required/>
                                </div>
                                <div className="doctorUpdateItem">
                                    <label>E-mail:</label>
                                    <input type="text" value={Email} className="doctorUpdateInput" onChange={(data)=>setEmail(data.target.value)} required/>
                                </div>
                            </div>
                        </div>
                        <div className="doctorUpdateRight">
                            <button type="submit" className="doctorUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
