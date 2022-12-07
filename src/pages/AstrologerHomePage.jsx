import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import pro from "../images/festival.png";
import p1 from "../images/festival.png";
import p2 from "../images/festival.png";
import p3 from "../images/festival.png";

import { Link } from "react-router-dom";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "50%",
        bottom: "Auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "3%",
    },
};

const AstrologerHomePage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalNoti, setModalNoti] = useState(false)

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    function notiopenModal() {
        setModalNoti(true)

    }

    function noticloseModal() {
        setModalNoti(false)

    }

    const user = [
        { name: "hjjk", image: pro },
        { name: "fghjk", image: p1 },
        { name: "opjbhv", image: p2 },
        { name: "qwef", image: p3 },
    ];

    const notification = [
        { title: "hjklkjhbjnmmjhjmkjjnm" },
        { title: "hjklkjhbjnmmjhjmkjjnm" },
        { title: "hjklkjhbjnmmjhjmkjjnm" },
        { title: "hjklkjhbjnmmjhjmkjjnm" },
        { title: "hjklkjhbjnmmjhjmkjjnm" },
        { title: "hjklkjhbjnmmjhjmkjjnm" },
        { title: "hjklkjhbjnmmjhjmkjjnm" },


    ]

    return (
        <div className="flex flex-rows  justify-evenly mt-6">
            {/* Appoinments */}
            <button onClick={openModal}>
                <div className="bg-orange-600 rounded-lg p-4">Appointments</div>
            </button>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <div className="flex flex-row justify-end">
                    <div className="">
                        <button onClick={closeModal}>
                            <AiOutlineCloseCircle
                                size={30}
                                color="gray"
                                className="ml-10 item-center "
                            />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col ml-4 gap-2">
                    {user.map((users) => (
                        <Link to="/astrochat" className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-orange-300 rounded-md hover:text-white">
                            <div class="relative flex flex-row">
                                <img
                                    class="w-10 h-10 rounded-full ring-2 ring-gray-400 dark:ring-gray-600"
                                    src={users.image}
                                    alt=""
                                />
                                <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                <span className="ml-4 ">{users.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Modal>
            {/* Appoinments End */}

            {/* Notifications */}
            <button onClick={notiopenModal}>

                <div className="bg-orange-600 rounded-lg p-4">Notifications</div>
            </button>
            <Modal isOpen={modalNoti} style={customStyles}>
                <div className="flex flex-row justify-end">
                    <div className="">
                        <button onClick={noticloseModal}>
                            <AiOutlineCloseCircle
                                size={30}
                                color="gray"
                                className="ml-10 item-center "
                            />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col ml-4 gap-2">
                    {notification.map((noti) => (
                        <Link className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-orange-300 rounded-md hover:text-white">
                            <div class="relative flex flex-row">
                                {/* <img
                  class="w-10 h-10 rounded-full ring-2 ring-gray-400 dark:ring-gray-600"
                  src={users.image}
                  alt=""
                /> */}
                                {/* <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
                                <span className="ml-4 ">{noti.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Modal>
            {/* Notifications  End*/}

        </div>
    );
};

export default AstrologerHomePage;