from django.db import models

class Machine(models.Model):

    name= models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    lat = models.FloatField()
    lng = models.FloatField()

class Sensor(models.Model):

    name = models.CharField(max_length= 100)
    sens_type = models.CharField(max_length=100)
    mach_fid = models.ForeignKey(Machine, on_delete=models.CASCADE)

class TimeSeries(models.Model):

    timestamp = models.DateTimeField()
    value = models.FloatField()
    sensor_fid = models.ForeignKey(Sensor, on_delete=models.CASCADE)