import uuid
import string
import random

ALPHABET = string.ascii_letters + string.digits

def generate_short_id(length=8):
    return "".join(random.choices(ALPHABET, k=length))
