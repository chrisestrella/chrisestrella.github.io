import React, {useState ,useRef, useEffect} from 'react'
import me from '../img/me.png'
import gsap, {Power3} from 'gsap'

export default function Header(){
  let head = useRef()

  useEffect(() => {
    // gsap.set(head.current,{y:0, yPercent:-100})
    gsap.timeline()
    .from(head.current,{
      rotationX: -90,
      transformOrigin: "50% 0%",
      duration:3.2,
      scale: .8,
      // ease: Power3.easeOut,
    })
    .to('.school',{y: -20, duration:0})
    .to('.school', {
      opacity: 1,
      y: 0,
      // rotationZ: 0,
      transformOrigin: "0% 0%",
      duration: 1,
      ease: Power3.easeOut
    }).to('.about',{y:-40})
    .to('.about',{
      opacity: 1,
      y:0,
      duration: 1.5,
      ease: Power3.easeOut
    })

  },[])

  return(
    <header>
      <div className="header-card" ref={head}>
        <img src={me} alt="me" />
        <div className="header--container">
          <h1 className='intro typed'>Hey, I'm Chris, a Software Engineer!</h1>
          <h3 className='school' >Student @ The University of Washington | Major: CS</h3>
          <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            molestiae deleniti minima impedit voluptatum commodi, dolorem temporibus
            vero harum dolor aperiam, nemo odit! Quas alias rerum ratione consequuntur
            a incidunt.
          </p>
        </div>
      </div>
    </header>
  )
}