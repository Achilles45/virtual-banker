<template>
    <div class="dashboard">
        <Navbar />
        <div class="dashboard__top container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-md-6">
                            <ul class="d-flex justify-content-between dashboard__nav">
                            <li @click="showDashboard()" id="dashboard" class="dashboard__top__link"><i class="fa fa-dashboard"></i>&nbsp;&nbsp; Dashboard</li>
                        <li @click="showTransaction()" id="transaction" class="dashboard__top__link"><i class="fa fa-money"></i>&nbsp;&nbsp; Transaction</li>
                        <li @click="showProfile()" id="profile" class="dashboard__top__link"><i class="fa fa-user"></i>&nbsp;&nbsp; Profile</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dashboard__body container-fluid">
            <div class="container">
                <div class="top__card__wrapper">
                    <div class="top__cards">
                        <h6><i class="fa fa-cubes"></i>&nbsp;&nbsp; Look at your progress here</h6>
                        <p>This is a summary of your performance on our platform since you registered on this platform</p>
                        <div class="top__cards__details d-flex justify-content-between">
                            <p>0<br />Investments</p>
                            <p>&#8358;0<br />Amount Invested</p>
                            <p>&#8358;0<br />Projects</p>
                        </div>
                    </div>
                    <div class="top__cards">
                        <h6><i class="fa fa-money"></i>&nbsp;&nbsp; Investment Opportunities</h6>
                        <p>We are committed to bringing your way secured and competitive investment opportunities </p>
                        <div class="top__cards__details d-flex justify-content-between">
                            <p><i class="fa fa-home"></i>&nbsp; Real Estate</p>
                            <p><i class="fa fa-truck"></i>&nbsp; Logistics</p>
                            <p><i class="fa fa-coffee"></i>&nbsp; Food</p>
                        </div>
                    </div>
                    <div class="top__cards text-center">
                        <p class="pt-5">Want to know more? <br>Our blog is underway!</p>
                    </div>
                </div>
            </div>
            <br />
            <div class="bottom__contents">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 investment-dashboard">
                            <h5>Investments</h5>
                            <div class="alert alert-danger">
                                <p>Sorry, you are yet to make any investment</p>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-4">
                            <div class="right__cards d-flex">
                                <div class="invite_card">
                                    <h6>Earn Referal income</h6>
                                    <p>You can earn money by refering friends and family. When he or she makes her first investments, you get an instant 4% of the money invested.</p>
                                </div>
                                <div class="verification">
                                    <h6>Identification Verification-KYC</h6>
                                   <div class="verification__content text-center pt-2 pb-2">
                                        <p>You have not submitted your KYC application?</p>
                                    <router-link to="/" class="verify__btn text-center">Start Here</router-link>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End of Dashboard
        =========================-->
        <!--Profile section
        =========================-->
        <div class="profile__wrapper container-fluid">
           <div class="container">
                <div class="row">
                    <div class="col-md-7">
                       <div class="row">
                           <div class="col-md-7">
                                <ul class="d-flex justify-content-between">
                            <li @click="showPersonal()" id="personal">Personal Details</li>
                            <li @click="showBank()" id="bank__detials">Bank Details</li>
                        </ul>
                           </div>
                       </div>
                       <hr /><br /><br />
                    <div class="personal__contents">
                        <form class="personal__form pb-5">
                            <div class="row">
                                <div class="col-md-6">
                                     <div class="form-group">
                                   <label for="fname">First Name *</label>
                                   <input type="text" class="form-control">
                               </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                <label for="lname">Last Name *</label>
                                <input type="text" class="form-control">
                            </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                     <div class="form-group">
                                   <label for="fname">Email Address *</label>
                                   <input type="email" class="form-control">
                               </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="text" class="form-control">
                            </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="bank__contents">
                        <form class="bank__form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-grou">
                                        <label for="bname">Bank Name *</label>
                                    <input type="text" class="form-control">
                                    </div>
                                </div>
                                 <div class="col-md-6">
                                   <div class="form-group">
                                        <label for="bname">Account Name *</label>
                                    <input type="text" class="form-control">
                                   </div>
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-md-6">
                                   <div class="form-group">
                                        <label for="bname">Account Name *</label>
                                    <input type="text" class="form-control">
                                   </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'Dashboard',
    components:{
        Navbar
    },
    methods:{
        showDashboard:function(){
            const dashboardHolder = document.querySelector('#dashboard');
            const dashboard = document.querySelector('.dashboard__body')
            const profile = document.querySelector('.profile__wrapper');
            dashboard.style.display = 'block';
            profile.style.display = 'none';

        },
        showProfile:function(){
            const dashboard = document.querySelector('.dashboard__body')
            const profile = document.querySelector('.profile__wrapper');
            const transaction = document.querySelector('.transaction__wrapper');
            dashboard.style.display = 'none';
            transaction.style.display = 'nonr';
            profile.style.display = 'block';
        },
        showTransaction:function(){
            // const dashboard = document.querySelector('.dashboard__body')
            // const profile = document.querySelector('.profile__wrapper');
            // const transaction = document.querySelector('.transaction__wrapper');
            // const transactionHolder = document.querySelector('#transaction');
            // dashboard.style.display = 'none';
            // profile.style.display = 'none';
            // transaction.style.display = 'block';
            alert('Transactions loading ...')
        },
        showPersonal:function(){
            const personal = document.querySelector('.personal__contents');
            const bank = document.querySelector('.bank__contents');
            personal.style.display = 'block';
            bank.style.display = 'none';
        },
        showBank:function(){
            const personal = document.querySelector('.personal__contents');
            const bank = document.querySelector('.bank__contents');
            personal.style.display = 'none';
            bank.style.display = 'block';
        }
    },
    mounted(){
        this.showPersonal();
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.dashboard__top{
    background: $primary-color;
    color: #fff;
    font-family: 'Varela Round';
}
ul{ 
    list-style: none;
    margin: 0;
    .dashboard__top__link{
        padding: 1.1rem 0;
        font-size: .8rem;
        text-transform: uppercase;
        cursor: pointer;
    }

}

//Dasboard Body
.dashboard__body{
    background: #E0E8F3;
    padding-bottom: 10rem;
    .top__card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        padding-top: 2.5rem;
        padding-bottom: 2rem;
        .top__cards{
        background-image: linear-gradient(180deg, #44826b 0%, #4CC899 100%);
        padding: 1.4rem 2rem;
        border-radius: 4px;
        font-family: 'Lato';
        h6{
            padding-bottom: .65rem;
            color:#72FCF7;
            font-size: 1.1rem
        }
        p{
            color:#fff;
            font-size: .87rem;
        }
        }
    }
}

.bottom__contents{
    .right__cards{
        flex-direction: column;
        font-family: 'Lato';
        h6{
            color: $primary-color;
            font-weight: bold;
        }
        p{
            font-size: .9rem;
        }
        .invite_card, .verification{
             background: #fff;
             padding: 1.5rem 2rem;
             border-radius: 5px;
        }
        .invite_card{
            margin-bottom: 2rem;
        }
        .verify__btn{
            background: $primary-color;
            padding: .75rem 2rem;
            color: #fff;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
        }
    }
    .investment-dashboard{
        background: #fff;
        border-radius: 5px;
        padding-bottom: 17rem;
        padding-top: 2rem;
        h5{
            color:$primary-color;
            font-family: 'Lato';
        }
    }
}


//MEDIA QUERIES
@media only screen and (max-width: 990px){
    .invite_card{
        margin-top: 1.2rem
    }
}


//Profile Styles
.profile__wrapper{
    background: #E0E8F3;
    padding-top: 3rem;
    padding-bottom: 10rem;
    font-family: 'Lato';
    font-size: 1rem;
    ul li{
        color:$primary-color;
    }
    #bank__detials, #personal{
            color: $primary-color;
            cursor: pointer;
        }
}
</style>