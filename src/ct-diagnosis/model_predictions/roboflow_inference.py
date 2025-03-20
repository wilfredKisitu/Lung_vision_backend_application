from inference_sdk import InferenceHTTPClient # type: ignore
import sys
import json

def infer_image(image_path):
    client = InferenceHTTPClient(
        api_url="https://detect.roboflow.com",
        api_key="YOUR_API_KEY"
    )

    result = client.infer(image_path, model_id="lung-cancer-classification-y56uv/1")

    print(json.dumps(result))

if __name__ == "__main__":
    image_path = sys.argv[1] 
    infer_image(image_path)
