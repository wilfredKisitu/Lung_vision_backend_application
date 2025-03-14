import sys
import joblib

# laod model
ann_model = joblib.load('./src/Pred-Models/nrf_model.pkl')

# Get input data
input_data = [float(x) for x in sys.argv[1:]]

prediction = ann_model.predict([input_data])[0]

print(prediction)

