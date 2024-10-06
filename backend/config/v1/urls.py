from django.urls import include, path

urlpatterns = [
    path('', include('abjad_calculator.urls'))
]