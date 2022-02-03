from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=1000)
    username = models.CharField(max_length=1000)
    photo_url = models.TextField()
    description = models.TextField()

    def __str__(self):
        return self.title
