from pytubefix import YouTube
from moviepy.editor import VideoFileClip, AudioFileClip, CompositeVideoClip

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

# Obtém a stream de vídeo e de áudio de maior qualidade
video_stream = yt.streams.filter(adaptive=True, file_extension='mp4', only_video=True).first()
audio_stream = yt.streams.filter(adaptive=True, file_extension='mp4', only_audio=True).first()

# Realiza o download do vídeo e do áudio
video_file = video_stream.download(filename="video.mp4")
audio_file = audio_stream.download(filename="audio.mp4")

# Combina vídeo e áudio
video_clip = VideoFileClip(video_file)
audio_clip = AudioFileClip(audio_file)
final_clip = CompositeVideoClip([video_clip.set_audio(audio_clip)])

# Salva o vídeo final com áudio
final_clip.write_videofile("output_with_audio.mp4", codec="libx264")

print("Download concluído com áudio!")
