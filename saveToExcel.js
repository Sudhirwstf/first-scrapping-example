import XLSX from 'xlsx';

 const saveToExcel = (data, filePath) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Speeches');
  XLSX.writeFile(workbook, filePath);
  console.log(`Excel file saved at ${filePath}`);
};

export default saveToExcel;