<template>
    <footer>
        <div class="footer__content container-fluid">
            <hr />
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <h4>Virbual Banker</h4>
                        <p>Getting ahead financially requires you to be proactive and prudent in al your spendings. Virtual Banker is your partner of choice that provides you with easy-to-read and real-time financial data so you can make informed investments decisions. Since inception, we have been committed to prodviding you with great products and customer services. Try us today!</p>
                        <p><span class="office">Physical Office</span> 1 Adani Road, Off NYSC Camp, Enugu, Enugu State</p>
                        <p class="office">08103515205(Mon-Fri From 9am-5pm)-support@virtualbanker.com</p>
                        <small>&copy;2019 Virtual Banker Limited RC 121212.</small>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-2">
                        <h5 class="display-6">Get Social</h5>
                        <a href="#"><i class="fa fa-facebook-f"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
} 
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
footer{
    .footer__content{
        padding-bottom: 4rem;
        padding-top: 1rem;
        h4{
            padding-top: 2rem;
            font-family: 'Varela Round';
            color:$primary-color;
            font-weight: bold;
            padding-bottom: .5rem;
        }
        h5{
            padding-top: 2rem;
            font-family: 'Varela Round';
            color:$primary-color;
        }
        p{
            color:$tertiary-color;
            font-family: 'Varela Round';
            font-size: .85rem;
            line-height: 1.6;
            opacity: .7;
        }
        .office{
            font-weight: bold;
        }
        small{
            color:$tertiary-color;
             font-family: 'Varela Round';
             font-size: .85rem;
        }
        a{
            padding-right: .5rem;
            font-size: 1.5rem;
        }
        .fa-facebook-f{
            color:#4267B2;
        }
        .fa-instagram{
            color: #AC34A0;
        }
    }
}
</style>