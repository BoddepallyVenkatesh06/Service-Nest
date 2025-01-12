import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div>
            <section className="text-black bg-slate-200">
                <div className="hero-section bg-gradient-to-r from-blue-500 to-purple-500 py-20 md:py-32 lg:py-40 text-center">
                    <div className="container mx-auto">
                        <div className="max-w-lg mx-auto">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                                Make Your Home Service Smart One Step Ahead!
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-white">
                                We provide everything your home needs at your fingertips.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                    <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[40%] flex-col items-start justify-start gap-10">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                                Our Vision
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Officia architecto atque libero, dolorem nostrum minus quas
                                animi quod doloribus pariatur corrupti? Ad doloribus id
                                molestiae recusandae hic aliquid, voluptate modi. Corporis quia
                                modi repudiandae asperiores eligendi nemo dolores iure animi
                                debitis, quibusdam facilis illo eos ipsa qui tempore totam
                                molestiae quis vitae ad magni fugit laudantium ea temporibus.
                                Iure, aliquid! Aliquam sapiente saepe beatae velit illo mollitia
                                neque ducimus,
                            </p>
                        </div>

                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                                Our Mission
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
                                voluptates. Adipisci eveniet atque praesentium eligendi
                                necessitatibus, rem, error quaerat temporibus nam in sequi
                                officiis modi doloremque commodi? Mollitia, laboriosam unde!
                                Aspernatur saepe quam inventore a porro sunt aut architecto
                                cupiditate. Nostrum ipsa fugiat numquam sapiente dolores,
                                deleniti sequi natus, saepe autem temporibus iure cumque
                                repellat quo qui dolor fuga nam? Eius sunt ducimus tenetur
                                voluptatem officiis, facilis delectus, corporis esse ullam sint
                                labore facere illum? Ducimus aliquid non minus sunt laboriosam!
                                Dolore quos, accusamus porro doloribus temporibus distinctio
                                consequuntur doloremque.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviws from Other Learner */}
            <div className=" my-20 px-5  ">
                <h1 className="text-center text-4xl font-semibold mt-8">
                    Reviews from other customers
                </h1>

                <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 gap-5 mt-10 ">
                    <div className="flex flex-col  bg-slate-200 gap-3 p-3 rounded-2xl max-w-[330px]">
                        <div className="flex  gap-2 items-center ">
                            <Image
                                src={"/assets/images/avatar.png"}
                                width={50}
                                height={50}
                                alt="aniruddha"
                                className="rounded-full"
                            />
                            <p className="font-bold ">Prashant Nawale</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                            atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos, atque.
                        </p>

                        <div className={"flex gap-2"}>
                            <p>5</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-slate-200 gap-3 p-3 rounded-2xl max-w-[330px]">
                        <div className="flex  gap-2 items-center ">
                            <Image
                                src={"/assets/images/aniruddha.jfif"}
                                width={50}
                                height={50}
                                alt="aniruddha"
                                className="rounded-full"
                            />
                            <p className="font-bold ">Aniruddha Gade</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                            atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos, atque.
                        </p>

                        <div className={"flex gap-2"}>
                            <p>4</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-slate-200 gap-3 p-3 rounded-2xl max-w-[330px]">
                        <div className="flex  gap-2 items-center ">
                            <Image
                                src={"/assets/images/avatar.png"}
                                width={50}
                                height={50}
                                alt="aniruddha"
                                className="rounded-full"
                            />
                            <p className="font-bold ">Sujay Pagam</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                            atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos, atque.
                        </p>

                        <div className={"flex gap-2"}>
                            <p>4</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-slate-200 gap-3 p-3 rounded-2xl max-w-[330px]">
                        <div className="flex  gap-2 items-center ">
                            <Image
                                src={"/assets/images/tatya-vinchu.jpg"}
                                width={50}
                                height={50}
                                alt="aniruddha"
                                className="rounded-full"
                            />
                            <p className="font-bold ">Tatya Vinchu</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                            atque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos, atque.
                        </p>

                        <div className={"flex gap-2"}>
                            <p>4</p>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;