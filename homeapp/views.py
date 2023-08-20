from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .forms import MessageForm
class HomeView(View):
    def get(self,request):
        return render(request,'base.html')
    def post(self,request):
        data = request.POST
        form = MessageForm(data)
        if form.is_valid():
            form.save()
            response = {'status':200}
        else:
            response = {'error':form.errors}
        return JsonResponse(response)
# Create your views here.
