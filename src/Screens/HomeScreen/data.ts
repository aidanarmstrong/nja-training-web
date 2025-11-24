// courseData.js
import course1 from "../../assets/images/course-1.png";
import gps3 from "../../assets/images/gps-3.png";
import course3 from "../../assets/images/course-3.png";
import course4 from "../../assets/images/posi.png";
import loader1 from "../../assets/images/loader-1.png";
import course5 from "../../assets/images/course-5.png";
import telehandler from "../../assets/images/telehandler.png";
import waterCart from "../../assets/images/watercart.png";
import tiptruck from "../../assets/images/tiptruck.png";

const CourseData = [
    {
        id: "wheeled-excavator-550",
        title: "14-Ton Wheeled Excavator Training (GPS) (Tilt Rotator)",
        summary: "Operator training on wheeled excavators including movement, setup and safe operation.",
        duration: "1 day",
        price: "From $950",
        image: gps3
    },
    {
        id: "14t-track-gps",
        title: "14-Ton Track Machine Training (GPS)",
        summary: "Hands-on training for operating a 14-ton tracked excavator with GPS guidance.",
        duration: "1 day",
        price: "From $750",
        image: course5
    },
    {
        id: "trench-box-install",
        title: "Trench Support & Trench Box Install",
        summary: "Learn how to install trench supports and build and place trench boxes safely and correctly.",
        duration: "1 day",
        price: "From $450",
        image: course3
    },
    {
        id: "gps-grader-addon",
        title: "Skid Steer Loader Training (Grader Attachment) (GPS)",
        summary: "Enhance your Skid Steer skills with GPS-guided grader attachment training. Perfect as an optional add-on to any machine course.",
        duration: "Add-on",
        price: "From $750",
        image: course4
    },
    {
        id: "loader-training",
        title: "Loader Operator Training",
        summary: "Straightforward loader operator course covering controls, site work and material handling.",
        duration: "1 day",
        price: "From $550",
        image: loader1
    },
    {
        id: "ict-550",
        title: "ITC Operator Training (Integrated Tool Carrier)",
        summary: "Practical ICT operator training covering machine setup, attachments, safety and site operation.",
        duration: "1 day",
        price: "From $550",
        image: course1
    },
    {
        id: "telehandler-550",
        title: "Telehandler Operator Training",
        summary: "Hands-on telehandler training covering setup, attachments, safe operation, and site procedures.",
        duration: "1 day",
        price: "From $550",
        image: course1
    },
    {
        id: "telehandler-550",
        title: "Telehandler Operator Training",
        summary: "Hands-on telehandler training covering setup, attachments, safe operation, and site procedures.",
        duration: "1 day",
        price: "From $550",
        image: telehandler
    },
    {
        id: "water-cart-550",
        title: "Water Cart Operator Training",
        summary: "Hands-on training in operating water carts safely and efficiently, including site procedures, loading, and dust suppression techniques.",
        duration: "1 day",
        price: "From $550",
        image: waterCart
    },
    {
        id: "tip-truck-550",
        title: "Tip Truck Operator Training",
        summary: "Learn to operate tip trucks confidently and safely, covering loading, unloading, maneuvering, and on-site best practices.",
        duration: "1 day",
        price: "From $550",
        image: tiptruck
    }


];

export default CourseData;
