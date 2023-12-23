// Import the pdf-to-printer module to enable printing PDF files
const pdfToPrinter = require("pdf-to-printer");

// Specify the file path of the PDF you want to print
const filePath = "C:\\test\\computer.pdf";

// Execute the print command using pdf-to-printer
pdfToPrinter
  .print(filePath, {
    // Specify the printer name. Here, it's set to "Microsoft Print To PDF".
    // Replace this with the actual printer name you intend to use.
    printer: "Microsoft Print To PDF",

    // The win32 option allows passing command-line arguments for print settings on Windows.
    // Here, it's set to print on A4 paper, in landscape orientation, and fit the content to the page.
    
    win32: ['-print-settings "A4, landscape, fit"']
  })
  .then(() => {
    // This block is executed if the print job is successfully sent to the printer.
    console.log("Printing job successfully sent to printer");
  })
  .catch(console.error); // Catch and log any errors that occur during the print process.
