<template>
    <div class="invest">
        <Navbar />
        <div class="invest_-wrapper container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 col-sm-12 col-xs-12 text-center invest__heading">
                        <h2>Investing in real estate is one of the best investment you can ever make</h2>
                        <p>We've got verified and interest competitive properties for you to invest on in commercial cities in Nigeria. No agent fees. Let your money work for you.</p>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
        </div>
        <!--Listed property section
        ======================-->
        <div class="property__wrappers container-fluid">
            <div class="container">
               <div class="row">
                   <div class="col-md-3 col-lg-3 mb-5" v-for="(data,index) in properties" :key="index">
                       <div class="card">
                           <div class="card-img-top">
                                <img :src="data.image" class="img-fluid">
                           </div>
                           <div class="card-body">
                               <div class="card-title">
                                     <h5>{{data.propertyTitle}}</h5>
                               </div>
                               <button @click="getDetails(data.propertyId)" class="details__btn">See Details</button>
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
    name: 'Invest',
    components:{
        Navbar,
        Footer
    },
    data(){
        return{
            properties:[
                {
                    propertyTitle: 'Ocean Villa Garden',
                    image:require('../assets/estate1.jpg'),
                    propertyId:1,
                },
                {
                    propertyTitle: 'Rose Court Phase 1',
                    image:require('../assets/estate2.jpg'),
                    propertyId:2
                },
                {
                    propertyTitle: 'Victory Gardens',
                    image:require('../assets/estate4.jpg'),
                    propertyId:3
                },
                {
                    propertyTitle: 'Shekinah Gardens',
                    image:require('../assets/estate5.jpg'),
                    propertyId:4
                },
                {
                    propertyTitle: 'Dollar Point Homes',
                    image:require('../assets/estate6.jpg'),
                    propertyId:5
                },
                {
                    propertyTitle: 'Amerna Ridge',
                    image:require('../assets/estate3.jpg'),
                    propertyId:6
                },
            ]
        }
    },
    methods:{
        //Function to get datails
        getDetails:function(proId){
            this.$router.push({name: 'details', params:{Pid:proId}})
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/colors';
.invest_-wrapper{
    padding: 7rem 0;
    background: linear-gradient(rgba(4,9,30,.7), rgba(4,9,30,.7)), url('../assets/hotel1.jpg');
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;
    color:#fff;
    font-family: 'Lato';
    .invest__heading{
        h2{
            font-weight: bold;
            text-shadow: 0.03em 0.03em 0.05em rgba(0,0,0,0.3);
            text-transform: capitalize;
            padding-bottom: .5rem;
        }
        p{
            font-size: 1rem;
            font-family: 'Varela Round';
            opacity: .8;
        }
    }
}

//Property styles
.property__wrappers{
    padding-top: 3rem;
    padding-bottom: 5rem;
    .details__btn{
        background:$secondary-color;
        color:#fff;
        padding: .4rem 1rem;
        border-radius: 2px;
        font-family: 'Lato';
        font-size: .88rem;
        border:none;
        font-weight: normal;
    }
}
</style>