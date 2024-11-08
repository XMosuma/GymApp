from django.contrib import admin
from .models import Exercise, WorkoutPlan, WorkoutExercise

@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('name', 'muscle_group')
    search_fields = ('name', 'muscle_group')

class WorkoutExerciseInline(admin.TabularInline):
    model = WorkoutExercise
    extra = 1

@admin.register(WorkoutPlan)
class WorkoutPlanAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'created_at')
    search_fields = ('name', 'user__user__username')
    inlines = [WorkoutExerciseInline]
