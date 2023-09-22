const express = require('express');
const fs = require('fs/promises');
const app = express();
const port = 3001;

app.use(express.json());

app.put('/api/updateImageOrder', async (req, res) => {
  try {
    const updatedImageOrder = req.body; // Get the updated order from the request body
    
    // Implement code to update the data.json file with the new order
    // Example: Save the updated order back to data.json
    await fs.writeFile('data.json', JSON.stringify(updatedImageOrder));

    res.json({ message: 'Image order updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
