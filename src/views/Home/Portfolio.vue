<script setup>

</script>


<template>
    <div id="Portfolio" class="protfolio">
        <div class="protfolio-text">
            <h2>作品集&持續更新</h2>

        </div>
    </div>
    <div class="protfolio-img">
        <div class="protfolio-img-content">
            <li>
                <p>藍谷科技官方</p>
                <a href=""><img src="/src/images/blueValleyweb.png" art="更新中" /></a>
            </li>
            <li>
                <p>更新中</p>
                <a><img src="" alt="更新中" /></a>
            </li>
            <li>
                <p>更新中</p>
                <a><img src="" alt="更新中" /></a>
            </li>
            <li>
                <p>更新中</p>
                <a><img src="" alt="更新中" /></a>
            </li>
            <li>
                <p>更新中</p>
                <a><img src="" alt="更新中" /></a>
            </li>
            <li>
                <p>更新中</p>
                <a><img src="" alt="更新中" /></a>
            </li>
            <li>
                <p>更新中</p>
                <a><img src="" alt="更新中" /></a>
            </li>
            <li>
                <p>更新中</p>
                <a><img src="" alt="更新中" /></a>
            </li>
        </div>
    </div>
</template>


<style scoped lang="scss">
* {

    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.protfolio {
    border-top: 3px solid #e4e4e4;
    min-width: 300px;
    background-color: #cce6ff;
    padding: 30px 100px;
    display: flex;
    width: 100%;
    justify-content: center;

    .protfolio-text {
        h2 {
            letter-spacing: 1px;
            font-weight: 600;
            text-align: center;
        }

    }
}


.protfolio-img {
    background-color: #cce6ff;
    display: flex;
    
    justify-content: space-between;
    flex-wrap: wrap;

    .protfolio-img-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 30px 0px;


        li {
            display: flex;
            flex-direction: column;
            text-align: center;
            list-style: none;
            border-radius: 5px;
            font-weight: 600;
            letter-spacing: 1px;
            font-size: 1.3em;
            

            a {
                text-decoration: none;
                display: flex;
                overflow: hidden;

                img {
                    border-left: 1px solid #888888;
                    border-right: 1px solid #888888;
                    border-bottom: 1px solid #888888;

                    border-radius: 5px;
                    
                    width: 300px;
                    height: 300px;
                    overflow: hidden;
                    transition: transform 0.3s;
                    
                    &:hover{
                        transform: scale(1.5);
                        
                    }

                }

            }

            p {
                border: 1px solid #888888;
                border-radius: 5px;
                overflow: hidden;
                background-color: #cce6ff;

            }
        }



    }

}

@media screen and (max-width:424px) {



    .protfolio {
        padding: 30px 0px;

    }



}</style>