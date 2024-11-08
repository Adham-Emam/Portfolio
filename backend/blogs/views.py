import random
from rest_framework import generics
from .models import BlogPost, Comment
from .serializers import BlogPostSerializer, CommentSerializer


class BlogView(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


class RandomBlogView(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    def get_queryset(self):
        # Get the current blog post
        blog_id = self.kwargs.get("blog_id")

        # Filter the queryset to not include the current blog post
        all_blog_ids = BlogPost.objects.exclude(id=blog_id).values_list("id", flat=True)

        # Get a random 4 blog post
        random_blog_ids = random.sample(list(all_blog_ids), min(4, len(all_blog_ids)))

        return BlogPost.objects.filter(id__in=random_blog_ids)


class PostDetail(generics.RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


class CommentView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
