import p_img1 from './p_img1.png'
import p_img1_1 from './p_img1_1.webp'
import p_img1_2 from './p_img1_2.webp'
import p_img2 from './p_img2.png'
import p_img3 from './p_img3.png'
import p_img4_1 from './p_img4_1.png'
import p_img4_2 from './p_img4_2.png'
import p_img4_3 from './p_img4_3.png'
import p_img4_4 from './p_img4_4.png'
import p_img5_1 from './p_img5_1.png'
import p_img5_2 from './p_img5_2.png'
import p_img6_1 from './p_img6_1.png'
import p_img6_2 from './p_img6_2.png'
import p_img6_3 from './p_img6_3.png'
import p_img6_4 from './p_img6_4.png'
import p_img7_1 from './p_img7_1.png'
import p_img7_2 from './p_img7_2.png'
import p_img7_3 from './p_img7_3.png'
import p_img8_1 from './p_img8_1.png'
import p_img8_2 from './p_img8_2.png'
import p_img8_3 from './p_img8_3.png'
import p_img8_4 from './p_img8_4.png'
import p_img9_1 from './p_img9_1.png'
import p_img9_2 from './p_img9_2.png'
import p_img9_3 from './p_img9_3.png'
import p_img9_4 from './p_img9_4.png'

import p_img10_1 from './p_img10_1.png'
import p_img10_2 from './p_img10_2.png'
import p_img10_3 from './p_img10_3.png'
import p_img10_4 from './p_img10_4.png'
import p_img10_5 from './p_img10_5.png'
import p_img11_1 from './p_img11_1.png'
import p_img11_2 from './p_img11_2.png'
import p_img11_3 from './p_img11_3.png'
import p_img12_1 from './p_img12_1.png'
import p_img12_2 from './p_img12_2.png'
import p_img12_3 from './p_img12_3.png'
import p_img12_4 from './p_img12_4.png'
import p_img13_1 from './p_img13_1.png'
import p_img13_2 from './p_img13_2.png'
import p_img13_3 from './p_img13_3.png'
import p_img13_4 from './p_img13_4.png'
import p_img14_1 from './p_img14_1.png'
import p_img14_2 from './p_img14_2.png'

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "MechDog Hiwonder Open Source AI Robot",
        description: "A Robot Dog with ESP32 Controller, High-Speed Coreless Servos Support Scratch, Arduino, and Python - Standard Kit.",
        price: 349.99,
        image: [p_img1, p_img1_1, p_img1_2],
        category: "Legged Robots",
        subCategory: "Quadruped",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Lynxmotion Biped Robot",
        description: "Robot chassis only; no servos or electronics.\n" +
            "Biped legs feature 6 degrees of freedom.\n" +
            "Meant to be used with BotBoarduino + SSC-32/32U\n" +
            "The Lynxmotion Biped Robot Scout (No Servos) is a twelve servo biped walker featuring six degrees of freedom (DOF) per leg. The advanced leg design features incredible flexibility. The chassis and servos are sold separately for those who want to use their own electronics. Note that there is currently no sample code available.",
        price: 186.99,
        image: [p_img2],
        category: "Legged Robots",
        subCategory: "Bipedal",
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Tamiya Tracked Vehicle Chassis Kit ",
        description: "Use this kit as a stand-alone or combine it with other accessories making a more complex machine with more capabilities. The gear box can be built with two possible gear ratios, standard: 203.7:1 or High Speed: 58.2:1. The Tracked chassis includes the pre-drilled wooden base, the Tamiya Tracked kit (multiple lengths of rubber track which can be connected together, as well as plastic drive and idler sprockets), several plastic compenents which connect to the wood base to support the shafts, and a single gear motor + gearbox (unassembled).",
        price: 15.86,
        image: [p_img3],
        category: "Wheeled Robots",
        subCategory: "Tracked",
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Hiwonder Mecanum Wheel Chassis Car Kit",
        description: "The Hiwonder Mecanum Wheel Chassis Car Kit w/ TT Motor, Aluminum Alloy Frame for DIY Robot Carfeatures the latest mecanum wheels for movement. The 4WD mecanum wheel car chassis is equipped with universal wheels, allowing it to move in any direction and run smoothly in narrow spaces and on rough terrain.\n" +
            "\n" +
            "The reduction ratio of the motor is 1:120, with an output voltage of 36V. This car kit provides increased torque and greater carrying capacity compared to ordinary cars.\n" +
            "\n" +
            "The Mecanum Wheel Chassis is a DIY kit ideal for robot enthusiasts to create their own robotic car.",
        price: 44.99,
        image: [p_img4_1,p_img4_2,p_img4_3,p_img4_4],
        category: "Wheeled Robots",
        subCategory: "4-WD",
        date: 1716634345448,
        bestseller: true
    },
{
        _id: "aaaae",
        name: "Mini 3-Layer Round Robot Chassis Kit",
        description: "The Mini 3-Layer Round Robot Chassis Kit - 2WD w/ DC Motors gives you everything you need to build the shell of a 2-wheel-drive Mobile Platform Robot! You get the metal plates that make up the chassis, two DC drive motors with matching wheels, and a caster ball for balance. You'll fill in the rest with a power supply, microcontroller board, and motor controller.\n" +
            "\n" +
            "The differential drive (two separately driven wheels) allows for a near zero turning radius while the high-strength aluminum alloy body plus high-quality high-speed motors make it suitable for flat indoor surfaces. It's adorably small like the other round robot, but has an extra layer for more storage and comes in fashionable Adafruit black!",
        price: 26.61,
        image: [p_img5_1,p_img5_2],
        category: "Wheeled Robots",
        subCategory: "2-WD",
        date: 1716634345448,
        bestseller: true
    }
    ,
    {
        _id: "aaaaf",
        name: "AiNex ROS Education AI Vision Humanoid Robot Kit ",
        description: "AiNex standard is an intelligent humanoid robot built on the Robot Operating System (ROS). It boasts 24 degrees of freedom (DOF) and is powered by a Raspberry Pi. With self-stabilizing inverse kinematics, AiNex excels in walking, climbing, hurdling, grasping, and performing complex movements. Furthermore, its height, turning radius, and speed can be adjusted!\n" +
            "\n" +
            "Equipped with a 2DOF AI vision camera and robotic hands that can open or close, AiNex can accomplish tasks like line following, target tracking, ball shooting, intelligent picking and sorting, transportation, stair climbing, and more, using AI vision and advanced kinematics. We offer comprehensive ROS source code and detailed tutorials to bring your AI scenarios to life.",
        price: 1039.99,
        image: [p_img6_1,p_img6_2,p_img6_3,p_img6_4],
        category: "Legged Robots",
        subCategory: "Bipedal",
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaag",
        name: "Mini DFRobotShop Rover Kit",
        description: "The Mini DFRobotShop Rover Kit (Arduino Uno) is a small, inexpensive tracked platform which provides you with the basic tools needed to experiment with Arduino-based programming and mobile robots. The kit includes an Arduino Uno microcontroller module. The frame is made out of durable laser-cut Lexan parts, and the drive system is comprised of the Tamiya Twin-Motor Gear Box (must be assembled in configuration A) and a Tamiya Track and Wheel Set.",
        price: 98.99,
        image: [p_img7_1,p_img7_2,p_img7_3],
        category: "Wheeled Robots",
        subCategory: "Tracked",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaah",
        name: "LimX P1",
        description: "Introducing TRON 1, the first multi-modal biped robot! With its innovative \"Three-In-One\" modular design, TRON 1 can easily switch among Point-Foot, Sole, and Wheeled foot ends. TRON 1 supports full Python development, offers seamless Sim2Real deployment, and spins up RL research.",
        price: 53000.00,
        image: [p_img8_1,p_img8_2,p_img8_3,p_img8_4],
        category: "Legged Robots",
        subCategory: "Bipedal",
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Pololu Zumo Tracked Chassis Kit",
        description: "The Pololu Zumo Tracked Chassis Kit (No Motors) is a small, tracked robot platform that is less than 10 cm on each side, allowing it to qualify for Mini Sumo competitions. Motors sold separately.",
        price: 19.95,
        image: [p_img9_1,p_img9_2,p_img9_3,p_img9_4],
        category: "Wheeled Robots",
        subCategory: "Tracked",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaj",
        name: "Hiwonder PuppyPi Quadruped Robot",
        description: "PuppyPi is an AI vision quadruped robot driven by Raspberry Pi and built on the Robot Operating System (ROS). It is equipped with 8 stainless steel coreless servos, delivering high-precision performance, rapid rotation speed, and a robust torque of 8KG.cm. With an IMU sensor, PuppyPi can detect its posture in real-time, enabling self-balancing capabilities.",
        price: 679.99,
        image: [p_img10_1, p_img10_2, p_img10_3,p_img10_4,p_img10_5],
        category: "Legged Robots",
        subCategory: "Quadruped",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaak",
        name: "Edison Robot V3",
        description: "The Edison Robot V3 – EdPack1 is a meticulously designed product for individuals who have a keen interest in the fields of coding and robotics. The EdPack1 comprises of an Edison V3 robot, which is equipped with an internal rechargeable battery.",
        price: 19.95,
        image: [p_img11_1,p_img11_2,p_img11_3],
        category: "Wheeled Robots",
        subCategory: "2-WD",
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Unitree Go2 AIR",
        description: "The Unitree Go2 AIR Robotic Dog is an advanced intelligent bionic quadruped robot featuring a highly sophisticated 4D LIDAR L1 recognition system. This system offers 360° x 90° hemispherical ultra-wide recognition with minimal blind spots and a detection range starting from 0.05 meters, enabling the robot to navigate all terrains effectively.",
        price: 3012.90,
        image: [p_img12_1, p_img12_2, p_img12_3,p_img12_4],
        category: "Legged Robots",
        subCategory: "Quadruped",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaam",
        name: "ZoraBots Nao V6 ",
        description: "The ZoraBots Nao V6 w/ Zora Solution is a robot with a knack for knowledge – both learning and sharing it.\n" +
            "\n" +
            "58cm in height, NAO is a bipedal robot with pleasantly rounded features. NAO has constantly evolved since the beginning of his adventure in 2006 and the 6th version (NAO6), launched in 2018, integrates a new CPU which enhances his performance. It has 25 degrees of freedom which enable him to move and adapt to his environment.",
        price: 14292.00,
        image: [p_img13_1,p_img13_2,p_img13_3,p_img13_4],
        category: "Legged Robots",
        subCategory: "Bipedal",
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Moorebot Scout E",
        description: "The Moorebot Scout E is an AI-enhanced compact robot designed for both indoor and outdoor surveillance and exploration. This security robot is furnished with a multitude of sophisticated sensors and AI algorithms, making it an optimal assistant for comprehensive monitoring without any blind spots. It boasts features such as object recognition and voice control compatibility with Amazon Alexa.",
        price: 219.99,
        image: [p_img14_1,p_img14_2],
        category: "Wheeled Robots",
        subCategory: "Tracked",
        date: 1716634345448,
        bestseller: true
    }
]