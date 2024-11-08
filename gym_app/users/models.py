from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    height = models.FloatField(null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.user.username
