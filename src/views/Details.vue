<template>
    <div class="details">
        <Navbar />
       <div class="container-fluid">
           <div class="property__wrapper" v-for="(property, index) in properties" :key="index">
               <div class="container">
                   <div class="row property__title">
                       <div v-if="proId == property.propertyId">
                           <h4>{{ property.propertyTitle}}</h4>
                           <p><i class="fa fa-map-marker"></i>&nbsp;&nbsp; {{ property.propertyLocation}}</p>
                       </div>
                   </div>
               </div>
               <!--Images of the property
               ==================-->
               <div class="container-fluid">
                   <div v-if="proId == property.propertyId">
                       <div class="row">
                           <div class="col-md-3">
                               <img :src="property.image" alt="" class="img-fluid">
                           </div>
                            <div class="col-md-3 d-none d-md-block">
                               <img :src="property.image" alt="" class="img-fluid">
                           </div>
                            <div class="col-md-3 d-none d-md-block">
                               <img :src="property.image" alt="" class="img-fluid">
                           </div>
                            <div class="col-md-3 d-none d-md-block">
                               <img :src="property.image" alt="" class="img-fluid">
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            <!--Property Description
               =====================-->
               <div class="project__contents container-fluid">
                   <div class="row" v-for="(property, index) in properties" :key="index">
                       <div class="container">
                           <div class="row mt-5">
                               <div class="col-md-8">
                                   <div v-if="proId == property.propertyId">
                                       <h5>Property Detials</h5>
                                       <p>{{ property.description}}</p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>The project has the following facilities:</p>
                                     <ul>
                                       <li v-for="facility in facilities" :key="facility"> <i class="fa fa-check-square"></i>&nbsp;&nbsp;{{ facility }}</li>
                                        </ul>
                                        </div>
                                        <div class="col-md-6">
                                        <h6>What your investment covers:</h6>
                                      <ul>
                                          <li><i class="fa fa-check-square"></i>&nbsp;&nbsp; Construction</li>
                                          <li><i class="fa fa-check-square"></i>&nbsp;&nbsp; Insurance</li>
                                          <li><i class="fa fa-check-square"></i>&nbsp;&nbsp; Marketing</li>
                                          <li><i class="fa fa-check-square"></i>&nbsp;&nbsp; Management</li>
                                          <li><i class="fa fa-check-square"></i>&nbsp;&nbsp; Others</li>
                                      </ul>
                                        </div>
                                    </div>
                                   <div class="project__pricing">
                                       <h5>Project Pricing</h5>
                                       <p>You can only buy one unit of ownership at the moment</p>
                                      <P><i class="fa fa-money"></i> &nbsp;&nbsp; Amount: &#8358; 100,000</P>
                                      <p><i class="fa fa-line-chart"></i> &nbsp;&nbsp; Expected retuns on sale: 45%</p>
                                      <p><i class="fa fa-cubes"></i> &nbsp;&nbsp; Project lifecycle: 2yrs</p>
                                      <button class="pay__btn">Invest Now</button>
                                   </div>
                                   </div>
                               </div>
                               <div class="col-md-4">
                                   <h5></h5>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
       </div>
       <Footer />
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'detials',
    components:{
        Navbar,
        Footer
    },
    data(){
        return{
            proId:this.$route.params.Pid,
            title:'Details',
            facilities:['hospitals', 'banks', 'gaming/recreational centers', 'schools', 'shopping centers', 'churches'],
            properties:[
                {
                    propertyTitle: 'Ocean Villa Garden',
                    image:require('../assets/estate1.jpg'),
                    propertyId:1,
                    propertyLocation: '12A New Haven Layout, Enugu, Enugu State.',
                    description: "Ocean Villa Garden is a prime property located in the center of the prestigious New Haven Layout, Enugu, Enugu State. It is an estate made up of different housing sizes and patterns ranging from 4-Bedroom Flats, 5-Bedroom Duplets with boys's quaters. It is at the foundation level. The property is well located as it has major facilities very close by. The project sits on a 100 acres of land with good typography. It is designed with community interactions in mind.",
                },
                {
                    propertyTitle: 'Rose Court Phase 1',
                    image:require('../assets/estate2.jpg'),
                    propertyId:2,
                    propertyLocation: '1 Holyghost Avenue, Enugu, Enugu State.',
                     description: "Rose Court Phase 1 is a prime property located in the center of the prestigious New Haven Layout, Enugu, Enugu State. It is an estate made up of different housing sizes and patterns ranging from 4-Bedroom Flats, 5-Bedroom Duplets with boys's quaters. It is at the foundation level. The property is well located as it has major facilities very close by. The project sits on a 100 acres of land with good typography. It is designed with community interactions in mind."
                },
                {
                    propertyTitle: 'Victory Gardens',
                    image:require('../assets/estate4.jpg'),
                    propertyId:3,
                     propertyLocation: '112A Presidential Avenue, Enugu, Enugu State',
                    description: "Victory Gardens is a prime property located in the center of the prestigious New Haven Layout, Enugu, Enugu State. It is an estate made up of different housing sizes and patterns ranging from 4-Bedroom Flats, 5-Bedroom Duplets with boys's quaters. It is at the foundation level. The property is well located as it has major facilities very close by. The project sits on a 100 acres of land with good typography. It is designed with community interactions in mind."
                },
                {
                    propertyTitle: 'Shekinah Gardens',
                    image:require('../assets/estate5.jpg'),
                    propertyId:4,
                    propertyLocation: 'Shekinah Estate, Enugu, Enugu State.',
                    description: "Shekinah Gardens is a prime property located in the center of the prestigious New Haven Layout, Enugu, Enugu State. It is an estate made up of different housing sizes and patterns ranging from 4-Bedroom Flats, 5-Bedroom Duplets with boys's quaters. It is at the foundation level. The property is well located as it has major facilities very close by. The project sits on a 100 acres of land with good typography. It is designed with community interactions in mind."
                },
                {
                    propertyTitle: 'Dollar Point Homes',
                    image:require('../assets/estate6.jpg'),
                    propertyId:5,
                    propertyLocation: 'One Day Avenue, Enugu, Enugu State.',
                    description: "Dollar Point Homes is a prime property located in the center of the prestigious New Haven Layout, Enugu, Enugu State. It is an estate made up of different housing sizes and patterns ranging from 4-Bedroom Flats, 5-Bedroom Duplets with boys's quaters. It is at the foundation level. The property is well located as it has major facilities very close by. The project sits on a 100 acres of land with good typography. It is designed with community interactions in mind."
                },
                {
                    propertyTitle: 'Amerna Ridge',
                    image:require('../assets/estate3.jpg'),
                    propertyId:6,
                    propertyLocation: 'Milike Hills, Agbani, Enugu State.',
                    description: "Amerna Ridge is a prime property located in the center of the prestigious New Haven Layout, Enugu, Enugu State. It is an estate made up of different housing sizes and patterns ranging from 4-Bedroom Flats, 5-Bedroom Duplets with boys's quaters. It is at the foundation level. The property is well located as it has major facilities very close by. The project sits on a 100 acres of land with good typography. It is designed with community interactions in mind."
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.property__title{
    font-family: 'Lato';
    h4{
        font-weight: bold;
        color:$primary-color;
    }
    p{
        color:$tertiary-color;
        font-weight: bold;
        font-size: .88rem;
    }
}
.project__contents{
    font-family: 'Lato';
    h5{
        font-weight: bold;
        color:$tertiary-color;
        padding-bottom: .5rem;
        padding-top: 1rem;
    }
    h6{
        padding-bottom: .5rem;
    }
    p{
        font-size: .91rem;
    }
    ul{
        list-style: none;
        li{
            text-transform: capitalize;
            font-family: 'Lato';
        }
    }
    .pay__btn{
        background: $secondary-color;
        color:#fff;
        padding:.75rem 3.5rem;
        border-radius: 4px;
        border:none;
    }
}
</style>