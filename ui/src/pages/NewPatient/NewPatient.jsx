import React, {useState} from "react";
import "./NewPatient.css";
import axios from "axios";

export default function NewPatient() {
  const [IDCardNumber, setIDCardNumber] = useState();
  const [Prefix, setPrefix] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Gender, setGender] = useState();
  const [DateOfBirth, setDateOfBirth] = useState();
  const [Nationality, setNationality] = useState();
  const [Religion, setReligion] = useState();
  const [Career, setCareer] = useState();
  const [CountryOfBirth, setCountryOfBirth] = useState();
  const [ProvinceOfBirth, setProvinceOfBirth] = useState();
  const [MaritalStatus, setMaritalStatus] = useState();
  const [BloodType, setBloodType] = useState();
  const [AllergyHistory, setAllergyHistory] = useState();
  const [FatherName, setFatherName] = useState();
  const [MotherName, setMotherName] = useState();
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
    const patient = {
      IDCardNumber: IDCardNumber,
      Prefix: Prefix,
      FirstName: FirstName,
      LastName: LastName,
      Gender: Gender,
      DateOfBirth: DateOfBirth,
      Nationality: Nationality,
      Religion: Religion,
      Career: Career,
      CountryOfBirth: CountryOfBirth,
      ProvinceOfBirth: ProvinceOfBirth,
      MaritalStatus: MaritalStatus,
      BloodType: BloodType,
      AllergyHistory: AllergyHistory,
      FatherName: FatherName,
      MotherName: MotherName,
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

    const response = await axios.post('http://127.0.0.1:8000/patient',patient).catch(err=>console.log(err));
    window.location.replace("http://localhost:3000/patients");
  };


  return (
    <div className="newPatient">
      <h1 className="newPatientTitle">New Patient</h1>
      <form className="newPatientForm" onSubmit={handleSubmit}>
        <span className="newPatientTitlePersonal">Personal Information</span>
        <div className="newPatientPersonal">
          <div className="newPatientItem">
            <label>เลขบัตรประชาชน:</label>
            <input type="text" placeholder="" onChange={(data)=>setIDCardNumber(data.target.value)} required />
          </div>
          <div className="newPatientItem3">
            <div className="newPatientItem">
              <label>คำนำหน้า:</label>
              <input type="text" placeholder="" onChange={(data)=>setPrefix(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>ชื่อ:</label>
              <input type="text" placeholder="" onChange={(data)=>setFirstName(data.target.value)}  required/>
            </div>
            <div className="newPatientItem">
              <label>นามสกุล:</label>
              <input type="text" placeholder="" onChange={(data)=>setLastName(data.target.value)} required />
            </div>
          </div>
          <div className="newPatientItem2">
            <div className="newPatientItem">
              <label>เพศ:</label>
              <input type="text" placeholder="" onChange={(data)=>setGender(data.target.value)}  required/>
            </div>
            <div className="newPatientItem">
              <label>วัน/เดือน/ปีเกิด:</label>
              <input type="text" placeholder="" onChange={(data)=>setDateOfBirth(data.target.value)} required />
            </div>
          </div>
          <div className="newPatientItem3">
            <div className="newPatientItem">
              <label>สัญชาติ:</label>
              <input type="text" placeholder="" onChange={(data)=>setNationality(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>ศาสนา:</label>
              <input type="text" placeholder="" onChange={(data)=>setReligion(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>อาชีพ:</label>
              <input type="text" placeholder="" onChange={(data)=>setCareer(data.target.value)}  required/>
            </div>
          </div>
          <div className="newPatientItem3">
            <div className="newPatientItem">
              <label>ประเทศที่เกิด:</label>
              <input type="text" placeholder="" onChange={(data)=>setCountryOfBirth(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>จังหวัดที่เกิด:</label>
              <input type="text" placeholder="" onChange={(data)=>setProvinceOfBirth(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>สถานะภาพสมรส:</label>
              <input type="text" placeholder="" onChange={(data)=>setMaritalStatus(data.target.value)}  required/>
            </div>
          </div>
          <div className="newPatientItem2">
            <div className="newPatientItem">
              <label>หมู่เลือด:</label>
              <input type="text" placeholder="" onChange={(data)=>setBloodType(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>ประวัติการแพ้ (ยา/อาหาร/อื่นๆ):</label>
              <input type="text" placeholder="" onChange={(data)=>setAllergyHistory(data.target.value)} required />
            </div>
          </div>
          <div className="newPatientItem2">
            <div className="newPatientItem">
              <label>ชื่อ-นามสกุล บิดา:</label>
              <input type="text" placeholder="" onChange={(data)=>setFatherName(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>ชื่อ-นามสกุล มารดา:</label>
              <input type="text" placeholder="" onChange={(data)=>setMotherName(data.target.value)} required />
            </div>
          </div>
        </div>
        <span className="newPatientTitleContact">Contact Information</span>
        <div className="newPatientContact">
          <div className="newPatientItem3">
            <div className="newPatientItem">
              <label>บ้านเลขที่ (ที่ติดต่อได้):</label>
              <input type="text" placeholder="" onChange={(data)=>setAddress(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>หมู่ที่:</label>
              <input type="text" placeholder="" onChange={(data)=>setVillage(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>ถนน:</label>
              <input type="text" placeholder="" onChange={(data)=>setRoad(data.target.value)} required />
            </div>
          </div>
          <div className="newPatientItem4">
            <div className="newPatientItem">
              <label>ตำบล / แขวง:</label>
              <input type="text" placeholder="" onChange={(data)=>setSub_district(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>อำเภอ / เขต:</label>
              <input type="text" placeholder="" onChange={(data)=>setDistrict(data.target.value)} required />
            </div>
            
            <div className="newPatientItem">
              <label>จังหวัด:</label>
              <input type="text" placeholder="" onChange={(data)=>setProvince(data.target.value)} required />
            </div>
            <div className="newPatientItem">
              <label>รหัสไปรษณีย์:</label>
              <input type="text" placeholder="" onChange={(data)=>setCode(data.target.value)}  required/>
            </div>
          </div>
          <div className="newPatientItem2">
            <div className="newPatientItem">
              <label>เบอร์โทรศัพท์มือถือ:</label>
              <input type="text" placeholder="" onChange={(data)=>setMobilePhone(data.target.value)} required/>
            </div>
            <div className="newPatientItem">
              <label>E-mail:</label>
              <input type="text" placeholder="" onChange={(data)=>setEmail(data.target.value)} required />
            </div>
          </div>
          
        </div>
        <div className="newPatientItem">
          <div className="newPatientItemB">
            <button type="submit" className="newPatientBT">Crate</button>
          </div>
        </div>
      </form>
    </div>
  );
}
