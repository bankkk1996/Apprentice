from rest_framework import serializers
from PhrApp.models import Locations, Patients, Doctors, Staffs

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locations
        fields = [
            'id',
            'Address',
            'Village',
            'Road',
            'Sub_district',
            'District',
            'Province',
            'Code',
        ]

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = [
            'id',
            'IDCardNumber',
            'Prefix',
            'FirstName',
            'LastName',
            'Gender',
            'DateOfBirth',
            'Nationality',
            'Religion',
            'Career',
            'CountryOfBirth',
            'ProvinceOfBirth',
            'MaritalStatus',
            'BloodType',
            'AllergyHistory',
            'FatherName',
            'MotherName',
            'Location',
            'MobilePhone',
            'Email',
        ]
        depth = 1

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctors
        fields = [
            'id',
            'IDCardNumber',
            'Prefix',
            'FirstName',
            'LastName',
            'Gender',
            'DateOfBirth',
            'Nationality',
            'Religion',
            'MaritalStatus',
            'BloodType',
            'AllergyHistory',
            'Position',
            'ProfessionalLicenseNumber',
            'Department',
            'Location',
            'MobilePhone',
            'Email',
        ]
        depth = 1

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staffs
        fields = [
            'id',
            'IDCardNumber',
            'Prefix',
            'FirstName',
            'LastName',
            'Gender',
            'DateOfBirth',
            'Nationality',
            'Religion',
            'MaritalStatus',
            'BloodType',
            'AllergyHistory',
            'Position',
            'Department',
            'Location',
            'MobilePhone',
            'Email',
        ]
        depth = 1