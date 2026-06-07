import pandas as pd
import numpy as np
import random

rows = []

for _ in range(5000):

    vehicle_count = random.randint(100, 5000)
    crowd_count = random.randint(100, 20000)
    hour = random.randint(0, 23)

    congestion_score = (
        vehicle_count * 0.4 +
        crowd_count * 0.6
    )

    if congestion_score < 5000:
        congestion = "Low"
    elif congestion_score < 12000:
        congestion = "Medium"
    else:
        congestion = "High"

    rows.append([
        vehicle_count,
        crowd_count,
        hour,
        congestion
    ])

df = pd.DataFrame(
    rows,
    columns=[
        "vehicle_count",
        "crowd_count",
        "hour",
        "congestion"
    ]
)

df.to_csv("traffic.csv", index=False)

print("traffic.csv generated successfully")