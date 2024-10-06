from abjad_calculator.dictionary import kabir_abjad, saghir_abjad, vasit_abjad, abjad_hebrew, abjad_english, abjad_simple
from abjad_calculator.models import PersianWord, EnglishWord

def abjad_clalc_EN(word):
    new_word = ''
    hebrew_letters = []
    list_hebrew_numbers = []
    hebrew_number = 0

    english_letters = []
    list_english_numbers = []
    english_number = 0

    simple_letters = []
    list_simple_numbers = []
    simple_number = 0
    
    for i in word:
        if len(hebrew_letters) != 0 and i == " " and hebrew_letters[-1] == i:
            continue

        new_word += i
        hebrew_letters.append(i)
        english_letters.append(i)
        simple_letters.append(i)

        list_hebrew_numbers.append(abjad_hebrew[i.lower()])
        list_english_numbers.append(abjad_english[i.lower()])
        list_simple_numbers.append(abjad_simple[i.lower()])

        hebrew_number += abjad_hebrew[i.lower()]
        english_number += abjad_english[i.lower()]
        simple_number += abjad_simple[i.lower()]

    box_data = {
        'hebrew': {'word': new_word, 'abjad_number': hebrew_number, 'letters': hebrew_letters, 'list_abjad_number': list_hebrew_numbers},
        'english': {'word': new_word, 'abjad_number': english_number, 'letters': english_letters, 'list_abjad_number': list_english_numbers},
        'simple': {'word': new_word, 'abjad_number': simple_number, 'letters': simple_letters, 'list_abjad_number': list_simple_numbers},
    }
    return {'input': new_word, 'box_data': box_data}


def abjad_clalc_FA(word):
    new_word = ''
    kabir_letters = []
    list_kabir_number = []
    kabir_number = 0

    saghit_letters = []
    list_saghit_number = []
    saghit_number = 0

    vasit_letters = []
    list_vasit_number = []
    vasit_number = 0
    
    for i in word:
        if len(kabir_letters) != 0 and i == " " and kabir_letters[-1] == i:
            continue

        if i == '‌':
            continue

        new_word += i
        kabir_letters.append(i)
        saghit_letters.append(i)
        vasit_letters.append(i)

        list_kabir_number.append(kabir_abjad[i])
        list_saghit_number.append(saghir_abjad[i])
        list_vasit_number.append(vasit_abjad[i])

        kabir_number += kabir_abjad[i]
        saghit_number += saghir_abjad[i]
        vasit_number += vasit_abjad[i]

    box_data = {
        'kabir': {'word': new_word, 'abjad_number': kabir_number, 'letters': kabir_letters, 'list_abjad_number': list_kabir_number},
        'saghit': {'word': new_word, 'abjad_number': saghit_number, 'letters': saghit_letters, 'list_abjad_number': list_saghit_number},
        'vasit': {'word': new_word, 'abjad_number': vasit_number, 'letters': vasit_letters, 'list_abjad_number': list_vasit_number},
    }
    return {'input': new_word, 'box_data': box_data}



# ------------------------------ ENGLISH
def insert_en_words_from_file():
    with open('words/en_words.txt', 'r', encoding='utf-8') as file:
        for line in file:
            word = line.strip()
            if word:
                is_exist = EnglishWord.objects.filter(word=word)
                if not is_exist:
                    try:
                        data = abjad_clalc_EN(word)
                        abjad_hebrew = data['box_data']['hebrew']['abjad_number']
                        abjad_english = data['box_data']['english']['abjad_number']
                        abjad_simple = data['box_data']['simple']['abjad_number']
                        create_obj = EnglishWord.objects.create(
                            word=word, abjad_hebrew=abjad_hebrew, abjad_english=abjad_english, 
                            abjad_simple=abjad_simple)
                    except:
                        pass

# ------------------------------ PERSIAN

def insert_fa_1_words_from_file():
    with open('words/distinct_words.txt', 'r', encoding='utf-8') as file:
        for line in file:
            word = line.strip()
            if word:
                is_exist = PersianWord.objects.filter(word=word)
                if not is_exist:
                    try:
                        data = abjad_clalc_FA(word)
                        kabir_abjad = data['box_data']['kabir']['abjad_number']
                        saghir_abjad = data['box_data']['saghit']['abjad_number']
                        vasit_abjad = data['box_data']['vasit']['abjad_number']
                        create_obj = PersianWord.objects.create(
                            word=word, kabir_abjad=kabir_abjad, saghir_abjad=saghir_abjad, 
                            vasit_abjad=vasit_abjad)
                    except:
                        pass

def insert_fa_2_words_from_file():
    with open('words/output.txt', 'r', encoding='utf-8') as file:
        for line in file:
            word = line.strip()
            if word:
                is_exist = PersianWord.objects.filter(word=word)
                if not is_exist:
                    try:
                        data = abjad_clalc_FA(word)
                        kabir_abjad = data['box_data']['kabir']['abjad_number']
                        saghir_abjad = data['box_data']['saghit']['abjad_number']
                        vasit_abjad = data['box_data']['vasit']['abjad_number']
                        create_obj = PersianWord.objects.create(
                            word=word, kabir_abjad=kabir_abjad, saghir_abjad=saghir_abjad, 
                            vasit_abjad=vasit_abjad)
                    except:
                        pass

insert_en_words_from_file()

