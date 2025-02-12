from django.urls import path
from . import views

urlpatterns = [
    path("skills/", views.SkillList.as_view(), name="skill-list"),
    path("timeline/", views.TimelineList.as_view(), name="timeline-list"),
]