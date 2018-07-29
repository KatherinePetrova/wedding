from django.conf.urls import url
from . import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^table$', views.table, name='table'),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api/inf$', views.guestInf),
    url(r'^api/invite$', views.getInvite),
    url(r'^api/guests$', views.guests)
]