import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image1 from './img-4.jpeg';
import image2 from './img-1.jpeg';
import image3 from './img-2.jpeg';
import image4 from './img-3.jpeg';
import image5 from './img-5.jpeg';
import image6 from './preview.jpeg';
import certi from './cert.png';
import ship from './ship.png';
import support from './support.png';
import guaran from './guaran.png';
import phone2 from './phone2.jpg';
import Divider from '@material-ui/core/Divider';
import insta from './insta.png';
import face from './face.png';
import twitter from './twitter.png';
import expert from './expert.png';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper1: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper3: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        background: 'black',
        marginTop: '80px'
    },
    custImage: {

        height: '64px',
    },
    images: {
        backgroundImage: image1,

    },
    custDetail: {
        fontWeight: '600',
        color: 'black'
    },
    buyBtn: {
        background: '#e0e0e0',
        color: 'black',
        border: 'none',
        outline: 'none',
        height: '40px',
        fontFamily: 'poppins',
        fontWeight: '600',
        cursor: 'pointer',
        width: '100%'
    },
    cartBtn: {
        background: '#d50000',
        color: 'white',
        border: 'none',
        outline: 'none',
        height: '40px',
        fontFamily: 'poppins',
        fontWeight: '700',
        cursor: 'pointer',
        MarginRight: '10px',
        width: '100%'
    },


    cartBtn1: {
        background: '#ffc103',
        color: 'black',
        border: 'none',
        outline: 'none',
        height: '40px',
        fontFamily: 'poppins',
        fontWeight: '700',
        fontSize: '10px',
        cursor: 'pointer',
        MarginRight: '10px',
        width: '90%',
        borderRadius: '5px'
    }


}));

export default function AutoGrid() {
    const classes = useStyles();
    const [images, setImage] = useState(image1)
    const handleImage = (value) => {
        setImage(value)
    }
    return (


        <div className={classes.root}>

            <Grid container style={{ marginTop: '20px' }}>
                <Grid item xs={1}></Grid>

                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item xs={5}>
                                <Grid container>
                                    <Grid container style={{ marginTop: '20px' }}>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={10}>
                                            <div style={{position: 'relative'}}>
                                                <Paper className={classes.paper1} variant="outlined" square><img src={images} /></Paper>
                                                <div style={{position: 'absolute',top: '10px',right: '0px',background: 'red',color: 'white',padding: '2px',fontSize: '12px'}}>20% OFF</div>
                                             </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} style={{ marginTop: '20px', textAlign: 'center' }}>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={2}><Paper className={classes.paper3} variant="outlined" square onClick={() => handleImage(image3)}><img style={{ height: '64px' }} src={image3} /></Paper></Grid>
                                        <Grid item xs={2}><Paper className={classes.paper3} variant="outlined" square onClick={() => handleImage(image2)} ><img style={{ height: '64px' }} src={image2} /></Paper></Grid>
                                        <Grid item xs={2}><Paper className={classes.paper3} variant="outlined" square onClick={() => handleImage(image5)}><img className={classes.custImage} src={image5} /></Paper></Grid>
                                        <Grid item xs={2}><Paper className={classes.paper3} variant="outlined" square onClick={() => handleImage(image1)}><img className={classes.custImage} src={image6} /></Paper></Grid>
                                        <Grid item xs={2}><Paper className={classes.paper3} variant="outlined" square onClick={() => handleImage(image1)}><img className={classes.custImage} src={image6} /></Paper></Grid>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid item xs={5}>
                     <Grid container spacing={3} style={{ marginTop: '20px' }}>
                         <Grid item xs={12} style={{ marginLeft: '30px' }}>
                             <img src={certi} />
                         </Grid>
                         <Grid item xs={12} style={{ marginLeft: '30px' }}>
                             <div className={classes.custDetail}>
                                 Apple iPhone 11, 64 GB(Includes Earpods,Power Adapter)
                                 <br /> <span style={{ fontWeight: '500', fontSize: '12px' }}>Minimally used. Negligible Scratches. Fully Functional</span>
                             </div>
                         </Grid>
                         <Grid item xs={12} style={{ marginLeft: '30px', color: 'black' }}>
                             <div style={{ fontWeight: '700' }}>AED 8349&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px' }}>AED 9000</span></div>
                         </Grid>

                         <Grid item xs={12} style={{ marginLeft: '30px' }}>
                             <Grid container spacing={2}>
                                  <Grid item xs={6}>
                                      <input type='submit' value='BUY NOW' className={classes.buyBtn}></input>
                                  </Grid>
                                  <Grid item xs={6}>
                                       <input type='submit' value='ADD TO CART' className={classes.cartBtn}></input> 
                                  </Grid>
                             </Grid>
                             
                         </Grid>

                         <Grid item xs={12} style={{ marginLeft: '30px',marginTop: '20px' }}>
                             <Grid container spacing={2}>
                                 <Grid item xs={4}>
                                         <div style={{textAlign: 'center'}}>
                                         <img src={guaran} />
                                         <div style={{ fontSize: '12px', fontWeight: '600', color: 'black' }}>Guaranteed Quality</div>
                                         <div style={{ fontSize: '11px', fontWeight: '500' }}>
                                             100% Original and functional Products
                                         </div>
                                         </div>
                                 </Grid>
                                 <Grid item xs={4}>
                                         <div style={{textAlign: 'center'}}>
                                         <img style={{ position: 'relative', top: '10px' }} src={ship} />

                                         <div style={{ fontSize: '12px', fontWeight: '600', color: 'black', marginTop: '13px' }}>Replace Easily</div>
                                         <div style={{ fontSize: '11px', fontWeight: '500' }}>
                                             Get hassle-free 10 days replacement
                                         </div>
                                         </div>
                                     
                                 </Grid>
                                 <Grid item xs={4}>
                                         <div style={{textAlign: 'center'}}>
                                         <img src={support} />
                                         <div style={{ fontSize: '12px', fontWeight: '600', color: 'black' }}>Excellent Support</div>
                                         <div style={{ fontSize: '11px', fontWeight: '500' }}>
                                             Get support from our agents
                                         </div>
                                         </div>
                                 </Grid>
                             </Grid>
                         </Grid>
                         <Grid item xs={12} style={{ marginLeft: '30px',marginTop: '15px' }}>
                             <div style={{ fontWeight: '700', color: 'black' }}>In The Box</div>
                             <Grid container spacing={2} style={{ marginTop: '10px'}}>
                                 <Grid item xs={4}>
                                     <Paper className={classes.paper1} variant='outlined' square><div style={{ fontSize: '12px',color: 'black' }}>Charging Cable</div></Paper>
                                 </Grid>
                                 <Grid item xs={4}>
                                     <Paper className={classes.paper1} variant='outlined' square><div style={{ fontSize: '12px',color: 'black' }}>Power Plug</div></Paper>
                                 </Grid>
                                 <Grid item xs={4}>
                                     <Paper className={classes.paper1} variant='outlined' square><div style={{ fontSize: '12px',color: 'black' }}>Earphones</div></Paper>
                                 </Grid>
                             </Grid>
                         </Grid>                         
                     </Grid>
                     </Grid>
                          <Grid item xs={2}>
                    <Grid container>
                        <Grid item xs={12}><div style={{ marginTop: '30px',display: 'inline-flex' }}><Avatar alt="Remy Sharp" src={expert} />&nbsp;&nbsp;<input type='submit' value='SHOP WITH AN EXPERT' className={classes.cartBtn1  }></input></div></Grid>
                    </Grid>
                </Grid>
                        </Grid>

                    <Grid container style={{marginBottom: '10px',marginTop: '20px' }}>
                      <Grid item xs={5}>
                         
                      </Grid>

                      <Grid item xs={7}>
                         <Grid container>
                            <Grid item xs={12} style={{ marginLeft: '30px', color: 'black' }}>
                            <div style={{ fontWeight: '700',marginBottom: '20px' }}>Specifications</div>
                            <Paper variant='outlined' square className={classes.paper}>
                            <Grid container spacing={3} style={{ marginTop: '2px' }}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500',color: 'black' }}>
                                        <Grid item xs={4}>in The Box</Grid>
                                        <Grid item xs={8}>Handset, Earpods with Lighting Connector, Lighting to USB Cable</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500',color: 'black' }}>
                                        <Grid item xs={4}>Model Number</Grid>
                                        <Grid item xs={8}>MWLLHUYA/A</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500',color: 'black' }}>
                                        <Grid item xs={4}>Model Name</Grid>
                                        <Grid item xs={8}>iPhone 11</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                                        <Grid item xs={4}>Color</Grid>
                                        <Grid item xs={8}>White</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                                        <Grid item xs={4}>Browse Type</Grid>
                                        <Grid item xs={8}>Smartphones</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                                        <Grid item xs={4}>Sim Type</Grid>
                                        <Grid item xs={8}>Dual Sim</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                                        <Grid item xs={4}>Hybrid Sim Slot</Grid>
                                        <Grid item xs={8}>No</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                                        <Grid item xs={4}>Touchscreen</Grid>
                                        <Grid item xs={8}>Yes</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '13px', fontWeight: '500', color: 'black' }}>
                                        <Grid item xs={4}>OTG Compatible</Grid>
                                        <Grid item xs={8}>No</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </Paper>
                        </Grid>
                         </Grid>
                      </Grid>
                    </Grid>    
                    </Paper>   
                </Grid>

                <Grid item xs={1}></Grid>

            </Grid>

            <Grid container style={{marginTop: '30px'}}>
               <Grid item xs={1}>
                  
               </Grid>
               <Grid item xs={10}>
                  
                        <Grid container >
                            
                            <section className='reviews'>
                                
                                <Paper className={classes.paper} style={{marginRight: '20px'}}>
                                <div style={{padding: '20px',display:'flex',width: '900px'}}>
                                   
                                   <img src={phone2} style={{width: '370px'}}/>
                                   <div>
                                        <blockquote>
                                            It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming;
                                        <footer>
                                                Teddy Roosevelt
                                        </footer>
                                        </blockquote>
                                    </div>
                                </div>
                                </Paper>
                                
                                <Paper className={classes.paper}>
                                <div style={{padding: '20px',display:'flex',width: '900px'}}>
                                   
                                   <img src={phone2} style={{width: '370px'}}/>
                                   <div>
                                        <blockquote>
                                            It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming;
                                        <footer>
                                            
                                                Teddy Roosevelt
                                            
                                        </footer>
                                        </blockquote>
                                    </div>
                                </div>
                                </Paper>      
                            </section>
                         </Grid>
                   
               </Grid>
               <Grid item xs={1}>
                  
               </Grid>
            </Grid>

            
            <Grid container style={{marginTop: '20px'}}>
               <Grid item xs={1}></Grid>
               <Grid item xs={10}>
                    <Grid container> 
                      
                        <Grid item xs={12}><Paper square classes={classes.paper}><div style={{ fontWeight: '600',padding: '8px' }}>&nbsp;You might also like<span style={{ float: 'right' }}>View All&nbsp;</span></div></Paper></Grid>
                        <Divider />
                        <Grid item xs={12}><Paper>
                            <div style={{display: 'flex',padding: '10px'}}>
                               <div style={{width: '20%'}}>
                               <Paper square className={classes.paper} elevation={0} >
                                 <div style={{background: 'red',color: 'white',padding: '2px',fontSize: '12px',display: 'inline'}}>20% OFF</div>
                                 <div style={{textAlign: 'center'}}><img src={image1} style={{width: '40%'}}/></div>
                                 <div style={{color: 'black',fontWeight: '600',marginTop: '10px',fontSize: '12px'}}>Apple iPhone 11</div>
                                 <div style={{fontSize: '11px'}}>Certified, Good Condition</div>
                                 <div style={{ fontWeight: '700',color: 'black',marginTop: '10px'fontSize: '12px'}}>AED 8349&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px' }}>AED 9000</span></div>

                               </Paper>
                               </div>
                               <div style={{width: '20%'}}>
                                  <Paper square className={classes.paper} elevation={0} >
                                 <div style={{background: 'red',color: 'white',padding: '2px',fontSize: '12px',display: 'inline'}}>20% OFF</div>
                                 <div style={{textAlign: 'center'}}><img src={image1} style={{width: '40%'}}/></div>
                                 <div style={{color: 'black',fontWeight: '600', marginTop: '10px',fontSize: '12px'}}>Apple iPhone 11</div>
                                 <div style={{fontSize: '11px'}}>Certified, Good Condition</div>
                                 <div style={{ fontWeight: '700',color: 'black', marginTop: '10px'fontSize: '12px' }}>AED 8349&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px' }}>AED 9000</span></div>

                               </Paper>
                               </div>
                               <div style={{width: '20%'}}>
                                  <Paper square className={classes.paper} elevation={0} >
                                 <div style={{background: 'red',color: 'white',padding: '2px',fontSize: '12px',display: 'inline'}}>20% OFF</div>
                                 <div style={{textAlign: 'center'}}><img src={image1} style={{width: '40%'}}/></div>
                                 <div style={{color: 'black',fontWeight: '600', marginTop: '10px',fontSize: '12px'}}>Apple iPhone 11</div>
                                 <div style={{fontSize: '12px'}}>Certified, Good Condition</div>
                                 <div style={{ fontWeight: '700',color: 'black',marginTop: '10px',fontSize: '12px' }}>AED 8349&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px' }}>AED 9000</span></div>

                               </Paper>
                               </div>
                               <div style={{width: '20%'}}>
                                   <Paper square className={classes.paper} elevation={0} >
                                 <div style={{background: 'red',color: 'white',padding: '2px',fontSize: '12px',display: 'inline'}}>20% OFF</div>
                                 <div style={{textAlign: 'center'}}><img src={image1} style={{width: '40%'}}/></div>
                                 <div style={{color: 'black',fontWeight: '600',marginTop: '10px',fontSize: '12px'}}>Apple iPhone 11</div>
                                 <div style={{fontSize: '11px'}}>Certified, Good Condition</div>
                                 <div style={{ fontWeight: '700',color: 'black',marginTop: '10px' }}>AED 8349&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px' }}>AED 9000</span></div>

                               </Paper>
                               
                               </div>
                               <div style={{width: '20%'}}>
                                   <Paper square className={classes.paper} elevation={0} >
                                 <div style={{background: 'red',color: 'white',padding: '2px',fontSize: '12px',display: 'inline'}}>20% OFF</div>
                                 <div style={{textAlign: 'center'}}><img src={image1} style={{width: '40%'}}/></div>
                                 <div style={{color: 'black',fontWeight: '600',marginTop: '10px',fontSize: '12px'}}>Apple iPhone 11</div>
                                 <div style={{fontSize: '11px'}}>Certified, Good Condition</div>
                                 <div style={{ fontWeight: '700',color: 'black',marginTop: '10px',fontSize: '12px'}}>AED 8349&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px' }}>AED 9000</span></div>

                               </Paper>
                               </div>
                            </div>
                        </Paper></Grid>
                      
                    </Grid>
               </Grid>
               <Grid item xs={1}></Grid>
            </Grid>
            

            <Grid container style={{marginTop: '40px'}}>
               <Grid item xs={12}>
                  <Paper>
                    <Grid container> 
                      <Grid item xs={8}>
                          <Grid container>
                             <Grid item xs={3}>
                                <ul>
                                   <li class='footerLinks'>Our Guide</li>
                                   <li class='footerLinks1'>About Us</li>
                                   <li class='footerLinks1'>FAQ</li>
                                   <li class='footerLinks1'>Corporate Site</li>
                                   <li class='footerLinks1'>Our Showrooms</li>
                                   <li class='footerLinks1'>Terms & Conditions</li>
                                   <li class='footerLinks1'>Privacy Policy</li>
                                   
                                </ul>
                             </Grid>
                             <Grid item xs={3}>
                                <ul>
                                   <li class='footerLinks'>Our Services</li>
                                   <li class='footerLinks1'>About Us</li>
                                   <li class='footerLinks1'>FAQ</li>
                                   <li class='footerLinks1'>Corporate Site</li>
                                   <li class='footerLinks1'>Our Showrooms</li>
                                   <li class='footerLinks1'>Terms & Conditions</li>
                                   <li class='footerLinks1'>Privacy Policy</li>
                                   
                                </ul>
                             </Grid>
                             <Grid item  xs={3}>
                                 <ul>
                                   <li class='footerLinks'>Categories</li>
                                   <li class='footerLinks1'>About Us</li>
                                   <li class='footerLinks1'>FAQ</li>
                                   <li class='footerLinks1'>Corporate Site</li>
                                   <li class='footerLinks1'>Our Showrooms</li>
                                   <li class='footerLinks1'>Terms & Conditions</li>
                                   <li class='footerLinks1'>Privacy Policy</li>
                                   
                                </ul>
                             </Grid>
                             <Grid item xs={3}>
                                 <ul>
                                   <li class='footerLinks'>Our Services</li>
                                   <li class='footerLinks1'>About Us</li>
                                   <li class='footerLinks1'>FAQ</li>
                                   <li class='footerLinks1'>Corporate Site</li>
                                   <li class='footerLinks1'>Our Showrooms</li>
                                   <li class='footerLinks1'>Terms & Conditions</li>
                                   <li class='footerLinks1'>Privacy Policy</li>
                                   
                                </ul>
                             </Grid>
                          </Grid>
                      </Grid>
                      <Grid item xs={4}>
                           <Grid container>
                              <Grid item xs={12}>
                                <ul>
                                   <li class='footerLinks'>Follow Us</li>
                                   <li class='footerLinks1'><div style={{display: 'flex'}}>
                                      <div style={{width: '50px',height: '50px',padding: '10px'}}>
                                        <img src={insta} style={{width: '100%'}}/>
                                      </div>

                                      <div style={{width: '50px',height: '50px',padding: '10px'}}>
                                        <img src={twitter} style={{width: '100%'}}/>
                                      </div>
                                      <div style={{width: '50px',height: '50px',padding: '10px'}}>
                                        <img src={face} style={{width: '100%'}}/>
                                      </div>
                                   </div></li>
                                   
                                   
                                </ul>
                              </Grid>
                           </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
               </Grid>
            </Grid>
        </div>

        
    );
}
