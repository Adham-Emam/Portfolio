from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=100)
    img_url = models.ImageField(upload_to="project_imgs/")
    description = models.TextField()
    project_url = models.URLField()
    tags  = models.JSONField(default=list)
    date_posted = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-date_posted"]

    def __str__(self):
        return self.title
