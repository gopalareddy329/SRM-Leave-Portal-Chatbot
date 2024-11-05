import os
from pprint import pprint as pp 
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
import warnings 
warnings.filterwarnings('ignore')

def get_embedding_model(model_name ,model_kwargs ):
    embedding_model = HuggingFaceEmbeddings(
            model_name = model_name,  # also works with model_path
            model_kwargs = model_kwargs)
    return embedding_model

class FAISSRetriever:
    def __init__(self, model_name='all-MiniLM-L6-v2'):
        self.model_name = model_name
        self.embeddings = get_embedding_model(model_name=model_name ,
                                      model_kwargs={'device': 'cpu'} ,
                                     )
        self.db_path = "VectorStore/db_faiss"
        self.vector_store = self.load_vector_store()
        self.metadata_store = []

    def load_vector_store(self):
        if os.path.exists(self.db_path):
            return FAISS.load_local(self.db_path, self.embeddings, allow_dangerous_deserialization=True)
        return None

    def create_vector_db(self, texts):
        texts = [text for text in texts]
        self.vector_store = FAISS.from_texts(texts, self.embeddings)
        self.vector_store.save_local(self.db_path)
        self.metadata_store = texts
        print("Saved vector store")

    def get_retriever(self):
        if self.vector_store:
            return self.vector_store.as_retriever(k=3)
        else:
            print("Vector store is not initialized.")
            return None

    def query_search(self, query, k=2):
        if self.vector_store:
            return self.vector_store.similarity_search(query, k=k)
        else:
            print("Vector store is not initialized.")
            return []

def main(): 
    
    # Sample usage
    # texts = ["Hello world", "How are you?", "FAISS is a library for efficient similarity search", "We are learning embeddings"]
    # retriever = FAISSRetriever()
    # if retriever.vector_store is None:
    #     retriever.create_vector_db(texts)

    # # Query the index
    # query = "Hello world"
    # results = retriever.query_search(query)
    # for result in results:
    #     print(f"Text: {result['text']} with distance: {result['distance']}")

    retriever = FAISSRetriever()

    # Query the index
    query = "casual leave"
    results = retriever.query_search(query)
    for result in results:
        pp(f"Text: {result.page_content}")

if __name__ == "__main__" :
    main()