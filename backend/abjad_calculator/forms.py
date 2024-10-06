from django import forms
from . import dictionary

class AbjadCalculateForm(forms.Form):
    word = forms.CharField(max_length=200)
    is_persian = forms.BooleanField(required=False)

    def clean(self):
        cleaned_data = super().clean()
        word = cleaned_data.get('word')
        
        if not word:
            raise forms.ValidationError('Word field cannot be empty.')

        error_fa = False
        error_en = False
        for i in word:
            if i not in dictionary.kabir_abjad or i not in dictionary.saghir_abjad or i not in dictionary.vasit_abjad:
                error_fa = True
                break
            cleaned_data['is_persian'] = True

        for i in word:
            if i.lower() not in dictionary.abjad_hebrew or i.lower() not in dictionary.abjad_english or i.lower() not in dictionary.abjad_simple:
                error_en = True
                break

        if error_fa and error_en:
            raise forms.ValidationError('Please send persian or english word.')
        return cleaned_data

