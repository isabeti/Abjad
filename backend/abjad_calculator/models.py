from django.db import models

class PersianWord(models.Model):
	word = models.CharField(max_length=200)
	kabir_abjad = models.IntegerField(default=0)
	saghir_abjad = models.IntegerField(default=0)
	vasit_abjad = models.IntegerField(default=0)
	search = models.IntegerField(default=0)

	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.word
		
	class Meta:
		db_table = 'persian_word'

class EnglishWord(models.Model):
	word = models.CharField(max_length=200)
	abjad_hebrew = models.IntegerField(default=0)
	abjad_english = models.IntegerField(default=0)
	abjad_simple = models.IntegerField(default=0)
	search = models.IntegerField(default=0)

	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.word

	class Meta:
		db_table = 'english_word'