from rest_framework import viewsets
from .models import Meal, DailyGoal
from .serializers import MealSerializer, DailyGoalSerializer

class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer

class DailyGoalViewSet(viewsets.ModelViewSet):
    queryset = DailyGoal.objects.all()
    serializer_class = DailyGoalSerializer
