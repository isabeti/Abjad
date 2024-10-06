from django.contrib import admin
from .models import PersianWord, EnglishWord

class PersianWordAdmin(admin.ModelAdmin):
	list_display = ('word', 'kabir_abjad', 'saghir_abjad', 'vasit_abjad', 'search', 'updated_at', 'created_at')
	search_fields = ('word', )
admin.site.register(PersianWord, PersianWordAdmin)


class EnglishWordAdmin(admin.ModelAdmin):
	list_display = ('word', 'abjad_hebrew', 'abjad_english', 'abjad_simple', 'search', 'updated_at', 'created_at')
	search_fields = ('word', )

admin.site.register(EnglishWord, EnglishWordAdmin)