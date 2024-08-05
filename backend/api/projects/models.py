from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100)
    img_url = models.URLField()
    description = models.TextField()
    project_url = models.URLField()
    date_posted = models.DateTimeField(auto_now_add=True)
