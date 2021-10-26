
from django.contrib import admin
from django.urls import path, include
# from .subscriber import start_listening

urlpatterns = [
    path('admin/', admin.site.urls),
    path('detect/', include('detector.urls'), name="detector")
]

# start_listening()