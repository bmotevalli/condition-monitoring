from rest_framework import routers
from .api import MachineViewSet, SensorViewSet, TimeSeriesViewSet

router=routers.DefaultRouter()
router.register('api/machine', MachineViewSet, 'machine')
router.register('api/sensor', SensorViewSet, 'sensor')
router.register('api/timeseries', TimeSeriesViewSet, 'timeseries')

urlpatterns=router.urls