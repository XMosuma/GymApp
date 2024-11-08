from django.db import models
from users.models import UserProfile

class Meal(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    calories = models.PositiveIntegerField()
    protein = models.FloatField()
    carbs = models.FloatField()
    fats = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.user.username}'s {self.name}"

class DailyGoal(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    calorie_goal = models.PositiveIntegerField()
    protein_goal = models.FloatField()
    carbs_goal = models.FloatField()
    fats_goal = models.FloatField()
    date = models.DateField(auto_now_add=True)
