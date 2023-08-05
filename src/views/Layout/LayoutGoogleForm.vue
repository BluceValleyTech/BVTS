<script setup>
import { ref } from 'vue'

const showGoogleForm = ref(false);
const backgroundColor = ref('#FFFFFF');
const iframeLoaded = ref(false);

const googleForm = () => {
    showGoogleForm.value = !showGoogleForm.value;
    if (showGoogleForm.value) {
        backgroundColor.value = '#cce6ff';
    }
    else {
        backgroundColor.value = '#FFFFFF';
    }
};


// const handleIframeLoad = () => {
//     iframeLoaded.value = true;
//     if (!showGoogleForm.value) {
//         const inputFields = document.querySelectorAll(".google-form input");
//         inputField.focus();
//     }
// };
</script>


<template>
   



    <div class="formiteam">
        <div class="el-msg" @click="googleForm">

            <el-icon>
                <Message />
            </el-icon>
        </div>

        <div class="google-form" v-if="showGoogleForm" :style="{ backgroundColor }">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScdd_8lANZvoL_AkzEdHKLwgF2nxgUvXywUr5yGJZarChxOqA/viewform?embedded=true"
                width="500" height="400" frameborder="0" marginheight="0" marginwidth="0"
                @load="handleIframeLoad">載入中…</iframe>
        </div>
    </div>
</template>





<style scoped lang="scss">
.formiteam {
    position: fixed;
    bottom: 20px;
    right: 20px;

    .el-msg {
        position: fixed;
    bottom: 20px;
    right: 20px;
        font-size: 50px;
        font-size: 50px;

        cursor: pointer;

    }



    .google-form {
        // background-color: #cce6ff;
        transition: opacity 0.3s ease;
        z-index: 999;
        caret-color: transparent;
    }


}


@media screen and (max-width:768px) {
    .el-msg{
        
    }
}
</style>