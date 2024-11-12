from django.urls import path
from .views import meal_list_create_view, daily_goal_view

urlpatterns = [
    path('meals/', meal_list_create_view, name='meal_list_create'),
    path('daily-goal/', daily_goal_view, name='daily_goal'),
]
