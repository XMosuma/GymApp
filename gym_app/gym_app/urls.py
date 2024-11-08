from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),        # User endpoints
    path('nutrition/', include('nutrition.urls')), # Nutrition endpoints
    path('workouts/', include('workouts.urls')),   # Workout endpoints
]
