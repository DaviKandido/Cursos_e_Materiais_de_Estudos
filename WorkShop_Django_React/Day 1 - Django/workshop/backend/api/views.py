from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Task
from .serializers import TaskSerializer

class TaskView(APIView):
    def get(self, request):
        task = Task.objects.all()
        serializer = TaskSerializer(task, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'satatus': "sucess", 'data': {"note": serializer.data}}, status=status.HTTP_201_CREATED)
        else:
             return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
class SingleTaskView(APIView):
    def get(self, request, id):
        task=get_object_or_404(Task, pk=id)
        serializer = TaskSerializer(task)
        return Response(serializer.data)
    
    def put(self, request, id):
        task = get_object_or_404(Task, pk=id)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": {"note": serializer.data}}, status=status.HTTP_201_CREATED)
        else:
            return Response({"status": "fail", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, id):
        task = get_object_or_404(Task, pk=id)
        serializer = TaskSerializer(task, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        task = get_object_or_404(Task, pk=id)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)