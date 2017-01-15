<template xmlns:v="http://www.w3.org/1999/xhtml" xmlns:v-if="http://www.w3.org/1999/xhtml">
    <ul class="message-list">
        <message-item :type="msg.type" :user="msg.user" :content="msg.content" :time="msg.time" v-for="msg in messages"></message-item>
    </ul>
</template>
<style scoped lang="css" rel="stylesheet/css">
    .message-list {
        display: flex;
        width: 100%;
        flex: 6 1 auto;
        flex-direction: column-reverse;
        overflow-y: auto;
        height: 100%;
        min-height: 0px;
    }
</style>
<script type="text/babel">
    import dateFilter from '../filters/date-filter';
    import MessageItem from './MessageItem.vue';
    export default{
        props: {
            messages: {
                type: Array,
                required: true
            }
        },
        data(){
            return {
            }
        },
        components: {
            MessageItem
        }
    }
</script>
