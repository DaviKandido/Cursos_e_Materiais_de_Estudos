from pytubefix import YouTube

# Solicita o link do YouTube
url = input("Insira o link do YouTube: ")
yt = YouTube(url)

# Exibe o título do vídeo
try:
    print("Título:", yt.title)
except Exception as e:
    print(f"Erro ao acessar o título: {e}")

# Exibe a URL da thumbnail
print("Thumbnail URL:", yt.thumbnail_url)

# Obtém a stream de maior resolução e faz o download
stream = yt.streams.get_highest_resolution()
stream.download()

print("Download concluído!")
