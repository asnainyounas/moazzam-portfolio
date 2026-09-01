import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowDownRight, ArrowUpRight, Play, Mail, Phone,  Menu, X} from 'lucide-react';
import './style.css';

const skills=['Long-form editing','Short-form editing','YouTube editing','Documentary editing','Storytelling','Pacing','Audience retention','B-roll selection','Shot selection','Sound design','Music & SFX','Color correction','Color grading','Captions / subtitles','Visual effects','Transitions'];
const creative=['Motion graphics','Basic animation','Visual storytelling','Creative editing','Social media content','Commercial / eCommerce','On-site shot guidance'];
const experience=[['PIXQUIRE','Video Editor','YouTube, documentary-style and Cash-Cow content.'],['IT TRIBES','Head Video Editor & Animator','Editing, animation, creative production and workflow.'],['MH WEBMARK','Video Editor','Digital and video content.'],['ENVISION','Video Editor','Video and digital content projects.'],['INVOTIC','Video Editor','Video editing and digital content.'],['WESTLINK CLEANING SERVICES — SYDNEY','Video Services','Video content for the business.'],['FREELANCE','Video Editor','Various client and content projects across formats.']];
const journey=[['2022','THE BEGINNING','Started seriously learning video editing and developing professional skills.'],['2022—2023','REAL PROJECTS','Moved from learning into real-world editing and content projects.'],['2023—2024','PROFESSIONAL GROWTH','Expanded across YouTube, documentaries, technology and digital content.'],['2024—2025','GREATER RESPONSIBILITY','Worked within professional teams and gained Head Video Editor & Animator experience.'],['2026','THE NEXT CHAPTER','Moving toward short-form content, creative editing, motion graphics and animation.']];

// Real project videos — files live in public/videos/. Update label/desc once Moazzam confirms what each clip is.
const projects=[
  {label:'DUBAI', src:'/videos/Dubai.mp4.mp4', desc:'Client project — update with real description.'},
  {label:'EID MUBARAK', src:'/videos/EidMubarak.mp4.mp4', desc:'Client project — update with real description.'},
  {label:'NDIS', src:'/videos/Ndis.mp4.mp4', desc:'Client project — update with real description.'},
  {label:'WINDOWS', src:'/videos/Windows.mp4.mp4', desc:'Client project — update with real description.'},
  {label:'DIABEAD', src:'/videos/Diabead.mp4.mp4', desc:'Client project — update with real description.'},
  {label:'SELLX', src:'/videos/SellXlogo.mp4', desc:'Client project — update with real description.'},
];

function WorkCard({label,src,desc}){
  const videoRef=React.useRef(null);
  const [playing,setPlaying]=React.useState(false);
  function handlePlay(){setPlaying(true); requestAnimationFrame(()=>videoRef.current&&videoRef.current.play());}
  return <div className="work-card">
    <div className="thumb">
      {playing
        ? <video ref={videoRef} src={src} controls playsInline />
        : <button className="play-btn" onClick={handlePlay} aria-label={'Play '+label}><Play/></button>}
    </div>
    <h3>{label}</h3>
    <p>{desc}</p>
  </div>;
}

function ShowreelPlayer({src}){
  const videoRef=React.useRef(null);
  const [playing,setPlaying]=React.useState(false);
  function handlePlay(){setPlaying(true); requestAnimationFrame(()=>videoRef.current&&videoRef.current.play());}
  return playing
    ? <video ref={videoRef} src={src} controls playsInline className="reel-video" />
    : <button onClick={handlePlay} aria-label="Play showreel"><Play/></button>;
}

function App(){const [open,setOpen]=React.useState(false); return <><nav><a className="brand" href="#home">MA<span>.</span></a><div className={'links '+(open?'show':'')}><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>
<main>
<section id="home" className="hero"><div className="eyebrow">VIDEO EDITOR · CREATIVE EDITING · SINCE 2022</div><h1>MOAZZAM<br/><i>ALI</i></h1><div className="hero-bottom"><p>I turn raw footage into stories people want to watch — and years behind the timeline have taught me what footage is worth capturing before the edit even begins.</p><a className="circle" href="#work">VIEW WORK <ArrowDownRight/></a></div><div className="hero-line"><span>CREATIVE EDITING</span><span>SHORT-FORM</span><span>LONG-FORM</span></div></section>
<section id="about" className="split section"><span className="kicker">01 / ABOUT</span><div><h2>AN EDITOR<br/>WITH <i>AN EYE</i><br/>FOR THE STORY.</h2><div className="body"><p>I'm Moazzam Ali, a Video Editor with professional experience since 2022. Most of my work has focused on long-form, documentary-style and Cash-Cow content.</p><p>Working with large amounts of footage has taught me efficiency, storytelling, shot selection, pacing and what makes footage useful.</p><p>I'm now expanding into short-form content, creative social media, motion graphics and animation — bringing a strong professional foundation into more creative formats.</p></div></div></section>
<section className="statement"><span className="kicker">02 / THE EDITOR'S EYE</span><h2>I DON'T JUST KNOW<br/>HOW TO EDIT FOOTAGE —<br/><i>I KNOW WHAT'S WORTH CAPTURING.</i></h2><p>Post-production has trained me to think differently on set: useful angles, compositions, B-roll, cutaways and visual continuity — before footage ever reaches the timeline.</p><div className="tags">{['Shot Selection','B-Roll','Composition','Visual Storytelling','Pacing','Visual Continuity'].map(x=><span>{x}</span>)}</div></section>
<section className="section feature"><span className="kicker">03 / FOUNDATION</span><div><h2>BUILT IN<br/><i>LONG-FORM.</i></h2><p>A major part of my professional experience has been dedicated to long-form and Cash-Cow content. It taught me speed, consistency, storytelling, audience retention, B-roll selection, pacing and efficient post-production workflows.</p><blockquote>“Cash-Cow editing taught me speed. Long-form editing taught me storytelling. Now I want to bring those skills into more creative formats.”</blockquote></div></section>
<section className="section services"><span className="kicker">04 / SERVICES</span><div>{[['01','Short-Form Video','Engaging edits for Reels, Shorts, TikTok and social media designed around strong hooks, pacing and retention.'],['02','YouTube & Long-Form','Story-driven editing combining footage, B-roll, sound, music, graphics and pacing.'],['03','Documentary Editing','Narrative-focused editing designed to turn information and footage into engaging stories.'],['04','Motion Graphics','Clean motion graphics, text animation and visual elements that improve communication and engagement.'],['05','Commercial & eCommerce','Product and promotional videos designed to communicate a product or service clearly and effectively.']].map(([n,t,d])=><article><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight/></article>)}</div></section>
<section id="work" className="work section"><span className="kicker">05 / SELECTED WORK</span><h2>WORK THAT<br/><i>MOVES.</i></h2><div className="work-grid">{projects.map(p=><WorkCard key={p.label} {...p}/>)}</div></section>
<section className="showreel"><span className="kicker">06 / SHOWREEL 2026</span><div className="reel"><div><span>PLAY SHOWREEL</span><h2>60 SEC<br/><i>OF THE STORY.</i></h2></div><ShowreelPlayer src="/videos/Returant.mp4"/></div></section>
<section className="skills section"><span className="kicker">07 / TOOLS & SKILLS</span><div><h2>THE<br/><i>TOOLKIT.</i></h2><div className="software"><article><b>Adobe Premiere Pro</b><span>Strong / Primary</span><p>My main professional editing software with extensive practical experience.</p></article><article><b>Adobe After Effects</b><span>Working Knowledge</span><p>Motion graphics, animation, text animation and basic visual effects.</p></article><article><b>Adobe Photoshop</b><span>Working Knowledge</span><p>Image editing and visual assets for video projects.</p></article><article><b>Adobe Illustrator</b><span>Working Knowledge</span><p>Vector graphics and supporting design assets.</p></article></div><div className="skill-columns"><div><h3>VIDEO EDITING</h3>{skills.map(x=><span>{x}</span>)}</div><div><h3>CREATIVE</h3>{creative.map(x=><span>{x}</span>)}</div></div></div></section>
<section id="experience" className="section experience"><span className="kicker">08 / EXPERIENCE</span><div>{experience.map((e)=><article><div><b>{e[0]}</b><span>{e[1]}</span></div><p>{e[2]}</p><ArrowUpRight/></article>)}</div></section>
<section className="mudeers"><span className="kicker">09 / MUDEERS</span><h2>BUILDING<br/>MY OWN <i>CREATIVE<br/>VENTURE.</i></h2><p><b>Founder — MUDEERS</b><br/>A creative venture focused on video editing and digital content services. Built through client communication, creative services, project management, content requirements, delivery and digital marketing.</p></section>
<section className="journey section"><span className="kicker">10 / JOURNEY</span><div>{journey.map(x=><article><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
<section className="looking"><span className="kicker">11 / THE NEXT STEP</span><h2>EXPERIENCED,<br/>BUT STILL <i>GROWING.</i></h2><p>I've built a strong foundation through years of long-form editing, and now I want to challenge myself creatively. I'm looking for an environment where I can contribute the skills I've developed while learning from experienced creatives and expanding into new formats.</p></section>
<section id="contact" className="contact"><span className="kicker">12 / CONTACT</span><h2>LET'S MAKE<br/>SOMETHING <i>WORTH<br/>WATCHING.</i></h2><p>Have a video that needs an editor? Whether you're building a YouTube channel, creating social content, launching a product or have footage that needs a story, I'd love to hear about it.</p><div className="contact-links"><a href="mailto:moazzamaliofficials@gmail.com"><Mail/> moazzamaliofficials@gmail.com</a><a href="tel:03317274669"><Phone/> 03317274669</a><a href="tel:03191503321"><Phone/> 03191503321</a></div><a className="big-cta" href="mailto:moazzamaliofficials@gmail.com">LET'S WORK TOGETHER <ArrowUpRight/></a></section>
</main><footer><span>© 2026 MOAZZAM ALI</span><span>VIDEO EDITOR · CREATIVE EDITING</span></footer></>}
createRoot(document.getElementById('root')).render(<App/>);