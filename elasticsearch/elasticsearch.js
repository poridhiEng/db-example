const { Client } = require("elasticsearch");

// Create a new Elasticsearch client instance
const client = new Client({ node: "http://localhost:9200" });

// // Perform a simple search
client
  .search({
    index: "kibana_sample_data_ecommerce",
    body: {
      query: {
        match: { "products.manufacturer": "Elitelligence" },
      },
    },
  })
  .then((response) => {
    console.log(response.hits.hits);
  })
  .catch((error) => {
    console.error(error);
  });

// Function to list all indices
async function listIndices() {
  try {
    const response = await client.cat.indices({
      format: "json",
    });

    const indices = await response.map(entry => entry.index);
    console.log('Indices:', indices);
  } catch (error) {
    console.error("Error listing indices:", error);
  }
}

// Call the function to list indices
listIndices();
