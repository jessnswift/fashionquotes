from django.db import models
from datetime import datetime
import json

class Quote(models.Model):
    quote = models.TextField(default="")
    source = models.TextField(default="")
    year = models.IntegerField(default="", blank=True, null=True)

    def __str__(self):
        return_dict = {
            'quote': self.quote,
            'source': self.source,
            'year': self.year
        }
        return json.dumps(return_dict)