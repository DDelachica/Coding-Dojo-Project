from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('process', views.process),
    path('delete', views.delete),
    path('state/<int:id>', views.state),
]
