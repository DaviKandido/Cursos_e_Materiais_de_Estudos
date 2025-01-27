## Este é um projeto de desenvolvimento de Inteligencia Artificial em python

# Biblioteca cvzone (Ela utiliza a biblioteca mediapipe por baixo dos panos)
import cv2

# Importa da cvzone o detector de mãos
from cvzone.HandTrackingModule import HandDetector

# acessa camera 0, ou seja a principal
webcam = cv2.VideoCapture(0)

# quando tiver 80% de certeza e apenas 2 mão detectáveis
rastreador = HandDetector(detectionCon=0.8, maxHands=2)

while True:
    sucesso, imagem = webcam.read()

    # Rastreia as mão através da imagem na variável imagem
    coordenadas, imagem_maos = rastreador.findHands(imagem)

    #Mostra a imagem
    cv2.imshow('Projeto 4 - IA', imagem)

    #AO CLICAR NA TECLA Q ele fecha a imagem/video
    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break

    #AO CLICAR em qualquer tecla ele fecha a imagem/video
    # if cv2.waitKey(1) != -1:
    #     break
    
webcam.release() # Libera a camera para ser usada por outros softwares

cv2.destroyAllWindows() # Fecha todas as outras abas