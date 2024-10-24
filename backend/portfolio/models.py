from django.db import models


class Projects(models.Model):
    project_type = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField()
    video_url = models.URLField()
    github_link = models.URLField()

    def __str__(self):
        return self.title
