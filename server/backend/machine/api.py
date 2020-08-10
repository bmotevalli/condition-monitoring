from machine.models import Machine, Sensor, TimeSeries
from rest_framework import viewsets, permissions
from .serializer import MachineSerializer, SensorSerializer, TimeSeriesSerializer

class MachineViewSet(viewsets.ModelViewSet):
    queryset=Machine.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=MachineSerializer

class SensorViewSet(viewsets.ModelViewSet):
    queryset=Sensor.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=SensorSerializer

class TimeSeriesViewSet(viewsets.ModelViewSet):
    queryset=TimeSeries.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=TimeSeriesSerializer