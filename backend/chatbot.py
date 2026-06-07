import google.generativeai as genai

genai.configure(
    api_key="PASTE_YOUR_REAL_KEY_HERE"
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)

def ask_ai(question):

    prompt = f"""
    You are MahaMove AI.

    You help pilgrims navigate Mahakumbh.

    Current Parking:
    P1 = 84% occupied
    P2 = 35% occupied
    P3 = 95% occupied

    Answer:

    {question}
    """

    response = model.generate_content(prompt)

    return response.text