import React, { useState, useEffect } from "react";
import "./Staff.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export default function Staff() {

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
    const [staff, setStaff] = useState([]);
    const [location, setLocation] = useState([]);
    const { id } = useParams();

    const fetchStaffs = async () => {
        const response = await axios.get("http://127.0.0.1:8000/staff/" + id).catch((err) => console.log(err));
        const staff_data = response.data;
        const location_data = response.data.Location;
        setStaff(staff_data);
        setLocation(location_data);

        setFirstName(staff_data.FirstName);
        setLastName(staff_data.LastName);
        setNationality(staff_data.Nationality);
        setReligion(staff_data.Religion);
        setMaritalStatus(staff_data.MaritalStatus);
        setAllergyHistory(staff_data.AllergyHistory);
        setPosition(staff_data.Position);
        setDepartment(staff_data.Department);
        setMobilePhone(staff_data.MobilePhone);
        setEmail(staff_data.Email);
        
    
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
        fetchStaffs();
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
        const staffs = {
            id: staff.id,
            IDCardNumber: staff.IDCardNumber,
            Prefix: staff.Prefix,
            FirstName: FirstName,
            LastName: LastName,
            Gender: staff.Gender,
            DateOfBirth: staff.DateOfBirth,
            Nationality: Nationality,
            Religion: Religion,
            MaritalStatus: MaritalStatus,
            BloodType: staff.BloodType,
            AllergyHistory: AllergyHistory,
            Position: Position,
            ProfessionalLicenseNumber: staff.ProfessionalLicenseNumber,
            Department: Department,
            MobilePhone: MobilePhone,
            Email: Email,
            Location:locations,
        };
        console.log(staffs);
        axios.put('http://127.0.0.1:8000/staff',staffs).then(res=>{
            window.location.replace("http://localhost:3000/staff/"+id);
        }).catch(err=>console.log(err));
        
      };
    if(!isLoad){
        return (
            <h1 className='Loading'>Loading Page</h1>
        );
    }

    return (
        <div className="staff">
            <div className="staffTitleContainer">
                <h1 className="staffTitle">Staffs</h1>
                <Link to="/newStaff">
                    <button className="staffAddBtn">Create Staff</button>
                </Link>
            </div>
            <div className="staffContainer">
                <div className="staffShow">
                    <div className="staffShowTop">
                        <div className="staffShowTopTitle">
                            <span className="staffShowName">{staff.FirstName+" "+staff.LastName}</span>
                            <span className="staffShowOccupation">Staff</span>
                        </div>
                    </div>
                    <div className="staffShowBottom">
                        <span className="staffShowTitle">Personal Information</span>
                        <div className="staffShowDetail">
                            <div className="staffShowInfo">
                                <span className="staffShowInfoPre">เลขบัตรประชาชน:</span>
                                <span className="staffShowInfoTitle">{staff.IDCardNumber}</span>
                            </div>
                            <div className="staffShowInfo2">
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">เพศ:</span>
                                    <span className="staffShowInfoTitle">{staff.Gender}</span>
                                </div>
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">วัน/เดือน/ปีเกิด:</span>
                                    <span className="staffShowInfoTitle">{staff.DateOfBirth}</span>
                                </div>
                            </div>
                            <div className="staffShowInfo2">
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">สัญชาติ:</span>
                                    <span className="staffShowInfoTitle">{staff.Nationality}</span>
                                </div>
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">ศาสนา:</span>
                                    <span className="staffShowInfoTitle">{staff.Religion}</span>
                                </div>
                            </div>
                            <div className="staffShowInfo">
                                <span className="staffShowInfoPre">สถานะภาพสมรส:</span>
                                <span className="staffShowInfoTitle">{staff.MaritalStatus}</span>
                            </div>
                            <div className="staffShowInfo2">
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">หมู่เลือด:</span>
                                    <span className="staffShowInfoTitle">{staff.BloodType}</span>
                                </div>
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</span>
                                    <span className="staffShowInfoTitle">{staff.AllergyHistory}</span>
                                </div>
                            </div>
                            <div className="staffShowInfo2">
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">ตำแหน่ง:</span>
                                    <span className="staffShowInfoTitle">{staff.Position}</span>
                                </div>
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">แผนก:</span>
                                    <span className="staffShowInfoTitle">{staff.Department}</span>
                                </div>
                            </div>
                        </div>
                        <span className="staffShowTitle">Contact Information</span>
                        <div className="staffShowDetail">
                            <div className="staffShowInfo2">
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">บ้านเลขที่:</span>
                                    <span className="staffShowInfoTitle">{location.Address}</span>
                                </div>
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">หมู่ที่:</span>
                                    <span className="staffShowInfoTitle">{location.Village}</span>
                                </div>
                                
                                
                            </div>
                            <div className="staffShowInfo2">
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">ถนน:</span>
                                    <span className="staffShowInfoTitle">{location.Road}</span>
                                </div>
                                
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">ตำบล / แขวง:</span>
                                    <span className="staffShowInfoTitle">{location.Sub_district}</span>
                                </div>
                                
                            </div>
                            <div className="staffShowInfo2">
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">อำเภอ / เขต:</span>
                                    <span className="staffShowInfoTitle">{location.District}</span>
                                </div>
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">จังหวัด:</span>
                                    <span className="staffShowInfoTitle">{location.Province}</span>
                                </div>
                            </div>
                            <div className="staffShowInfo">
                                <span className="staffShowInfoPre">รหัสไปรษณีย์:</span>
                                <span className="staffShowInfoTitle">{location.Code}</span>
                            </div>
                            <div className="staffShowInfo2">
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">เบอร์โทรศัพท์มือถือ:</span>
                                    <span className="staffShowInfoTitle">{staff.MobilePhone}</span>
                                </div>
                                <div className="staffShowInfo">
                                    <span className="staffShowInfoPre">E-mail:</span>
                                    <span className="staffShowInfoTitle">{staff.Email}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="staffUpdate">
                    <span className="staffUpdateTitle">Edit</span>
                    <form className="staffUpdateForm" onSubmit={handleSubmit} >
                        <span className="staffShowTitle">Personal Information</span>
                        <div className="staffUpdatePersonal">
                            <div className="staffUpdateItem2">
                                <div className="staffUpdateItem">
                                    <label>ชื่อ:</label>
                                    <input type="text" value={FirstName} className="staffUpdateInput" onChange={(data)=>setFirstName(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>นามสกุล:</label>
                                    <input type="text" value={LastName} className="staffUpdateInput" onChange={(data)=>setLastName(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="staffUpdateItem2">
                                <div className="staffUpdateItem">
                                    <label>สัญชาติ:</label>
                                    <input type="text" value={Nationality} className="staffUpdateInput" onChange={(data)=>setNationality(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>ศาสนา:</label>
                                    <input type="text" value={Religion} className="staffUpdateInput" onChange={(data)=>setReligion(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="staffUpdateItem2">
                                <div className="staffUpdateItem">
                                    <label>สถานะภาพสมรส:</label>
                                    <input type="text" value={MaritalStatus} className="staffUpdateInput" onChange={(data)=>setMaritalStatus(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</label>
                                    <input type="text" value={AllergyHistory} className="staffUpdateInput" onChange={(data)=>setAllergyHistory(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="staffUpdateItem2">
                                <div className="staffUpdateItem">
                                    <label>ตำแหน่ง:</label>
                                    <input type="text" value={Position} className="staffUpdateInput" onChange={(data)=>setPosition(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>แผนก:</label>
                                    <input type="text" value={Department} className="staffUpdateInput" onChange={(data)=>setDepartment(data.target.value)} required/>
                                </div>
                            </div>
                        </div>
                        <span className="staffShowTitle">Contact Information</span>
                        <div className="staffUpdateContact">
                            <div className="staffUpdateItem3">
                                <div className="staffUpdateItem">
                                    <label>บ้านเลขที่ (ที่ติดต่อได้):</label>
                                    <input type="text" value={Address} className="staffUpdateInput" onChange={(data)=>setAddress(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>หมู่ที่:</label>
                                    <input type="text" value={Village} className="staffUpdateInput" onChange={(data)=>setVillage(data.target.value)} required/>
                                </div>
                                
                                <div className="staffUpdateItem">
                                    <label>ถนน:</label>
                                    <input type="text" value={Road} className="staffUpdateInput" onChange={(data)=>setRoad(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="staffUpdateItem4">
                                
                                <div className="staffUpdateItem">
                                    <label>ตำบล / แขวง:</label>
                                    <input type="text" value={Sub_district} className="staffUpdateInput" onChange={(data)=>setSub_district(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>อำเภอ / เขต:</label>
                                    <input type="text" value={District} className="staffUpdateInput" onChange={(data)=>setDistrict(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>จังหวัด:</label>
                                    <input type="text" value={Province} className="staffUpdateInput" onChange={(data)=>setProvince(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>รหัสไปรษณีย์:</label>
                                    <input type="text" value={Code} className="staffUpdateInput" onChange={(data)=>setCode(data.target.value)} required/>
                                </div>
                            </div>
                            <div className="staffUpdateItem2">
                                <div className="staffUpdateItem">
                                    <label>เบอร์โทรศัพท์มือถือ:</label>
                                    <input type="text" value={MobilePhone} className="staffUpdateInput" onChange={(data)=>setMobilePhone(data.target.value)} required/>
                                </div>
                                <div className="staffUpdateItem">
                                    <label>E-mail:</label>
                                    <input type="text" value={Email} className="staffUpdateInput" onChange={(data)=>setEmail(data.target.value)} required/>
                                </div>
                            </div>
                        </div>
                        <div className="staffUpdateRight">
                            <button type="submit" className="staffUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
