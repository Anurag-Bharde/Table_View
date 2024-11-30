
# React Crop Data Aggregation

A React project to aggregate and display crop data in tabular form with multiple views.

---

## 🛠 Features

- **View Original Data**: Displays all crop data.
- **Maximum/Minimum Production Table**: Aggregates crops with maximum and minimum production by year.
- **Average Table**: Aggregates average yield and cultivation area for each crop between 1950–2020.
- **Responsive Design**: Utilizes [Mantine UI](https://mantine.dev/) for styling.
- **Dynamic Table Switching**: Toggle between different table views using buttons.

---

## 🚀 How It Works

### Data Aggregation
1. **Maximum/Minimum Production**:
   - Groups data by year.
   - Identifies the crop with the maximum and minimum production for each year.
   
2. **Average Yield & Area**:
   - Groups data by crop name.
   - Calculates the average yield and cultivation area for each crop over the years.

### Components
- **Buttons**: To switch between table views (`A`, `B`, or `Reset`).
- **Table**: Dynamically displays the appropriate data based on the selected view.

---

## 🛠 How I Did It

1. **Created React Components**:
   - Used `useState` for managing table view state.
   - Added reusable functions to aggregate and transform data.
   
2. **Used Mantine Library**:
   - Styled buttons and tables.
   - Ensured responsiveness.

3. **Data Manipulation**:
   - Used `Array.reduce()` to process and aggregate crop data.

4. **Hosted on GitHub Pages**:
   - Used the `gh-pages` package for deployment.
   - Followed the steps to push the project to GitHub and enable live preview.

---

## 📦 Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```

3. **Run the Project Locally**:
   ```bash
   yarn run dev
   ```


## Screen-shots

![Alt text](/Images/2.png?raw=true "Table Image")
![Alt text](/Images/2.png?raw=true "Min/Max Production Image")
![Alt text](/Images/2.png?raw=true "Average Yield Image")