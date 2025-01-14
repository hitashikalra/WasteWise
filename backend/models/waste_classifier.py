import torch

def classify_waste(image_path):
    model = torch.hub.load('ultralytics/yolov5', 'custom', path='weights/best.pt')
    results = model(image_path)
    return results.pandas().xyxy[0]  # Return classification results
