// HTMLImageElement
// In TypeScript, HTMLImageElement is a built-in interface that represents an HTML <img> element.
// This interface extends the HTMLElement interface and provides additional properties and methods specifically related to images.
// Here are some of the properties and methods you can access when working with an HTMLImageElement:
// Properties:
// alt: A string representing the alternate text for the image.
// height: The height of the image in pixels.
// src: The source URL of the image.
// width: The width of the image in pixels.
// Methods:
// complete: A boolean value indicating whether the image has finished loading.
// decode(): Promise<void>: A method that returns a promise and resolves once the image is decoded.
// naturalHeight: The intrinsic height of the image in pixels.
// naturalWidth: The intrinsic width of the image in pixels.
// By using the HTMLImageElement interface in TypeScript, you can access and manipulate properties and method
//s related to <img> elements in a type-safe manner when working with the
// Document Object Model (DOM) in web applications. This helps catch potential errors and provides better code assistance in modern code editors.
// Example of using HTMLImageElement in TypeScript:
var imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
}
else {
    imgElement.addEventListener("load", function () {
        console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
    });
}

