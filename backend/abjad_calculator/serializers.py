from rest_framework import serializers
from .models import PersianWord, EnglishWord

class PersianWordSerilaizer(serializers.ModelSerializer):
	class Meta():
		model = PersianWord
		fields = ['word', 'kabir_abjad', 'saghir_abjad', 'vasit_abjad', 'search']

class EnglishWordSerilaizer(serializers.ModelSerializer):
	class Meta():
		model = EnglishWord
		fields = ['word', 'abjad_hebrew', 'abjad_english', 'abjad_simple', 'search']