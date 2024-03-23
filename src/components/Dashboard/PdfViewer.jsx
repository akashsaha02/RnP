import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useState } from "react";

const PdfViewer = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);

    const fileType = ["application/pdf"];

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = () => {
                    setPdfFile(reader.result);
                };``
            } else {
                setPdfFile(null);
                alert("Please select a valid PDF file");
            }
        } else {
            console.log("Select your file");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        } else {
            setViewPdf(null);
        }
    };

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <h1 className="text-3xl text-center mt-4 mb-8 font-bold">
                    Pdf Viewer
                </h1>
                <div className="flex justify-center items-center gap-4">
                    <input
                        type="file"
                        onChange={handleChange}
                        className="border-2 border-black p-2 bg-green rounded-xl w-1/2"
                    />
                    <button
                        type="submit"
                        className="flex justify-center items-center bg-primary-600 w-40 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
                        onClick={handleSubmit}
                    >
                        View PDF
                    </button>
                </div>
            </div>
            <div className=" container">
                {viewPdf && (
                    <div className="w-full">
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                            <Viewer fileUrl={viewPdf}>
                            </Viewer>
                        </Worker>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PdfViewer;

