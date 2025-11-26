// courseData.js
import course1 from "@/assets/images/courses/course-1.png";
import gps3 from "@/assets/images/courses/gps-3.png";
import course3 from "@/assets/images/courses/course-3.png";
import course4 from "@/assets/images/courses/posi.png";
import loader1 from "@/assets/images/courses/loader-1.png";
import trackMachineWithGPS from "@/assets/images/courses/track-machine-gps.png";
import telehandler from "@/assets/images/courses/telehandler.png";
import waterCart from "@/assets/images/courses/watercart.png";
import tiptruck from "@/assets/images/courses/tiptruck.png";
import ArticulatedWaterCart from "@/assets/images/courses/articulated-water-cart.png";
import ArticulatedDumpTruck from "@/assets/images/courses/articulated-dump-truck.png"

const CourseData = [
    {
        id: "14t-wheeled-excavator-gps-tilt-rotator-training",
        title: "14-Ton Wheeled Excavator Training (GPS) (Tilt Rotator)",
        summary: "Operator training on wheeled excavators including movement, setup and safe operation.",
        duration: "1 day",
        price: "From $950",
        code: "RIIMPO320F",
        codeName: "Conduct Civil Construction Excavator Operations",
        image: gps3
    },
    {
        id: "14t-track-machine-gps-training",
        title: "14-Ton Track Machine Training (GPS)",
        summary: "Hands-on training for operating a 14-ton tracked excavator with GPS guidance.",
        duration: "1 day",
        price: "From $750",
        code: "RIIMPO320F",
        codeName: "Conduct Civil Construction Excavator Operations",
        image: trackMachineWithGPS
    },
    {
        id: "trench-box-support-install-training",
        title: "Trench Support & Trench Box Install",
        summary: "Learn how to install trench supports and build and place trench boxes safely and correctly.",
        duration: "2-4 Hours",
        price: "From $450",
        code: "RIICCM210E",
        codeName: "Install Trench Support",
        image: course3
    },
    {
        id: "skid-steer-loader-grader-attachment-gps-training",
        title: "Skid Steer Loader Training (Grader Attachment) (GPS)",
        summary: "Enhance your Skid Steer skills with GPS-guided grader attachment training. Perfect as an optional add-on to any machine course.",
        duration: "4-6 Hours",
        price: "From $750",
        code: "RIIMPO318F",
        codeName: "Conduct Civil Construction Skid Steer Loader Operations",
        image: course4
    },
    {
        id: "loader-operator-training",
        title: "Loader Operator Training",
        summary: "Straightforward loader operator course covering controls, site work and material handling.",
        duration: "4-6 Hours",
        price: "From $550",
        code: "RIIMPO321F",
        codeName: "Conduct Civil Construction Wheeled Front End Loader Operations",
        image: loader1
    },
    {
        id: "itc-operator-training",
        title: "ITC Operator Training (Integrated Tool Carrier)",
        summary: "Practical ICT operator training covering machine setup, attachments, safety and site operation.",
        duration: "4-6 Hours",
        price: "From $550",
        code: "RIIHAN311F",
        codeName: "Conduct Operations With Integrated Tool Carrier",
        image: course1
    },
    {
        id: "telehandler-operator-training",
        title: "Telehandler Operator Training",
        summary: "Hands-on telehandler training covering setup, attachments, safe operation, and site procedures.",
        duration: "4-6 Hours",
        price: "From $550",
        code: "RIIHAN309F",
        codeName: "Conduct Telescopic Materials Handler Operations",
        image: telehandler
    },
    {
        id: "water-cart-operator-training",
        title: "Water Cart Operator Training",
        summary: "Hands-on training in operating water carts safely and efficiently, including site procedures, loading, and dust suppression techniques.",
        duration: "4-6 Hours",
        price: "From $550",
        code: "RIIMPO326E",
        codeName: "Conduct Water Truck Operations",
        image: waterCart
    },
    {
        id: "tip-truck-operator-training",
        title: "Tip Truck Operator Training",
        summary: "Learn to operate tip trucks confidently and safely, covering loading, unloading, maneuvering, and on-site best practices.",
        duration: "4-6 Hours",
        price: "From $550",
        code: "RIIVEH304E",
        codeName: "Conduct Tip Truck Operations",
        image: tiptruck
    },
    {
        id: "articulated-water-cart-training",
        title: "Articulated Water Operator Training",
        summary: "Gain hands-on experience operating articulated water carts safely and efficiently. This training covers loading, unloading, maneuvering, and best practices for on-site operations.",
        duration: "4-6 Hours",
        price: "From $550",
        code: "RIIMPO326E",
        codeName: "Conduct Water Truck Operations",
        image: ArticulatedWaterCart
    },
    {
        id: "articulated-dump-truck-training",
        title: "Articulated Dump Truck Operator Training",
        summary: "Learn to operate articulated dump trucks confidently and safely. This one-day course covers loading, unloading, maneuvering, and essential on-site best practices for efficient operations.",
        duration: "4-6 Hours",
        price: "From $550",
        code: "RIIMPO337E",
        codeName: "Conduct Articulated Haul Truck Operations",
        image: ArticulatedDumpTruck
    }
];

export default CourseData;
