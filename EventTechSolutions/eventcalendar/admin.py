from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(UserNotification)
admin.site.register(Achievement)
admin.site.register(GettingAchievement)
admin.site.register(Event)
admin.site.register(UsersOnEvent)
admin.site.register(EventComments)
admin.site.register(EventQuestions)
