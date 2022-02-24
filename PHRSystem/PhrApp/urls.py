from django.urls import re_path
from PhrApp import views

urlpatterns=[
    re_path(r'^patient$',views.patientApi),
    re_path(r'^patient/([0-9]+)$',views.patientApi),
    re_path(r'^doctor$',views.doctorApi),
    re_path(r'^doctor/([0-9]+)$',views.doctorApi),
    re_path(r'^staff$',views.staffApi),
    re_path(r'^staff/([0-9]+)$',views.staffApi),
]