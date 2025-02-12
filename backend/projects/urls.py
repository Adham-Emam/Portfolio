from django.urls import path
from . import views

urlpatterns = [
    path("", views.ProjectList.as_view(), name="project-list"),
    path("<int:pk>/", views.ProjectDetail.as_view(), name="project-detail"),
]
