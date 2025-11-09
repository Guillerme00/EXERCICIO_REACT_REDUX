from fastapi import FastAPI
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

CLIENT_ID = '#Put your ID here'
CLIENT_SECRET = '#Put your Secret ID here'
TOKEN = None

def Generate_token():
  global TOKEN
  url = f"https://id.twitch.tv/oauth2/token?client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&grant_type=client_credentials"
  response = requests.post(url).json()
  TOKEN = response["access_token"]

Generate_token()

@app.get("/search")
def get_game(name: str):
  headers = {
    "Client-ID": CLIENT_ID,
    "Authorization": f"Bearer {TOKEN}"
  }
  body = f'''
    fields id, name, cover.image_id, summary, genres.name;
    search "{name}";
    where version_parent = null;
    limit 1;
  '''
  response = requests.post(
    "https://api.igdb.com/v4/games",
    headers=headers,
    data=body
  )

  data = response.json()

  if not data:
    return "Erro, Game not found"
  else:
    return data
