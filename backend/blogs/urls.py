from django.urls import path
from . import views

urlpatterns = [
    path("posts/", views.BlogView.as_view(), name="blogpost-list"),
    path("posts/<int:pk>/", views.PostDetail.as_view(), name="blogpost-detail"),
    path("random_posts/", views.RandomBlogView.as_view(), name="random-blogpost-list"),
]
