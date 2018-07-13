from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Guest(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    invite = models.BooleanField(default=False)
    
    def first_name(self):
        return self.user.first_name
    
    def last_name(self):
        return self.user.last_name
    
    def email(self):
        return self.user.email
    
    def __str__(self):
        return self.user.first_name + " " + self.user.last_name
    
@receiver(post_save, sender=User)
def create_user_asGuest(sender, instance, created, **kwargs):
    if created:
        Guest.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_asGuest(sender, instance, **kwargs):
    instance.guest.save()
    

class Beer(models.Model):
    name = models.CharField(max_length=1000,default="heineken")
    
    def __str__(self):
        return self.name
