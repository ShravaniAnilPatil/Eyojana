# urls.py

from django.urls import path
from . import views
from .views import UpdateRatingView,EligibilityCheckView,SchemeEligibilityView
urlpatterns = [
    # path('recommend/<str:email>/', views.GetRecommendation.as_view(), name='recommendations'),
    path('update-rating/', UpdateRatingView.as_view(), name='update_rating'),
    path('create-rating/', views.CreateRatingView.as_view(), name='create-rating'),
    path('eligibility-check/<str:user_email>/', EligibilityCheckView.as_view(), name='check_eligibility'),
    path('scheme/<str:user_email>/<str:schemename>/', SchemeEligibilityView.as_view(), name='scheme_eligibility'),
]
