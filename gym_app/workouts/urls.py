from django.urls import path
from . import views

urlpatterns = [
    path('exercises/', views.ExerciseViewSet.as_view({'get': 'list', 'post': 'create'}), name='exercises'),
    path('plans/', views.WorkoutPlanViewSet.as_view({'get': 'list', 'post': 'create'}), name='workout-plans'),
]
