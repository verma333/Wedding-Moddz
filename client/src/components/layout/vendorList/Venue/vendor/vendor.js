import React, { Component } from 'react';

import { Section} from './style';

import  Footer from '../../../footer/Footer'
import{ Item  }from './Slider';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img from 'react-cool-img';
import Navbar from '../../../Navbar/Navbar';
import TopBar from '../../../Topbar/topbar'
import { connect } from 'react-redux';
import {vendorDetials} from '../../../../../actions/UserActions'
import Loading from '../../../Loading/Loading';




 class vendor extends Component {
   

   componentDidMount() {
   
      let data = {
         id: this.props.match.params.id
      }
   this.props.vendorDetials(data)

   }
   push = (id) => {
      this.props.history.push(`/photos/${id}`)
   }

    
    render() {
  
       
      const { vendordet} = this.props.user;
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 3
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
   
          if ( vendordet === null ){
             return (
                <Loading/>
             )
          }

        return (
            <React.Fragment>
                  <TopBar/>
        <Navbar/>
            <Section>
                
  <div className="flex" >

      
  <div className="flex-1" >
  <div className='data' >
  <div  className="wrapper" >
          <img src={vendordet.img} ></img>
      </div>
  <div className='data-1' >
  
  <ul>
      <li><img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972542/wedding%20Moodz/verified_ahru4t.svg'} ></img>  <h2>{vendordet.vendorName}</h2></li>
      <li>Wedding Venue</li>
      <li><h2> ₹50000</h2></li>
      
     
      <li><h5>Since member 2007</h5></li>
  </ul>
      
  <div className="rating" >
     
  <li><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></li>

     </div>

     <div className="social" >

        <div className="top" >
           
           <div className="wrapper" >
            <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1609652980/wedding%20Moodz/qis54kbz8lf1r0lobiqr.svg'} ></img>
          <span >Write a Review</span>
           </div>
           <div className="wrapper" >
           <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1609652980/wedding%20Moodz/hs1gqqq2lu53chzixqxm.svg'} ></img>
           <span >Images</span>
           </div>
           <div className="wrapper" >
           <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1609652980/wedding%20Moodz/mlvormcpl5w1hpxqn197.svg'} ></img>
           <span >Videos</span>
           </div>

        </div>
        <div className="bottom" >
   
             <div className='link' >
            <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/loaction_4x_wgn1ec.png'} ></img>
           <span>sdkjd sdksdj sdkjdd</span>
            </div>
             <div className='link' >
             <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/facebook_4x_bphbzh.png'} ></img>
             <span>sdkjd sdksdj sdkjdd</span>
             </div>
             <div className='link' >
             <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/instagram_4x_un5cbx.png'} ></img>
             <span>sdkjd sdksdj sdkjdd</span>
             </div>
             <div className='link' >
             <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/mail_4x_ipsoeo.png'} ></img>
             <span>sdkjd sdksdj sdkjdd</span>
             </div>
             <div className='link' >
             <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/whats_app_4x_faiis5.png'} ></img>
             <span>sdkjd sdksdj sdkjdd</span>
             </div>
             <div className='link' >
             <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606992755/wedding%20Moodz/phone_4x_eo8it4.png'} ></img>
             <span>sdkjd sdksdj sdkjdd</span>
             </div>
    



        </div>
     </div>
      
      </div>


     
      
  </div>
    
    <div className="data2" >

    <div className='banner' >
    <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1608803109/wedding%20Moodz/nv2bymdjd1zxccokgx7l.svg'} ></img>
  
  <p><span>WeddingMoodz</span>  has a best price guarantee at this venue  Call +918010858858 </p>

  <h6 >View our venue booking service</h6>
</div>
       

<div className='price' >

</div>
       
       <div className='contact' >
  
   <div class="btn" ><i class="fas fa-envelope"></i> </div>
   <div class="btn" ><i class="fas fa-id-card"></i> </div>
       </div>

       <div className='wishlist' >
  
  <div className='one' >

  <i class="fas fa-photo-video"></i>
    
  <h3>Photos</h3>
  </div>
  <div className='two' >
  <i class="fas fa-heart"></i>

<h3>ShortList</h3>
  
  </div>  
  <div className='three' >
  <i class="fas fa-pen-nib">
   
  </i>
  <h3> Review</h3></div>  
  <div className='four' >
  <i class="fas fa-share">
     
  </i>
  <h3>Share</h3>
  </div> 
</div>
    </div>
  </div>
  </div>



 <div className='reala' >
    <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972540/wedding%20Moodz/Asset_21_xpk7g5.svg'}  ></img>
 </div>

 <div className='reala1' >
    <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606972539/wedding%20Moodz/Asset_22_xvpdjl.svg'}  ></img>
 </div>


            </Section>
   
            <Item>

         
       
<div className="center" >

<Carousel responsive={responsive}>

{vendordet.photos.map((number) =>   
<div className='img-wrapper'   >
   <Img src={number.photo}  cache  alt="sdd"  ></Img>
   <div className="fade" >
{/* <h2>number.category</h2> */}
</div>
   </div>
)
}




</Carousel>


</div>


  <div className='btn' >
  <button onClick={() => this.push(this.props.match.params.id)}  >View All</button>
  </div>
  

</Item>
 


            <Footer/>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors,
   admin: state.admin,
   user:state.user
 });

export default connect (
   mapStateToProps,
   { vendorDetials }
) ( vendor);