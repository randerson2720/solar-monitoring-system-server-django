# urls.py
from django.conf import settings
from django.urls import path
from django.conf.urls.static import static
import views


urlpatterns = [
    path('get-data/', views.get_data, name='get_data'),
    path('', views.index, name='index')
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])