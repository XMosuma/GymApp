from django.urls import path
from . import views

urlpatterns = [
    path('meals/', views.MealViewSet.as_view({'get': 'list', 'post': 'create'}), name='meals'),
    path('daily-goal/', views.DailyGoalViewSet.as_view({'get': 'list', 'post': 'create'}), name='daily-goal'),
]
