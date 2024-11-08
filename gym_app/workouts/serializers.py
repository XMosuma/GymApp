from rest_framework import serializers
from .models import WorkoutPlan, Exercise, WorkoutExercise

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'

class WorkoutExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutExercise
        fields = '__all__'

class WorkoutPlanSerializer(serializers.ModelSerializer):
    exercises = WorkoutExerciseSerializer(many=True, read_only=True)

    class Meta:
        model = WorkoutPlan
        fields = ['id', 'name', 'exercises']
