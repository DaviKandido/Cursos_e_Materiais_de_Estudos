
from django.urls import path
from app_cad_usuarios import views

urlpatterns = [
    # rota, view responsável, nome de referência
    
    #usuarios.com
    path('', views.home, name='home'),  
    
    path('usuarios/', views.usuarios, name='listagem_usuarios'),
    
    #usuarios.com/devaprender
    # path('devaprender/', admin.site.urls),
]
