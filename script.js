
let currentPdfIndex = 1;
const pdfFiles = ['./ASSETS/ASSETS/Home_compressed_compressed.pdf', './ASSETS/About_compressed.pdf', './ASSETS/Curriculum_compressed.pdf', './ASSETS/Contact Us.pdf'];

function updatePdf(direction) {
    if (direction === 'next') {
        currentPdfIndex = (currentPdfIndex + 1) % pdfFiles.length;
    } else if (direction === 'prev') {
        currentPdfIndex = (currentPdfIndex - 1 + pdfFiles.length) % pdfFiles.length;
    }
    let pdfUrl = pdfFiles[currentPdfIndex] + "#toolbar=0&navpanes=0&scrollbar=0";
    document.getElementById('pdfFrame').src = pdfUrl;
}

document.getElementById('prevPdf').addEventListener('click', function() {
    updatePdf('prev');
});

document.getElementById('nextPdf').addEventListener('click', function() {
    updatePdf('next');
});

// Initial load
document.getElementById('pdfFrame').src = pdfFiles[0] + "#toolbar=0&navpanes=0&scrollbar=0";
//JEHER KAAM H BHAI MT KRO
