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
import ExperiencedCourseImage from "@/assets/images/courses/experience_course.png";

const CourseData = [
    {
        id: "14t-wheeled-excavator-gps-tilt-rotator-training",
        title: "14-Ton Wheeled Excavator Training (GPS) (Tilt Rotator)",
        summary: "Operator training on wheeled excavators including movement, setup and safe operation.",
        duration: "1 day",
        price: " $950",
        code: ["RIIMPO320F"],
        codeName: ["Conduct Civil Construction Excavator Operations"],
        image: [gps3],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Candidate Requirements</h2>
                <p class="text-gray-700 leading-relaxed">
                    This course is designed for experienced operators and delivered on-site. It focuses on developing practical skills for safely operating an excavator, including lifting, carrying, and placing materials. Excavators are widely used across civil construction and resource sector projects.
                </p>
                <p class="text-gray-700 leading-relaxed mt-2">
                    Participants will also gain hands-on experience with modern equipment features, including <strong>Leica 3D GPS</strong> systems and <strong>tilt rotator attachments</strong>, learning how they function and integrate with the machine for precise and efficient operation.
                </p>

                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Operate the tracked excavator in accordance with site procedures and safety standards</li>
                    <li>Excavate around simulated underground services</li>
                    <li>Practical trench box installation training, focused on real world safety, precision WHS complacence</li>
                    <li>Leica 3D GPS familiarization, learn how to use the system</li>
                    <li>Steel wrist tilt-rotator, master precision controls and multi-angle excavation</li>
                    <li>Lift, transport, and position materials effectively</li>
                    <li>Fit and remove standard attachments for the tracked excavator</li>
                    <li>Prepare the machine for relocation between tasks</li>
                    <li>Maintain a safe and clean work area, including proper disposal and recycling of materials</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    On successful completion, participants will receive a Statement of Attainment for the unit.
                </p>

                <p class="mt-2 text-gray-700 italic font-bold">
                    Note: Completion of this unit alone does not provide sufficient skill to load or unload equipment independently. 
                    Participants must either have completed, or be working alongside someone who has completed the relevant unit.
                </p>
            </div>
        `
    },
    {
        id: "14t-track-machine-gps-training",
        title: "14-Ton Track Machine Training (GPS)",
        summary: "Hands-on training for operating a 14-ton tracked excavator with GPS guidance.",
        duration: "1 day",
        price: " $750",
        code: ["RIIMPO320F"],
        codeName: ["Conduct Civil Construction Excavator Operations"],
        image: [trackMachineWithGPS],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Candidate Requirements</h2>
                <p class="text-gray-700 leading-relaxed">
                    This course is designed for experienced operators and is delivered on-site. It focuses on safely operating a tracked excavator, including lifting, carrying, and placing materials for site-based operations. Tracked excavators are commonly used in civil construction and resource sector projects.
                </p>
                <p class="text-gray-700 leading-relaxed mt-2">
                    Participants will gain practical experience using modern <strong>GPS guidance systems</strong> for precision work and improved efficiency on-site.
                </p>

                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Operate the tracked excavator in accordance with site procedures and safety standards</li>
                    <li>Excavate around simulated underground services</li>
                    <li>Practical trench box installation training, focused on real world safety, precision WHS complacence</li>
                    <li>Leica 3D GPS familiarization, learn how to use the system</li>
                    <li>Lift, transport, and position materials effectively</li>
                    <li>Fit and remove standard attachments for the tracked excavator</li>
                    <li>Prepare the machine for relocation between tasks</li>
                    <li>Maintain a safe and clean work area, including proper disposal and recycling of materials</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    Upon successful completion, participants will receive a Statement of Attainment for this unit.
                </p>

                <p class="mt-2 text-gray-700 italic font-bold">
                    Note: Completion of this unit alone does not provide sufficient skill to load or unload equipment independently. 
                    Participants must either have completed, or be working alongside someone who has completed the relevant unit.
                </p>
            </div>
        `
    },
    {
        id: "experience-only-course",
        title: "Experience Only – For Ticket Holders",
        summary: "This course is for participants who already hold the necessary tickets and just need practical on-site experience. Gain hands-on practice safely and efficiently.",
        duration: "4-6 Hours",
        price: "$650",
        code: [], 
        codeName: [],
        image: [ExperiencedCourseImage],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Course Overview</h2>
                <p class="text-gray-700 leading-relaxed">
                    This course is specifically designed for participants who already hold the necessary tickets and qualifications, and are looking to gain additional practical experience on-site. It provides a safe, structured environment to practice and refine your skills under the guidance of experienced instructors.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">What You Will Do</h2>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Hands-on practice operating machinery safely and efficiently</li>
                    <li>Loading, unloading, and maneuvering exercises on dedicated equipment</li>
                    <li>Apply on-site best practices for daily operational tasks</li>
                    <li>Opportunity to ask questions and clarify procedures with instructors</li>
                    <li>Build confidence and competence in real-world scenarios</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    This course is perfect for individuals seeking to reinforce their existing skills and gain practical experience in a dedicated training environment.
                </p>

                <p class="mt-4 text-gray-700 italic font-bold">
                    Note: This is a skills training session only. No formal qualification or Statement of Attainment will be issued. The course is intended solely for participants to gain confident, practical experience.
                </p>
            </div>
        `
    },
    {
        id: "trench-box-support-install-training",
        title: "Trench Support & Trench Box Install",
        summary: "Learn how to install trench supports and build and place trench boxes safely and correctly.",
        duration: "2-4 Hours",
        price: " $550",
        code: ["RIICCM210E"],
        codeName: ["Install Trench Support"],
        image: [course3],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Course Overview</h2>
                <p class="text-gray-700 leading-relaxed">
                    Working in trenches is one of the most hazardous tasks in the civil construction industry. 
                    The primary function of any trench support method is to protect people from caving ground. 
                    The secondary function is to provide support to nearby structures and allow equipment access to the work.
                </p>
                <p class="text-gray-700 leading-relaxed mt-4">
                    In this course, you will learn about the effect of different soils and ground types, trench construction, 
                    control of excavations (benching, battering, shoring), and safe removal of trench support.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Course Outcomes</h2>
                <p class="text-gray-700 leading-relaxed">
                    On completion of this course, you will be able to:
                </p>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Plan and prepare for installing trench support</li>
                    <li>Install trench shoring</li>
                    <li>Remove trench shoring</li>
                    <li>Conduct housekeeping activities</li>
                </ul>
                <p class="mt-4 text-gray-700">
                    Upon successful completion, you will receive a Statement of Attainment.
                </p>

                <p class="mt-4 text-gray-700 italic font-bold">
                    Note: Assessments are conducted in English. If English is your second language, you may engage a professional accredited translator for training purposes only. 
                    All assessments must be completed in English without translator assistance.
                </p>
            </div>
        `

    },
    {
        id: "skid-steer-loader-grader-attachment-gps-training",
        title: "Skid Steer Loader Training (Grader Attachment) (GPS)",
        summary: "Enhance your Skid Steer skills with GPS-guided grader attachment training. Perfect as an optional add-on to any machine course.",
        duration: "4-6 Hours",
        price: " $750",
        code: ["RIIMPO318F"],
        codeName: ["Conduct Civil Construction Skid Steer Loader Operations"],
        image: [course4],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Course Overview</h2>
                <p class="text-gray-700 leading-relaxed">
                    This course is designed for operators with prior experience and is delivered on-site. 
                    It focuses on developing practical skills for operating a skid steer loader, including loading, 
                    transporting, and distributing materials efficiently and safely. Skid steer loaders are widely 
                    used in civil construction and resource-based projects.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Learning Outcomes</h2>
                <p class="text-gray-700 leading-relaxed">
                    By the end of this course, participants will be able to:
                </p>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Prepare and plan for skid steer loader operations in a worksite environment</li>
                    <li>Operate the skid steer loader according to established safety and operational standards</li>
                    <li>Load, move, and position materials as required</li>
                    <li>Fit, remove, and handle attachments correctly</li>
                    <li>Relocate the skid steer loader safely between tasks</li>
                    <li>Maintain a tidy work area, including proper disposal and recycling of materials</li>
                </ul>
                
                <p class="mt-4 text-gray-700">
                    Upon successful completion, participants will receive a Statement of Attainment for this unit.
                </p>
                
                <p class="mt-2 text-gray-700 italic font-bold">
                    Note: This unit alone does not equip participants to load or unload equipment independently. 
                    Operators must either have completed, or work alongside someone who has completed 
                    <strong>RIIHAN308F – Load and Unload Plant</strong> (or an equivalent qualification) to safely perform these tasks.
                </p>
            </div>
        `

    },
    {
        id: "loader-operator-training",
        title: "Loader Operator Training",
        summary: "Straightforward loader operator course covering controls, site work and material handling.",
        duration: "4-6 Hours",
        price: " $550",
        code: ["RIIMPO321F"],
        codeName: ["Conduct Civil Construction Wheeled Front End Loader Operations"],
        image: [loader1],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Candidate Requirements</h2>
                <p class="text-gray-700 leading-relaxed">
                    This course is designed for experienced operators and delivered in the workplace. It focuses on developing practical skills for safely operating a wheeled front end loader in site-based roles. Wheeled front end loaders are widely used in civil construction and resource sector projects for moving, lifting, and placing materials.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Learning Outcomes</h2>
                <p class="text-gray-700 leading-relaxed">
                    Upon completion of this course, participants will be able to:
                </p>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Plan and prepare for wheeled front end loader operations</li>
                    <li>Attach, secure, lift, transport, and place materials safely and efficiently</li>
                    <li>Prepare the loader for relocation between tasks</li>
                    <li>Maintain a clean and safe work area, including recycling and proper disposal of materials</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    Participants who successfully complete the unit requirements will receive a Statement of Attainment.
                </p>

                <p class="mt-2 text-gray-700 italic font-bold">
                    Note: Completion of this unit alone does not provide sufficient skill to independently load or unload equipment. Operators must either have completed, or be working alongside someone who has completed <strong>RIIHAN308F – Load and Unload Plant</strong> or an equivalent qualification to safely perform these tasks.
                </p>
            </div>
        `
    },
    {
        id: "itc-operator-training",
        title: "ITC Operator Training (Integrated Tool Carrier)",
        summary: "Practical ICT operator training covering machine setup, attachments, safety and site operation.",
        duration: "4-6 Hours",
        price: " $550",
        code: ["RIIHAN311F"],
        codeName: "Conduct Operations With Integrated Tool Carrier",
        image: [course1],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Candidate Requirements</h2>
                <p class="text-gray-700 leading-relaxed">
                    This course is designed for experienced operators and delivered on-site. It focuses on developing the skills and knowledge required to safely operate an <strong>Integrated Tool Carrier</strong> in a range of site-based environments. Integrated Tool Carriers are commonly used across civil construction and resource sector projects for moving, lifting, and handling materials efficiently.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Learning Outcomes</h2>
                <p class="text-gray-700 leading-relaxed">
                    Upon completing this course, participants will be able to:
                </p>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Plan and prepare for operations with an Integrated Tool Carrier</li>
                    <li>Operate the machine safely in accordance with established site procedures</li>
                    <li>Attach, secure, lift, transport, and position materials effectively</li>
                    <li>Prepare the Integrated Tool Carrier for relocation between tasks</li>
                    <li>Maintain a clean and safe work area, including recycling and proper disposal of materials</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    Successful participants will receive a Statement of Attainment for this unit.
                </p>

                <p class="mt-2 text-gray-700 italic font-bold">
                    Note: Completion of this unit alone does not provide sufficient skill to load or unload equipment independently. 
                    Operators must either have completed, or work alongside someone who has completed <strong>RIIHAN308F – Load and Unload Plant</strong> or an equivalent qualification to perform these tasks safely.
                </p>
            </div>
        `

    },
    {
        id: "telehandler-operator-training",
        title: "Telehandler Operator Training",
        summary: "Hands-on telehandler training covering setup, attachments, safe operation, and site procedures.",
        duration: "4-6 Hours",
        price: " $550",
        code: ["RIIHAN309F"],
        codeName: "Conduct Telescopic Materials Handler Operations",
        image: [telehandler],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Candidate Requirements</h2>
                <p class="text-gray-700 leading-relaxed">
                    This on-site course is designed for experienced operators and focuses on developing practical skills for safely operating a <strong>Telescopic Materials Handler (Telehandler)</strong>. Telehandlers are widely used across civil construction and resource sector projects for lifting, transporting, and positioning materials efficiently.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Learning Outcomes</h2>
                <p class="text-gray-700 leading-relaxed">
                    By the end of this course, participants will be able to:
                </p>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Plan and prepare for safe telehandler operations on site</li>
                    <li>Select, attach, and remove appropriate attachments correctly</li>
                    <li>Operate the telehandler in line with established safety and operational standards</li>
                    <li>Lift, transport, and place materials and loads efficiently</li>
                    <li>Prepare the machine for relocation between tasks</li>
                    <li>Maintain a clean and safe work area, including recycling and disposal of materials</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    Upon successful completion, participants will receive a Statement of Attainment for this unit.
                </p>

                <p class="mt-2 text-gray-700 italic font-bold">
                    Note: Completion of this unit alone does not provide sufficient skill to load or unload equipment independently. 
                    Participants must either have completed, or work alongside someone who has completed <strong>RIIHAN308F – Load and Unload Plant</strong> or an equivalent qualification to safely perform these tasks.
                </p>
            </div>
        `

    },
    {
        id: "water-cart-operator-training",
        title: "Water Cart Operator Training",
        summary: "Hands-on training in operating water carts safely and efficiently, including site procedures, loading, and dust suppression techniques.",
        duration: "4-6 Hours",
        price: " $550",
        code: ["RIIMPO326E"],
        codeName: "Conduct Water Truck Operations",
        image: [waterCart],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Candidate Requirements</h2>
                <p class="text-gray-700 leading-relaxed">
                    This course is designed for experienced operators and delivered in the workplace. It focuses on developing practical skills for safely operating a <strong>water vehicle</strong>, including loading, transporting, and distributing water efficiently. Water vehicles are commonly used across civil construction and resource sector projects.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Learning Outcomes</h2>
                <p class="text-gray-700 leading-relaxed">
                    By the end of this course, participants will be able to:
                </p>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Plan and prepare for water vehicle operations on site</li>
                    <li>Operate the water vehicle in line with safety procedures and operational standards</li>
                    <li>Load, transport, and distribute water efficiently to complete work tasks</li>
                    <li>Maintain a clean and safe work area, including recycling and proper disposal of materials</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    Upon successful completion, participants will receive a Statement of Attainment for this unit.
                </p>
            </div>
        `

    },
    {
        id: "tip-truck-operator-training",
        title: "Tip Truck Operator Training",
        summary: "Learn to operate tip trucks confidently and safely, covering loading, unloading, maneuvering, and on-site best practices.",
        duration: "4-6 Hours",
        price: "$550",
        code: ["RIIVEH304E"],
        codeName: "Conduct Tip Truck Operations",
        image: [tiptruck],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Candidate Requirements</h2>
                <p class="text-gray-700 leading-relaxed">
                    This course is designed for experienced operators and delivered on-site at workplace locations. It provides practical, hands-on training for personnel required to operate <strong>tip trucks</strong> safely and efficiently in site-based operations. Tip trucks are widely used in civil construction, mining, and resource sector projects for transporting and unloading materials.
                </p>
                <p class="text-gray-700 leading-relaxed mt-2">
                    The course is tailored to provide operators with a strong understanding of operational procedures, site safety standards, and the correct handling of articulated haul trucks and tip trucks in a variety of working environments.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Learning Outcomes</h2>
                <p class="text-gray-700 leading-relaxed">
                    By the end of this course, participants will have the knowledge and skills to:
                </p>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li>Plan and prepare for tip truck operations, including pre-start inspections and safety checks</li>
                    <li>Understand and apply operational procedures for articulated haul trucks and tip trucks on site</li>
                    <li>Load, transport, and safely tip materials according to site and regulatory requirements</li>
                    <li>Perform routine operator maintenance to ensure vehicle reliability and safety</li>
                    <li>Navigate and operate the vehicle effectively in diverse site conditions</li>
                    <li>Maintain a safe and tidy work environment, including recycling and responsible disposal of materials</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    Participants will gain hands-on experience in real-world site conditions, building confidence in both basic and advanced tip truck operations. Emphasis is placed on understanding the dynamics of load handling, vehicle stability, and risk management during daily operations.
                </p>

                <p class="mt-4 text-gray-700">
                    Successful participants will be issued a Statement of Attainment confirming their competency in tip truck operations.
                </p>

                <p class="mt-2 text-gray-700 italic font-bold">
                    Note: Completion of this unit alone does not provide sufficient skill to independently load and unload equipment. Operators must either have completed, or work alongside someone who has completed <strong>RIIHAN308F – Load and Unload Plant</strong> or an equivalent qualification to perform these tasks safely.
                </p>
            </div>
        `

    },
    {
        id: "articulated-water-cart-and-dump-truck-training",
        title: "Articulated Water Cart & Dump Truck Operator Training",
        summary: "Get hands-on experience operating articulated water carts and dump trucks safely and efficiently. This one-day course covers loading, unloading, maneuvering, and essential on-site best practices.",
        duration: "4-6 Hours",
        price: "$950",
        code: ["RIIMPO326E", "RIIVEH304E"],
        codeName: ["Conduct Water Truck Operations", "Conduct Tip Truck Operations"],
        image: [ArticulatedWaterCart, ArticulatedDumpTruck],
        course_overview: `
            <div>
                <h2 class="text-2xl font-bold mb-4">Course Overview</h2>
                <p class="text-gray-700 leading-relaxed">
                    The <strong>Articulated Dump Truck & Water Cart Operations</strong> course is aimed at participants currently working or seeking work in operational roles within the civil construction industry. This hands-on course equips students with the skills and knowledge to safely and efficiently operate both an articulated dump truck and a water cart/water truck on-site.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Eligibility & Licencing Requirements</h2>
                <p class="text-gray-700 leading-relaxed">
                    Applicants are required to hold a valid <strong>Class C driver’s licence</strong> as a minimum. International visitors may use their C-Class licence for up to three months. After this period, participants must hold a Western Australia (WA) driver’s licence or an International Driver’s Permit (IDP) to continue the course.
                </p>

                <h2 class="text-2xl font-bold mt-6 mb-4">Learning Outcomes</h2>
                <p class="text-gray-700 leading-relaxed">
                    By the end of this course, participants will be able to:
                </p>
                <ul class="list-disc pl-5 mt-4 text-gray-700 space-y-2">
                    <li><strong>Plan Operations:</strong> Plan articulated dump truck and water cart operations, interpret documentation, clarify instructions, identify hazards, select PPE, arrange traffic signage, choose suitable equipment, prepare for emergencies, and coordinate on-site.</li>
                    <li><strong>Operate Vehicles:</strong> Conduct pre-start checks, identify and report faults, drive and operate vehicles adapting to site conditions, monitor hazards and safety, and manage equipment performance. Perform proper shutdown and inspection after use.</li>
                    <li><strong>Load, Haul, and Dump Materials:</strong> Position the truck for loading, execute haulage and dumping operations efficiently, and perform post-operation inspections.</li>
                    <li><strong>Water Distribution:</strong> Position the water cart for loading and distribution, adhere to capacity limits, avoid surge and sway, distribute water efficiently, and conduct post-operation checks.</li>
                    <li><strong>Attachments:</strong> Select, fit, test, use within design limits, and remove/store attachments properly where applicable.</li>
                </ul>

                <p class="mt-4 text-gray-700">
                    Participants will gain practical, on-site experience with both vehicle types in real working conditions, building confidence in maneuvering, load management, and safety.
                </p>

                <p class="mt-4 text-gray-700">
                    On successful completion, participants will receive a <strong>Statement of Attainment</strong> for:
                    <strong>RIIMPO326E – Conduct Water Vehicle Operations</strong> and <strong>RIIVEH304E – Conduct Tip Truck Operations</strong>.
                </p>

                <p class="mt-2 text-gray-700 italic font-bold">
                    Note: Completion of this course alone does not provide sufficient skill to load or unload equipment independently. Operators must either have completed, or work alongside someone who has completed <strong>RIIHAN308F – Load and Unload Plant</strong> or an equivalent qualification to safely perform these tasks.
                </p>
            </div>
        `
    }
];

export default CourseData;
