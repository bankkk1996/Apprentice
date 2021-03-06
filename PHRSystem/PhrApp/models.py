from django.db import models

# Create your models here.

class Locations(models.Model):
    id = models.AutoField(primary_key=True)
    Address = models.CharField(max_length=80)
    Village = models.CharField(max_length=80)
    Road = models.CharField(max_length=80)
    Sub_district = models.CharField(max_length=80)
    District = models.CharField(max_length=80)
    Province = models.CharField(max_length=80)
    Code = models.CharField(max_length=10)
    
class Patients(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    IDCardNumber = models.CharField(max_length=20, blank=False, null=False, unique=True)
    Prefix = models.CharField(max_length=20, blank=False, null=False)
    FirstName = models.CharField(max_length=120, blank=False, null=False)
    LastName = models.CharField(max_length=120, blank=False, null=False)
    Gender = models.CharField(max_length=10, blank=False, null=False)
    DateOfBirth = models.DateField()
    Nationality = models.CharField(max_length=20, blank=False, null=False)
    Religion = models.CharField(max_length=20, blank=False, null=False)
    Career = models.CharField(max_length=120, blank=True, null=True)
    CountryOfBirth = models.CharField(max_length=120, blank=False, null=False)
    ProvinceOfBirth = models.CharField(max_length=120, blank=False, null=False)
    MaritalStatus = models.CharField(max_length=100, blank=False, null=False)
    BloodType = models.CharField(max_length=10, blank=False, null=False)
    AllergyHistory = models.CharField(max_length=200, blank=False, null=False)
    FatherName = models.CharField(max_length=120, blank=False, null=False)
    MotherName = models.CharField(max_length=120, blank=False, null=False)
    Location = models.OneToOneField(Locations, on_delete=models.CASCADE, null=False)
    MobilePhone = models.CharField(max_length=20, blank=False, null=False)
    Email = models.CharField(max_length=120, blank=False, null=False)

class Doctors(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    IDCardNumber = models.CharField(max_length=20, blank=False, null=False, unique=True)
    Prefix = models.CharField(max_length=20, blank=False, null=False)
    FirstName = models.CharField(max_length=120, blank=False, null=False)
    LastName = models.CharField(max_length=120, blank=False, null=False)
    Gender = models.CharField(max_length=10, blank=False, null=False)
    DateOfBirth = models.DateField()
    Nationality = models.CharField(max_length=20, blank=False, null=False)
    Religion = models.CharField(max_length=20, blank=False, null=False)
    MaritalStatus = models.CharField(max_length=100, blank=False, null=False)
    BloodType = models.CharField(max_length=10, blank=False, null=False)
    AllergyHistory = models.CharField(max_length=200, blank=False, null=False)
    Position = models.CharField(max_length=120, blank=False, null=False)
    ProfessionalLicenseNumber = models.CharField(max_length=100, blank=False, null=False)
    Department = models.CharField(max_length=120, blank=False, null=False)
    Location = models.OneToOneField(Locations, on_delete=models.CASCADE, null=False)
    MobilePhone = models.CharField(max_length=20, blank=False, null=False)
    Email = models.CharField(max_length=120, blank=False, null=False)

class Staffs(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    IDCardNumber = models.CharField(max_length=20, blank=False, null=False, unique=True)
    Prefix = models.CharField(max_length=20, blank=False, null=False)
    FirstName = models.CharField(max_length=120, blank=False, null=False)
    LastName = models.CharField(max_length=120, blank=False, null=False)
    Gender = models.CharField(max_length=10, blank=False, null=False)
    DateOfBirth = models.DateField()
    Nationality = models.CharField(max_length=20, blank=False, null=False)
    Religion = models.CharField(max_length=20, blank=False, null=False)
    MaritalStatus = models.CharField(max_length=100, blank=False, null=False)
    BloodType = models.CharField(max_length=10, blank=False, null=False)
    AllergyHistory = models.CharField(max_length=200, blank=False, null=False)
    Position = models.CharField(max_length=120, blank=False, null=False)
    Department = models.CharField(max_length=120, blank=False, null=False)
    Location = models.OneToOneField(Locations, on_delete=models.CASCADE, null=False)
    MobilePhone = models.CharField(max_length=20, blank=False, null=False)
    Email = models.CharField(max_length=120, blank=False, null=False)

    
class InitialSymptoms(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    Date = models.DateField()
    Staff = models.ForeignKey(Staffs, on_delete=models.CASCADE)
    Patients = models.ForeignKey(Patients, on_delete=models.CASCADE)
    Symptoms = models.CharField(max_length=150)
    SymptomsDetail = models.CharField(max_length=500)
