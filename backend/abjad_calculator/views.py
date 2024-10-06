from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from django.db.models import Q

from .forms import AbjadCalculateForm
from .utils import abjad_clalc_FA, abjad_clalc_EN

from .models import PersianWord, EnglishWord
from . import serializers
from rest_framework.pagination import PageNumberPagination

# Create your views here.
class AbjadCalculate(APIView):
    def post(slef, request):
        form = AbjadCalculateForm(request.data)
        if form.is_valid():
            word = form.cleaned_data['word']
            is_persian = form.cleaned_data['is_persian']

            if is_persian == True:
                data = abjad_clalc_FA(word, calculate=True)
            else:
                data = abjad_clalc_EN(word, calculate=True)
            return Response(data)
        return Response(form.errors, status=HTTP_400_BAD_REQUEST)

class PersianWordPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'page_size': self.get_page_size(self.request),
            'results': data
        })
    
class PersianWordSearchView(APIView):
    def get(self, request, word, format=None):
        form = AbjadCalculateForm(data={'word': word})
        if form.is_valid():
            word = form.cleaned_data['word']
            is_persian = form.cleaned_data['is_persian']
            if is_persian == False:
                return Response('Error!! kalame farsi ersal konniiid', status=400)
            data = abjad_clalc_FA(word)

            filter_type = request.query_params.get('filter_type', 'all')
            
            if filter_type == 'all':
                kabir_abjad_number = data['box_data']['kabir']['abjad_number']
                saghir_abjad_number = data['box_data']['saghit']['abjad_number']
                vasit_abjad_number = data['box_data']['vasit']['abjad_number']
                print('kabir_abjad_number', kabir_abjad_number)
                print('saghir_abjad_number', saghir_abjad_number)
                print('vasit_abjad_number', vasit_abjad_number)
                queryset = PersianWord.objects.filter(
                    Q(kabir_abjad=kabir_abjad_number) | Q(saghir_abjad=saghir_abjad_number) | Q(vasit_abjad=vasit_abjad_number)).order_by('-search')

            elif filter_type == 'kabir':
                abjad_number = data['box_data'][filter_type]['abjad_number']
                queryset = PersianWord.objects.filter(kabir_abjad=abjad_number).order_by('-search')

            elif filter_type == 'saghir':
                abjad_number = data['box_data']['saghit']['abjad_number']
                queryset = PersianWord.objects.filter(saghir_abjad=abjad_number).order_by('-search')

            elif filter_type == 'vasit':
                abjad_number = data['box_data'][filter_type]['abjad_number']
                queryset = PersianWord.objects.filter(vasit_abjad=abjad_number).order_by('-search')
            else:
                return Response('s', status=HTTP_400_BAD_REQUEST)

            paginator = PersianWordPagination()
            page = paginator.paginate_queryset(queryset, request)

            if page is not None:
                serializer = serializers.PersianWordSerilaizer(page, many=True)
                return paginator.get_paginated_response(serializer.data)

            serializer = serializers.PersianWordSerilaizer(queryset, many=True)
            return Response(serializer.data)
        return Response(form.errors, status=HTTP_400_BAD_REQUEST)

class EnglishWordSearchView(APIView):
    def get(self, request, word, format=None):
        form = AbjadCalculateForm(data={'word': word})
        if form.is_valid():
            word = form.cleaned_data['word']
            is_persian = form.cleaned_data['is_persian']
            if is_persian == True:
                return Response('Error!! kalame englishi ersal konniiid', status=400)
            data = abjad_clalc_EN(word)

            filter_type = request.query_params.get('filter_type', 'all')

            if filter_type == 'all':
                hebrew_abjad_number = data['box_data']['hebrew']['abjad_number']
                english_abjad_number = data['box_data']['english']['abjad_number']
                simple_abjad_number = data['box_data']['simple']['abjad_number']
                queryset = EnglishWord.objects.filter(
                    Q(abjad_hebrew=hebrew_abjad_number) | Q(abjad_english=english_abjad_number) | Q(abjad_simple=simple_abjad_number)).order_by('-search')

            elif filter_type == 'hebrew':
                abjad_number = data['box_data'][filter_type]['abjad_number']
                queryset = EnglishWord.objects.filter(abjad_hebrew=abjad_number).order_by('-search')
            
            elif filter_type == 'english':
                abjad_number = data['box_data'][filter_type]['abjad_number']
                queryset = EnglishWord.objects.filter(abjad_english=abjad_number).order_by('-search')
            
            elif filter_type == 'simple':
                abjad_number = data['box_data'][filter_type]['abjad_number']
                queryset = EnglishWord.objects.filter(abjad_simple=abjad_number).order_by('-search')
            else:
                return Response('s', status=HTTP_400_BAD_REQUEST)

            paginator = PersianWordPagination()
            page = paginator.paginate_queryset(queryset, request)

            if page is not None:
                serializer = serializers.EnglishWordSerilaizer(page, many=True)
                return paginator.get_paginated_response(serializer.data)

            serializer = serializers.EnglishWordSerilaizer(queryset, many=True)
            return Response(serializer.data)
        return Response(form.errors, status=HTTP_400_BAD_REQUEST)
