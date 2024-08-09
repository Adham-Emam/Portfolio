from django.db import models


class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    img_url = models.URLField()
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    blog_post = models.ForeignKey(
        BlogPost, related_name='comments', on_delete=models.CASCADE)
    author_name = models.CharField(max_length=100)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.author_name} on {self.blog_post}'
