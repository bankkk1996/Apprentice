from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from PhrApp.models import Locations, Patients, Doctors, Staffs
from PhrApp.serializers import LocationSerializer, PatientSerializer, DoctorSerializer, StaffSerializer

# Create your views here.
# Patient API
@csrf_exempt
def  patientApi(request, id=0):
    if request.method == 'GET':
        if id!=0:
            patient = Patients.objects.get(id=id)
            patients_serializer = PatientSerializer(patient, many=False)
            return JsonResponse(patients_serializer.data,safe=False)
        
        patients = Patients.objects.all()
        patients_serializer = PatientSerializer(patients, many=True)

        return JsonResponse(patients_serializer.data,safe=False)
    elif request.method == 'POST':
        post_data = JSONParser().parse(request)
        new_location = Locations.objects.create(
            Address = post_data['Address'],
            Village = post_data['Village'],
            Road = post_data['Road'],
            Sub_district = post_data['Sub_district'],
            District = post_data['District'],
            Province = post_data['Province'],
            Code = post_data['Code']
        )
        new_location.save()
        new_patient = Patients.objects.create(
            IDCardNumber = post_data['IDCardNumber'],
            Prefix = post_data['Prefix'],
            FirstName = post_data['FirstName'],
            LastName = post_data['LastName'],
            Gender = post_data['Gender'],
            DateOfBirth = post_data['DateOfBirth'],
            Nationality = post_data['Nationality'],
            Religion = post_data['Religion'],
            Career = post_data['Career'],
            CountryOfBirth = post_data['CountryOfBirth'],
            ProvinceOfBirth = post_data['ProvinceOfBirth'],
            MaritalStatus = post_data['MaritalStatus'],
            BloodType = post_data['BloodType'],
            AllergyHistory = post_data['AllergyHistory'],
            FatherName = post_data['FatherName'],
            MotherName = post_data['MotherName'],
            MobilePhone = post_data['MobilePhone'],
            Email = post_data['Email'],
            Location = new_location

        )
        new_patient.save()
        return JsonResponse("Added Successfully",safe=False)
    elif request.method == 'PUT':
        patient_data = JSONParser().parse(request)
        patient = Patients.objects.get(id=patient_data['id'])
        patients_serializer = PatientSerializer(patient, data=patient_data)
        location_data = patient_data['Location']
        location = Locations.objects.get(id=location_data['id'])
        locations_serializer = LocationSerializer(location, data=patient_data['Location'])
        if patients_serializer.is_valid():
            patients_serializer.save()
            if locations_serializer.is_valid():
                locations_serializer.save()
                return JsonResponse("Updated Successfully",safe=False)
            return JsonResponse(locations_serializer.data,safe=False)
        return JsonResponse("Failed to Update",safe=False)
    elif request.method == 'DELETE':
        patient = Patients.objects.get(id=id)
        location = Locations.objects.get(id=patient.Location.id)
        patient.delete()
        location.delete()
        return JsonResponse("Deleted Successfully",safe=False)

# Doctor API 
@csrf_exempt
def  doctorApi(request, id=0):
    if request.method == 'GET':
        if id!=0:
            doctor = Doctors.objects.get(id=id)
            doctors_serializer = DoctorSerializer(doctor, many=False)
            return JsonResponse(doctors_serializer.data,safe=False)
        
        doctors = Doctors.objects.all()
        doctors_serializer = DoctorSerializer(doctors, many=True)

        return JsonResponse(doctors_serializer.data,safe=False)
    elif request.method == 'POST':
        post_data = JSONParser().parse(request)
        new_location = Locations.objects.create(
            Address = post_data['Address'],
            Village = post_data['Village'],
            Road = post_data['Road'],
            Sub_district = post_data['Sub_district'],
            District = post_data['District'],
            Province = post_data['Province'],
            Code = post_data['Code']
        )
        new_location.save()
        new_doctor = Doctors.objects.create(
            IDCardNumber = post_data['IDCardNumber'],
            Prefix = post_data['Prefix'],
            FirstName = post_data['FirstName'],
            LastName = post_data['LastName'],
            Gender = post_data['Gender'],
            DateOfBirth = post_data['DateOfBirth'],
            Nationality = post_data['Nationality'],
            Religion = post_data['Religion'],
            MaritalStatus = post_data['MaritalStatus'],
            BloodType = post_data['BloodType'],
            AllergyHistory = post_data['AllergyHistory'],
            Position = post_data['Position'],
            ProfessionalLicenseNumber = post_data['ProfessionalLicenseNumber'],
            Department = post_data['Department'],
            MobilePhone = post_data['MobilePhone'],
            Email = post_data['Email'],
            Location = new_location
        )
        new_doctor.save()
        return JsonResponse("Added Successfully",safe=False)

    elif request.method == 'PUT':
        doctor_data = JSONParser().parse(request)
        doctor = Doctors.objects.get(id=doctor_data['id'])
        doctors_serializer = DoctorSerializer(doctor, data=doctor_data)
        location_data = doctor_data['Location']
        location = Locations.objects.get(id=location_data['id'])
        locations_serializer = LocationSerializer(location, data=doctor_data['Location'])
        if doctors_serializer.is_valid():
            doctors_serializer.save()
            if locations_serializer.is_valid():
                locations_serializer.save()
                return JsonResponse("Updated Successfully",safe=False)
            return JsonResponse(locations_serializer.data,safe=False)
        return JsonResponse("Failed to Update",safe=False)
    elif request.method == 'DELETE':
        doctor = Doctors.objects.get(id=id)
        location = Locations.objects.get(id=doctor.Location.id)
        doctor.delete()
        location.delete()
        return JsonResponse("Deleted Successfully",safe=False)

# Staff API 
@csrf_exempt
def  staffApi(request, id=0):
    if request.method == 'GET':
        if id!=0:
            staff = Staffs.objects.get(id=id)
            staffs_serializer = StaffSerializer(staff, many=False)
            return JsonResponse(staffs_serializer.data,safe=False)
        
        staffs = Staffs.objects.all()
        staffs_serializer = StaffSerializer(staffs, many=True)

        return JsonResponse(staffs_serializer.data,safe=False)
    elif request.method == 'POST':
        post_data = JSONParser().parse(request)
        new_location = Locations.objects.create(
            Address = post_data['Address'],
            Village = post_data['Village'],
            Road = post_data['Road'],
            Sub_district = post_data['Sub_district'],
            District = post_data['District'],
            Province = post_data['Province'],
            Code = post_data['Code']
        )
        new_location.save()
        new_staff = Staffs.objects.create(
            IDCardNumber = post_data['IDCardNumber'],
            Prefix = post_data['Prefix'],
            FirstName = post_data['FirstName'],
            LastName = post_data['LastName'],
            Gender = post_data['Gender'],
            DateOfBirth = post_data['DateOfBirth'],
            Nationality = post_data['Nationality'],
            Religion = post_data['Religion'],
            MaritalStatus = post_data['MaritalStatus'],
            BloodType = post_data['BloodType'],
            AllergyHistory = post_data['AllergyHistory'],
            Position = post_data['Position'],
            Department = post_data['Department'],
            Email = post_data['Email'],
            MobilePhone = post_data['MobilePhone'],
            Location = new_location
        )
        new_staff.save()
        return JsonResponse("Added Successfully",safe=False)

    elif request.method == 'PUT':
        staff_data = JSONParser().parse(request)
        staff = Staffs.objects.get(id=staff_data['id'])
        staffs_serializer = StaffSerializer(staff, data=staff_data)
        location_data = staff_data['Location']
        location = Locations.objects.get(id=location_data['id'])
        locations_serializer = LocationSerializer(location, data=staff_data['Location'])
        if staffs_serializer.is_valid():
            staffs_serializer.save()
            if locations_serializer.is_valid():
                locations_serializer.save()
                return JsonResponse("Updated Successfully",safe=False)
            return JsonResponse(locations_serializer.data,safe=False)
        return JsonResponse("Failed to Update",safe=False)
    elif request.method == 'DELETE':
        staff = Staffs.objects.get(id=id)
        location = Locations.objects.get(id=staff.Location.id)
        staff.delete()
        location.delete()
        return JsonResponse("Deleted Successfully",safe=False)

        