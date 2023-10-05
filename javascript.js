document.addEventListener('DOMContentLoaded', function () {
    const styleToggleBtn = document.getElementById('style-toggle');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const body = document.body;
    const infoSection = document.querySelector('.info-section'); // Select the .info-section element
    const headerColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const footerColors = ['#ff9900', '#0099cc', '#ff6600', '#00cc99', '#cc0099'];
    const fonts = ['Arial, sans-serif', 'Times New Roman, serif', 'Verdana, sans-serif'];
    const infoSectionColors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff']; // Define colors for .info-section
    let styleIndex = 0;
    let fontIndex = 0;
    let infoColorIndex = 0; // Initialize an index for .info-section colors

    styleToggleBtn.addEventListener('click', function () {
        // Get the next colors and font from the arrays
        const nextColor = headerColors[styleIndex];
        const newColor = footerColors[styleIndex];
        const nextFont = fonts[fontIndex];
        const nextInfoColor = infoSectionColors[infoColorIndex]; // Get the next .info-section color

        // Apply the colors and font to the respective elements
        header.style.backgroundColor = nextColor;
        footer.style.backgroundColor = newColor;
        body.style.fontFamily = nextFont;
        infoSection.style.backgroundColor = nextInfoColor; // Apply the .info-section color

        // Increment the styleIndex, fontIndex, and infoColorIndex or loop back to the first values
        styleIndex = (styleIndex + 1) % headerColors.length;
        fontIndex = (fontIndex + 1) % fonts.length;
        infoColorIndex = (infoColorIndex + 1) % infoSectionColors.length; // Increment the .info-section color index
    });
});
