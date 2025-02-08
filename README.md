## 🦠 Belly Button Biodiversity Dashboard
**Explore the microbial species living in human navels!**

---

## 📌 Project Overview
This interactive dashboard visualizes data from the **Belly Button Biodiversity dataset**, displaying microbial species found in different individuals. Users can select a test subject ID from the dropdown menu to see:

- **Demographic Information** (age, ethnicity, location, etc.)
- **Top 10 Bacteria Cultures Found** (horizontal bar chart)
- **Bacteria Cultures Per Sample** (bubble chart)

The dashboard is fully interactive and updates dynamically based on user selection.

---

## 🚀 Live Deployment
![Check out the live dashboard here!](https://github.com/user-attachments/assets/1366d79d-ef63-40b8-8729-83e7d07a8204)

---

## 🛠️ Technologies Used
- **HTML** (structuring the webpage)
- **CSS** (styling)
- **JavaScript (ES6)** (interactivity)
- **D3.js** (data visualization)
- **Plotly.js** (bar and bubble charts)
- **GitHub Pages** (hosting)

---

## 📂 Project Structure
```
📦 Belly-Button-Challenge
├── 📂 Starter_Code
│   ├── 📂 static
│   │   ├── 📂 js
│   │   │   ├── app.js  # Main JavaScript file
│   │   ├── samples.json  # Dataset used for visualization
│   ├── index.html  # Main webpage
│   ├── README.md  # This file!
```

---

## 📊 Features & Functionality
✅ **Dropdown Selection** - Choose a test subject ID to update the charts dynamically  
✅ **Demographic Info Panel** - Displays key information about the selected individual  
✅ **Top 10 Bacteria Chart** - Shows the most prevalent bacterial cultures  
✅ **Bubble Chart** - Visualizes sample data based on bacterial presence and frequency  

---

## 📜 How It Works
1. The dataset is stored in `samples.json`, containing subject IDs, sample data, and metadata.
2. Using **D3.js**, we load and parse the JSON data.
3. The dropdown menu is populated with all available test subject IDs.
4. Selecting an ID dynamically updates the demographic info, bar chart, and bubble chart.
5. The charts are rendered using **Plotly.js**, with data being filtered per selection.

---

## 🔧 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Belly-Button-Challenge.git
   ```
2. Navigate into the directory:
   ```bash
   cd Belly-Button-Challenge/Starter_Code
   ```
3. Open `index.html` in your browser.

---

## 🏆 Lessons Learned
- Improved JavaScript & D3.js skills
- Handling JSON data dynamically
- Building responsive, interactive visualizations
- Debugging using browser DevTools

---

## 📌 Future Improvements
🔹 Improve styling with Bootstrap  
🔹 Add tooltips for more data insights  
🔹 Optimize performance for large datasets  

---

## 👨‍💻 Author
👤 **Evan Gowans**  
📍 **Bootcamp Data Science Student**    
🔗 [LinkedIn Profile](https://www.linkedin.com/in/evan-gowans/?originalSubdomain=ca)  

---
