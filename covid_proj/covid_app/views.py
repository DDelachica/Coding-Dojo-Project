from django.shortcuts import render, HttpResponse, redirect
from .models import *
import requests


def index(request):
    if 'id' not in request.session:
        request.session['id'] = 1
    context = {
        'countries': Country.objects.all(),
        'states': States.objects.all(),
        'state' : States.objects.get(id=request.session['id']),
    }
    return render(request, 'index.html', context)

def process(request):
    new_state = States.objects.create(name=request.POST['state'], abbr=request.POST['abbr'], infection_rate=request.POST['rate']) 
    print(new_state)
    return redirect('/')

def delete(request):
    state_delete = States.objects.get(id=request.POST['id'])
    state_delete.delete()
    return redirect('/')

def state(request, id):
    request.session['id'] = id
    print(id)
    return redirect('/')