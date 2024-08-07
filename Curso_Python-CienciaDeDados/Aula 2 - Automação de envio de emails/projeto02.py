# Permite manipular/automatizar o mouse
import pyautogui
# Permite manipular/automatizar comandos de teclado como ctrl c, v TAB etc.
import pyperclip
# Biblioteca que permite manipular o navegador
import webbrowser
# Biblioteca que permite add tempo de espera no código
import time
# importando a yfinance
import yfinance


# Ex: PETR4.SA (Petrobras), BBAS3.SA (Banco do Brasil)

ticker = input("Digite o código da ação desejada: ")
dados = yfinance.Ticker(ticker).history(start="2020-01-01", end="2020-12-31")

# Acessar a coluna de fechamento(Close)
fechamento = dados.Close

# Seleciona o valor máximo da tabela
maxima = round(fechamento.max(), 2)

# Seleciona o valor mínimo da tabela
minima = round(fechamento.min(), 2)

# Seleciona o valor médio da tabela
valor_medio = round(fechamento.mean(), 2)

destinatario = "sppirlog@gmail.com"
Assunto = "Análises do Projeto 2020"


# """ (3 aspas) permite quebrar linha
mensagem = f"""
Estou criando um projeto de automação de envio de analise de dados em python: 

Prezado gestor,
Seguem as análises solicitadas da ação {ticker}:

cotação máxima: R${maxima}
cotação mínima: R${minima}
cotação média: R${valor_medio}

Qualquer dúvida estou a disposição!


atte.
"""

# abrir o navegador e ir para o gmail
webbrowser.open("WWW.gmail.com")
# Espera 3 segundo para executar os próximos códigos
time.sleep(3)

# Configurando uma pausa de 3 seg no pyautogui
pyautogui.PAUSE = 1

# Clicar no botão escrever
pyautogui.click(x=-1605, y=489)


#Digitar o email do destinatário e teclar TAB
pyperclip.copy(destinatario)

# Add de atalhos a serem executados
pyautogui.hotkey("ctrl","v")
pyautogui.hotkey("tab")

# Digitar o assunto do email
pyperclip.copy(Assunto)

pyautogui.hotkey("ctrl","v")
pyautogui.hotkey("tab")

# Digitar a mensagem
pyperclip.copy(mensagem)

pyautogui.hotkey("ctrl","v")
pyautogui.hotkey("tab")

# click no botão de enviar
pyautogui.click(x=-669, y=1060)

# Fechar o gmail
time.sleep(3)
pyautogui.hotkey("ctrl", "f4")

print("Email enviado com sucesso!")