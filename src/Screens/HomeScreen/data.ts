// courseData.js
import course1 from "../../assets/images/course-1.png";
import gps3 from "../../assets/images/gps-3.png";
import course3 from "../../assets/images/course-3.png";
import course4 from "../../assets/images/course-4.png";
import loader1 from "../../assets/images/loader-1.png";
import course5 from "../../assets/images/course-5.png";

const CourseData = [
  {
    id: "ict-550",
    title: "ICT Operator Training (Integrated Tool Carrier)",
    summary: "Practical ICT operator training covering machine setup, attachments, safety and site operation.",
    duration: "1 day",
    price: "From $550",
    image: course1
  },
  {
    id: "14t-track-gps",
    title: "14-Ton Track Machine Training (GPS)",
    summary: "Hands-on training for operating a 14-ton tracked excavator with GPS guidance.",
    duration: "1 day",
    price: "From $750",
    image: gps3
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
    title: "GPS & Grader Attachment Add-On",
    summary: "Optional add-on for GPS machine control and grader attachment operation. Can be added to any machine course.",
    duration: "Add-on",
    price: "From $950",
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
    id: "wheeled-excavator-550",
    title: "Wheeled Excavator Training",
    summary: "Operator training on wheeled excavators including movement, setup and safe operation.",
    duration: "1 day",
    price: "From $550",
    image: course5
  }
];

export default CourseData;
