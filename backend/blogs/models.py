from django.db import models


class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    img_url = models.ImageField(blank=True, null=True, upload_to="blog_imgs/")
    published_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-published_date"]

    def __str__(self):
        return self.title


