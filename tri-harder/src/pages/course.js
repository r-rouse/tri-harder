import React from 'react';
import NavBar from '../components/navBar';
import '../styles/course.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Configure the worker
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Course = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            <div className="logo-container">
                <NavBar />
            </div>
            <div className="pdf-container">
                <Worker workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl={`${process.env.PUBLIC_URL}/tri-harder.pdf`}
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            </div>
        </>
    );
};

export default Course;

