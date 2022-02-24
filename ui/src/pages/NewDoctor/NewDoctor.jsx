import React, {useState} from "react";
import "./NewDoctor.css";
import axios from "axios";

export default function NewDoctor() {
  const [IDCardNumber, setIDCardNumber] = useState();
  const [Prefix, setPrefix] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Gender, setGender] = useState();
  const [DateOfBirth, setDateOfBirth] = useState();
  const [Nationality, setNationality] = useState();
  const [Religion, setReligion] = useState();
  const [MaritalStatus, setMaritalStatus] = useState();
  const [BloodType, setBloodType] = useState();
  const [AllergyHistory, setAllergyHistory] = useState();
  const [Position, setPosition] = useState();
  const [ProfessionalLicenseNumber, setProfessionalLicenseNumber] = useState();
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
  const handleSubmit = async () =>{
    // setData(data.filter(item=>item.id !== id));
    const doctor = {
      IDCardNumber: IDCardNumber,
      Prefix: Prefix,
      FirstName: FirstName,
      LastName: LastName,
      Gender: Gender,
      DateOfBirth: DateOfBirth,
      Nationality: Nationality,
      Religion: Religion,
      MaritalStatus: MaritalStatus,
      BloodType: BloodType,
      AllergyHistory: AllergyHistory,
      Position: Position,
      ProfessionalLicenseNumber: ProfessionalLicenseNumber,
      Department: Department,
      MobilePhone: MobilePhone,
      Email: Email,
      Address: Address,
      Village: Village,
      Road: Road,
      Sub_district: Sub_district,
      District: District,
      Province: Province,
      Code: Code
    };

    axios.post('http://127.0.0.1:8000/doctor',doctor).then(res=>{
      window.location.replace("http://localhost:3000/doctors");
    }).catch(err=>console.log(err));
    
  };


  return (
    <div className="newDoctor">
      <h1 className="newDoctorTitle">New Doctor</h1>
      <form className="newDoctorForm" onSubmit={handleSubmit}>
        <span className="newDoctorTitlePersonal">Personal Information</span>
        <div className="newDoctorPersonal">
          <div className="newDoctorItem">
            <label>เลขบัตรประชาชน:</label>
            <input type="text" placeholder="" onChange={(data)=>setIDCardNumber(data.target.value)} required />
          </div>
          <div className="newDoctorItem3">
            <div className="newDoctorItem">
              <label>คำนำหน้า:</label>
              <input type="text" placeholder="" onChange={(data)=>setPrefix(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>ชื่อ:</label>
              <input type="text" placeholder="" onChange={(data)=>setFirstName(data.target.value)}  required/>
            </div>
            <div className="newDoctorItem">
              <label>นามสกุล:</label>
              <input type="text" placeholder="" onChange={(data)=>setLastName(data.target.value)} required />
            </div>
          </div>
          <div className="newDoctorItem2">
            <div className="newDoctorItem">
              <label>เพศ:</label>
              <input type="text" placeholder="" onChange={(data)=>setGender(data.target.value)}  required/>
            </div>
            <div className="newDoctorItem">
              <label>วัน/เดือน/ปีเกิด:</label>
              <input type="text" placeholder="" onChange={(data)=>setDateOfBirth(data.target.value)} required />
            </div>
          </div>
          <div className="newDoctorItem3">
            <div className="newDoctorItem">
              <label>สัญชาติ:</label>
              <input type="text" placeholder="" onChange={(data)=>setNationality(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>ศาสนา:</label>
              <input type="text" placeholder="" onChange={(data)=>setReligion(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>สถานะภาพสมรส:</label>
              <input type="text" placeholder="" onChange={(data)=>setMaritalStatus(data.target.value)}  required/>
            </div>
          </div>
          <div className="newDoctorItem2">
            <div className="newDoctorItem">
              <label>หมู่เลือด:</label>
              <input type="text" placeholder="" onChange={(data)=>setBloodType(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</label>
              <input type="text" placeholder="" onChange={(data)=>setAllergyHistory(data.target.value)} required />
            </div>
          </div>
          <div className="newDoctorItem3">
            <div className="newDoctorItem">
              <label>ตำแหน่ง:</label>
              <input type="text" placeholder="" onChange={(data)=>setPosition(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>แผนก:</label>
              <input type="text" placeholder="" onChange={(data)=>setDepartment(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>เลขที่ใบประกอบวิชาชีพ:</label>
              <input type="text" placeholder="" onChange={(data)=>setProfessionalLicenseNumber(data.target.value)} required />
            </div>
            
          </div>
        </div>
        <span className="newDoctorTitleContact">Contact Information</span>
        <div className="newDoctorContact">
          <div className="newDoctorItem3">
            <div className="newDoctorItem">
              <label>บ้านเลขที่ (ที่ติดต่อได้):</label>
              <input type="text" placeholder="" onChange={(data)=>setAddress(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>หมู่ที่:</label>
              <input type="text" placeholder="" onChange={(data)=>setVillage(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>ถนน:</label>
              <input type="text" placeholder="" onChange={(data)=>setRoad(data.target.value)} required />
            </div>
          </div>
          <div className="newDoctorItem4">
            <div className="newDoctorItem">
              <label>ตำบล / แขวง:</label>
              <input type="text" placeholder="" onChange={(data)=>setSub_district(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>อำเภอ / เขต:</label>
              <input type="text" placeholder="" onChange={(data)=>setDistrict(data.target.value)} required />
            </div>
            
            <div className="newDoctorItem">
              <label>จังหวัด:</label>
              <input type="text" placeholder="" onChange={(data)=>setProvince(data.target.value)} required />
            </div>
            <div className="newDoctorItem">
              <label>รหัสไปรษณีย์:</label>
              <input type="text" placeholder="" onChange={(data)=>setCode(data.target.value)}  required/>
            </div>
          </div>
          <div className="newDoctorItem2">
            <div className="newDoctorItem">
              <label>เบอร์โทรศัพท์มือถือ:</label>
              <input type="text" placeholder="" onChange={(data)=>setMobilePhone(data.target.value)} required/>
            </div>
            <div className="newDoctorItem">
              <label>E-mail:</label>
              <input type="text" placeholder="" onChange={(data)=>setEmail(data.target.value)} required />
            </div>
          </div>
          
        </div>
        <div className="newDoctorItem">
          <div className="newDoctorItemB">
            <button type="submit" className="newDoctorBT">Crate</button>
          </div>
        </div>
      </form>
    </div>
  );
}
