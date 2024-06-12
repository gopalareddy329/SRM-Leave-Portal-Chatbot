import json 
import warnings 
from vector_store import FAISSRetriever
warnings.filterwarnings('ignore')



def chunk_text(data):
    """
    chunk dict data into string
    """
    chunks = []
    for key  in data :
        chunk = f"{key} : {data[key]}"
        chunks.append(chunk)
    return chunks


def clean_and_concatenate_chunks(chunk_list):
    """
    Remove "\n" characters from each chunk and concatenate them into a single string.

    Parameters:
    - chunk_list (list): List of chunks.

    Returns:
    - str: Concatenated string without "\n" characters.
    """
    cleaned_chunks = [chunk.replace('\n', ' ') for chunk in chunk_list]
    concatenated_text = '\n \n'.join(cleaned_chunks)
    return concatenated_text



def main() : 
    file_path = "Data/leavedata.json"
    with open(file_path, "r") as file:
        json_data = file.read()

    # Parse JSON data into a Python dictionary
    data = json.loads(json_data)

    print("Dictionary loaded from:", file_path)

    print("Data loaded")
    # download and load model 
    chunks = chunk_text(data)
    faiss_store = FAISSRetriever()
    faiss_store.create_vector_db(texts=chunks)

if __name__ == "__main__" :
   main() 