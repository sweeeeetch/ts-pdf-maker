import PDFDocument from "pdfkit";
import fs from "fs";

interface TextOptions {
  fontSize?: number;
  font?: string;
  x?: number;
  y?: number;
  width?: number;
  align?: "left" | "center" | "right";
}

interface PDFGeneratorOptions {
  filename?: string;
}

class PDFGenerator {
  private doc: PDFKit.PDFDocument;
  private stream: fs.WriteStream;

  constructor(options: PDFGeneratorOptions = {}) {
    this.doc = new PDFDocument();
    this.stream = fs.createWriteStream(options.filename || "output.pdf");
  }

  // Method to add text to the PDF
  addText(text: string, options: TextOptions = {}): PDFGenerator {
    this.doc
      .fontSize(options.fontSize || 12)
      .font(options.font || "Helvetica")
      .text(text, options.x || 50, options.y || 50, {
        width: options.width || 500,
        align: options.align || "left",
      });
    return this; // for method chaining
  }

  // Method to add a new page
  addPage(): PDFGenerator {
    this.doc.addPage();
    return this; // for method chaining
  }

  // Method to save the PDF
  save(): void {
    this.doc.pipe(this.stream);
    this.doc.end();
  }
}

export default PDFGenerator;
