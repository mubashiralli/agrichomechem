from django.shortcuts import render
from django.views import View
from django.http import JsonResponse

class HomeView(View):
    def get(self,request):
        return render(request,'base.html')
    def post(self,request):
        data = request.POST
        return JsonResponse({'working':data,})
# Create your views here.
