from rest_framework import serializers
from .models import BlogPost, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class BlogPostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)  # To include comments in the blog post representation

    class Meta:
        model = BlogPost
        fields = '__all__'
