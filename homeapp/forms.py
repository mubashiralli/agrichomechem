from django.forms import forms
from .models import Message
class MessageForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = '__all__'