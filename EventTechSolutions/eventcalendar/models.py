from django.db import models


class User(models.Model):
    class Role(models.IntegerChoices):
        USER = 0
        MANAGER = 1
        ADMIN = 2

    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    role = models.IntegerField(choices=Role.choices, default=Role.USER)
    scores = models.IntegerField()
    job = models.CharField(max_length=255)
    photo = models.ImageField()
    vk = models.CharField(max_length=255, blank=True)
    telegram = models.CharField(max_length=255, blank=True)
    mail = models.CharField(max_length=255, blank=True)
    skype = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=255, blank=True)
    achievements = models.ManyToManyField(to="Achievement", through="GettingAchievement")


class UserNotification(models.Model):
    status = models.BooleanField(default=True)
    time = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    event = models.ForeignKey(to='Event', on_delete=models.CASCADE)
    description = models.CharField(max_length=255, blank=True)


class Achievement(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    score_to_aim = models.IntegerField()
    image = models.ImageField()


class GettingAchievement(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    achievement = models.ForeignKey(to=Achievement, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)


class Event(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    place = models.CharField(max_length=255)
    time_start = models.DateTimeField()
    time_end = models.DateTimeField()
    speaker = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    reference = models.CharField(max_length=255)
    reference_video = models.CharField(max_length=255)
    managers = models.ManyToManyField(to=User, related_name="events")


class UsersOnEvent(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    state = models.IntegerField()
    event = models.ForeignKey(to=Event, on_delete=models.SET_NULL, null=True)


class EventComments(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    text = models.CharField(max_length=255)
    time = models.DateTimeField(auto_now_add=True)
    event = models.ForeignKey(to=Event, on_delete=models.CASCADE)


class EventQuestions(models.Model):
    question = models.CharField(max_length=255)
    asked_user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="asked_user")
    answer = models.CharField(max_length=255)
    answered_user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="answered_user")
    time = models.DateTimeField(auto_now_add=True)
    event = models.ForeignKey(to=Event, on_delete=models.CASCADE)
