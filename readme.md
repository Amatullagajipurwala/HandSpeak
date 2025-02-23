# HandSpeak

## 📌 Overview

This project uses MediaPipe, OpenCV, and a deep learning model to recognize hand gestures and sign language. The system can detect both numbers and words based on hand movements captured via a webcam. It processes a sequence of frames, extracts key points from hand landmarks, and predicts the corresponding sign.

## 🛠️ Features
- 📷 **Real-time webcam feed processing**
- ✋ **Detects numbers and words from hand signs**
- 🎯 **Ensures one of the hands are detected for accurate predictions**
- 📊 **Filters out low-confidence predictions to reduce errors**


## 👥 Who Can Use This?

   This project can be used by:

   🏫 Students & Researchers working on AI-based gesture recognition.

  🧏‍♂️ Deaf & Hard of Hearing Individuals to communicate via sign language.

  📱 Developers & Engineers to integrate sign recognition into applications.
  
  🎓 Educators & Institutions for learning and teaching sign language.

## ✅ How This Project is Useful
- Bridges communication gaps between hearing-impaired and non-signers.
- Automates sign language recognition, making it easier for accessibility solutions.
- Enhances learning experiences by providing real-time feedback on sign gestures.
- Can be integrated with AI assistants for hands-free communication.

## 🚀 Getting Started
📦 Requirements
- Prerequisites
- Python 3.x
- Jupyter
- OpenCV
- MediaPipe
- TensorFlow/Keras
- NumPy

## 🛠 Steps to Run
### 1️⃣ Install Dependencies
Ensure you have **Python 3.7+** installed, then run:
```bash
pip install numpy opencv-python mediapipe tensorflow
```

### 2️⃣ Clone the Repository
```bash
git clone git@github.com:Amatullagajipurwala/HandSpeak.git
```

###  3️⃣ Run Project
```bash
jupyter notebook
```

### 4️⃣ Controls
- Press **'Q'** to **exit** the application.

## 🎯 How It Works
1. **Captures Webcam Input** 🎥
   - Reads frames continuously from the webcam.
2. **Extracts Hand Keypoints** 🖐
   - Uses **MediaPipe Holistic** to track hand landmarks.
3. **Predicts the Sign** 🔤
   - Uses a **pretrained model** to classify the sign (number/word).
4. **Displays the Word on Screen** 🖥
   - If confidence is high, the detected word is displayed.
5. **Ignores Incorrect or No-Hand Cases** 🚫
   - If both hands are not detected, the display remains empty.

## 🏆 Future Enhancements
- ✅ **Add more signs & numbers to the dataset**
- ✅ **Optimize detection speed**
- ✅ **Enhance accuracy using more training data**

## 🤝 Contributors
👤 **Srushti** – [GitHub Profile](https://github.com/Srushti906)

👤 **Nensee** – [GitHub Profile](https://github.com/NenseeZankat)

👤 **Disha** – [GitHub Profile](https://github.com/PatelDishaJ)

## 📜 License
📝 This project is **open-source** and licensed under the MIT License.



📢 If you like this project, don't forget to star ⭐ it on GitHub!



