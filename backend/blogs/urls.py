from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet, CommentViewSet

# Create the main router
router = DefaultRouter()
router.register(r'blogposts', BlogPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('blogposts/<int:blog_id>/comments/',
         CommentViewSet.as_view({'get': 'list', 'post': 'create'}), name='comment-list'),
    path('blogposts/<int:blog_id>/comments/<int:pk>/', CommentViewSet.as_view(
        {'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='comment-detail'),
]
