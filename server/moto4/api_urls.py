from django.urls import include, path
from django.conf import settings

urlpatterns = []

for app in settings.INSTALLED_APPS:
    try:
        urlpatterns.append(path(f'api/{app}/', include(f'{app}.urls')))
    except ImportError:
        pass