from django.db import models
from users.models import UserProfile

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    muscle_group = models.CharField(max_length=50)
    description = models.TextField()
    video_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class WorkoutPlan(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    exercises = models.ManyToManyField(Exercise, through='WorkoutExercise')
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.user.username}'s {self.name}"

class WorkoutExercise(models.Model):
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    sets = models.PositiveIntegerField()
    reps = models.PositiveIntegerField()
    rest_time = models.PositiveIntegerField(help_text="Rest time in seconds")
