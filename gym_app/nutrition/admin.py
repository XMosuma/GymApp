from django.contrib import admin
from .models import Meal, DailyGoal

@admin.register(Meal)
class MealAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'calories', 'created_at')
    search_fields = ('name', 'user__user__username')

@admin.register(DailyGoal)
class DailyGoalAdmin(admin.ModelAdmin):
    list_display = ('user', 'calorie_goal', 'protein_goal', 'carbs_goal', 'fats_goal', 'date')
    list_filter = ('date',)
    search_fields = ('user__user__username',)
