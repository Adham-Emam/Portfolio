from rest_framework import viewsets
from rest_framework.response import Response
from .models import BlogPost, Comment
from .serializers import BlogPostSerializer, CommentSerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer

    def get_queryset(self):
        blog_id = self.kwargs.get('blog_id')
        if blog_id:
            return Comment.objects.filter(blog_id=blog_id)
        return Comment.objects.all()
