from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=100)
    img_url = models.URLField()
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Timeline(models.Model):
    TYPE_CHOICES = [
        ('education', 'Education'),
        ('experience', 'Experience'),
    ]

    type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='education')
    from_date = models.DateField(null=True, blank=True)
    to_date = models.DateField(null=True, blank=True)
    title = models.CharField(max_length=100)
    role = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True)
    
    def __str__(self):
        return self.title