import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from "../../../prueba.pdf";
//PDFjs worker from an external cdn
const url = pdf;

console.log(url);
  
export default function PDF({ pdfURL }) {
      
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <>
        <div className="h-full">
            <div id="carousel" className="h-full" data-ride="carousel">
                <div className="carousel-inner h-full">
                    <div className="carousel-item active h-full">
                        <Document
                            className="d-flex justify-content-center my-2 overflow-y-auto custom-calendar-scroll h-full overflow"
                            file={pdfURL}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page size="A4" pageNumber={pageNumber} />
                        </Document>
                    </div>
                </div>
                <a className="carousel-control-next" href="#" role="button" data-slide="next"
                    onClick={() => setPageNumber(pageNumber+1)}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
                <a className="carousel-control-prev" href="#" role="button" data-slide="prev"
                    onClick={() => setPageNumber(pageNumber-1)}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
            </div>
            
        </div>
    </>
  );
}