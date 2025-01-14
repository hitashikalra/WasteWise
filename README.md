# WasteWise

**WasteWise** is an AI-powered waste management solution that enhances recycling efforts, optimizes logistics, and promotes a circular economy.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

---


## Installation

1. Clone this repository or download the code as a ZIP file.
2. Extract the files to a folder of your choice.
3. Open the `backend/app.py` file with a text editor and configure the MongoDB connection string if needed.
4. Replace "YOUR HERE API KEY" in the `backend/routes/geospatial_optimization.py` file with your own HERE API key.
5. Save the changes and close the text editor.

---

## Usage

1. Start MongoDB locally or configure it for cloud access.
2. Start the backend:
   - Navigate to the `backend` directory.
     ```bash
     cd backend
     ```
   - Run the following command:
     ```bash
     python app.py
     ```
3. Start the frontend:
   - Navigate to the `frontend` directory.
     ```bash
     cd ../frontend
     ```
   - Run the following command:
     ```bash
     npm start
     ```
4. Use the application to:
   - Classify waste images.
   - Calculate optimized routes using the `/geospatial/optimize` endpoint.
   - Access the marketplace for upcycling and recycling.

---

## Dependencies

- Python (3.8 or higher): Install backend dependencies using:
  ```bash
  pip install -r backend/requirements.txt
