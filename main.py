from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
# from typing import List
import json
import openai
import os
# from fastapi.responses import JSONResponse
# from openai.error import OpenAIError

openai.api_key = os.getenv('OPENAI_API_KEY')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# 1. Define the Pydantic model for the query
class Query(BaseModel):
    query: str

# 2. Load the dataset
with open('dataset.json', 'r') as f:
    drone_data = json.load(f)

# 2.5 Define the root endpoint
@app.get('/')
def read_root():
    return {"message": "Welcome to the Drone Data API"}

# 3. Endpoint to get drone data
@app.get('/data')
def get_data():
    return drone_data

# 4. Endpoint to handle user queries
# @app.post('/query')
# def handle_query(query: Query):
#     user_query = query.query.lower()
#     response = ''

#     if 'altitude' in user_query and 'second image' in user_query:
#         altitude = next((item['altitude_m'] for item in drone_data if item['image_id'] == '002'), None)
#         if altitude is not None:
#             response = f"The altitude of the second image is {altitude} meters."
#         else:
#             response = "Could not find the altitude for the second image."
#     elif 'battery level' in user_query and 'last image' in user_query:
#         battery_level = next((item['battery_level_pct'] for item in drone_data if item['image_id'] == '005'), None)
#         if battery_level is not None:
#             response = f"The battery level during the last image is {battery_level}%."
#         else:
#             response = "Could not find the battery level for the last image."
#     else:
#         response = "I'm sorry, I cannot answer that question."

#     return {"answer": response}


@app.post('/query')
async def handle_query(query: Query):
    prompt = f"Dataset: {drone_data}\nQuestion: {query.query}\nAnswer:"

    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=100,
        )
        answer = response.choices[0].message.content.strip()
        return {"answer": answer}
    except openai.APIConnectionError as e:
        # Log the error for debugging
        print(f"OpenAI API error: {e}")
      
        raise HTTPException(status_code=500, detail="An error occurred while processing your request.")