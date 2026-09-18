"use client";
import React,{useCallback,useEffect,useRef,useState} from 'react';
import {motion,useReducedMotion} from 'motion/react';
import {ChevronLeft,ChevronRight,ArrowUpRight} from 'lucide-react';
import {cn} from '@/lib/utils';
export interface CardData{src:string;title:string;category?:string;content:React.ReactNode;href?:string;}
export function Carousel({items,initialScroll=0}:{items:React.JSX.Element[];initialScroll?:number}){
 const ref=useRef<HTMLDivElement>(null),drag=useRef<{x:number;scroll:number}|null>(null),moved=useRef(false);const [left,setLeft]=useState(false),[right,setRight]=useState(false);const reduced=useReducedMotion();
 const check=useCallback(()=>{const el=ref.current;if(el){setLeft(el.scrollLeft>2);setRight(el.scrollLeft+el.clientWidth<el.scrollWidth-2);}},[]);
 useEffect(()=>{const el=ref.current;if(!el)return;el.scrollLeft=initialScroll;check();const resize=new ResizeObserver(check);resize.observe(el);return()=>resize.disconnect();},[items,initialScroll,check]);
 const move=(direction:number)=>{const el=ref.current;if(el){el.scrollBy({left:direction*(el.firstElementChild?.getBoundingClientRect().width||300),behavior:reduced?'instant':'smooth'});}};
 if(!items.length)return <p className="cf-empty">No matching certificates. Try another filter.</p>;
 return <section className="linear-carousel" aria-label="Certificates carousel" aria-roledescription="carousel" onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}}}>
 <div className="linear-track" ref={ref} onScroll={check} onMouseDown={e=>{if(e.button!==0)return;drag.current={x:e.clientX,scroll:ref.current!.scrollLeft};moved.current=false;}} onMouseMove={e=>{if(!drag.current)return;const dx=e.clientX-drag.current.x;if(Math.abs(dx)>6){moved.current=true;e.preventDefault();ref.current!.scrollLeft=drag.current.scroll-dx;}}} onMouseUp={()=>{drag.current=null;}} onMouseLeave={()=>{drag.current=null;}} onClickCapture={e=>{if(moved.current){e.preventDefault();e.stopPropagation();moved.current=false;}}} onDragStart={e=>e.preventDefault()}>
 {items.map((item,index)=><motion.div key={item.key??index} className="linear-slide" initial={reduced?false:{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.3,delay:Math.min(index,4)*.04}}>{item}</motion.div>)}
 </div><div className="linear-controls"><button type="button" onClick={()=>move(-1)} disabled={!left} aria-label="Previous certificates"><ChevronLeft aria-hidden="true"/></button><p>{items.length} certificates · Swipe or use arrows</p><button type="button" onClick={()=>move(1)} disabled={!right} aria-label="Next certificates"><ChevronRight aria-hidden="true"/></button></div></section>;
}
export function Card({card,index}:{card:CardData;index:number;layout?:boolean}){return <a className="linear-card" href={card.href||'#'} target="_blank" rel="noopener noreferrer" aria-label={`View ${card.title} certificate (new tab)`}><BlurImage src={card.src} alt={card.title}/><div className="linear-card-copy">{card.category&&<span className="cert-kind">{card.category}</span>}<h3>{card.title}</h3><div className="linear-card-description">{card.content}</div><span className="linear-open">View certificate <ArrowUpRight size={18} aria-hidden="true"/></span></div></a>;}
export function BlurImage({src,alt,className,...rest}:React.ImgHTMLAttributes<HTMLImageElement>&{src:string;alt:string}){const [loading,setLoading]=useState(true);return <img {...rest} src={src} alt={alt} loading="lazy" decoding="async" className={cn('linear-image',loading&&'linear-loading',className)} onLoad={()=>setLoading(false)} onError={e=>{setLoading(false);e.currentTarget.onerror=null;e.currentTarget.src='/assets/carousel-placeholder.svg';}}/>;}
export default Carousel;
