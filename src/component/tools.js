import img3 from '../assets/images/buffer.png'
import img4 from '../assets/images/pic1.jpeg'
import img5 from '../assets/images/pc5.jpg'
import img6 from '../assets/images/pic4.jpg'
const Tools = () => {
    return <div className="container">
        <div className='content'  data-aos="fade-up"
     data-aos-duration="3000">
        <img className='img' src={img3} alt="" />
        <div className='paragraph'>
            <p>Publication Open</p>
            <h1>Trust, Transparency, and Curiosity:Batsirai Chada on Buffer's Unique Culture</h1>
            <p> Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months. We spoke to him when he first joined to find out about his journey to Buffer, how he works, and what he does outside of work.</p>
            <p>Apr 27,2023   oo5m read   . Open</p>
            <div>  
            <img className='circle' src={img4} alt='' />
            <h3>Tamilore Oladipo</h3><br />
            <p className='p'>Content Writter  @ Buffer</p>
            </div>
      
        </div>
        </div>
        <ul className='link'>
                <div>Latest Updates</div>
                <div>Small Bussiness</div>
                <div>Social Media Marketing</div>
                <div>News</div>
                <div>Podcasts</div>
                <div>Open Blog</div>
                <div>Case Studies</div>
            </ul>
            <hr />

        <div className='divs'>
            <div className='div' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <img className='imgs' src={img3} alt="" />
            <div className='text'>
            <p>open</p>
            <p>Apr 27,2023</p>
            </div>
            <h1>Trust, Transparency, and Curiosity:Batsirai Chada on Buffer's Unique Culture</h1>
            <p> Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months. We spoke to him when he first joined to find out about his journey to Buffer, how he works, and what he does outside of work.</p>
            </div>
            <div className='div' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <img className='imgs' src={img5} alt="" />
            <div className='text'>
            <p>open</p>
            <p>Apr 27,2023</p>
            </div>
            <h1>Trust, Transparency, and Curiosity:Batsirai Chada on Buffer's Unique Culture</h1>
            <p> Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months. We spoke to him when he first joined to find out about his journey to Buffer, how he works, and what he does outside of work.</p>
            </div>
            <div className='div' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <img className='imgs' src={img6} alt="" />
            <div className='text'>
            <p>open</p>
            <p>Apr 27,2023</p>
            </div>
            <h1>Trust, Transparency, and Curiosity:Batsirai Chada on Buffer's Unique Culture</h1>
            <p> Batsirai Chada is a Growth Product Manager at Buffer, where he’s worked for about nine months. We spoke to him when he first joined to find out about his journey to Buffer, how he works, and what he does outside of work.</p>
            </div>
        </div>

    </div>
};
export default Tools;