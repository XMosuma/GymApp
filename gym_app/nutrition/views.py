# your_app/views.py
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Meal, DailyGoal
from .serializers import MealSerializer, DailyGoalSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def meal_list_create_view(request):
    if request.method == 'GET':
        meals = Meal.objects.filter(user=request.user.userprofile)
        serializer = MealSerializer(meals, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MealSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user.userprofile)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def daily_goal_view(request):
    try:
        daily_goal = DailyGoal.objects.get(user=request.user.userprofile, date=request.data.get('date'))
    except DailyGoal.DoesNotExist:
        daily_goal = DailyGoal.objects.create(user=request.user.userprofile)

    if request.method == 'GET':
        serializer = DailyGoalSerializer(daily_goal)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DailyGoalSerializer(daily_goal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
