from langchain_community.chat_models import ChatOllama  
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_groq.chat_models import ChatGroq
from dotenv import load_dotenv 
import os 

load_dotenv() 

GROQ_API_KEY = os.getenv('GROQ_API_KEY')

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


class ChatAgent :
    def __init__(self , retriever ) -> None:
        self.llm = ChatGroq(temperature=0,groq_api_key= GROQ_API_KEY , model='gemma-7b-it')
        self.prompt_template = PromptTemplate(
              template="""
              You are virtual assistant at SRM University, here to help with information about various leave types and eligibility criteria.
              Guide the user to gain further information in relation to his Question and do not make up any new information related a[art from the provided context
              ***If the context doesn't contain relevant information to query then say "Summarize the context if its relevant to query OR say I am unable to answer the question"***
              Context : {context}
              Question : {query}
              """ ,
              input_variables= []
         )
        self.retriever = retriever 

    def chat(self , query ) : 
        rag_chain = ({"context": self.retriever | format_docs, "query": RunnablePassthrough()} 
                     | self.prompt_template | self.llm | StrOutputParser())
        result = rag_chain.invoke( query)
        return result