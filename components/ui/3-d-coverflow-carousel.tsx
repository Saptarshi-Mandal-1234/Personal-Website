"use client";
import React,{useCallback,useEffect,useRef,useState} from 'react';
import {ChevronLeft,ChevronRight,ArrowUpRight,Pause,Play} from 'lucide-react';
export interface CarouselItem {tag?:string;titleLine1:string;titleLine2?:string;desc?:string;img:string;ctaText?:string;ctaUrl?:string;}
export interface CoverFlowCarouselProps {items?:CarouselItem[];sectionLabel?:string;autoplay?:boolean;autoplayDelay?:number;className?:string;onCtaClick?:(item:CarouselItem)=>void;}
export function CoverFlowCarousel({items=[],sectionLabel='Selected work',autoplay=false,autoplayDelay=5000,className='',onCtaClick}:CoverFlowCarouselProps){
 const [index,setIndex]=useState(0),[paused,setPaused]=useState(!autoplay),[hover,setHover]=useState(false),[focus,setFocus]=useState(false),[reduced,setReduced]=useState(false),[visible,setVisible]=useState(true);
 const root=useRef<HTMLElement>(null),touch=useRef<{x:number;y:number}|null>(null);const total=items.length,current=total?Math.min(index,total-1):0;
 const move=useCallback((step:number)=>setIndex(i=>total?(i+step+total)%total:0),[total]);
 useEffect(()=>setIndex(0),[items]);
 useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduced(q.matches);change();q.addEventListener('change',change);const obs=new IntersectionObserver(([e])=>setVisible(e.isIntersecting));if(root.current)obs.observe(root.current);return()=>{q.removeEventListener('change',change);obs.disconnect();};},[]);
 useEffect(()=>{if(paused||hover||focus||reduced||!visible||total<2)return;const t=setInterval(()=>{if(!document.hidden)move(1);},Math.max(3000,autoplayDelay));return()=>clearInterval(t);},[paused,hover,focus,reduced,visible,total,move,autoplayDelay]);
 if(!total)return <p className="cf-empty">No matching items. Try another filter.</p>;
 return <section ref={root} className={`coverflow ${className}`} aria-label={sectionLabel} aria-roledescription="carousel" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onFocusCapture={()=>setFocus(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocus(false);}} onKeyDown={e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)&&!['INPUT','TEXTAREA','SELECT'].includes((e.target as HTMLElement).tagName)){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}}}>
 <div className="cf-ambience" aria-hidden="true" style={{backgroundImage:`url("${items[current].img.replace(/["\\]/g,'')}")`}}/>
 <div className="cf-inner relative flex flex-col items-center w-full"><p className="cf-label">{sectionLabel}</p>
 <div className="cf-stage" onTouchStart={e=>{touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}} onTouchEnd={e=>{if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current.x,dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))move(dx<0?1:-1);touch.current=null;}}>
 {items.map((item,i)=>{let offset=(i-current+total)%total;if(offset>total/2)offset-=total;const center=offset===0;return <article key={`${item.titleLine1}-${i}`} className={`cf-card ${center?'cf-active':''}`} aria-hidden={!center} style={{'--offset':offset,'--scale':1-Math.min(Math.abs(offset),3)*.16,opacity:Math.abs(offset)>2?0:center?1:.5,zIndex:30-Math.abs(offset)*10,pointerEvents:Math.abs(offset)>2?'none':'auto'} as React.CSSProperties} onClick={()=>{if(!center)setIndex(i);}}>
 <img className="cf-image" src={item.img} alt="" loading="lazy" onError={e=>{e.currentTarget.src='/assets/carousel-placeholder.svg';}}/>
 <div className="cf-content"><span className="cf-tag">{item.tag}</span><div><h3>{item.titleLine1}</h3>{item.titleLine2&&<p>{item.titleLine2}</p>}{item.desc&&<p className="cf-description">{item.desc}</p>}<a className="cf-cta" href={item.ctaUrl||'#'} tabIndex={center?0:-1} onClick={e=>{if(onCtaClick){e.preventDefault();onCtaClick(item);}}}>{item.ctaText||'Explore'} <ArrowUpRight size={17} aria-hidden="true"/></a></div></div>
 </article>;})}</div>
 <div className="cf-controls"><button type="button" onClick={()=>move(-1)} disabled={total<2} aria-label={`Previous ${sectionLabel.toLowerCase()} item`}><ChevronLeft aria-hidden="true"/></button><span role="status" aria-live={paused?'polite':'off'}>{current+1} / {total}</span><button type="button" onClick={()=>move(1)} disabled={total<2} aria-label={`Next ${sectionLabel.toLowerCase()} item`}><ChevronRight aria-hidden="true"/></button>{!reduced&&total>1&&<button type="button" onClick={()=>setPaused(!paused)} aria-label={paused?'Start slideshow':'Pause slideshow'}>{paused?<Play size={18} aria-hidden="true"/>:<Pause size={18} aria-hidden="true"/>}</button>}</div>
 <div className="cf-dots" aria-label="Choose an item">{items.map((item,i)=><button type="button" key={i} aria-label={`Show ${item.titleLine1}`} aria-pressed={i===current} onClick={()=>setIndex(i)}><span/></button>)}</div>
 </div></section>;
}
export const Component=CoverFlowCarousel;
export default CoverFlowCarousel;
