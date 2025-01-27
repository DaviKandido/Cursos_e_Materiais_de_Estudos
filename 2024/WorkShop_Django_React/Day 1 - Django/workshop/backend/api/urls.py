
from django.urls import path
from .views import TaskView, SingleTaskView

urlpatterns = [
    path('tasks',TaskView.as_view()), #Para o endpoint http://127.0.0.1:8000/api/tasks
    path('tasks/<id>', SingleTaskView.as_view()) #Para o endpoint http://127.0.0.1:8000/api/<id>
]
