<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com'; // 導入
const name = ref('');
const email = ref('');
const message = ref('');
const companyName = ref('');
const tel = ref('');

const sendEmail = () => {
    const serviceID = 'service_bluevalley';
    const templateID = 'template_mp648zr';
    const userID = 'GWD64h2Ih7FVAIyEf';
    const templateParams = {
        from_name: name.value,
        reply_to: email.value,
        message: message.value,
        companyName: companyName.value,
        tel: tel.value,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
            console.log("郵件已發送：", response);
            alert("郵件已成功發送！");
        })
        .catch((error) => {
            console.log("郵件發送失敗：", error);
            alert("郵件發送失敗：" + error);
            
        });
};

</script>

<template>
    <div id="Contactus" class="contact-app">
        <h2>聯絡我們</h2>

        <div class="contact">

            <div class="contact-container">
                <h3>聯絡方式與說明</h3>
                <hr />
                <ul>
                    <li>Email表單線上即時收訊，看到後立即回覆</li>
                    <li>Line掃QR Code加入官方網站即時對談</li>
                    <li>
                        <div class="qrcode-div">

                            <span class="qrcode"><img
                                    src="https://qr-official.line.me/gs/M_361nigrh_BW.png?oat_content=qr"></span>
                        </div>
                        <div class="line-img">
                            <span><a href="line://ti/p/@361nigrh"><img
                                        src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友"
                                        height="auto" border=""></a></span>
                        </div>

                    </li>
                    <li>電話即時聯絡</li>
                    <li>Tel:0983826665</li>
                    <li>Email:
                        bluevalleytechsoftware@gmail.com</li>
                </ul>

            </div>
            <div class="e-mail">
                <div class="email-content">
                    <form @submit.prevent="sendEmail">
                        <h2>E-mail填寫</h2>
                        <label for="name">*姓名：</label>
                        <input type="text" id="name" v-model="name" required>

                        <label for="companyName">公司名稱</label>
                        <input type="text" id="companyName" v-model="companyName">

                        <label for="email">*電子郵件：</label>
                        <input type="email" id="email" v-model="email" required>

                        <label for="tel">*電話:</label>
                        <input type="tel" id="tel" v-model="tel" required>

                        <label for="message">*訊息：</label>
                        <textarea id="message" v-model="message" required></textarea>

                        <button type="submit">發送郵件</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped lang="scss">
.contact-app .contact .contact-container ul li:nth-child(3) {

    flex-direction: column;

}

* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;

}

.contact-app {
    background-color: #cce6ff;
}

hr {
    color: black;
    border: 3px solid black;
}



h2 {
    background-color: #e4e4e4;
    font-weight: 600;
    width: 100%;
    padding: 0px 100px;
    text-align: center;
    

}

.contact {
    margin-top: 30px;
    background-color: #cce6ff;
    display: flex;
    padding: 0px 100px;
    align-items: center;
    justify-content: space-evenly;
    
   
    
    .contact-container {
        margin-right: 10px;
        font-weight: 600;
        letter-spacing: 1px;
        display: flex;
        flex-direction: column;



        ul {
            display: flex;
            flex-direction: column;

            li {


                display: flex;
                width: 100%;
                flex-grow: 1;
                margin: 10px 0px;
                list-style: none;
                font-size: 1.5em;
                align-items: center;


                .qrcode-div {

                    width: 30%;
                    height: 100%;

                    img {

                        width: 100%;
                        height: 100%;
                    }
                }

                .line-img {

                    width: 30%;
                    height:100%;


                    a {

                        img {
                            width: 100%;
                            height: 100%;


                        }
                    }
                }
            }
        }

        h3 {
            text-align: center;
            font-weight: 600;
            letter-spacing: 1px;
            font-size: 2em;
        }







    }

    .e-mail {
       display: flex;
        flex-grow: 1;
     
        
        

        .email-content {
            margin-left: 10px;
            width: 100%;
            flex-grow: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            flex-grow: 1;


            h2 {
                width: 100%;
                padding: 0%;

                text-align: start;
                margin: 10px 0px;
                font-weight: 600;
                background-color: #e4e4e4;
            }

            form {
                width: 100%;
                display: flex;
                flex-direction: column;
                font-weight: 600;
                // font-size: 1.5em;
                flex-grow: 1;
                
                max-width: 600px;
                

                padding: 20px;

                border: 2px solid black;
                border-radius: 10px;
                background-color: #e4e4e4;
                min-width: 10px;
            }

        }
    }


}

@media screen and (max-width:900px) {}

@media screen and (min-width:1px) and (max-width:769px) {
    .contact {
        flex-direction: column;

    }
    .contact-container ul li .line-img {
       
    }


    .contact-container ul li:nth-child(6) {

        font-size: 70%;
    }
}
</style>