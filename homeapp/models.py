from django.db import models

# Create your models here.
class Message(models.Model):
    name = models.CharField(max_length=256,default='')
    email = models.EmailField(max_length=256,default='')
    contact_number = models.CharField(max_length=256,default='')
    message = models.TextField(default='')
    def __str__(self) -> str:
        return f'Name: {self.name} - Email: {self.email} - Contact: {self.contact_number}'