from rest_framework import serializers
from machine.models import Machine, Sensor, TimeSeries

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model=Machine
        fields="__all__"

class SensorSerializer(serializers.ModelSerializer):    
    class Meta:
        model=Sensor
        fields="__all__"

class TimeSeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model=TimeSeries
        fields="__all__"