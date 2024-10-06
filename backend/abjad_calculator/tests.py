from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse


class TicketRelatedToViewSet(APITestCase):
    def setUp(self):
        self.word_EN = 'Word2Abjad'
        self.word_FA = 'کلمه۲ابجد'

    def test_success_send_word_EN(self):
        url = reverse('abjad_calculator:calculator')
        response = self.client.post(url, {"word": self.word_EN})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_success_send_word_FA(self):
        url = reverse('abjad_calculator:calculator')
        response = self.client.post(url, {"word": self.word_FA})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_error_send_word_FA(self):
        url = reverse('abjad_calculator:calculator')
        response = self.client.post(url, {"word": "単語 2 アブジャド"})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

