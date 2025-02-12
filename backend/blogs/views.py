import random
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import BlogPost
from .serializers import BlogPostSerializer


class BlogPagination(PageNumberPagination):
    page_size = 8


class BlogView(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    pagination_class = BlogPagination


class RandomBlogView(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    def get_queryset(self):
        # Get the current blog post
        blog_id = self.request.query_params.get("blog_id")

        # Filter the queryset to not include the current blog post
        all_blog_ids = BlogPost.objects.exclude(id=blog_id).values_list("id", flat=True)

        # Get a random 4 blog post
        random_blog_ids = random.sample(list(all_blog_ids), min(4, len(all_blog_ids)))

        return BlogPost.objects.filter(id__in=random_blog_ids)


class PostDetail(generics.RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer