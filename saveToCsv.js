import { createObjectCsvWriter } from 'csv-writer';

 const saveToCSV = async (data, filePath) => {
  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: 'date', title: 'Date' },
      { id: 'value', title: 'Value' },
      {id:"pdf",title:"Pdf"}
    ]
  });

  await csvWriter.writeRecords(data);
  console.log(`CSV file saved at ${filePath}`);
};

export default saveToCSV;