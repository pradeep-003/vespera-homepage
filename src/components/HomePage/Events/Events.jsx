import React, { useState } from "react";
import Event1 from "../../../assets/homepage/events/Event1.svg"
import Event2 from "../../../assets/homepage/events/Event2.svg"
import Event3 from "../../../assets/homepage/events/Event3.svg"
import Event4 from "../../../assets/homepage/events/Event4.svg"
import Event1_t from "../../../assets/homepage/events/Event1_t.svg"
import Event2_t from "../../../assets/homepage/events/Event2_t.svg"
import Event3_t from "../../../assets/homepage/events/Event3_t.svg"
import Event4_t from "../../../assets/homepage/events/Event4_t.svg"
import bgstar from "../../../assets/homepage/events/bg-star.png"


function Events(){
    const [eve1, setEve1]=useState(Event1);
    const [eve2, setEve2] = useState(Event2);
    const [eve3, setEve3] = useState(Event3);
    const [eve4, setEve4] = useState(Event4);


    return(
        <div className="bg-black w-screen h-screen max-w-[100vw] max-h-[100vh] flex justify-center items-center gap-[50px] flex-col">
            <div>
                <h1 className="text-white scale-[250%]">EVENTS</h1>
            </div>
            <div className="flex flex-row gap-[20px] scale-[90%] z-[1000]">
                <span>
                    <img src={eve1} onMouseOver={() => setEve1(Event1_t)} onMouseOut={()=>setEve1(Event1)} className="w-[310px] h-[400px] object-contain" alt="" />
                </span>
                <span>
                    <img src={eve2} onMouseOver={() => setEve2(Event2_t)} onMouseOut={()=>setEve2(Event2)} className="w-[310px] h-[400px]  object-contain" alt="" />
                </span>
                <span>
                    <img src={eve3} onMouseOver={() => setEve3(Event3_t)} onMouseOut={()=>setEve3(Event3)} className="w-[310px] h-[400px]  object-contain" alt="" />
                </span>
                <span>
                    <img src={eve4} onMouseOver={() => setEve4(Event4_t)} onMouseOut={()=>setEve4(Event4)} className="w-[310px] h-[400px]  object-contain" alt="" />
                </span>
            </div>
            <div>
                <img className="absolute  translate-y-[-170vh] scale-[79%] translate-x-[-15vw] z-[100]" src={bgstar} alt="" />
            </div>
        </div>
    );
}
export default Events;