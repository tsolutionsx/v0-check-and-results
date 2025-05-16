import fs from "fs";

// Create the customer data array with all 100 entries
const rawCustomerData = [
  {
    id: "001",
    name: "Sarah Williams",
    email: "sarahw@gmail.com",
    number: "555-0102",
    rating: 5,
    feedback: "Excellent service, very satisfied.",
  },
  {
    id: "002",
    name: "Michael Brown",
    email: "mike.brown@outlook.com",
    number: "555-0203",
    rating: 3,
    feedback: "Satisfied with product, but delivery was late.",
  },
  {
    id: "003",
    name: "Jessica Lee",
    email: "jessica.lee@yahoo.com",
    number: "555-0304",
    rating: 4,
    feedback: "Great quality, but price could be lower.",
  },
  {
    id: "004",
    name: "Daniel Moore",
    email: "daniel.m@aol.com",
    number: "555-0405",
    rating: 2,
    feedback: "Dissatisfied with the customer support.",
  },
  {
    id: "005",
    name: "Olivia Harris",
    email: "olivia.harris@gmail.com",
    number: "555-0506",
    rating: 5,
    feedback: "Best experience, would highly recommend.",
  },
  {
    id: "006",
    name: "James Carter",
    email: "james.carter@outlook.com",
    number: "555-0607",
    rating: 4,
    feedback: "Good service, but the website could be better.",
  },
  {
    id: "007",
    name: "Emily Watson",
    email: "emily.watson@yahoo.com",
    number: "555-0708",
    rating: 3,
    feedback: "Product was okay, service needs improvement.",
  },
  {
    id: "008",
    name: "Robert King",
    email: "robert.king@hotmail.com",
    number: "555-0809",
    rating: 1,
    feedback: "Worst purchase ever. Will not return.",
  },
  {
    id: "009",
    name: "Amanda Scott",
    email: "amanda.scott@aol.com",
    number: "555-0910",
    rating: 5,
    feedback: "Excellent product, fast shipping.",
  },
  {
    id: "010",
    name: "John Carter",
    email: "john.carter@outlook.com",
    number: "555-1011",
    rating: 4,
    feedback: "Good, but some minor flaws in the product.",
  },
  {
    id: "011",
    name: "Sophia Adams",
    email: "sophia.adams@gmail.com",
    number: "555-1112",
    rating: 5,
    feedback: "Wonderful experience, very pleased.",
  },
  {
    id: "012",
    name: "William Turner",
    email: "william.turner@yahoo.com",
    number: "555-1213",
    rating: 3,
    feedback: "Satisfied but expected more for the price.",
  },
  {
    id: "013",
    name: "Mia Green",
    email: "mia.green@outlook.com",
    number: "555-1314",
    rating: 4,
    feedback: "Nice quality but packaging could be improved.",
  },
  {
    id: "014",
    name: "Benjamin Miller",
    email: "benjamin.miller@gmail.com",
    number: "555-1415",
    rating: 2,
    feedback: "Not happy with the quality of the product.",
  },
  {
    id: "015",
    name: "Ella Collins",
    email: "ella.collins@aol.com",
    number: "555-1516",
    rating: 5,
    feedback: "Fantastic service and fast delivery!",
  },
  {
    id: "016",
    name: "Liam Walker",
    email: "liam.walker@yahoo.com",
    number: "555-1617",
    rating: 3,
    feedback: "Good, but the customer support was slow.",
  },
  {
    id: "017",
    name: "Grace Young",
    email: "grace.young@outlook.com",
    number: "555-1718",
    rating: 4,
    feedback: "Really enjoyed the product, would buy again.",
  },
  {
    id: "018",
    name: "Lucas Green",
    email: "lucas.green@aol.com",
    number: "555-1819",
    rating: 1,
    feedback: "Very dissatisfied, would not recommend.",
  },
  {
    id: "019",
    name: "Charlotte James",
    email: "charlotte.james@gmail.com",
    number: "555-1920",
    rating: 5,
    feedback: "Love the product, excellent customer service.",
  },
  {
    id: "020",
    name: "Jack Harris",
    email: "jack.harris@outlook.com",
    number: "555-2021",
    rating: 3,
    feedback: "It's okay, but could be better for the price",
  },
  {
    id: "021",
    name: "Ava Robinson",
    email: "ava.robinson@gmail.com",
    number: "555-2122",
    rating: 5,
    feedback: "Very happy with my purchase, highly recommend.",
  },
  {
    id: "022",
    name: "Ethan Davis",
    email: "ethan.davis@yahoo.com",
    number: "555-2223",
    rating: 2,
    feedback: "Product was not as described, disappointed.",
  },
  {
    id: "023",
    name: "Isabella Perez",
    email: "isabella.perez@outlook.com",
    number: "555-2324",
    rating: 4,
    feedback: "Good experience overall, but shipping was delayed.",
  },
  {
    id: "024",
    name: "Noah Wilson",
    email: "noah.wilson@gmail.com",
    number: "555-2425",
    rating: 5,
    feedback: "Quick delivery, quality product, very satisfied.",
  },
  {
    id: "025",
    name: "Emma Thomas",
    email: "emma.thomas@aol.com",
    number: "555-2526",
    rating: 3,
    feedback: "It's okay, but could be better for the price.",
  },
  {
    id: "026",
    name: "Alexander Moore",
    email: "alex.moore@yahoo.com",
    number: "555-2627",
    rating: 4,
    feedback: "Happy with the purchase but the size was slightly off.",
  },
  {
    id: "027",
    name: "Mia Lee",
    email: "mia.lee@outlook.com",
    number: "555-2728",
    rating: 5,
    feedback: "Amazing quality and service. Will buy again.",
  },
  {
    id: "028",
    name: "Lucas Turner",
    email: "lucas.turner@gmail.com",
    number: "555-2829",
    rating: 2,
    feedback: "The item was damaged when it arrived.",
  },
  {
    id: "029",
    name: "Lily Scott",
    email: "lily.scott@aol.com",
    number: "555-2930",
    rating: 5,
    feedback: "Excellent! I love everything about this product.",
  },
  {
    id: "030",
    name: "Samuel Green",
    email: "samuel.green@yahoo.com",
    number: "555-2756",
    rating: 5,
    feedback: "Excellent! I love everything about this product.",
  },
  {
    id: "031",
    name: "James Carter",
    email: "james.carter@aol.com",
    number: "555-0607",
    rating: 4,
    feedback: "Good service, but the website could be easier to navigate.",
  },
  {
    id: "032",
    name: "Emily Foster",
    email: "emily.foster@gmail.com",
    number: "555-0708",
    rating: 5,
    feedback: "Very pleased with my purchase. Will definitely return.",
  },
  {
    id: "033",
    name: "Robert King",
    email: "robert.king@outlook.com",
    number: "555-0809",
    rating: 3,
    feedback: "Product is good, but the delivery took too long.",
  },
  {
    id: "034",
    name: "Natalie Clark",
    email: "natalie.clark@yahoo.com",
    number: "555-0901",
    rating: 2,
    feedback: "I had to wait too long for a response from customer service.",
  },
  {
    id: "035",
    name: "William Harris",
    email: "william.harris@hotmail.com",
    number: "555-1002",
    rating: 4,
    feedback: "Great product, but the instructions were unclear.",
  },
  {
    id: "036",
    name: "Ava Walker",
    email: "ava.walker@outlook.com",
    number: "555-1103",
    rating: 5,
    feedback: "Excellent quality and fast delivery. Very satisfied!",
  },
  {
    id: "037",
    name: "David Scott",
    email: "david.scott@aol.com",
    number: "555-1204",
    rating: 1,
    feedback: "Product was defective, very disappointed.",
  },
  {
    id: "038",
    name: "Sophia Turner",
    email: "sophia.turner@gmail.com",
    number: "555-1305",
    rating: 5,
    feedback: "Loved the product, it exceeded my expectations!",
  },
  {
    id: "039",
    name: "Ethan Mitchell",
    email: "ethan.mitchell@outlook.com",
    number: "555-1406",
    rating: 3,
    feedback: "Satisfied with the purchase, but shipping could be faster.",
  },
  {
    id: "040",
    name: "Mia Anderson",
    email: "mia.anderson@yahoo.com",
    number: "555-1507",
    rating: 4,
    feedback: "Good value for the price, would recommend to others.",
  },
  {
    id: "041",
    name: "Lucas Harris",
    email: "lucas.harris@gmail.com",
    number: "555-4102",
    rating: 3,
    feedback:
      "Decent product, but the customer service experience could be improved.",
  },
  {
    id: "042",
    name: "Zoe Martinez",
    email: "zoe.martinez@outlook.com",
    number: "555-4203",
    rating: 5,
    feedback: "Excellent experience from start to finish! Highly recommend.",
  },
  {
    id: "043",
    name: "Henry Walker",
    email: "henry.walker@yahoo.com",
    number: "555-4304",
    rating: 4,
    feedback:
      "Very good product quality, but the packaging could have been better.",
  },
  {
    id: "044",
    name: "Ava Mitchell",
    email: "ava.mitchell@aol.com",
    number: "555-4405",
    rating: 2,
    feedback: "The product arrived damaged. Not happy with the purchase.",
  },
  {
    id: "045",
    name: "Benjamin Scott",
    email: "benjamin.scott@hotmail.com",
    number: "555-4506",
    rating: 5,
    feedback: "Perfect transaction. Will definitely be coming back for more!",
  },
  {
    id: "046",
    name: "Isabella Green",
    email: "isabella.green@aol.com",
    number: "555-4607",
    rating: 3,
    feedback: "Product is fine, but the website was hard to navigate.",
  },
  {
    id: "047",
    name: "Jack Thomas",
    email: "jack.thomas@outlook.com",
    number: "555-4708",
    rating: 4,
    feedback: "Great overall, just wish the delivery time was faster.",
  },
  {
    id: "048",
    name: "Mia Robinson",
    email: "mia.robinson@gmail.com",
    number: "555-4809",
    rating: 5,
    feedback: "Fantastic! Love the product, exactly as described.",
  },
  {
    id: "049",
    name: "Oliver Collins",
    email: "oliver.collins@yahoo.com",
    number: "555-4901",
    rating: 2,
    feedback:
      "Not satisfied with the quality of the product, wouldn't recommend.",
  },
  {
    id: "050",
    name: "Charlotte Williams",
    email: "charlotte.williams@aol.com",
    number: "555-5002",
    rating: 4,
    feedback:
      "Very happy with the product, but the customer service could be more helpful.",
  },
  {
    id: "051",
    name: "Mason Clark",
    email: "mason.clark@outlook.com",
    number: "555-5103",
    rating: 4,
    feedback:
      "Good quality product, but it took longer to arrive than expected.",
  },
  {
    id: "052",
    name: "Lily Harris",
    email: "lily.harris@yahoo.com",
    number: "555-5204",
    rating: 5,
    feedback: "Amazing experience! The product exceeded my expectations.",
  },
  {
    id: "053",
    name: "Samuel Walker",
    email: "samuel.walker@aol.com",
    number: "555-5305",
    rating: 3,
    feedback:
      "The product is fine, but the delivery service needs improvement.",
  },
  {
    id: "054",
    name: "Grace Turner",
    email: "grace.turner@gmail.com",
    number: "555-5406",
    rating: 2,
    feedback: "The quality was not as advertised, very disappointed.",
  },
  {
    id: "055",
    name: "Ethan King",
    email: "ethan.king@hotmail.com",
    number: "555-5507",
    rating: 4,
    feedback: "Great product, but the instructions could be clearer.",
  },
  {
    id: "056",
    name: "Charlotte Brown",
    email: "charlotte.brown@aol.com",
    number: "555-5608",
    rating: 5,
    feedback: "Wonderful service! Fast shipping and excellent product quality.",
  },
  {
    id: "057",
    name: "Ryan Davis",
    email: "ryan.davis@outlook.com",
    number: "555-5709",
    rating: 3,
    feedback: "Product is decent, but there was a minor issue with the sizing.",
  },
  {
    id: "058",
    name: "Natalie Thompson",
    email: "natalie.thompson@gmail.com",
    number: "555-5801",
    rating: 5,
    feedback: "Very happy with my purchase. Will definitely order again.",
  },
  {
    id: "059",
    name: "Lucas Allen",
    email: "lucas.allen@yahoo.com",
    number: "555-5902",
    rating: 4,
    feedback:
      "Good product, but the customer service could be more responsive.",
  },
  {
    id: "060",
    name: "Ava Lewis",
    email: "ava.lewis@aol.com",
    number: "555-6003",
    rating: 2,
    feedback: "Delivery was delayed, and the product was not as expected.",
  },
  {
    id: "061",
    name: "Olivia Carter",
    email: "olivia.carter@gmail.com",
    number: "555-6104",
    rating: 5,
    feedback: "Excellent quality and customer service. Very pleased!",
  },
  {
    id: "062",
    name: "Liam Wilson",
    email: "liam.wilson@outlook.com",
    number: "555-6205",
    rating: 4,
    feedback: "Satisfied with the product, but the website was slow to load.",
  },
  {
    id: "063",
    name: "Isabella Robinson",
    email: "isabella.robinson@aol.com",
    number: "555-6306",
    rating: 3,
    feedback: "Product is good, but I expected more from the brand.",
  },
  {
    id: "064",
    name: "Elijah Young",
    email: "elijah.young@yahoo.com",
    number: "555-6407",
    rating: 4,
    feedback:
      "Great overall experience, just wish the packaging was more secure.",
  },
  {
    id: "065",
    name: "Emily Martinez",
    email: "emily.martinez@aol.com",
    number: "555-6508",
    rating: 5,
    feedback:
      "Fantastic quality, quick delivery, and very responsive customer service.",
  },
  {
    id: "066",
    name: "Jacob Harris",
    email: "jacob.harris@outlook.com",
    number: "555-6609",
    rating: 3,
    feedback:
      "Product was okay, but the customer support could have been better.",
  },
  {
    id: "067",
    name: "Ella Scott",
    email: "ella.scott@gmail.com",
    number: "555-6701",
    rating: 4,
    feedback: "Very happy with the product, but the shipping was a bit slow.",
  },
  {
    id: "068",
    name: "Gabriel Moore",
    email: "gabriel.moore@yahoo.com",
    number: "555-6802",
    rating: 5,
    feedback: "Excellent experience! The product is exactly as described.",
  },
  {
    id: "069",
    name: "Madison Allen",
    email: "madison.allen@aol.com",
    number: "555-6903",
    rating: 2,
    feedback:
      "The product did not meet my expectations, and the customer service was unhelpful.",
  },
  {
    id: "070",
    name: "Samuel Robinson",
    email: "samuel.robinson@hotmail.com",
    number: "555-7004",
    rating: 4,
    feedback:
      "Very good, though the product took a little longer to arrive than expected.",
  },
  {
    id: "071",
    name: "Harper Clark",
    email: "harper.clark@aol.com",
    number: "555-7105",
    rating: 5,
    feedback: "Outstanding! I'll definitely be purchasing again in the future.",
  },
  {
    id: "072",
    name: "Isaac Hall",
    email: "isaac.hall@outlook.com",
    number: "555-7206",
    rating: 3,
    feedback:
      "The quality was good, but the price was a bit too high for what I received.",
  },
  {
    id: "073",
    name: "Lily Gonzalez",
    email: "lily.gonzalez@gmail.com",
    number: "555-7307",
    rating: 5,
    feedback: "Excellent all around! Very happy with the purchase.",
  },
  {
    id: "074",
    name: "Noah Lee",
    email: "noah.lee@aol.com",
    number: "555-7408",
    rating: 4,
    feedback: "Great product, but the website interface could be better.",
  },
  {
    id: "075",
    name: "Ella Parker",
    email: "ella.parker@outlook.com",
    number: "555-7509",
    rating: 5,
    feedback: "I'm very satisfied with my purchase! Will shop again soon.",
  },
  {
    id: "076",
    name: "Aiden Walker",
    email: "aiden.walker@gmail.com",
    number: "555-7601",
    rating: 2,
    feedback: "Not happy with the quality of the product, very disappointing.",
  },
  {
    id: "077",
    name: "Chloe Lewis",
    email: "chloe.lewis@aol.com",
    number: "555-7702",
    rating: 4,
    feedback: "Great product, but had some issues with the delivery time.",
  },
  {
    id: "078",
    name: "Daniel Harris",
    email: "daniel.harris@outlook.com",
    number: "555-7803",
    rating: 3,
    feedback: "The product is good, but I expected faster delivery.",
  },
  {
    id: "079",
    name: "Lily Walker",
    email: "lily.walker@aol.com",
    number: "555-7904",
    rating: 5,
    feedback: "Excellent service and great product. I'm really happy!",
  },
  {
    id: "080",
    name: "Logan Scott",
    email: "logan.scott@aol.com",
    number: "555-8005",
    rating: 4,
    feedback: "Good product, but I had a small issue with the billing process.",
  },
  {
    id: "081",
    name: "Ethan Wilson",
    email: "ethan.wilson@aol.com",
    number: "555-8101",
    rating: 5,
    feedback:
      "Excellent product! Exceeded my expectations and was delivered on time.",
  },
  {
    id: "082",
    name: "Ava Martin",
    email: "ava.martin@yahoo.com",
    number: "555-8202",
    rating: 4,
    feedback: "Great quality, but the shipping time was a bit slow.",
  },
  {
    id: "083",
    name: "Benjamin Garcia",
    email: "benjamin.garcia@outlook.com",
    number: "555-8303",
    rating: 2,
    feedback:
      "The product didn't match the description, and I had issues with the return process.",
  },
  {
    id: "084",
    name: "Mia Robinson",
    email: "mia.robinson@gmail.com",
    number: "555-8404",
    rating: 5,
    feedback: "Absolutely perfect! Great service and fast delivery.",
  },
  {
    id: "085",
    name: "Noah Lee",
    email: "noah.lee@aol.com",
    number: "555-8505",
    rating: 3,
    feedback: "Good quality, but the item was too small for my needs.",
  },
  {
    id: "086",
    name: "Sophia Perez",
    email: "sophia.perez@outlook.com",
    number: "555-8606",
    rating: 4,
    feedback:
      "Great product, but it would be even better if the instructions were clearer.",
  },
  {
    id: "087",
    name: "Lucas Davis",
    email: "lucas.davis@yahoo.com",
    number: "555-8707",
    rating: 2,
    feedback:
      "The item was damaged upon arrival, and customer service was not helpful.",
  },
  {
    id: "088",
    name: "Emily Moore",
    email: "emily.moore@gmail.com",
    number: "555-8808",
    rating: 5,
    feedback:
      "Very satisfied with the product and the quick shipping. Would buy again.",
  },
  {
    id: "089",
    name: "Jacob Jackson",
    email: "jacob.jackson@aol.com",
    number: "555-8909",
    rating: 3,
    feedback: "The product was good, but the quality didn't justify the price.",
  },
  {
    id: "090",
    name: "Lily Wilson",
    email: "lily.wilson@outlook.com",
    number: "555-9001",
    rating: 5,
    feedback:
      "Perfect experience! Very happy with my purchase and fast delivery.",
  },
  {
    id: "091",
    name: "Samuel Harris",
    email: "samuel.harris@aol.com",
    number: "555-9102",
    rating: 4,
    feedback: "Good quality, but the website could be more user-friendly.",
  },
  {
    id: "092",
    name: "Charlotte Clark",
    email: "charlotte.clark@aol.com",
    number: "555-9203",
    rating: 3,
    feedback: "Product was decent, but the delivery was slower than expected.",
  },
  {
    id: "093",
    name: "Gabriel King",
    email: "gabriel.king@outlook.com",
    number: "555-9304",
    rating: 4,
    feedback:
      "Satisfied with my purchase, but the product could have been better packaged.",
  },
  {
    id: "094",
    name: "Zoe Carter",
    email: "zoe.carter@gmail.com",
    number: "555-9405",
    rating: 5,
    feedback:
      "I love the product! It was exactly what I wanted, and the service was top-notch.",
  },
  {
    id: "095",
    name: "Isaac Wright",
    email: "isaac.wright@aol.com",
    number: "555-9506",
    rating: 2,
    feedback:
      "The product didn't live up to expectations. Very disappointed with the quality.",
  },
  {
    id: "096",
    name: "Harper Walker",
    email: "harper.walker@outlook.com",
    number: "555-9607",
    rating: 5,
    feedback: "Fantastic product and service. Will definitely be buying again!",
  },
  {
    id: "097",
    name: "Daniel Thomas",
    email: "daniel.thomas@yahoo.com",
    number: "555-9708",
    rating: 4,
    feedback:
      "Product was good, but the price seemed a bit high for what it was.",
  },
  {
    id: "098",
    name: "Lily Robinson",
    email: "lily.robinson@aol.com",
    number: "555-9809",
    rating: 3,
    feedback:
      "The product was decent, but the packaging was damaged on arrival.",
  },
  {
    id: "099",
    name: "Oliver Cooper",
    email: "oliver.cooper@outlook.com",
    number: "555-9901",
    rating: 4,
    feedback:
      "Very happy with the product, but I had trouble with the checkout process.",
  },
  {
    id: "100",
    name: "Emily Turner",
    email: "emily.turner@gmail.com",
    number: "555-10002",
    rating: 5,
    feedback:
      "Wonderful experience! Great quality, fast delivery, and excellent customer service.",
  },
];

// Function to validate and process customer data
function processCustomerData(rawData) {
  const processedData = [];
  const customerIds = new Set();
  const customerEmails = new Set();
  const feedbackByCustomer = {};

  // First pass: validate data and collect multiple feedback entries
  rawData.forEach((customer) => {
    // Check for missing fields and replace with "Missing" if needed
    const processedCustomer = {
      id: customer.id || "Missing",
      name: customer.name || "Missing",
      email: customer.email || "Missing",
      number: customer.number || "Missing",
      rating: customer.rating || "Missing",
      feedback: customer.feedback || "Missing",
    };

    // Track feedback by customer ID for handling multiple entries
    if (processedCustomer.id !== "Missing") {
      if (!feedbackByCustomer[processedCustomer.id]) {
        feedbackByCustomer[processedCustomer.id] = [];
      }
      feedbackByCustomer[processedCustomer.id].push({
        rating: processedCustomer.rating,
        feedback: processedCustomer.feedback,
      });
    }

    // Check for duplicates by ID and email
    const isDuplicateId =
      customerIds.has(processedCustomer.id) &&
      processedCustomer.id !== "Missing";
    const isDuplicateEmail =
      customerEmails.has(processedCustomer.email) &&
      processedCustomer.email !== "Missing";

    if (isDuplicateId) {
      console.log(
        `Warning: Duplicate customer ID found: ${processedCustomer.id}`
      );
    } else if (processedCustomer.id !== "Missing") {
      customerIds.add(processedCustomer.id);
    }

    if (isDuplicateEmail) {
      console.log(`Warning: Duplicate email found: ${processedCustomer.email}`);
    } else if (processedCustomer.email !== "Missing") {
      customerEmails.add(processedCustomer.email);
    }

    // Only add non-duplicate entries to the processed data
    if (!isDuplicateId && !isDuplicateEmail) {
      processedData.push(processedCustomer);
    }
  });

  // Second pass: handle multiple feedback entries
  const finalData = [];
  processedData.forEach((customer) => {
    const feedbackEntries = feedbackByCustomer[customer.id];

    if (feedbackEntries && feedbackEntries.length > 1) {
      // If multiple feedback entries exist, create separate rows
      feedbackEntries.forEach((entry, index) => {
        if (index === 0) {
          // Update the original customer entry with the first feedback
          customer.rating = entry.rating;
          customer.feedback = entry.feedback;
          finalData.push(customer);
        } else {
          // Create additional entries for the same customer with different feedback
          finalData.push({
            id: customer.id,
            name: customer.name,
            email: customer.email,
            number: customer.number,
            rating: entry.rating,
            feedback: entry.feedback,
            note: "Additional feedback",
          });
        }
      });
    } else {
      // Single feedback entry, just add the customer
      finalData.push(customer);
    }
  });

  return finalData;
}

// Process the raw customer data
const processedCustomerData = processCustomerData(rawCustomerData);

// Create CSV content
let csvContent =
  "Customer ID,Full Name,Email Address,Number,Satisfaction Rating,Feedback Comments,Notes\n";

// Add each processed customer to the CSV
processedCustomerData.forEach((customer) => {
  // Escape quotes in feedback to prevent CSV issues
  const escapedFeedback = customer.feedback.replace(/"/g, '""');
  const notes = customer.note ? customer.note : "";

  csvContent += `${customer.id},"${customer.name}","${customer.email}","${customer.number}",${customer.rating},"${escapedFeedback}","${notes}"\n`;
});

// Write to file
fs.writeFileSync("processed_customer_data.csv", csvContent);

// Generate summary report
const missingDataCount = processedCustomerData.filter(
  (c) =>
    c.id === "Missing" ||
    c.name === "Missing" ||
    c.email === "Missing" ||
    c.number === "Missing" ||
    c.rating === "Missing" ||
    c.feedback === "Missing"
).length;

const duplicateWarnings =
  processedCustomerData.length < rawCustomerData.length
    ? `${
        rawCustomerData.length - processedCustomerData.length
      } duplicate entries were found and handled.`
    : "No duplicates were found.";

const summaryReport = `
Customer Data Processing Summary:
--------------------------------
Total raw entries: ${rawCustomerData.length}
Total processed entries: ${processedCustomerData.length}
Entries with missing data: ${missingDataCount}
${duplicateWarnings}

The processed data has been saved to 'processed_customer_data.csv'
This file can be opened directly in Excel.
`;

// Write summary report
fs.writeFileSync("data_processing_report.txt", summaryReport);

console.log("Customer data has been processed according to instructions.");
console.log(summaryReport);
console.log("\nPreview of the first 5 rows:");
console.log(csvContent.split("\n").slice(0, 6).join("\n"));
