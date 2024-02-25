# PDF Generator

This is a simple PDF generation tool written in TypeScript. It allows you to create PDF documents programmatically with ease.

## Features

- Create PDF documents with text content.
- Add multiple pages to your PDF.
- Customize text styles and positioning.

## Getting Started

### Installation

To install the PDF Generator package, run:

```bash
npm install pdf-generator
```

### Usage

```typescript
import PDFGenerator from "pdf-generator";

const pdfGenerator = new PDFGenerator();
pdfGenerator.addText("Hello, world!");
pdfGenerator.save();
```

### Configuration

You can configure the PDF document by passing options to the PDFGenerator constructor:

```typescript
import PDFGenerator from "pdf-generator";

const options = {
  filename: "my-document.pdf",
};

const pdfGenerator = new PDFGenerator(options);
```

### Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to submit a pull request.

### License

This project is licensed under the MIT License.
