from django.urls import path
from . import views

app_name = 'abjad_calculator'
urlpatterns = [
    path('calculator/', views.AbjadCalculate.as_view(), name='calculator'),
    path('fa-search/<str:word>/', views.PersianWordSearchView.as_view(), name='persian_word_search'),
    path('en-search/<str:word>/', views.EnglishWordSearchView.as_view(), name='en-persian_word_search'),
]

