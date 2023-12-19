import './footer.css'
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa'
function footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
<FaHome size={20} style={{color:"#fff",marginRight: "2rem"
            }}/>
                     <div>
                      <p>Block office road, near DDRC Lab ,Melpuram </p>
                       <p>Marthandam ,Kanayakumari</p>
                     </div>
                    
                </div>
<div className='phone'>
  <h4>  <FaPhone size={20} style={{color:"#fff",marginRight: "2rem"
            }}/>
            +91 8940118116</h4>

</div>

<div className='email'>
  <h4>  <FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"
            }}/>
            rusiagencies@gmail.com</h4>

</div>
            </div>
            <div className='right'>
              <h4>About the Agencies</h4>
              <p>
                It is a one of the best Icecreams supply and events managment in Marthandam, melpuram.
                we suplies  best quality of Icecream brand as LAZZA . 
              </p>
              <div className='social'>
               <a href='https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.facebook.com/rusi.agencies/&ved=2ahUKEwiM4fWpjLH_AhXUa2wGHT7yCO0QFnoECCwQAQ&usg=AOvVaw1wp_w-XIb9x0Q7LYXB7oAv' target='blank'><FaFacebook size={30}  style={{color:"#fff",marginRight: "1rem"
            }}/></a> 
               <a href='https://www.instagram.com/_rusi_agencies_/' target='blank'><FaInstagram size={30} style={{color:"#fff",marginRight: "1rem"
            }}/></a> 
              <a href='https://wa.me/918940118116' target='blank' > <FaWhatsapp size={30} style={{color:"#fff",marginRight: "1rem"
            }}/></a> 
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
