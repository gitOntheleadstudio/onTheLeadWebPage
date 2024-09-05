import './Counters.scss';
import useOnScreen from '../../hooks/onScreen';
import { useEffect, useRef } from 'react';

export default function Counters(props: { data: { name: string, desc: string, start: number, end: number }[] }) {
    const time = 3000
    const boxRef = useRef<HTMLDivElement>(null)
    const title = useRef<Array<HTMLElement>>([]);
    useEffect(()=>{
        title.current.forEach((e, i) => {
            let curr = props.data[i]
            animateValue(e, curr.start, curr.end, time)
        });
    },[useOnScreen(boxRef)])
    
    const animateValue = (obj: any, start: number, end: number, duration: number) => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }
    return (
        <div  className="counter box">
            {props.data.map((e, i) => {
                return (
                    <div ref={boxRef} key={'count' + i} className="counter element">
                        <p className="counter element-name">{e.name}</p>
                        <h1 ref={(el) => (title.current[i] = el!)} className="counter element-number">{e.start}</h1>
                        <p className="counter element-description">{e.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}
