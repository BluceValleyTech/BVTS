<script setup>

</script>


<template>
    <div class="navigation-small">
        <ul>
            <a href="#" class="logo">{{ $t('bluceValley') }}</a>
            <li>{{$t('webdesign') }}</li>
            <li>{{$t('information') }}</li>
        </ul>
    </div>
</template>


<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 1px;

}

.navigation-small {
    background-color: #007bff;
    left: 0;
    top: 0;
    display: flex;
    padding: 10px 100px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    display: none;
   

    a {
        
        color: #fff;

    }

    ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        list-style: none;

        li{
            font-weight: 600;
            color: #fff;
        }
    }
}



@media screen and (min-width:600px) and (max-width:768px) {
    .navigation-small{
    display: block;
    }  
}

@media screen and (min-width:1px) and (max-width:600px) {
    .navigation-small{
        display: block;
    
    
    :nth-child(1){
        flex-grow: 1;
    }
    }
    :nth-child(2){
        display: none;
    }
    :nth-child(3){
        display: none;
    }


}


</style>