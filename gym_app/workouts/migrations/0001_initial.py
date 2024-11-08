# Generated by Django 5.1.3 on 2024-11-07 07:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('muscle_group', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('video_url', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='WorkoutExercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sets', models.PositiveIntegerField()),
                ('reps', models.PositiveIntegerField()),
                ('rest_time', models.PositiveIntegerField(help_text='Rest time in seconds')),
                ('exercise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='workouts.exercise')),
            ],
        ),
        migrations.CreateModel(
            name='WorkoutPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('exercises', models.ManyToManyField(through='workouts.WorkoutExercise', to='workouts.exercise')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.userprofile')),
            ],
        ),
        migrations.AddField(
            model_name='workoutexercise',
            name='workout_plan',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='workouts.workoutplan'),
        ),
    ]
