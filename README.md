<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Editor</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="editor-container">
        <div class="toolbar">
            <button id="textBtn">Add Text</button>
            <select id="fontSelect">
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
            <input type="color" id="colorPicker" value="#000000">
            <input type="range" id="brushSize" min="1" max="10" value="2">
            <button id="drawBtn">Draw</button>
            <button id="undoBtn">Undo</button>
            <button id="redoBtn">Redo</button>
            <button id="filterBtn">Apply Filter</button>
            <button id="cropBtn">Crop Image</button>
            <button id="rotateBtn">Rotate Image</button>
            <button id="zoomInBtn">Zoom In</button>
            <button id="zoomOutBtn">Zoom Out</button>
            <button id="resetZoomBtn">Reset Zoom</button>
        </div>
        <div class="canvas-container">
            <canvas id="photoCanvas"></canvas>
            <div id="textLayer"></div>
            <!-- Layer for draggable text -->
        </div>
        <div class="file-handling">
            <input type="file" id="fileInput" accept="image/*">
            <button id="saveBtn">Save</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
