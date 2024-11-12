# your_app/serializers.py
from rest_framework import serializers
from .models import Meal, DailyGoal

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ['id', 'name', 'calories', 'protein', 'carbs', 'fats', 'created_at']

class DailyGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyGoal
        fields = ['id', 'calorie_goal', 'protein_goal', 'carbs_goal', 'fats_goal', 'date']
