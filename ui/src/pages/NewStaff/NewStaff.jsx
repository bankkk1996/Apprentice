import React, {useState} from "react";
import "./NewStaff.css";
import axios from "axios";

export default function NewStaff() {
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
    const staff = {
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

    const response = await axios.post('http://127.0.0.1:8000/staff',staff).catch(err=>console.log(err));
    window.location.replace("http://localhost:3000/staffs");
  };


  return (
    <div className="newStaff">
      <h1 className="newStaffTitle">New Staff</h1>
      <form className="newStaffForm" onSubmit={handleSubmit}>
        <span className="newStaffTitlePersonal">Personal Information</span>
        <div className="newStaffPersonal">
          <div className="newStaffItem">
            <label>เลขบัตรประชาชน:</label>
            <input type="text" placeholder="" onChange={(data)=>setIDCardNumber(data.target.value)} required />
          </div>
          <div className="newStaffItem3">
            <div className="newStaffItem">
              <label>คำนำหน้า:</label>
              <input type="text" placeholder="" onChange={(data)=>setPrefix(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>ชื่อ:</label>
              <input type="text" placeholder="" onChange={(data)=>setFirstName(data.target.value)}  required/>
            </div>
            <div className="newStaffItem">
              <label>นามสกุล:</label>
              <input type="text" placeholder="" onChange={(data)=>setLastName(data.target.value)} required />
            </div>
          </div>
          <div className="newStaffItem2">
            <div className="newStaffItem">
              <label>เพศ:</label>
              <input type="text" placeholder="" onChange={(data)=>setGender(data.target.value)}  required/>
            </div>
            <div className="newStaffItem">
              <label>วัน/เดือน/ปีเกิด:</label>
              <input type="text" placeholder="" onChange={(data)=>setDateOfBirth(data.target.value)} required />
            </div>
          </div>
          <div className="newStaffItem3">
            <div className="newStaffItem">
              <label>สัญชาติ:</label>
              <input type="text" placeholder="" onChange={(data)=>setNationality(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>ศาสนา:</label>
              <input type="text" placeholder="" onChange={(data)=>setReligion(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>สถานะภาพสมรส:</label>
              <input type="text" placeholder="" onChange={(data)=>setMaritalStatus(data.target.value)}  required/>
            </div>
          </div>
          <div className="newStaffItem2">
            <div className="newStaffItem">
              <label>หมู่เลือด:</label>
              <input type="text" placeholder="" onChange={(data)=>setBloodType(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</label>
              <input type="text" placeholder="" onChange={(data)=>setAllergyHistory(data.target.value)} required />
            </div>
          </div>
          <div className="newStaffItem2">
            <div className="newStaffItem">
              <label>ตำแหน่ง:</label>
              <input type="text" placeholder="" onChange={(data)=>setPosition(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>แผนก:</label>
              <input type="text" placeholder="" onChange={(data)=>setDepartment(data.target.value)} required />
            </div>
            
            
          </div>
        </div>
        <span className="newStaffTitleContact">Contact Information</span>
        <div className="newStaffContact">
          <div className="newStaffItem3">
            <div className="newStaffItem">
              <label>บ้านเลขที่ (ที่ติดต่อได้):</label>
              <input type="text" placeholder="" onChange={(data)=>setAddress(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>หมู่ที่:</label>
              <input type="text" placeholder="" onChange={(data)=>setVillage(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>ถนน:</label>
              <input type="text" placeholder="" onChange={(data)=>setRoad(data.target.value)} required />
            </div>
          </div>
          <div className="newStaffItem4">
            <div className="newStaffItem">
              <label>ตำบล / แขวง:</label>
              <input type="text" placeholder="" onChange={(data)=>setSub_district(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>อำเภอ / เขต:</label>
              <input type="text" placeholder="" onChange={(data)=>setDistrict(data.target.value)} required />
            </div>
            
            <div className="newStaffItem">
              <label>จังหวัด:</label>
              <input type="text" placeholder="" onChange={(data)=>setProvince(data.target.value)} required />
            </div>
            <div className="newStaffItem">
              <label>รหัสไปรษณีย์:</label>
              <input type="text" placeholder="" onChange={(data)=>setCode(data.target.value)}  required/>
            </div>
          </div>
          <div className="newStaffItem2">
            <div className="newStaffItem">
              <label>เบอร์โทรศัพท์มือถือ:</label>
              <input type="text" placeholder="" onChange={(data)=>setMobilePhone(data.target.value)} required/>
            </div>
            <div className="newStaffItem">
              <label>E-mail:</label>
              <input type="text" placeholder="" onChange={(data)=>setEmail(data.target.value)} required />
            </div>
          </div>
          
        </div>
        <div className="newStaffItem">
          <div className="newStaffItemB">
            <button type="submit" className="newStaffBT">Crate</button>
          </div>
        </div>
      </form>
    </div>
  );
}
