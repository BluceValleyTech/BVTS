<script setup>
import LayoutGoogleForm from '/src/views/Layout/LayoutGoogleForm.vue'


</script>

<template>
    <footer>
        <div class="footer">
            <div class="container">
                <div class="containerMiddle">
                    <ul>
                        <li>
                            <div>
                                <a href="https://lin.ee/9CYPm32"><img
                                        src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友"
                                        height="36"></a>
                            </div>
                        </li>
                        <li>{{ $t('bluceValley') }} <span>{{ $t('Tel') }}</span></li>
                        <li>E-mail:<a href="">{{ $t('Mail') }}@gmail.com</a></li>
                       
                    </ul>
                </div>
                <div class="bridge">
                    <img class="stoneSleep" src="/src/images/truck-g1ebd01ed3_640.png" />
                </div>
            </div>
        </div>

    </footer>

    <div class="google">
        <LayoutGoogleForm />
    </div>
</template>

<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.footer {
    background-color: #cce6ff;
    border: 1px solid #e4e4e4;
    padding: 0px 100px;

    .container {
        width: 100%;
        flex-grow: 1;
        display: flex;
        font-weight: 600;
        letter-spacing: 1px;
        justify-content: space-between;

        .containerMiddle {
            width: 100%;
            flex-grow: 1;
            display: flex;
            // justify-content: space-between;
            align-items: last baseline;
        }

        li {
            list-style: none;
        }

        a {
            text-decoration: none;

        }

        .bridge{
            width:100%;
            height: 300px;
            min-width: 300px;
            max-width: 500px;
            img{
                width: 100%;
                height: 300px;
            }
        }

    }
}

@media screen and (max-width:1000px) {
    .bridge{
        display: none;
    }

    
}





@media screen and (max-width:610px) {
    .footer{
        padding: 0px;
    }
}

</style>