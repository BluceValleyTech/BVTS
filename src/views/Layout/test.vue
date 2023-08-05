<script setup>
import test2 from '/src/views/Layout/test2.vue'
import { ref, computed, onMounted } from 'vue'
import { watch } from 'vue';

</script>

<template>
    <div class="todolist">
        <time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>

    </div>

 
</template>


<style scoped lang="scss">
.done {
    text-decoration: line-through;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
}


.todolist {
    flex-grow: 1;
    justify-content: center;
    align-content: center;
    text-align: center;
    display: flex;
    width: 100%;
    padding: 50px 100px;

    .content {
        overflow: scroll;
        margin: 0px 50px;
        height: 300px;
        flex-grow: 1;
        display: flex;
        align-items: start;
        flex-direction: column;

        form {
            margin: 10px 0px;

        }

        ul {

            display: flex;
            flex-wrap: wrap;

            li {

                padding: 10px 10px;

                input {
                    margin: 0px 10px;
                }
            }
        }
    }



}

.classtest {
    padding: 0px 10px
}
</style>