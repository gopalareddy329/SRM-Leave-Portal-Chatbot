from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from chat_bot import ChatAgent 
from vector_store import FAISSRetriever
vector_store = FAISSRetriever()
chat_agent = ChatAgent(vector_store.get_retriever()) 

app = FastAPI() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],  
)

@app.get('/get_health')
def get_health() :
    return {'response' : "The application is running healthy"}

@app.get('/post_query/')
def chat(query:str):
    res = chat_agent.chat(query=query)
    return {"response" : res}