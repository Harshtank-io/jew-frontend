"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { X } from "lucide-react";

// Dynamically import Webcam with no SSR
const Webcam = dynamic(() => import("react-webcam"), {
  ssr: false,
});

const TryOnModal = ({ products, onClose }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  // const productImageRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [faceMeshLoaded, setFaceMeshLoaded] = useState(false);
  // const [faceMesh, setFaceMesh] = useState(null);
  // const requestAnimationFrameId = useRef(null);
  // const lastVideoTime = useRef(-1);

  async function loadFaceMesh() {
    try {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
          delegate: "GPU",
        },
        outputFaceBlendshapes: true,
        runningMode: "VIDEO",
        numFaces: 1,
      });

      setFaceMesh(faceLandmarker);
      setFaceMeshLoaded(true);
    } catch (err) {
      console.error("Error loading FaceMesh", err);
      setFaceMeshLoaded(false);
    }
  }

  // Load product image when selected
  // useEffect(() => {
  //   if (selectedProduct) {
  //     const img = new Image();
  //     img.src = selectedProduct.image;
  //     img.onload = () => {
  //       productImageRef.current = img;
  //     };
  //   }
  // }, [selectedProduct]);

  // const getFaceBoundingBox = (landmarks) => {
  //   let minX = Infinity;
  //   let minY = Infinity;
  //   let maxX = -Infinity;
  //   let maxY = -Infinity;

  //   landmarks.forEach((point) => {
  //     minX = Math.min(minX, point.x);
  //     minY = Math.min(minY, point.y);
  //     maxX = Math.max(maxX, point.x);
  //     maxY = Math.max(maxY, point.y);
  //   });

  //   return {
  //     x: minX,
  //     y: minY,
  //     width: maxX - minX,
  //     height: maxY - minY,
  //   };
  // };

  // const drawProductOverlay = (ctx, landmarks, canvas) => {
  //   if (!productImageRef.current || !selectedProduct) return;

  //   const bbox = getFaceBoundingBox(landmarks);

  //   // Convert normalized coordinates to pixel coordinates
  //   const pixelBbox = {
  //     x: bbox.x * canvas.width,
  //     y: bbox.y * canvas.height,
  //     width: bbox.width * canvas.width,
  //     height: bbox.height * canvas.height,
  //   };

  //   // Adjust overlay position and size based on product type
  //   let overlayParams;

  //   switch (selectedProduct.type) {
  //     case "glasses":
  //       overlayParams = {
  //         x: pixelBbox.x - pixelBbox.width * 0.1,
  //         y: pixelBbox.y + pixelBbox.height * 0.3,
  //         width: pixelBbox.width * 1.2,
  //         height: pixelBbox.height * 0.3,
  //       };
  //       break;
  //     case "hat":
  //       overlayParams = {
  //         x: pixelBbox.x - pixelBbox.width * 0.2,
  //         y: pixelBbox.y - pixelBbox.height * 0.5,
  //         width: pixelBbox.width * 1.4,
  //         height: pixelBbox.height * 0.8,
  //       };
  //       break;
  //     case "earrings":
  //       const leftEar = landmarks[234];
  //       const rightEar = landmarks[454];
  //       ctx.drawImage(
  //         productImageRef.current,
  //         leftEar.x * canvas.width - 30,
  //         leftEar.y * canvas.height - 15,
  //         30,
  //         60
  //       );
  //       ctx.drawImage(
  //         productImageRef.current,
  //         rightEar.x * canvas.width,
  //         rightEar.y * canvas.height - 15,
  //         30,
  //         60
  //       );
  //       return;
  //     default:
  //       overlayParams = {
  //         x: pixelBbox.x,
  //         y: pixelBbox.y,
  //         width: pixelBbox.width,
  //         height: pixelBbox.height,
  //       };
  //   }

  //   ctx.save();
  //   ctx.globalCompositeOperation = "source-over";
  //   ctx.globalAlpha = 0.9;
  //   ctx.drawImage(
  //     productImageRef.current,
  //     overlayParams.x,
  //     overlayParams.y,
  //     overlayParams.width,
  //     overlayParams.height
  //   );
  //   ctx.restore();
  // };

  // const detectFace = async () => {
  //   if (!webcamRef.current || !canvasRef.current || !faceMesh) return;

  //   const video = webcamRef.current.video;
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   if (video.readyState === 4) {
  //     const videoTime = video.currentTime;

  //     // Check if the video frame is new
  //     if (videoTime !== lastVideoTime.current) {
  //       lastVideoTime.current = videoTime;

  //       // Match canvas size to video
  //       canvas.width = video.videoWidth;
  //       canvas.height = video.videoHeight;

  //       try {
  //         // Create a VideoFrame from the video element
  //         const results = await faceMesh.detectForVideo(video, videoTime);

  //         // Clear previous drawing
  //         ctx.clearRect(0, 0, canvas.width, canvas.height);

  //         if (results.faceLandmarks && results.faceLandmarks.length > 0) {
  //           const landmarks = results.faceLandmarks[0];

  //           if (selectedProduct) {
  //             drawProductOverlay(ctx, landmarks, canvas);
  //           }

  //           // Optional: Draw debug points
  //           if (selectedProduct?.debug) {
  //             landmarks.forEach((point) => {
  //               ctx.beginPath();
  //               ctx.arc(
  //                 point.x * canvas.width,
  //                 point.y * canvas.height,
  //                 2,
  //                 0,
  //                 2 * Math.PI
  //               );
  //               ctx.fillStyle = "red";
  //               ctx.fill();
  //             });
  //           }
  //         }
  //       } catch (error) {
  //         console.error("Error in face detection:", error);
  //       }
  //     }
  //   }

  //   // Continue detection loop
  //   requestAnimationFrameId.current = requestAnimationFrame(detectFace);
  // };

  // useEffect(() => {
  //   if (!faceMesh) {
  //     loadFaceMesh();
  //   }

  //   // Start detection when faceMesh is loaded
  //   if (faceMesh) {
  //     detectFace();
  //   }

  //   // Cleanup function
  //   return () => {
  //     if (requestAnimationFrameId.current) {
  //       cancelAnimationFrame(requestAnimationFrameId.current);
  //     }
  //   };
  // }, [faceMesh, selectedProduct]);

  // SSR check
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full h-full flex md:flex-row flex-col">
        {/* Webcam View */}
        <div className="relative flex-1 flex flex-col items-center justify-center bg-black w-full h-full">
          <Webcam
            ref={webcamRef}
            className="w-full h-full object-contain  "
            mirrored
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "user",
              width: 1280,
              height: 720,
            }}
          />

          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
          />

          {/* the img tag */}
          <img
            src="your_dynamic_image_path_here.jpg"
            alt="dynamic"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* End of the img tag */}

          <div className="absolute top-4 left-4 text-white z-10">
            <h3 className="text-lg font-semibold">
              {faceMeshLoaded ? "Ready!" : "Loading face detection..."}
            </h3>
            <p className="text-sm mt-1">
              Keep a 10-inch distance for best results
            </p>
          </div>
        </div>

        {/* Product Selection */}
        <div className="w-full   md:w-1/3 bg-gray-100 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Try On Products</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1  gap-3 w-full">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`w-full p-3 border rounded-lg transition-all ${
                  selectedProduct?.id === product.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-contain mb-2"
                />
                <p className="text-sm font-medium text-center">
                  {product.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryOnModal;
