import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Import the PDF file directly from src/Components
import resumePdf from "../Components/Resume.pdf";  // Adjust the path if needed

// Ensure the worker script is correctly set
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth); // Set initial width based on window size

  useEffect(() => {
    // Update width on window resize
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Adjust scale based on screen width (responsive design)
  const getScale = () => {
    if (width > 1200) return 1.0; // For large screens (desktop)
    if (width > 768) return 0.9;  // For medium screens (tablet)
    return 0.7;  // For smaller screens (mobile)
  };

  return (
    <div>
      <Container fluid className="resume-section" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Row for the first button */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Col xs={12} className="text-center">
            <Button
              variant="primary"
              href={resumePdf}  // Use the imported PDF file for download link
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        {/* Row for the PDF */}
        <Row className="resume" style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
          <Col className="d-flex justify-content-center">
            {/* Dynamically scale PDF based on the screen width */}
            <Document file={resumePdf}>
              <Page 
                pageNumber={1} 
                scale={getScale()} 
                renderTextLayer={false}  // Disable rendering of the text layer
              />
            </Document>
          </Col>
        </Row>

        {/* Row for the second button */}
        <Row className="text-center" style={{ marginTop: "auto", paddingBottom: "20px", marginBottom: "0" }}>
          <Col xs={12}>
            <Button
              variant="primary"
              href={resumePdf}  // Use the imported PDF file for download link
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Resume;
